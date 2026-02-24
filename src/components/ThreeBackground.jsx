import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // ===============================
    // 🔵 PARTICLES
    // ===============================
    const particleCount = 120;
    const maxDistance = 4;

    const positions = [];
    const particlesData = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 40;

      positions.push(x, y, z);

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.15,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial
    );
    scene.add(particles);

    // ===============================
    // 🔗 LINES (Molecule Connections)
    // ===============================
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.4,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // ===============================
    // 💡 LIGHT
    // ===============================
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    // ===============================
    // 🎬 ANIMATION
    // ===============================
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particles.geometry.attributes.position.array;

      // Move particles
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += particlesData[i].velocity.x;
        positions[i * 3 + 1] += particlesData[i].velocity.y;
        positions[i * 3 + 2] += particlesData[i].velocity.z;

        // Bounce inside bounds
        for (let j = 0; j < 3; j++) {
          if (positions[i * 3 + j] > 20 || positions[i * 3 + j] < -20) {
            particlesData[i].velocity.setComponent(
              j,
              -particlesData[i].velocity.getComponent(j)
            );
          }
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;

      // Recalculate connections
      let vertexPos = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx =
            positions[i * 3] - positions[j * 3];
          const dy =
            positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz =
            positions[i * 3 + 2] - positions[j * 3 + 2];

          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < maxDistance) {
            linePositions[vertexPos++] = positions[i * 3];
            linePositions[vertexPos++] = positions[i * 3 + 1];
            linePositions[vertexPos++] = positions[i * 3 + 2];

            linePositions[vertexPos++] = positions[j * 3];
            linePositions[vertexPos++] = positions[j * 3 + 1];
            linePositions[vertexPos++] = positions[j * 3 + 2];

            numConnected++;
          }
        }
      }

      lines.geometry.setDrawRange(0, numConnected * 2);
      lines.geometry.attributes.position.needsUpdate = true;

      particles.rotation.y += 0.0008;
      lines.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // ===============================
    // 📱 RESIZE
    // ===============================
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default ThreeBackground;