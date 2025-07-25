import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  if (!wishlistItems.length) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="Empty Wishlist" style={{ width: 120, opacity: 0.5 }} />
        <h3 className="mt-4 text-secondary">Your wishlist is empty!</h3>
        <Link to="/" className="btn btn-primary mt-3">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div
        className="w-full rounded-4 px-4 py-3 mb-3 d-flex align-items-center"
        style={{
          background: '#2A7B9B',
          background: 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'
        }}
      >
        <h2 className="fw-bold text-light">
          <i className="fa fa-book me-4"></i>Your Shopping Cart
        </h2>
      </div>
      <div className="row g-4">
        {wishlistItems.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="position-relative bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: 220 }}>
                <img src={product.img} alt={product.title} className="p-3 object-fit-contain" style={{ maxHeight: 180, maxWidth: "100%" }} />
                <button
                  type="button"
                  className="btn btn-light position-absolute top-0 end-0 m-2 p-0 border-0"
                  style={{ borderRadius: "50%", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
                  aria-label="Remove from wishlist"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  <i className="fas fa-heart" style={{ color: "#ff4d4f", fontSize: 20 }}></i>
                </button>
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-2">{product.title}</h5>
                <p className="card-text text-muted mb-2 clamp" style={{ minHeight: 48 }}>{product.desc}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold text-danger fs-5">{product.price}</span>
                  <Link to={`/product/${product.id}`} state={{ product }} className="btn btn-outline-primary btn-sm rounded-pill px-3">View</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-lg btn-primary text-light mt-5">
        <Link to="/" className="text-decoration-none text-white">
         <i className="fa fa-chevron-left me-4 text-light"></i>Return to Home page
        </Link>
      </button>
    </div>
  );
};

export default WishlistPage;
