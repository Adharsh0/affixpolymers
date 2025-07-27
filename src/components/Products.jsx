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
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  // Complete products array (keeping your existing products)
  const products = [
    {
      id: 1,
      name: "AFFIX AP-320",
      category: ["industrial","adhesives","cvs"],
      description: "AFFIX AP-320 is specially manufactured solution used to bind M24 and general belt joint and pulley",
      features: ["Inflammable", "Excellent bonding in room temp"],
      image: "/images/affixap320-red.jpeg",
      tds: "/tds/TDS AP - 320.pdf",
      specs: { strength: "Standard", temp: "Room Temp", grade: "M24" },
      price: "Contact for Quote",
      applications: ["Belt Joints", "Pulley Systems", "Industrial Bonding"]
    },
    {
      id: 2,
      name: "AFFIX AP-340",
      category: ["industrial","adhesives","cvs"],
      description: "AFFIX AP-340 is specially manufactured solution used to bind HR and SHR belt joint and pulley lagging",
      features: ["inflammable", "UV Resistant", "peeling strength:5.5-7.6"],
      image: "/images/affixap-340.jpeg",
      tds: "/tds/ap340.docx",
      specs: { strength: "Medium", temp: "Variable", grade: "HR/SHR" },
      price: "Contact for Quote",
      applications: ["HR Belt Systems", "Lagging Applications", "UV Exposed Areas"]
    },
    {
      id: 3,
      name: "AFFIX AP-390",
      category: ["industrial","adhesives","cvs"],
      description: "AFFIX AP-390 is specially manufactured solution used to bind SHR and UHR belt joint and pulley lagging",
      features: ["inflammable", "Excellent bonding in room"],
      image: "/images/ap-390n.jpeg",
      tds: "/tds/ap390.docx",
      specs: { strength: "High", temp: "Room Temp", grade: "SHR/UHR" },
      price: "Contact for Quote",
      applications: ["Heavy Duty Belts", "High Performance Systems", "UHR Applications"]
    },
    {
      id: 4,
      name: "AFFIX AP-390 SFR",
      category: ["industrial","specialty","cvs"],
      description: "AFFIX AP-390 sfr is specially manufactured fire retardant solution used to bind SHR and UHR belt joint and pulley lagging",
      features: ["non-flammable", "peeling strength:5.5-7.5"],
      image: "/images/affixap-390.jpg",
      tds: "/tds/390sfr.docx",
      specs: { strength: "Ultra High", temp: "High Temp", grade: "Fire Retardant" },
      price: "Contact for Quote",
      applications: ["Fire Safety Systems", "High Temperature", "Safety Critical"]
    },
    {
      id: 5,
      name: "Insulation Compound AP-170",
      category: ["adhesives","hvs"],
      description: "High-performance insulation compound for industrial applications",
      features: ["M24 grade belt","AP-270 HR and SHR","AP-370 SHR,UHR and FR","3 Grade"],
      image: "/images/insulation.jpg",
      specs: { strength: "Variable", temp: "High Temp", grade: "Multi-Grade" },
      price: "Contact for Quote",
      applications: ["Electrical Insulation", "Thermal Barriers", "Multi-Grade Systems"]
    },
    {
      id: 6,
      name: "Cover Compound AP-170",
      category: ["adhesives","hvs"],
      description: "Protective cover compound designed for demanding environments",
      features: ["M24 grade belt","AP-270 HR and SHR","AP-370 SHR,UHR and FR","3 Grade"],
      image: "/images/cover.jpg",
      specs: { strength: "Variable", temp: "High Temp", grade: "Multi-Grade" },
      price: "Contact for Quote",
      applications: ["Surface Protection", "Environmental Barriers", "Protective Coatings"]
    },
    {
      id: 7,
      name: "Lagging Rubber Sheet Diamond",
      category: ["rubber","industrial"],
      description: "Premium diamond-pattern lagging rubber sheet for superior grip",
      features: ["Vibration Resistant", "Heat Stable", "OEM Quality"],
      image: "/images/image1.jpg",
      specs: { strength: "High", temp: "Heat Stable", grade: "Diamond Pattern" },
      price: "Contact for Quote",
      applications: ["Conveyor Systems", "Grip Enhancement", "Industrial Flooring"]
    },
    {
      id: 8,
      name: "CLA-20",
      category: "cla",
      description: "Cross linking agent for enhanced bonding performance",
      features: ["inflammable", "NCO content:7.2%"],
      image: "/images/20.jpg",
      tds: "/tds/cla20.pdf",
      specs: { strength: "Standard", temp: "Ambient", grade: "7.2% NCO" },
      price: "Contact for Quote",
      applications: ["Chemical Bonding", "Cross-Linking", "Adhesive Enhancement"]
    },
    {
      id: 9,
      name: "CLA-40",
      category: "cla",
      description: "Cross linking agent with superior chemical properties",
      features: ["inflammable", "NCO content:7.5%"],
      image: "/images/40.jpg",
      tds: "/tds/TDS CLA-40.pdf",
      specs: { strength: "Medium", temp: "Ambient", grade: "7.5% NCO" },
      price: "Contact for Quote",
      applications: ["Enhanced Bonding", "Chemical Processing", "Industrial Applications"]
    },
    {
      id: 10,
      name: "CLA-90",
      category: "cla",
      description: "High-performance cross linking agent for industrial use",
      features: ["inflammable", "NCO content:7.9%"],
      image: "/images/90.jpg",
      tds: "/tds/cla90.pdf",
      specs: { strength: "High", temp: "Ambient", grade: "7.9% NCO" },
      price: "Contact for Quote",
      applications: ["High Performance", "Specialized Bonding", "Critical Applications"]
    },
  ];

  const categories = [
    { key: 'all', label: 'All Products', icon: faBolt },
    { key: 'industrial', label: 'Industrial Solutions', icon: faIndustry },
    { key: 'adhesives', label: 'Adhesive Systems', icon: faLink },
    { key: 'cvs', label: 'Cold Vulcanizing', icon: faSnowflake },
    { key: 'hvs', label: 'Hot Vulcanizing', icon: faFire },
    { key: 'cla', label: 'Cross Linking Agents', icon: faFlask },
    { key: 'rubber', label: 'Rubber Products', icon: faCircle },
    { key: 'specialty', label: 'Specialty Products', icon: faStar },
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

  // Email configuration
  const EMAIL_CONFIG = {
    to: 'affixpolymers@gmail.com',
    subject: 'Product Quote Request - ',
    cc: '',
    bcc: ''
  };

  // Enhanced mobile-compatible email handler
  const handleEmailRequest = (product, type = 'quote') => {
    setIsEmailLoading(true);

    let subject, body;

    if (type === 'quote') {
      subject = `${EMAIL_CONFIG.subject}${product.name}`;
      body = `Dear Team,

I would like to request a quote for the following product:

Product Details:
- Product Name: ${product.name}
- Product ID: #${String(product.id).padStart(3, '0')}
- Description: ${product.description}
- Strength Grade: ${product.specs.strength}
- Temperature: ${product.specs.temp}
- Grade Type: ${product.specs.grade}

Key Features:
${product.features.map(feature => `- ${feature}`).join('\n')}

Applications:
${product.applications.map(app => `- ${app}`).join('\n')}

Additional Information:
- Quantity Required: [Please specify]
- Delivery Location: [Please specify]
- Timeline: [Please specify]
- Special Requirements: [Please specify]

Please provide detailed pricing, availability, and delivery information.

Thank you for your time and assistance.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`;
    } else {
      subject = `Technical Support Request - ${product.name}`;
      body = `Dear Technical Support Team,

I need technical assistance regarding the following product:

Product Details:
- Product Name: ${product.name}
- Product ID: #${String(product.id).padStart(3, '0')}
- Description: ${product.description}

Technical Query:
[Please describe your technical question or issue here]

Application Details:
- Intended Use: [Please specify]
- Operating Conditions: [Please specify]
- Current Challenges: [Please specify]

Please provide technical guidance and recommendations.

Thank you for your support.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`;
    }

    try {
      // Detect mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      
      if (isMobile) {
        // Mobile devices: Use mailto directly
        const mailtoUrl = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
        
        // Show success message after a brief delay
        setTimeout(() => {
          setIsEmailLoading(false);
        }, 1500);
        
      } else {
        // Desktop: Try Gmail first, fallback to mailto
        try {
          const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_CONFIG.to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          
          // Add CC and BCC if provided
          let finalUrl = gmailUrl;
          if (EMAIL_CONFIG.cc) {
            finalUrl += `&cc=${encodeURIComponent(EMAIL_CONFIG.cc)}`;
          }
          if (EMAIL_CONFIG.bcc) {
            finalUrl += `&bcc=${encodeURIComponent(EMAIL_CONFIG.bcc)}`;
          }

          const newWindow = window.open(finalUrl, '_blank');
          
          // If popup blocked or failed, use mailto
          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            const mailtoUrl = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoUrl;
          }
          
          setIsEmailLoading(false);
          
        } catch (error) {
          // Fallback to mailto for desktop
          const mailtoUrl = `mailto:${EMAIL_CONFIG.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoUrl;
          setIsEmailLoading(false);
        }
      }
    } catch (error) {
      console.error('Email error:', error);
      setIsEmailLoading(false);
      
      // Final fallback - show alert with email details
      alert(`Please send an email to: ${EMAIL_CONFIG.to}\n\nSubject: ${subject}\n\nOr copy the email address and compose manually.`);
    }
  };

  // Function to handle quote request
  const handleQuoteRequest = (product) => {
    handleEmailRequest(product, 'quote');
  };

  // Function to handle technical support contact
  const handleTechnicalSupport = (product) => {
    handleEmailRequest(product, 'support');
  };

  const handleDownload = async (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.tds) {
      alert('Technical Data Sheet not available for this product');
      return;
    }

    try {
      const response = await fetch(product.tds, { method: 'HEAD' });
      
      if (!response.ok) {
        alert('TDS file not found. Please contact our support team.');
        return;
      }

      const fileExtension = product.tds.split('.').pop();
      const fileName = `${product.name.replace(/\s+/g, '_')}_TDS.${fileExtension}`;
      
      const link = document.createElement('a');
      link.href = product.tds;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Download error:', error);
      alert('Error downloading file. Please try again or contact our support team.');
    }
  };

  return (
    <section className="products-showcase" id="products">
      {/* Header Section */}
      <div className="showcase-header">
        <div className="header-content">
          <div className="header-text">
            <span className="section-badge">Product List</span>
            <h1 className="main-title">Industrial Chemical Solutions</h1>
            <p className="main-subtitle">
              Discover our comprehensive range of high-performance adhesives, compounds, 
              and specialty chemicals engineered for industrial excellence.
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="controls-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
            
            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`category-tab ${activeFilter === category.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.key)}
                >
                  <span className="tab-icon">
                    <FontAwesomeIcon icon={category.icon} />
                  </span>
                  <span className="tab-label">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        <div className="grid-container">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-header">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='160' viewBox='0 0 200 160'%3E%3Crect width='200' height='160' fill='%23f1f5f9' stroke='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='14' fill='%23687280' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <div className="card-badge">
                  <span className="product-id">#{String(product.id).padStart(3, '0')}</span>
                  <span className="product-category">
                    {Array.isArray(product.category) ? product.category[0] : product.category}
                  </span>
                </div>
              </div>

              <div className="card-content">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                
                <div className="product-specs">
                  <div className="spec-item">
                    <span className="spec-label">Strength:</span>
                    <span className="spec-value">{product.specs.strength}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Grade:</span>
                    <span className="spec-value">{product.specs.grade}</span>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="pricing">
                    <span className="price-label">Pricing:</span>
                    <span className="price-value">{product.price}</span>
                  </div>
                  
                  <div className="card-actions">
                    {product.tds && (
                      <button
                        className="action-btn download-btn"
                        onClick={(e) => handleDownload(e, product)}
                        title="Download TDS"
                      >
                        <FontAwesomeIcon icon={faFileAlt} />
                      </button>
                    )}
                    <button className="action-btn info-btn" title="View Details">
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Product Modal with Mobile-Compatible Email Integration */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <span className="modal-subtitle">Product #{String(selectedProduct.id).padStart(3, '0')}</span>
              </div>
              <button 
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-image-section">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f1f5f9' stroke='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23687280' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="modal-details">
                <div className="details-section">
                  <h3>Product Description</h3>
                  <p>{selectedProduct.description}</p>
                </div>

                <div className="details-section">
                  <h3>Technical Specifications</h3>
                  <div className="specs-list">
                    <div className="spec-row">
                      <span>Strength Grade:</span>
                      <span>{selectedProduct.specs.strength}</span>
                    </div>
                    <div className="spec-row">
                      <span>Temperature:</span>
                      <span>{selectedProduct.specs.temp}</span>
                    </div>
                    <div className="spec-row">
                      <span>Grade Type:</span>
                      <span>{selectedProduct.specs.grade}</span>
                    </div>
                  </div>
                </div>

                <div className="details-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx}>
                        <FontAwesomeIcon icon={faCheck} className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="details-section">
                  <h3>Applications</h3>
                  <div className="applications-tags">
                    {selectedProduct.applications.map((app, idx) => (
                      <span key={idx} className="app-tag">{app}</span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Modal Actions with Mobile-Compatible Email Integration */}
                <div className="modal-actions">
                  {selectedProduct.tds && (
                    <button
                      className="primary-btn"
                      onClick={(e) => handleDownload(e, selectedProduct)}
                    >
                      <FontAwesomeIcon icon={faFileAlt} /> Download Technical Data Sheet
                    </button>
                  )}
                  <button 
                    className={`secondary-btn quote-btn ${isEmailLoading ? 'loading' : ''}`}
                    onClick={() => handleQuoteRequest(selectedProduct)}
                    disabled={isEmailLoading}
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> 
                    {isEmailLoading ? ' Opening Email...' : ' Request Quote via Email'}
                  </button>
                  <button 
                    className={`secondary-btn support-btn ${isEmailLoading ? 'loading' : ''}`}
                    onClick={() => handleTechnicalSupport(selectedProduct)}
                    disabled={isEmailLoading}
                  >
                    <FontAwesomeIcon icon={faPhone} /> 
                    {isEmailLoading ? ' Opening Email...' : ' Contact Technical Support'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Summary */}
      <div className="results-summary">
        <div className="summary-content">
          <div className="results-count">
            Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
            {activeFilter !== 'all' && (
              <span className="filter-info">
                in <strong>{categories.find(c => c.key === activeFilter)?.label}</strong>
              </span>
            )}
            {searchTerm && (
              <span className="search-info">
                matching "<strong>{searchTerm}</strong>"
              </span>
            )}
          </div>
          
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-number">{products.length}</span>
              <span className="stat-label">Total Products</span>
            </div>
            <div className="stat">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
