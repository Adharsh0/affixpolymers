import React, { useState } from "react";
import './Products.css'; // Import the CSS file

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "AFFIX AP-320",
      category: ["industrial","adhesives"],
      description: "AFFIX AP-320 is specially manufactured solution used to bind M24 and general belt joint and pulley",
      features: ["Inflammable", "Excellent bonding in room temp"],
      image: "/images/affixap320-red.jpeg",
      tds: "/tds/TDS AP - 320.pdf"
    },
    {
      id: 2,
      name: "AFFIX AP-340",
      category: ["industrial","adhesives","cvs"],
      description: "AFFIX AP-340 is specially manufactured solution used to bind HR and SHR belt joint and pulley lagging et",
      features: ["inflammable", "UV Resistant", "peeling strength:5.5-7.6"],
      image: "/images/affixap-340.jpeg",
      tds: "/tds/TDS AP-340.docx"
    },
    {
      id: 3,
      name: "AFFIX AP-390",
      category: ["industrial","adhesives","cvs"],
      description: "AFFIX AP-390 is specially manufactured solution used to bind SHR and UHR belt joint and pulley lagging",
      features: ["inflammable", "Excellent bonding in room"],
      image: "/images/ap-390n.jpeg",
      tds: "/tds/TDS AP-390.docx"
    },
    {
      id: 4,
      name: "AFFIX AP-390 SFR",
      category: ["industrial","specialty","cvs"],
      description: "AFFIX AP-390 sfr is specially manufactured fire retardant solution used to bind SHR and UHR belt joint and pulley lagging",
      features: ["non-flammable", "peeling strength:5.5-7.5",],
      image: "/images/affixap-390.jpg",
      tds: "/tds/TDS AP-390 sfr.docx"
    },
    {
      id: 5,
      name: " Insulation Compound AP-170",
      category: ["adhesives","hvs"],
      description: "AP-270 HR and SHR,AP-370 SHR,UHR and FR grade belts,3 grade ",
      features: ["M24 grade belt"],
      image: "/images/insulation.jpg",
      
    },
    {
      id: 6,
      name: "Cover  Compound AP-170",
      category: ["adhesives","hvs"],
      description: "AP-270,AP-370,3 grade ",
      features: ["M24 grade belt"],
      image: "/images/cover.jpg",
      
    },
    {
      id: 7,
      name: "Lagging Rubber Sheet Diamond",
      category: ["rubber","industrial"],
      description: "",
      features: ["Vibration Resistant", "Heat Stable", "OEM Quality"],
      image: "/images/image1.jpg",
      
    },
    {
      id: 8,
      name: "CLA-20",
      category: "cla",
      description: "Cross linking agent",
      features: ["inflammable", "NCO content:7.2%",],
      image: "/images/20.jpg",
      tds: "/tds/TDS CLA-20.pdf"
    },
    {
      id: 9,
      name: "CLA-40",
      category: "cla",
      description: "Cross linking agent",
      features: ["inflammable", "NCO content:7.5%",],
      image: "/images/40.jpg",
      tds: "/tds/TDS CLA-40.pdf"
    },
    {
      id: 10,
      name: "CLA-90",
      category: "cla",
      description: "Cross linking agent",
      features: ["inflammable", "NCO content:7.9%"],
      image: "/images/90.jpg",
      tds: "/tds/TDS CLA-90.pdf"
    },
  ];

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'adhesives', label: 'Adhesives' },
    { key: 'cvs', label: 'Cold Vulcanizing Solution' },
    { key: 'hvs', label: 'Hot Vulcanizing Solution' },
    { key: 'cla', label: 'CLA' },
    { key: 'rubber', label: 'Rubber Products' },
    { key: 'specialty', label: 'Specialty' },
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product =>
        Array.isArray(product.category)
          ? product.category.includes(activeFilter)
          : product.category === activeFilter
      );

  const handleDownload = (e, product) => {
    if (!product.tds) {
      e.preventDefault();
      alert('TDS not available for this product');
      return;
    }

    // Ensure the file has the correct extension
    const fileExtension = product.tds.split('.').pop();
    const fileName = `${product.name.replace(/\s+/g, '_')}_TDS.${fileExtension}`;
    
    // Create a temporary anchor tag for download
    const link = document.createElement('a');
    link.href = product.tds;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="products-container1" id="products">
      <div className="background-elements1">
        <div className="bg-element-11"></div>
        <div className="bg-element-21"></div>
        <div className="bg-element-31"></div>
      </div>

      <div className="products-content1">
        <div className="products-header1">
          <div className="header-decoration1">
            <div className="decoration-line1"></div>
            Our Product Range
            <div className="decoration-line1"></div>
          </div>
          <h2 className="header-title1">Premium Quality Solutions</h2>
        </div>

        <div className="filter-nav1">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-button1 ${activeFilter === category.key ? 'active1' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="products-grid1">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card1 ${index % 2 === 0 ? 'left-image1' : 'right-image1'} ${hoveredProduct === product.id ? 'hovered1' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="product-info1">
                <div className="product-text1">
                  <h3 className="product-name1">{product.name}</h3>
                  <p className="product-description1">{product.description}</p>
                </div>
                
                <div className="product-features1">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag1">{feature}</span>
                  ))}
                </div>
                
                <div className="product-actions1">
                  {product.tds && (
                    <button 
                      onClick={(e) => handleDownload(e, product)}
                      className="download-button1"
                    >
                      <svg className="button-icon1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download TDS
                    </button>
                  )}
                </div>
              </div>
              
              <div className="product-image-container1">
                <div className="image-wrapper1">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image1"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%2364748b' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <div className="quality-badge1">
                  <svg className="badge-icon1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="image-glow1"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section1">
          <h3 className="cta-title1">Need Custom Solutions?</h3>
          <p className="cta-description1">
            Our technical team can develop specialized formulations tailored to your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;