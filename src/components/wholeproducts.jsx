import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function WholeProducts(){
    const { addToCart } = useContext(CartContext);
    return(
        <>
        <section className="mt-3 p-3">
            <div
              style={{
                display: 'grid',
                gridTemplate: 'auto auto/ repeat(4, 1fr)',
                gap: '18px',
                padding: '18px',
                background: 'linear-gradient(135deg, #424242 60%, #232526 100%)',
                borderRadius: '14px',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)'
              }}
            >
              {/* Card 1 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img
                    src="../src/assets/furniture/7.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Modern Lounge Chair</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Soft fabric, wooden legs, perfect for living rooms.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.5 (120)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$199</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                    src="../src/assets/furniture/5.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Classic Wooden Table</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Solid oak, minimalist design, fits any dining room.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.0 (89)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$299</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                    src="../src/assets/furniture/3.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Minimalist Sofa</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Comfortable, stylish, and easy to clean fabric.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>3.5 (54)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$399</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                    src="../src/assets/furniture/4.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Scandinavian Lamp</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Elegant lighting for your modern home office.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>5.0 (32)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$89</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              {/* Shop Bundle Button */}
              <button
                style={{
                  gridColumn: '1 / -1',
                  padding: '10px 0',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(90deg, #e74c3c 60%, #ffb400 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  marginTop: '8px',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                  letterSpacing: '0.5px',
                  transition: 'background 0.2s'
                }}
              >
                <i className="fa fa-shopping-cart" style={{marginRight: '8px'}}></i> Shop Bundle
              </button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
               <button style={{padding: '10px 20px', border: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>See more <i className="fa fa-chevron-right"></i></button>
            </div>  
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                width: '100%',
                marginTop: '20px',
                gap: '24px',
              }}
            >
              {[
                {
                  img: '../src/assets/furniture/sub-table.png',
                  title: 'Microsoft AI Sofa Chair',
                  desc: 'Bendable: 30cm, 250cm, 30cm. Flexible, modern, and comfortable for any space.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/1.jpg',
                  title: 'Modern Lounge Chair',
                  desc: 'Ergonomic design, premium materials, and AI-powered comfort.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: true,
                },
                {
                  img: '../src/assets/furniture/2.png',
                  title: 'Luxury Recliner',
                  desc: 'Reclines up to 180°, perfect for relaxation and productivity.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/3.png',
                  title: 'Minimalist Armchair',
                  desc: 'Sleek, sturdy, and fits any modern home or office.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/4.png',
                  title: 'Classic Wooden Chair',
                  desc: 'Timeless design with a modern twist, crafted from solid wood.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/5.png',
                  title: 'AI Smart Table',
                  desc: 'Smart features, wireless charging, and elegant finish.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/6.png',
                  title: 'Ergo Office Chair',
                  desc: 'Adjustable, breathable mesh, and lumbar support for long hours.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/7.png',
                  title: 'Premium Sofa Set',
                  desc: 'Spacious, plush, and perfect for family or guests.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/sub-table.png',
                  title: 'Microsoft AI Sofa Chair',
                  desc: 'Bendable: 30cm, 250cm, 30cm. Flexible, modern, and comfortable for any space.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/1.jpg',
                  title: 'Modern Lounge Chair',
                  desc: 'Ergonomic design, premium materials, and AI-powered comfort.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: true,
                },
                {
                  img: '../src/assets/furniture/2.png',
                  title: 'Luxury Recliner',
                  desc: 'Reclines up to 180°, perfect for relaxation and productivity.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/3.png',
                  title: 'Minimalist Armchair',
                  desc: 'Sleek, sturdy, and fits any modern home or office.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/4.png',
                  title: 'Classic Wooden Chair',
                  desc: 'Timeless design with a modern twist, crafted from solid wood.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/5.png',
                  title: 'AI Smart Table',
                  desc: 'Smart features, wireless charging, and elegant finish.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/6.png',
                  title: 'Ergo Office Chair',
                  desc: 'Adjustable, breathable mesh, and lumbar support for long hours.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
                {
                  img: '../src/assets/furniture/7.png',
                  title: 'Premium Sofa Set',
                  desc: 'Spacious, plush, and perfect for family or guests.',
                  price: '$340 - $354',
                  minOrder: '1 Piece',
                  rating: 4.9,
                  reviews: 236,
                  isFavorite: false,
                },
              ].map((product, idx) => {
                const productWithId = { ...product, id: `wholeproducts_${idx}` };
                return (
                  <Link
                    key={idx}
                    to={`/product/${idx}`}
                    state={{product: productWithId}}
                    style={{textDecoration: 'none', color: 'inherit'}}
                  >
                    <div
                      key={idx}
                      style={{
                        background: '#fff',
                        borderRadius: '14px',
                        boxShadow: '0 4px 18px 0 rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        position: 'relative',
                        transition: 'box-shadow 0.2s',
                      }}
                      className="product-card"
                    >
                      {/* Favorite Icon */}
                      <button
                        style={{
                          position: 'absolute',
                          top: 14,
                          right: 14,
                          background: '#fff',
                          border: 'none',
                          borderRadius: '50%',
                          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                          width: 36,
                          height: 36,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2,
                          cursor: 'pointer',
                          transition: 'background 0.2s',
                        }}
                        aria-label={product.isFavorite ? "Remove from favorites" : "Add to favorites"}
                      >
                        <i
                          className={`fa${product.isFavorite ? 's' : 'r'} fa-heart`}
                          style={{
                            color: product.isFavorite ? '#e74c3c' : '#bbb',
                            fontSize: '1.2rem',
                            transition: 'color 0.2s',
                          }}
                        ></i>
                      </button>
                      {/* Product Image */}
                      <div
                        style={{
                          width: '100%',
                          height: 200,
                          background: '#f7f7f7',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderTopLeftRadius: '14px',
                          borderTopRightRadius: '14px',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={product.img}
                          alt={product.title}
                          style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            transition: 'transform 0.2s',
                          }}
                          className="product-image"
                        />
                      </div>
                      {/* Product Details */}
                      <div style={{padding: '18px 16px 14px 16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div>
                          <h5
                            style={{
                              fontWeight: 700,
                              fontSize: '1.08rem',
                              margin: 0,
                              marginBottom: 6,
                              color: '#232526',
                              lineHeight: 1.2,
                              minHeight: '2.2em',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                            title={product.title}
                          >
                            {product.title}
                          </h5>
                          <p
                            style={{
                              fontSize: '0.97rem',
                              color: '#666',
                              margin: 0,
                              marginBottom: 10,
                              minHeight: '2.2em',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                            }}
                            title={product.desc}
                          >
                            {product.desc}
                          </p>
                          <div style={{display: 'flex', alignItems: 'center', marginBottom: 10}}>
                            {[1,2,3,4,5].map((star, i) => (
                              <i
                                key={i}
                                className="fa fa-star"
                                style={{
                                  color: i < Math.round(product.rating) ? '#ffb400' : '#e0e0e0',
                                  marginRight: 2,
                                  fontSize: '1rem',
                                }}
                              ></i>
                            ))}
                            <span style={{fontSize: '0.92rem', color: '#888', marginLeft: 6}}>
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                        </div>
                        <div style={{marginTop: 'auto'}}>
                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6}}>
                            <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.15rem'}}>{product.price}</span>
                            <span style={{fontSize: '0.95rem', color: '#1abc9c', fontWeight: 500}}>
                              Min. Order: <span style={{color: '#27ae60'}}>{product.minOrder}</span>
                            </span>
                          </div>
                          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8}}>
                            <button
                              style={{
                                border: 'none',
                                borderRadius: '18px',
                                padding: '7px 22px',
                                background: 'linear-gradient(90deg, #232526 60%, #414345 100%)',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                                transition: 'background 0.2s',
                              }}
                              onClick={e => {
                                e.preventDefault();
                                addToCart(productWithId);
                              }}
                            >
                              Add to Cart <i className="fa fa-cart-plus" style={{marginLeft: 6}}></i>
                            </button>
                            <div style={{display: 'flex', gap: '12px'}}>
                              <button
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#e74c3c',
                                  fontSize: '1.2rem',
                                  cursor: 'pointer',
                                  padding: 0,
                                }}
                                aria-label="Add to wishlist"
                              >
                                <i className="fa fa-heart"></i>
                              </button>
                              <button
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#232526',
                                  fontSize: '1.2rem',
                                  cursor: 'pointer',
                                  padding: 0,
                                }}
                                aria-label="Quick shop"
                              >
                                <i className="fa fa-eye"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* Well-designed "Shop Together" cards with images and visual richness */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                width: '100%',
                marginTop: '28px',
                gap: '18px'
              }}
            >
              {/* 3-product bundle card */}
              <div
                style={{
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(120deg, #232526 60%, #414345 100%)',
                  borderRadius: '14px',
                  boxShadow: '0 4px 24px 0 rgba(30,40,60,0.10)',
                  padding: '18px 18px 12px 18px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{display: 'flex', gap: '14px', marginBottom: '12px', flex: 1}}>
                  <div
                    style={{
                      flex: 1,
                      background: '#fff',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(161,196,253,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 0
                    }}
                  >
                    <img
                      src="/src/assets/furniture/head-2.jpg"
                      alt="Modern Headboard"
                      style={{width: '100%', height: '110px', objectFit: 'cover'}}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: '#fff',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(161,196,253,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 0
                    }}
                  >
                    <img
                      src="/src/assets/furniture/head-3.jpg"
                      alt="Classic Bed Frame"
                      style={{width: '100%', height: '110px', objectFit: 'cover'}}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: '#fff',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(161,196,253,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 0
                    }}
                  >
                    <img
                      src="/src/assets/furniture/head-4.jpg"
                      alt="Upholstered Bed"
                      style={{width: '100%', height: '110px', objectFit: 'cover'}}
                    />
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8}}>
                  <div style={{color: '#fff', fontWeight: 700, fontSize: '1.08rem', letterSpacing: '0.01em'}}>
                    Bedroom Bundle
                  </div>
                  <div style={{color: '#ffd700', fontWeight: 600, fontSize: '1.1rem'}}>
                    $349.99
                  </div>
                </div>
                <button
                  style={{
                    width: '100%',
                    background: 'linear-gradient(90deg, #a1c4fd 0%, #70a1ff 100%)',
                    color: '#232526',
                    border: 'none',
                    borderRadius: '7px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '10px 0',
                    marginTop: 'auto',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  Shop All Together
                </button>
                <div style={{
                  position: 'absolute',
                  top: 12,
                  right: 18,
                  background: '#e53935',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  padding: '2px 10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                }}>
                  Save 15%
                </div>
              </div>
              {/* 2-product bundle card */}
              <div
                style={{
                  minHeight: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(120deg, #232526 60%, #414345 100%)',
                  borderRadius: '14px',
                  boxShadow: '0 4px 24px 0 rgba(30,40,60,0.10)',
                  padding: '18px 18px 12px 18px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{display: 'flex', gap: '14px', marginBottom: '12px', flex: 1}}>
                  <div
                    style={{
                      flex: 1,
                      background: '#fff',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(161,196,253,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 0
                    }}
                  >
                    <img
                      src="/src/assets/furniture/head-5.jpg"
                      alt="Rustic Headboard"
                      style={{width: '100%', height: '110px', objectFit: 'cover'}}
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: '#fff',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 2px 8px rgba(161,196,253,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 0
                    }}
                  >
                    <img
                      src="/src/assets/furniture/head-7.jpg"
                      alt="Kids Bed Frame"
                      style={{width: '100%', height: '110px', objectFit: 'cover'}}
                    />
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8}}>
                  <div style={{color: '#fff', fontWeight: 700, fontSize: '1.08rem', letterSpacing: '0.01em'}}>
                    Family Combo
                  </div>
                  <div style={{color: '#ffd700', fontWeight: 600, fontSize: '1.1rem'}}>
                    $159.99
                  </div>
                </div>
                <button
                  style={{
                    width: '100%',
                    background: 'linear-gradient(90deg, #a1c4fd 0%, #70a1ff 100%)',
                    color: '#232526',
                    border: 'none',
                    borderRadius: '7px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    padding: '10px 0',
                    marginTop: 'auto',
                    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                  }}
                >
                  Shop All Together
                </button>
                <div style={{
                  position: 'absolute',
                  top: 12,
                  right: 18,
                  background: '#1976d2',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  padding: '2px 10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                }}>
                  Save 10%
                </div>
              </div>
            </div>
            
            <div
              style={{
                display: 'grid',
                gridTemplate: 'auto auto/ repeat(4, 1fr)',
                gap: '18px',
                padding: '18px',
                borderRadius: '14px',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)'
              }}
            >
              {/* Card 1 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img
                    src="../src/assets/furniture/7.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Modern Lounge Chair</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Soft fabric, wooden legs, perfect for living rooms.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.5 (120)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$199</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                    src="../src/assets/furniture/5.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Classic Wooden Table</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Solid oak, minimalist design, fits any dining room.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.0 (89)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$299</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                    src="../src/assets/furniture/3.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Minimalist Sofa</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Comfortable, stylish, and easy to clean fabric.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>3.5 (54)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$399</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                    src="../src/assets/furniture/4.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Scandinavian Lamp</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Elegant lighting for your modern home office.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>5.0 (32)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$89</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img
                    src="../src/assets/furniture/7.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Modern Lounge Chair</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Soft fabric, wooden legs, perfect for living rooms.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.5 (120)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$199</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img
                    src="../src/assets/furniture/7.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Modern Lounge Chair</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Soft fabric, wooden legs, perfect for living rooms.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.5 (120)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$199</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img
                    src="../src/assets/furniture/7.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Modern Lounge Chair</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Soft fabric, wooden legs, perfect for living rooms.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.5 (120)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$199</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
              <div className="d-block" style={{background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer'}}>
                <div style={{height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img
                    src="../src/assets/furniture/7.png"
                    alt="Modern Chair"
                    style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px'}}
                  />
                  <i
                    className="fa fa-heart"
                    style={{
                      color: '#ff4d4f',
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      fontSize: '22px',
                      zIndex: 2,
                      background: '#fff',
                      borderRadius: '50%',
                      padding: '6px',
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label="Add to favorites"
                  ></i>
                </div>
                <div style={{padding: '14px 10px 10px 10px'}}>
                  <h6 style={{fontWeight: 700, fontSize: '1rem', marginBottom: '6px'}}>Modern Lounge Chair</h6>
                  <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '8px'}}>Soft fabric, wooden legs, perfect for living rooms.</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    <span style={{fontSize: '0.9rem', color: '#888'}}>4.5 (120)</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem'}}>$199</span>
                    <button style={{background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem'}}>Add <i className="fa fa-cart-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
        </section>
        
        <section className="p-3" style={{backgroundColor: ''}}>
        <h2 className="text-light">Trending Furnitures</h2>
          <nav aria-label="Trending Furniture Filters" style={{margin: '20px 0'}}>
            <ul
              style={{
                display: 'flex',
                gap: '12px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                overflowX: 'auto',
                scrollbarWidth: 'none'
              }}
            >
              {[
                "All",
                "Sofas",
                "Chairs",
                "Tables",
                "Beds",
                "Cabinets",
                "Desks",
                "Shelves",
                "Benches",
                "Dressers"
              ].map((filter, idx) => (
                <li key={filter}>
                  <a
                    href="#"
                    style={{
                      display: 'block',
                      padding: '8px 20px',
                      borderRadius: '20px',
                      background: idx === 0 ? 'var(--primary, #a1c4fd)' : '#232323',
                      color: idx === 0 ? '#fff' : '#c2e9fb',
                      fontWeight: idx === 0 ? 'bold' : '500',
                      border: idx === 0 ? '2px solid #c2e9fb' : '2px solid transparent',
                      textDecoration: 'none',
                      boxShadow: idx === 0 ? '0 2px 8px rgba(161,196,253,0.15)' : 'none',
                      transition: 'background 0.2s, color 0.2s, border 0.2s'
                    }}
                    tabIndex={0}
                  >
                    {filter}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
          <div>
            <div style={{display: 'grid', gridTemplate: 'auto auto/ repeat(6, 1fr)', width: '100%', marginTop: '20px', gap: '10px'}}>
            <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          <div style={{width: '200px', height: '220px', marginBottom: '10px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
            <div 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                backgroundColor: '#e53935',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }} 
              className="h6 text-light"
            >
              20%
            </div>
            <img 
              src="../src/assets/furniture/arrival-9.jpg" 
              style={{
                width: "100%",
                height: "75%",
                objectFit: 'cover',
                borderRadius: '6px 6px 6px 6px',
              }} 
              alt="Home carbonated table"
            />
            <div className="text-light">
              <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>Home carbonated table...</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>$43.20</h1>
                <strike style={{color: '#bbb', fontSize: '0.95rem'}}>$62.32</strike>
              </div>
            </div>
          </div>
          
            </div>
          </div>
          </div>
        </section>
        </>
    )
}