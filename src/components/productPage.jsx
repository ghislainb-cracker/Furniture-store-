import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useLocation, Link } from "react-router-dom";
import { Row, Col, Container, Button, Badge, Form, InputGroup, Tooltip, OverlayTrigger, ProgressBar } from "react-bootstrap";
const colorSwatch = {
  Black: "#222",
  White: "#fff",
  Gray: "#bbb",
  Brown: "#8B5C2A"
};

const ProductPage = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { addToCart } = useContext(CartContext);

  if (!product) return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh", color: "#fff", backgroundColor: "#000" }}>
      <img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="Not found" style={{ width: 120, opacity: 0.5 }} />
      <div className="text-center mt-4 text-lg" style={{ color: "#fff" }}>Product not found.<br />
        <Link to="/" className="btn btn-primary mt-3" style={{ color: "#fff" }}>Go back home</Link>
      </div>
    </div>
  );

  
  const colors = ["Black", "White", "Gray", "Brown"];
  
  
  const sizes = ["S", "M", "L", "XL"];
  

  const images = [
    product.img,
    "../src/assets/furniture/6.png",
    "../src/assets/furniture/7.png",
    "../src/assets/furniture/8.png"
  ];

  // Related products data
  const relatedProducts = [
    {
      id: 1,
      title: "Modern Lounge Chair",
      img: "../src/assets/furniture/7.png",
      price: "$199.00",
      rating: 4.5,
      reviews: 120
    },
    {
      id: 2,
      title: "Classic Wooden Table",
      img: "../src/assets/furniture/8.png",
      price: "$299.00",
      rating: 4.0,
      reviews: 89
    },
    {
      id: 3,
      title: "Minimalist Sofa",
      img: "../src/assets/furniture/6.png",
      price: "$399.00",
      rating: 3.5,
      reviews: 54
    }
  ];

  const handleQuantityChange = (value) => {
    const newValue = quantity + value;
    if (newValue >= 1 && newValue <= 10) {
      setQuantity(newValue);
    }
  };

  // For progress bar demo (stock left)
  const stock = 20;
  const sold = 12;
  const stockPercent = Math.round((sold / stock) * 100);

  // For shipping ETA
  const shippingETA = "Arrives in 2-4 business days";

  // For product highlights
  const highlights = [
    { icon: "fa-couch", label: "Ergonomic Design" },
    { icon: "fa-leaf", label: "Eco Materials" },
    { icon: "fa-tools", label: "Easy Assembly" },
    { icon: "fa-award", label: "2-Year Warranty" }
  ];

  // For reviews summary
  const reviewSummary = [
    { stars: 5, percent: 60 },
    { stars: 4, percent: 25 },
    { stars: 3, percent: 10 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 }
  ];

  return (
    <Container className="py-3" style={{ color: "#fff", backgroundColor: "#000" }}>
      {/* Back to Home Button */}
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-light rounded-pill px-4 py-2 shadow-sm" style={{ fontWeight: 600, fontSize: "1.05em" }}>
          <i className="fas fa-arrow-left me-2"></i> Back to Home
        </Link>
      </div>
      {/* Product Section */}
      <Row className="mb-5 g-5 align-items-stretch">
        {/* Product Images */}
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className="border rounded-4 mb-3 overflow-hidden position-relative shadow-sm" style={{ height: "520px", background: "linear-gradient(135deg, #222 60%, #111 100%)" }}>
            <img 
              src={images[activeImage]} 
              alt={product.title} 
              className="w-100 h-100 object-fit-contain p-4"
              style={{ transition: "all 0.3s cubic-bezier(.4,2,.6,1)" }}
            />
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip>{isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}</Tooltip>}
            >
              <Button 
                variant="light" 
                className="position-absolute top-0 end-0 m-3 rounded-circle shadow"
                style={{ width: "44px", height: "44px", zIndex: 2 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <i className={`fas fa-heart${isWishlisted ? " text-danger" : " text-secondary"}`}></i>
              </Button>
            </OverlayTrigger>
            <div className="position-absolute bottom-0 start-0 m-3 px-3 py-2 rounded-pill bg-white shadow-sm d-flex align-items-center" style={{ opacity: 0.95 }}>
              <i className="fas fa-shipping-fast text-dark me-2"></i>
              <span className="small text-dark">{shippingETA}</span>
            </div>
          </div>
          <Row className="g-2">
            {images.map((img, index) => (
              <Col xs={3} key={index}>
                <div 
                  className={`border rounded-3 cursor-pointer transition-all ${activeImage === index ? "border-primary border-2 shadow" : ""}`}
                  style={{ 
                    height: "90px", 
                    overflow: "hidden",
                    backgroundColor: "#222",
                    boxShadow: activeImage === index ? "0 0 0 2px #0d6efd33" : undefined
                  }}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="w-100 h-100 object-fit-contain p-2"
                  />
                </div>
              </Col>
            ))}
          </Row>
          {/* Product Highlights */}
          {/* <div className="d-flex justify-content-between mt-4 px-2">
            {highlights.map(h => (
              <div key={h.label} className="text-center flex-fill">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: 44, height: 44 }}>
                  <i className={`fas ${h.icon} text-primary fs-5`}></i>
                </div>
                <small className="text-light">{h.label}</small>
              </div>
            ))}
          </div> */}
        </Col>

        {/* Product Info */}
        <Col lg={6} className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h1 className="mb-2 fw-bold" style={{ fontSize: "2.3rem", letterSpacing: "-1px", color: "#fff" }}>{product.title}</h1>
              <div className="d-flex align-items-center mb-2">
                <div className="text-warning me-2">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star${i < Math.floor(product.rating) ? "" : i < product.rating ? "-half-alt" : ""}`}
                    />
                  ))}
                </div>
                <span className="small" style={{ color: "#ccc" }}>({product.reviews} reviews)</span>
                <Badge bg="success" className="ms-3 px-3 py-2 rounded-pill shadow-sm" style={{ fontSize: "0.95em", color: "#fff" }}>
                  <i className="fas fa-check-circle me-1"></i> In Stock
                </Badge>
              </div>
              {/* <div className="d-flex align-items-center gap-2 mt-1">
                <ProgressBar now={80} style={{ width: 120, height: 8, borderRadius: 6 }} variant="info" />
                <span className="small" style={{ color: "#ccc" }}>{stock - sold} left</span>
              </div> */}
              <h2 className="text-danger fw-bold mb-1" style={{ fontSize: "2.1rem", color: "#fff" }}>{product.price}</h2>
              {product.originalPrice && (
                <small className="text-decoration-line-through" style={{ color: "#bbb" }}>${product.originalPrice}</small>
              )}
            </div>
            <div className="text-end">
              <div className="mt-2">
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Secure payment</Tooltip>}
                >
                  <i className="fas fa-lock text-success me-2"></i>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>30-day returns</Tooltip>}
                >
                  <i className="fas fa-undo text-primary"></i>
                </OverlayTrigger>
              </div>
            </div>
          </div>
          
          {/* Short Description */}
          <p className="lead mb-4" style={{ fontSize: "1.15rem", color: "#ccc" }}>{product.desc}</p>
          
          {/* Full Description */}
          {/* <div className="mb-4">
            <h5 className="mb-3 fw-bold" style={{ color: "#fff" }}>Product Details</h5>
            <ul className="list-unstyled row row-cols-2 g-2">
              <li className="mb-2 col" style={{ color: "#fff" }}>
                <i className="fas fa-check-circle text-primary me-2"></i>
                <span style={{ color: "#fff" }}>Premium quality materials</span>
              </li>
              <li className="mb-2 col" style={{ color: "#fff" }}>
                <i className="fas fa-check-circle text-primary me-2"></i>
                <span style={{ color: "#fff" }}>Designed for comfort and durability</span>
              </li>
              <li className="mb-2 col" style={{ color: "#fff" }}>
                <i className="fas fa-check-circle text-primary me-2"></i>
                <span style={{ color: "#fff" }}>Easy to assemble with included instructions</span>
              </li>
              <li className="mb-2 col" style={{ color: "#fff" }}>
                <i className="fas fa-check-circle text-primary me-2"></i>
                <span style={{ color: "#fff" }}>Eco-friendly manufacturing process</span>
              </li>
            </ul>
          </div> */}

          {/* Color Selection */}
          <div className="mb-4">
            <h5 className="mb-3 fw-bold" style={{ color: "#fff" }}>Color: <span className="text-primary">{selectedColor}</span></h5>
            <div className="d-flex gap-3">
              {colors.map(color => (
                <OverlayTrigger
                  key={color}
                  placement="top"
                  overlay={<Tooltip>{color}</Tooltip>}
                >
                  <Button
                    variant={selectedColor === color ? "primary" : "outline-secondary"}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-circle border-2 d-flex align-items-center justify-content-center`}
                    style={{
                      width: 38,
                      height: 38,
                      background: colorSwatch[color],
                      borderColor: selectedColor === color ? "#0d6efd" : "#ccc",
                      boxShadow: selectedColor === color ? "0 0 0 2px #0d6efd55" : undefined,
                      color: color === "White" ? "#222" : "#fff"
                    }}
                  >
                    {selectedColor === color && <i className="fas fa-check"></i>}
                  </Button>
                </OverlayTrigger>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h5 className="mb-3 fw-bold" style={{ color: "#fff" }}>Size: <span className="text-primary">{selectedSize}</span></h5>
            <div className="d-flex gap-2">
              {sizes.map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "primary" : "outline-secondary"}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-pill px-3 fw-bold ${selectedSize === size ? "shadow" : ""}`}
                  style={{ minWidth: "50px", fontSize: "1.1em", color: "#fff" }}
                >
                  <span style={{ color: "#fff" }}>{size}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <h5 className="mb-3 fw-bold" style={{ color: "#fff" }}>Quantity</h5>
            <InputGroup style={{ width: "160px" }}>
              <Button 
                variant="outline-secondary" 
                onClick={() => handleQuantityChange(-1)}
                className="fw-bold"
                disabled={quantity <= 1}
                style={{ color: "#fff" }}
              >
                <i className="fas fa-minus"></i>
              </Button>
              <Form.Control 
                type="number" 
                value={quantity} 
                min="1" 
                max="10" 
                onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                className="text-center fw-bold"
                style={{ fontSize: "1.1em", backgroundColor: "#111", color: "#fff", border: "1px solid #444" }}
              />
              <Button 
                variant="outline-secondary" 
                onClick={() => handleQuantityChange(1)}
                className="fw-bold"
                disabled={quantity >= 10}
                style={{ color: "#fff" }}
              >
                <i className="fas fa-plus"></i>
              </Button>
            </InputGroup>
            <div className="small mt-1" style={{ color: "#ccc" }}>Max 10 per order</div>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 mb-4">
            <Button variant="primary" size="lg" className="flex-grow-1 py-3 fw-bold shadow" style={{ fontSize: "1.1em", color: "#fff" }} onClick={() => addToCart(product)}>
              <i className="fas fa-shopping-cart me-2"></i> <span style={{ color: "#fff" }}>Add to Cart</span>
            </Button>
            <Button variant="success" size="lg" className="flex-grow-1 py-3 fw-bold shadow" style={{ fontSize: "1.1em", color: "#fff" }}>
              <i className="fas fa-bolt me-2"></i> <span style={{ color: "#fff" }}>Buy Now</span>
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="border-top pt-4">
            <Row className="g-3">
              <Col xs={4}>
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-light rounded-circle p-3 mb-2 shadow-sm">
                    <i className="fas fa-truck text-primary fs-4"></i>
                  </div>
                  <h6 className="mb-0 fw-bold" style={{ color: "#fff" }}>Free Shipping</h6>
                  <small className="text-light" style={{ color: "#ccc" }}>On orders over $50</small>
                </div>
              </Col>
              <Col xs={4}>
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-light rounded-circle p-3 mb-2 shadow-sm">
                    <i className="fas fa-undo text-primary fs-4"></i>
                  </div>
                  <h6 className="mb-0 fw-bold" style={{ color: "#fff" }}>Easy Returns</h6>
                  <small className="text-light" style={{ color: "#ccc" }}>30-day return policy</small>
                </div>
              </Col>
              <Col xs={4}>
                <div className="d-flex flex-column align-items-center">
                  <div className="bg-light rounded-circle p-3 mb-2 shadow-sm">
                    <i className="fas fa-shield-alt text-primary fs-4"></i>
                  </div>
                  <h6 className="mb-0 fw-bold" style={{ color: "#fff" }}>Warranty</h6>
                  <small className="text-light" style={{ color: "#ccc" }}>2-year warranty included</small>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Reviews Summary */}
      <Row className="mb-4">
        <Col md={12}>
          <div
            className="rounded-4 shadow-sm px-3 py-2"
            style={{
              background: "linear-gradient(90deg, #181818 60%, #232526 100%)",
              color: "#fff",
              minHeight: 0,
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              boxShadow: "0 2px 12px 0 rgba(30,40,60,0.10)",
            }}
          >
            <div className="d-flex align-items-center" style={{ minWidth: 0 }}>
              <span
                className="fw-bold"
                style={{
                  fontSize: "2.1rem",
                  color: "#0d6efd",
                  lineHeight: 1,
                  marginRight: 12,
                  minWidth: 48,
                  textShadow: "0 2px 8px #0002",
                }}
              >
                {product.rating.toFixed(1)}
              </span>
              <div>
                <div className="text-warning" style={{ fontSize: "1.2rem", lineHeight: 1 }}>
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star${i < Math.floor(product.rating) ? "" : i < product.rating ? "-half-alt" : ""}`}
                      style={{ marginRight: 2 }}
                    />
                  ))}
                </div>
                <span style={{ color: "#bbb", fontSize: "0.95rem" }}>
                  {product.reviews} reviews
                </span>
              </div>
            </div>
            <div style={{ flex: 1, marginLeft: 24, minWidth: 0 }}>
              {reviewSummary.map(r => (
                <div
                  key={r.stars}
                  className="d-flex align-items-center"
                  style={{ marginBottom: 4 }}
                >
                  <span
                    className="me-2"
                    style={{
                      width: 22,
                      color: "#fff",
                      fontSize: "0.98rem",
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    {r.stars} <i className="fas fa-star text-warning" style={{ fontSize: "0.9em" }}></i>
                  </span>
                  <ProgressBar
                    now={r.percent}
                    style={{
                      flex: 1,
                      height: 6,
                      borderRadius: 4,
                      background: "#232526",
                      margin: "0 8px",
                    }}
                    variant="info"
                  />
                  <span
                    className="ms-1 small"
                    style={{ color: "#bbb", minWidth: 32, textAlign: "left" }}
                  >
                    {r.percent}%
                  </span>
                </div>
              ))}
            </div>
            <div className="d-flex align-items-center" style={{ marginLeft: 18 }}>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-pill px-3 py-1"
                style={{
                  color: "#fff",
                  borderColor: "#0d6efd",
                  fontWeight: 500,
                  fontSize: "0.98rem",
                  background: "rgba(13,110,253,0.07)",
                  boxShadow: "0 1px 4px 0 #0001",
                  whiteSpace: "nowrap",
                }}
              >
                Write a Review
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Related Products */}
      <div className="mt-5 pt-5">
        <h3 className="mb-4 fw-bold" style={{ color: "#fff" }}>You May Also Like</h3>
        <Row className="g-4">
          {relatedProducts.map((item) => (
            <Col md={4} key={item.id}>
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all rounded-4 overflow-hidden" style={{ background: "#181818", color: "#fff" }}>
                <Link 
                  to={`/product/${item.id}`} 
                  state={{ product: item }}
                  className="text-decoration-none"
                  style={{ color: "#fff" }}
                >
                  <div className="ratio ratio-1x1 bg-dark position-relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="p-4 object-fit-contain"
                    />
                    <Button 
                      variant="light" 
                      className="position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
                      style={{ width: "36px", height: "36px" }}
                    >
                      <i className="far fa-heart"></i>
                    </Button>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold" style={{ color: "#fff" }}>{item.title}</h5>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-danger fw-bold fs-5" style={{ color: "#dc3545" }}>{item.price}</span>
                        <div className="text-warning small mt-1">
                          {[...Array(5)].map((_, i) => (
                            <i 
                              key={i} 
                              className={`fas fa-star${i < Math.floor(item.rating) ? "" : i < item.rating ? "-half-alt" : ""}`}
                            />
                          ))}
                          <span className="ms-1" style={{ color: "#ccc" }}>({item.reviews})</span>
                        </div>
                      </div>
                      <Button variant="outline-primary" size="sm" className="rounded-pill px-3" style={{ color: "#fff", borderColor: "#0d6efd" }}>
                        <span style={{ color: "#fff" }}>View Details</span>
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ProductPage;