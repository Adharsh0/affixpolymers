import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBolt, 
  faIndustry, 
  faLink, 
  faSnowflake, 
  faFire, 
  faFlask, 
  faCircle, 
  faStar,
  faSearch,
  faFileAlt,
  faInfoCircle,
  faTimes,
  faPhone,
  faEnvelope,
  faCheck,
  faDownload,
  faArrowRight,
  faBox
} from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const products = [
    {
      id: 1,
      name: "AFFIX AP-320",
      category: ["industrial", "adhesives", "cvs"],
      description: "AFFIX AP-320 is specially manufactured solution used to bind M24 and general belt joint and pulley",
      features: ["Inflammable", "Excellent bonding in room temp"],
      image: "/images/affixap320-red.jpeg",
      tds: "/tds/TDS AP - 320.pdf",
      specs: { strength: "Standard", temp: "Room Temp", grade: "M24" },
      applications: ["Belt Joints", "Pulley Systems", "Industrial Bonding"]
    },
    {
      id: 2,
      name: "AFFIX AP-340",
      category: ["industrial", "adhesives", "cvs"],
      description: "AFFIX AP-340 is specially manufactured solution used to bind HR and SHR belt joint and pulley lagging",
      features: ["inflammable", "UV Resistant", "peeling strength:5.5-7.6"],
      image: "/images/affixap-340.jpeg",
      tds: "/tds/AFFIX_AP-340_TDS.pdf",
      specs: { strength: "Medium", temp: "Variable", grade: "HR/SHR" },
      applications: ["HR Belt Systems", "Lagging Applications", "UV Exposed Areas"]
    },
    {
      id: 3,
      name: "AFFIX AP-390",
      category: ["industrial", "adhesives", "cvs"],
      description: "AFFIX AP-390 is specially manufactured solution used to bind SHR and UHR belt joint and pulley lagging",
      features: ["inflammable", "Excellent bonding in room"],
      image: "/images/ap-390n.jpeg",
      tds: "/tds/ap390.docx",
      specs: { strength: "High", temp: "Room Temp", grade: "SHR/UHR" },
      applications: ["Heavy Duty Belts", "High Performance Systems", "UHR Applications"]
    },
    {
      id: 4,
      name: "AFFIX AP-390 SFR",
      category: ["industrial", "specialty", "cvs"],
      description: "AFFIX AP-390 sfr is specially manufactured fire retardant solution used to bind SHR and UHR belt joint and pulley lagging",
      features: ["non-flammable", "peeling strength:5.5-7.5"],
      image: "/images/affixap-390.jpg",
      tds: "/tds/AFFIX_AP-390_SFR_TDS.pdf",
      specs: { strength: "Ultra High", temp: "High Temp", grade: "Fire Retardant" },
      applications: ["Fire Safety Systems", "High Temperature", "Safety Critical"]
    },
    {
      id: 5,
      name: "Insulation Compound AP-170",
      category: ["adhesives", "hvs"],
      description: "High-performance insulation compound for industrial applications",
      features: ["M24 grade belt", "AP-270 HR and SHR", "AP-370 SHR,UHR and FR", "3 Grade"],
      image: "/images/insulation.jpg",
      specs: { strength: "Variable", temp: "High Temp", grade: "Multi-Grade" },
      applications: ["Electrical Insulation", "Thermal Barriers", "Multi-Grade Systems"]
    },
    {
      id: 6,
      name: "Cover Compound AP-170",
      category: ["adhesives", "hvs"],
      description: "Protective cover compound designed for demanding environments",
      features: ["M24 grade belt", "AP-270 HR and SHR", "AP-370 SHR,UHR and FR", "3 Grade"],
      image: "/images/cover.jpg",
      specs: { strength: "Variable", temp: "High Temp", grade: "Multi-Grade" },
      applications: ["Surface Protection", "Environmental Barriers", "Protective Coatings"]
    },
    {
      id: 7,
      name: "Lagging Rubber Sheet Diamond",
      category: ["rubber", "industrial"],
      description: "Premium diamond-pattern lagging rubber sheet for superior grip",
      features: ["Vibration Resistant", "Heat Stable", "OEM Quality"],
      image: "/images/image1.jpg",
      specs: { strength: "High", temp: "Heat Stable", grade: "Diamond Pattern" },
      applications: ["Conveyor Systems", "Grip Enhancement", "Industrial Flooring"]
    },
    {
      id: 8,
      name: "CLA-20",
      category: ["cla"],
      description: "Cross linking agent for enhanced bonding performance",
      features: ["inflammable", "NCO content:7.2%"],
      image: "/images/20.jpg",
      tds: "/tds/cla20.pdf",
      specs: { strength: "Standard", temp: "Ambient", grade: "7.2% NCO" },
      applications: ["Chemical Bonding", "Cross-Linking", "Adhesive Enhancement"]
    },
    {
      id: 9,
      name: "CLA-40",
      category: ["cla"],
      description: "Cross linking agent with superior chemical properties",
      features: ["inflammable", "NCO content:7.5%"],
      image: "/images/40.jpg",
      tds: "/tds/TDS CLA-40.pdf",
      specs: { strength: "Medium", temp: "Ambient", grade: "7.5% NCO" },
      applications: ["Enhanced Bonding", "Chemical Processing", "Industrial Applications"]
    },
    {
      id: 10,
      name: "CLA-90",
      category: ["cla"],
      description: "High-performance cross linking agent for industrial use",
      features: ["inflammable", "NCO content:7.9%"],
      image: "/images/90.jpg",
      tds: "/tds/cla90.pdf",
      specs: { strength: "High", temp: "Ambient", grade: "7.9% NCO" },
      applications: ["High Performance", "Specialized Bonding", "Critical Applications"]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Products', icon: faBolt },
    { key: 'industrial', label: 'Industrial', icon: faIndustry },
    { key: 'adhesives', label: 'Adhesives', icon: faLink },
    { key: 'cvs', label: 'Cold Vulcanizing', icon: faSnowflake },
    { key: 'hvs', label: 'Hot Vulcanizing', icon: faFire },
    { key: 'cla', label: 'Cross Linking', icon: faFlask },
    { key: 'rubber', label: 'Rubber', icon: faCircle },
    { key: 'specialty', label: 'Specialty', icon: faStar },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'all' || 
      (Array.isArray(product.category) 
        ? product.category.includes(activeFilter)
        : product.category === activeFilter);
    
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const EMAIL_CONFIG = {
    to: 'affixpolymers@gmail.com',
    subject: 'Product Inquiry - Affix Polymers',
  };

  const handleEmailRequest = (product, type = 'quote') => {
    setIsEmailLoading(true);

    let subject, body;

    if (type === 'quote') {
      subject = `Quote Request: ${product.name}`;
      body = `Dear Affix Polymers Team,

I am interested in purchasing the following product and would like to request a quote:

Product Details:
- Product Name: ${product.name}
- Product ID: #${String(product.id).padStart(3, '0')}
- Description: ${product.description}

Specifications:
- Strength: ${product.specs.strength}
- Temperature: ${product.specs.temp}
- Grade: ${product.specs.grade}

Features:
${product.features.map(f => `- ${f}`).join('\n')}

Applications:
${product.applications.map(a => `- ${a}`).join('\n')}

Quantity Required: [Please specify]
Delivery Location: [Please specify]

Thank you,
[Your Name]
[Your Company]
[Your Contact]`;
    } else {
      subject = `Technical Support: ${product.name}`;
      body = `Dear Technical Support Team,

I need technical assistance regarding the following product:

Product: ${product.name}
ID: #${String(product.id).padStart(3, '0')}

My Question:
[Please describe your technical question]

Application Details:
[Please describe your application]

Thank you,
[Your Name]
[Your Company]`;
    }

    try {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || window.innerWidth <= 768;
      
      if (isMobile) {
        window.location.href = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setTimeout(() => setIsEmailLoading(false), 1500);
      } else {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_CONFIG.to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const newWindow = window.open(gmailUrl, '_blank');
        
        if (!newWindow || newWindow.closed) {
          window.location.href = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
        setIsEmailLoading(false);
      }
    } catch (error) {
      console.error('Email error:', error);
      setIsEmailLoading(false);
      alert(`Please email us at: ${EMAIL_CONFIG.to}`);
    }
  };

  const handleDownload = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.tds) {
      alert('Technical Data Sheet not available for this product');
      return;
    }

    try {
      const link = document.createElement('a');
      link.href = product.tds;
      link.download = `${product.name.replace(/\s+/g, '_')}_TDS.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      alert('Error downloading file. Please contact support.');
    }
  };

  return (
    <section className="products-section3" id="products">
      {/* Hero Header */}
      <div className="products-hero3">
        <div className="hero-overlay3"></div>
        <div className="hero-content3">
          <div className="hero-badge3">
            <span className="badge-pulse3"></span>
            Premium Chemical Solutions
          </div>
          <h1 className="hero-title3">
            Industrial <span className="gradient-text3">Products</span>
          </h1>
          <p className="hero-subtitle3">
            Discover our range of high-performance adhesives, compounds, 
            and specialty chemicals for industrial applications.
          </p>
          
          {/* Search Bar */}
          <div className="hero-search3">
            <div className="search-wrapper3">
              <FontAwesomeIcon icon={faSearch} className="search-icon3" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input3"
              />
              {searchTerm && (
                <button 
                  className="clear-search3"
                  onClick={() => setSearchTerm('')}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="categories-nav3">
        <div className="nav-container3">
          <div className="categories-wrapper3">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`category-chip3 ${activeFilter === category.key ? 'active3' : ''}`}
                onClick={() => setActiveFilter(category.key)}
              >
                <FontAwesomeIcon icon={category.icon} className="chip-icon3" />
                <span className="chip-label3">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid3">
        <div className="grid-container3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card3"
                onClick={() => setSelectedProduct(product)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="card-media3">
                  <div className="product-image3">
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%232563eb' opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%232563eb' text-anchor='middle' dy='.3em'%3E${product.name}%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>

                <div className="card-content3">
                  <div className="card-header3">
                    <span className="product-category3">
                      {Array.isArray(product.category) 
                        ? product.category[0].toUpperCase() 
                        : product.category.toUpperCase()}
                    </span>
                    <span className="product-id3">#{String(product.id).padStart(3, '0')}</span>
                  </div>

                  <h3 className="product-title3">{product.name}</h3>
                  <p className="product-description3">{product.description}</p>

                  <div className="product-specs3">
                    <div className="spec-tag3">
                      <span className="spec-key3">Grade:</span>
                      <span className="spec-value3">{product.specs.grade}</span>
                    </div>
                  </div>

                  <div className="card-footer3">
                    <div className="product-actions3">
                      {product.tds && (
                        <button
                          className="action-btn3 download-btn3"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(e, product);
                          }}
                          title="Download TDS"
                        >
                          <FontAwesomeIcon icon={faDownload} />
                          <span>TDS</span>
                        </button>
                      )}
                      <button
                        className="action-btn3 quote-btn3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEmailRequest(product, 'quote');
                        }}
                        title="Request Quote"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Quote</span>
                      </button>
                      <button
                        className="action-btn3 details-btn3"
                        title="View Details"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results3">
              <div className="no-results-content3">
                <FontAwesomeIcon icon={faSearch} className="no-results-icon3" />
                <h3>No Products Found</h3>
                <p>Try adjusting your search or filter.</p>
                <button 
                  className="reset-btn3"
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchTerm('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="modal-overlay3" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal3" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close3" onClick={() => setSelectedProduct(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="modal-grid3">
              <div className="modal-gallery3">
                <div className="modal-image3">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%232563eb' opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='20' fill='%232563eb' text-anchor='middle' dy='.3em'%3E${selectedProduct.name}%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              <div className="modal-info3">
                <div className="modal-header3">
                  <div>
                    <span className="modal-category3">
                      {Array.isArray(selectedProduct.category) 
                        ? selectedProduct.category.join(' • ') 
                        : selectedProduct.category}
                    </span>
                    <h2 className="modal-title3">{selectedProduct.name}</h2>
                    <p className="modal-id3">Product #{String(selectedProduct.id).padStart(3, '0')}</p>
                  </div>
                </div>

                <div className="modal-description3">
                  <p>{selectedProduct.description}</p>
                </div>

                <div className="modal-specs3">
                  <h3>Specifications</h3>
                  <div className="specs-grid3">
                    <div className="spec-item3">
                      <span className="spec-label3">Strength:</span>
                      <span className="spec-value3">{selectedProduct.specs.strength}</span>
                    </div>
                    <div className="spec-item3">
                      <span className="spec-label3">Temperature:</span>
                      <span className="spec-value3">{selectedProduct.specs.temp}</span>
                    </div>
                    <div className="spec-item3">
                      <span className="spec-label3">Grade:</span>
                      <span className="spec-value3">{selectedProduct.specs.grade}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-features3">
                  <h3>Features</h3>
                  <ul className="features-list3">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon icon={faCheck} className="check-icon3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-applications3">
                  <h3>Applications</h3>
                  <div className="applications-tags3">
                    {selectedProduct.applications.map((app, idx) => (
                      <span key={idx} className="app-tag3">{app}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions3">
                  {selectedProduct.tds && (
                    <button
                      className="action-btn3 primary3"
                      onClick={(e) => handleDownload(e, selectedProduct)}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                      Download TDS
                    </button>
                  )}
                  <button
                    className={`action-btn3 secondary3 ${isEmailLoading ? 'loading3' : ''}`}
                    onClick={() => handleEmailRequest(selectedProduct, 'quote')}
                    disabled={isEmailLoading}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    {isEmailLoading ? 'Opening...' : 'Request Quote'}
                  </button>
                  <button
                    className={`action-btn3 outline3 ${isEmailLoading ? 'loading3' : ''}`}
                    onClick={() => handleEmailRequest(selectedProduct, 'support')}
                    disabled={isEmailLoading}
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    {isEmailLoading ? 'Opening...' : 'Support'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Bar */}
      <div className="stats-bar3">
        <div className="stats-container3">
          <div className="stat-item3">
            <span className="stat-value3">{filteredProducts.length}</span>
            <span className="stat-label3">Products Shown</span>
          </div>
          <div className="stat-divider3"></div>
          <div className="stat-item3">
            <span className="stat-value3">{products.length}</span>
            <span className="stat-label3">Total Products</span>
          </div>
          <div className="stat-divider3"></div>
          <div className="stat-item3">
            <span className="stat-value3">8</span>
            <span className="stat-label3">Categories</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;