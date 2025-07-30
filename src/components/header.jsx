import React, { useRef, useContext } from "react";
import './header.css';
import categories from '../arrays/categories';
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function Header(){
    const categoriesRef = useRef(null);
    const { cartItems } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext);

    const scrollCategories = () => {
        if (categoriesRef.current) {
            categoriesRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return(
        <>
        <nav 
        className="navbar navbar-expand-lg navbar-dark pb-1"
        >
              <div className="container position-relative p-0">
                <a href="/" className="navbar-brand brand-container">
                  <div className='brand-wrapper'>
                    <div className="logo-circle">
                      <i className="fas fa-couch logo-icon"></i>
                    </div>
                    <h3 className='brand-text'>FUN</h3>
                  </div>
                </a>
        
              <div className="collapse navbar-collapse ms-2" id="navbar">
                <ul className="navbar-nav nav-links">
                    <li className="nav-item">
                        <a href="/living" className="nav-link text-light fw-bold">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-light fw-bold">orders</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light fw-bold">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light fw-bold">Help Center</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light fw-bold">Gallery</a>
                    </li>
                </ul>
              </div>
              <div className='action-buttons'>
                <div className="icon-circle">
                  <a href="#"><i className="fa fa-search"></i></a>
                </div>
                <Link to="/cart" className="text-decoration-none text-dark">
                  <div className="icon-circle position-relative">
                    <i className="fa fa-shopping-cart text-light"></i>
                    {cartItems.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {cartItems.length}
                      </span>
                    )}
                  </div>
                </Link>

                <div className="icon-circle">
                  <a href="#"><i className="fa fa-user"></i></a>
                </div>
                <Link to="/wishlist" className="text-decoration-none">
                  <div className="icon-circle position-relative">
                    <i className="fa fa-heart text-light"></i>
                    {wishlistItems.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {wishlistItems.length}
                      </span>
                            )}
                  </div>
                </Link>

                <button type='button' className='signup-btn'>Signup</button>
              </div>
              <button 
                  className="navbar-toggler" 
                  type='button' 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              </div>
            </nav>
            
            <div className="categories-container bg-light shadow-sm position-relative">
              <div 
                className="categories-row d-flex py-1 align-items-center" 
                ref={categoriesRef}
                style={{
                  overflowX: 'auto',
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none', 
                  whiteSpace: 'nowrap'
                }}
              >
                {categories.map(cat => (
                  <div key={cat.id} className="mx-3 text-center flex-shrink-0">
                    <Link to={`/category/${cat.description.toLowerCase()}`} className="text-decoration-none">
                    <i className={`fa ${cat.icon} fa-lg`} style={{color: '#000000', fontSize: '10px'}}></i>
                    <div style={{fontSize: '0.5rem', color: '#000000'}}>{cat.description}</div>
                    </Link>
                  </div>
                ))}
              </div>
              
              <button 
                className="scroll-btn position-absolute"
                onClick={scrollCategories}
                style={{
                  right: '3px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid #ddd',
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <i className="fa fa-chevron-right" style={{fontSize: '12px', color: '#333'}}></i>
              </button>
            </div>
        </>
    )
}