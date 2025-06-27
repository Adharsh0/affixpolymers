import React, { useState } from "react";
import './Products.css'; // Import the CSS file

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "AFFIX AP-320",
      category: "industrial",
      description: "AFFIX AP-320 is specially manufactured solution used to bind M24 and general belt joint and pulley",
      features: ["Inflammable", "Excellent bonding in room temp"],
      image: "/images/affixap320-red.jpeg",
      tds: "/tds/TDS AP - 320.pdf"
    },
    {
      id: 2,
      name: "AFFIX AP-340",
      category: "sealants",
      description: "Premium weatherproof sealing compound for construction",
      features: ["Weatherproof", "UV Resistant", "Long Lasting"],
      image: "/images/affixap-340.jpeg",
      tds: "/tds/TDS AP - 320.pdf"
    },
    {
      id: 3,
      name: "AFFIX AP-390",
      category: "adhesives",
      description: "Versatile adhesive for multiple surface applications",
      features: ["Multi-Surface", "Flexible", "Clear Finish"],
      image: "/images/affixap-390.jpg",
      tds: "/tds/TDS AP - 320.pdf"
    },
    {
      id: 4,
      name: "HARDNER AP-340",
      category: "epoxy",
      description: "High-performance structural bonding epoxy system",
      features: ["High Strength", "Load Bearing", "Precision Application"],
      image: "/images/hardner-340.jpeg",
      tds: "/tds/TDS AP - 320.pdf"
    },
    {
      id: 5,
      name: "AP-170",
      category: "specialty",
      description: "Specialized marine environment adhesive solution",
      features: ["Saltwater Resistant", "Marine Grade", "Anti-Corrosion"],
      image: "/images/ap-170.jpeg",
      tds: "/tds/TDS AP - 320.pdf"
    },
    {
      id: 6,
      name: "Automotive Bond Plus",
      category: "automotive",
      description: "Professional automotive assembly adhesive",
      features: ["Vibration Resistant", "Heat Stable", "OEM Quality"],
      image: "/images/image1.jpg",
      tds: "/tds/TDS AP - 320.pdf"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'adhesives', label: 'Adhesives' },
    { key: 'sealants', label: 'Sealants' },
    { key: 'epoxy', label: 'Epoxy Systems' },
    { key: 'specialty', label: 'Specialty' },
    { key: 'automotive', label: 'Automotive' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="products-container1" id="products">
      {/* Subtle Background Elements */}
      <div className="background-elements1">
        <div className="bg-element-11"></div>
        <div className="bg-element-21"></div>
        <div className="bg-element-31"></div>
      </div>

      <div className="products-content1">
        {/* Enhanced Header */}
        <div className="products-header1">
          <div className="header-decoration1">
            <div className="decoration-line1"></div>
            Our Product Range
            <div className="decoration-line1"></div>
          </div>
          <h2 className="header-title1">Premium Quality Solutions</h2>
          
        </div>

        {/* Modern Filter Navigation */}
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

        {/* Products Grid */}
        <div className="products-grid1">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card1 ${index % 2 === 0 ? 'left-image1' : 'right-image1'} ${hoveredProduct === product.id ? 'hovered1' : ''}`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Enhanced Product Content */}
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
                    <a 
                      href={product.tds} 
                      download 
                      className="download-button1"
                    >
                      <svg className="button-icon1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download TDS
                    </a>
                  )}
                  
                </div>
              </div>
              
              {/* Enhanced Product Image */}
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
                
                {/* Quality Badge */}
                <div className="quality-badge1">
                  <svg className="badge-icon1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Hover Glow Effect */}
                <div className="image-glow1"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
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