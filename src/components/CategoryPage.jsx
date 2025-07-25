import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { useContext } from "react";
import products from "../arrays/products";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
];

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [sortBy, setSortBy] = useState("default");
  const [view, setView] = useState("grid");

  let filteredProducts = products
    .map((product, idx) => ({ ...product, id: `wholeproducts_${idx}` }))
    .filter((product) => product.category.toLowerCase() === categoryName.toLowerCase());

  // Sorting logic
  if (sortBy === "price-asc") {
    filteredProducts = filteredProducts.slice().sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')));
  } else if (sortBy === "price-desc") {
    filteredProducts = filteredProducts.slice().sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')));
  } else if (sortBy === "rating") {
    filteredProducts = filteredProducts.slice().sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="text-light">
      {/* Category Banner */}
      <div className=" p-2 mb-4 d-flex align-items-center justify-content-between category-banner" style={{ borderRadius: '20px 20px 0 0', background: 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)', color: "#fff", minHeight: 70 }}>
        <div>
          <div className="d-flex align-items-center gap-3">
            <h3>Discover {categoryName}</h3>
          </div>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Category" style={{ width: 50, opacity: 0.7 }} />
      </div>

      {/* Controls */}
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-3">
        <div className="d-flex align-items-center gap-2">
          <label htmlFor="sortBy" className="fw-bold me-2 mb-0">Sort by:</label>
          <select
            id="sortBy"
            className="form-select form-select-sm"
            style={{ width: 180 }}
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="btn-group" role="group" aria-label="View toggle">
          <button
            className={`btn btn-outline-secondary ${view === "grid" ? "active" : ""}`}
            onClick={() => setView("grid")}
            title="Grid view"
          >
            <i className="fa fa-th"></i>
          </button>
          <button
            className={`btn btn-outline-secondary ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
            title="List view"
          >
            <i className="fa fa-list"></i>
          </button>
        </div>
      </div>

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <div className="d-flex flex-column align-items-center justify-content-center py-5">
          <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="Empty" style={{ width: 120, opacity: 0.5 }} />
          <h4 className="mt-4 text-secondary">No products found in this category.</h4>
          <Link to="/" className="btn btn-primary mt-3">Continue Shopping</Link>
        </div>
      ) : (
        <div className={view === "grid" ? "row g-4 p-4" : "list-group list-group-flush"}>
          {filteredProducts.map((product, index) => {
            const isWishlisted = wishlistItems.some(item => item.id === product.id);
            return view === "grid" ? (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm border-0 product-card position-relative">
                  {/* Badge */}
                  {product.isFavorite && <span className="badge bg-danger position-absolute top-0 start-0 m-2">Hot</span>}
                  <div className="position-relative bg-dark d-flex align-items-center justify-content-center" style={{ height: 220 }}>
                    <img src={product.img} alt={product.title} className="p-3 object-fit-contain" style={{ maxHeight: 180, maxWidth: "100%" }} />
                    <button
                      type="button"
                      className="btn btn-light position-absolute top-0 end-0 m-2 p-0 border-0"
                      style={{ borderRadius: "50%", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
                      aria-label="Toggle wishlist"
                      onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
                    >
                      <i className={`fa${isWishlisted ? "s" : "r"} fa-heart`} style={{ color: isWishlisted ? "#ff4d4f" : "#aaa", fontSize: 20 }}></i>
                    </button>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">{product.title}</h5>
                    <p className="card-text text-muted mb-2 clamp" style={{ minHeight: 48 }}>{product.desc.split("\n")[0]}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="fw-bold text-danger fs-5">{product.price}</span>
                      <Link to={`/product/${product.id}`} state={{ product }} className="btn btn-outline-primary btn-sm rounded-pill px-3">View</Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="list-group-item list-group-item-action flex-column align-items-start d-flex mb-3 shadow-sm rounded-3 border-0">
                <div className="d-flex w-100 align-items-center gap-3">
                  <img src={product.img} alt={product.title} style={{ width: 90, height: 90, objectFit: "contain", borderRadius: 12, background: "#f5f5f5" }} />
                  <div className="flex-grow-1">
                    <h5 className="mb-1 fw-bold">{product.title}</h5>
                    <p className="mb-1 text-muted small">{product.desc.split("\n")[0]}</p>
                    <div className="d-flex align-items-center gap-3 mt-2">
                      <span className="fw-bold text-danger fs-6">{product.price}</span>
                      <span className="badge bg-primary">{product.rating} <i className="fa fa-star"></i></span>
                      {product.isFavorite && <span className="badge bg-danger">Hot</span>}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light ms-auto p-0 border-0"
                    style={{ borderRadius: "50%", width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }}
                    aria-label="Toggle wishlist"
                    onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
                  >
                    <i className={`fa${isWishlisted ? "s" : "r"} fa-heart`} style={{ color: isWishlisted ? "#ff4d4f" : "#aaa", fontSize: 20 }}></i>
                  </button>
                </div>
              </div>
            );
          })}
          <Link>
            <button className="btn btn-lg btn-primary">
              <i className="fa fa-chevron-left me-2"></i>Back to Home
            </button>
          </Link>
        </div>

      )}

    </div>
  );
};

export default CategoryPage;
