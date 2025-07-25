import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function WholeProducts() {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  return (
    <>
      <section className="mt-3 p-3">
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
          <div className="d-block" style={{ background: '#000000', color: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ height: '180px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="../src/assets/furniture/7.png"
                alt="Modern Chair"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
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
            <div style={{ padding: '14px 10px 10px 10px' }}>
              <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Modern Lounge Chair</h6>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Soft fabric, wooden legs, perfect for living rooms.</p>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
                <span style={{ fontSize: '0.9rem', color: '#888' }}>4.5 (120)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$199</span>
                <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="d-block" style={{ background: '#000000', color: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ height: '180px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="../src/assets/furniture/5.png"
                alt="Modern Chair"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
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
            <div style={{ padding: '14px 10px 10px 10px' }}>
              <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Classic Wooden Table</h6>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Solid oak, minimalist design, fits any dining room.</p>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
                <span style={{ fontSize: '0.9rem', color: '#888' }}>4.0 (89)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$299</span>
                <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="d-block" style={{ background: '#000000', color: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ height: '180px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="../src/assets/furniture/3.png"
                alt="Modern Chair"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
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
            <div style={{ padding: '14px 10px 10px 10px' }}>
              <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Minimalist Sofa</h6>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Comfortable, stylish, and easy to clean fabric.</p>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
                <span style={{ fontSize: '0.9rem', color: '#888' }}>3.5 (54)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$399</span>
                <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="d-block" style={{ background: '#000000', color: '#ffffff', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <div style={{ height: '180px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="../src/assets/furniture/4.png"
                alt="Modern Chair"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
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
            <div style={{ padding: '14px 10px 10px 10px' }}>
              <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Scandinavian Lamp</h6>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Elegant lighting for your modern home office.</p>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$89</span>
                <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
              </div>
            </div>
          </div>
          {/* Shop Bundle Button */}
          <button
            style={{
              gridColumn: '1 / -1',
              padding: '12px 0',
              borderRadius: '10px',
              background: '#000000',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              marginTop: '12px',
              letterSpacing: '0.5px',
              transition: 'transform 0.3s ease-in-out',
              /* boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', // softer, deeper shadow */
              cursor: 'pointer',
          }}
          className="shadow1 bundle-btn"
          >
          <i className="fa fa-shopping-cart" style={{ marginRight: '10px' }}></i> Shop Bundle
        </button>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', border: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>See more <i className="fa fa-chevron-right"></i></button>
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
            desc: `Discover the future of comfort with our Microsoft AI Sofa Chair.\nDesigned for modern living spaces, this chair adapts to your posture.\nPremium materials ensure durability and a luxurious feel.\nAI-powered adjustments provide personalized support all day.\nEasy to clean and maintain for busy households.\nSleek design fits seamlessly into any decor.\nEco-friendly construction for a sustainable choice.\nLightweight yet sturdy for easy rearrangement.\nPerfect for work, relaxation, or entertaining guests.\nExperience innovation and style in one package.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'sofa'
          },
          {
            img: '../src/assets/furniture/3.png',
            title: 'Modern Lounge Chair',
            desc: `Elevate your home with the Modern Lounge Chair.\nErgonomic contours cradle your body for ultimate relaxation.\nHigh-density foam cushions offer lasting comfort.\nUpholstered in soft, breathable fabric for year-round use.\nSolid wood frame ensures stability and longevity.\nMinimalist design complements any room.\nEasy assembly with included instructions.\nNon-slip feet protect your floors.\nAvailable in multiple colors to suit your style.\nA perfect blend of form and function.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: true,
            category: 'chair'
          },
          {
            img: '../src/assets/furniture/2.png',
            title: 'Luxury Recliner',
            desc: `Unwind in luxury with our state-of-the-art Recliner.\nReclines up to 180° for optimal comfort.\nSupportive headrest and lumbar cushioning.\nSmooth, quiet reclining mechanism.\nPremium leather finish for a sophisticated look.\nBuilt-in cup holders for convenience.\nStain-resistant and easy to clean.\nPerfect for movie nights or afternoon naps.\nCompact design fits small spaces.\nEnjoy relaxation like never before.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'table'
          },
          {
            img: '../src/assets/furniture/3.png',
            title: 'Minimalist Armchair',
            desc: `Add a touch of elegance with the Minimalist Armchair.\nSleek lines and modern silhouette.\nSturdy metal frame for lasting durability.\nPlush seat and backrest for comfort.\nNeutral tones blend with any decor.\nLightweight for easy movement.\nAssembly is quick and hassle-free.\nPerfect for living rooms or offices.\nLow-maintenance materials.\nA stylish addition to any space.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'bed'
          },
          {
            img: '../src/assets/furniture/4.png',
            title: 'Classic Wooden Chair',
            desc: `Classic Wooden Chair brings timeless charm to your home.\nHandcrafted from solid wood for strength.\nErgonomic backrest supports good posture.\nSmooth, polished finish highlights natural grain.\nVersatile design suits dining or study areas.\nEasy to stack and store.\nProtective pads prevent floor scratches.\nSimple, elegant, and functional.\nSustainably sourced materials.\nA must-have for traditional interiors.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'bed'
          },
          {
            img: '../src/assets/furniture/5.png',
            title: 'AI Smart Table',
            desc: `Upgrade your workspace with the AI Smart Table.\nIntegrated wireless charging for your devices.\nSpacious tabletop for multitasking.\nSleek, modern design enhances productivity.\nDurable, scratch-resistant surface.\nHidden cable management keeps things tidy.\nAdjustable height for ergonomic comfort.\nEasy to assemble and move.\nEco-friendly materials used.\nA smart solution for modern offices.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'desk'
          },
          {
            img: '../src/assets/furniture/6.png',
            title: 'Ergo Office Chair',
            desc: `Work in comfort with the Ergo Office Chair.\nBreathable mesh back keeps you cool.\nAdjustable seat height and armrests.\nLumbar support reduces back strain.\nSmooth-rolling casters for mobility.\nSturdy base for stability.\nEasy to assemble with clear instructions.\nContemporary design fits any office.\nSupports long hours of productivity.\nYour back will thank you.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'bench'
          },
          {
            img: '../src/assets/furniture/7.png',
            title: 'Premium Sofa Set',
            desc: `Host in style with the Premium Sofa Set.\nSpacious seating for family and friends.\nPlush cushions provide exceptional comfort.\nDurable upholstery resists wear and tear.\nSturdy frame ensures long-lasting use.\nModern design elevates your living room.\nEasy to clean and maintain.\nNeutral colors match any decor.\nPerfect for gatherings or quiet nights in.\nA centerpiece for your home.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'bench'
          },
          {
            img: '../src/assets/furniture/sub-table.png',
            title: 'Microsoft AI Sofa Chair',
            desc: `Discover the future of comfort with our Microsoft AI Sofa Chair.\nDesigned for modern living spaces, this chair adapts to your posture.\nPremium materials ensure durability and a luxurious feel.\nAI-powered adjustments provide personalized support all day.\nEasy to clean and maintain for busy households.\nSleek design fits seamlessly into any decor.\nEco-friendly construction for a sustainable choice.\nLightweight yet sturdy for easy rearrangement.\nPerfect for work, relaxation, or entertaining guests.\nExperience innovation and style in one package.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'stool'
          },
          {
            img: '../src/assets/furniture/3.png',
            title: 'Modern Lounge Chair',
            desc: `Elevate your home with the Modern Lounge Chair.\nErgonomic contours cradle your body for ultimate relaxation.\nHigh-density foam cushions offer lasting comfort.\nUpholstered in soft, breathable fabric for year-round use.\nSolid wood frame ensures stability and longevity.\nMinimalist design complements any room.\nEasy assembly with included instructions.\nNon-slip feet protect your floors.\nAvailable in multiple colors to suit your style.\nA perfect blend of form and function.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: true,
            category: 'shelf'
          },
          {
            img: '../src/assets/furniture/2.png',
            title: 'Luxury Recliner',
            desc: `Unwind in luxury with our state-of-the-art Recliner.\nReclines up to 180° for optimal comfort.\nSupportive headrest and lumbar cushioning.\nSmooth, quiet reclining mechanism.\nPremium leather finish for a sophisticated look.\nBuilt-in cup holders for convenience.\nStain-resistant and easy to clean.\nPerfect for movie nights or afternoon naps.\nCompact design fits small spaces.\nEnjoy relaxation like never before.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'couch'
          },
          {
            img: '../src/assets/furniture/3.png',
            title: 'Minimalist Armchair',
            desc: `Add a touch of elegance with the Minimalist Armchair.\nSleek lines and modern silhouette.\nSturdy metal frame for lasting durability.\nPlush seat and backrest for comfort.\nNeutral tones blend with any decor.\nLightweight for easy movement.\nAssembly is quick and hassle-free.\nPerfect for living rooms or offices.\nLow-maintenance materials.\nA stylish addition to any space.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'sofa'
          },
          {
            img: '../src/assets/furniture/4.png',
            title: 'Classic Wooden Chair',
            desc: `Classic Wooden Chair brings timeless charm to your home.\nHandcrafted from solid wood for strength.\nErgonomic backrest supports good posture.\nSmooth, polished finish highlights natural grain.\nVersatile design suits dining or study areas.\nEasy to stack and store.\nProtective pads prevent floor scratches.\nSimple, elegant, and functional.\nSustainably sourced materials.\nA must-have for traditional interiors.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'table'
          },
          {
            img: '../src/assets/furniture/5.png',
            title: 'AI Smart Table',
            desc: `Upgrade your workspace with the AI Smart Table.\nIntegrated wireless charging for your devices.\nSpacious tabletop for multitasking.\nSleek, modern design enhances productivity.\nDurable, scratch-resistant surface.\nHidden cable management keeps things tidy.\nAdjustable height for ergonomic comfort.\nEasy to assemble and move.\nEco-friendly materials used.\nA smart solution for modern offices.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'chair'
          },
          {
            img: '../src/assets/furniture/6.png',
            title: 'Ergo Office Chair',
            desc: `Work in comfort with the Ergo Office Chair.\nBreathable mesh back keeps you cool.\nAdjustable seat height and armrests.\nLumbar support reduces back strain.\nSmooth-rolling casters for mobility.\nSturdy base for stability.\nEasy to assemble with clear instructions.\nContemporary design fits any office.\nSupports long hours of productivity.\nYour back will thank you.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'desk'
          },
          {
            img: '../src/assets/furniture/7.png',
            title: 'Premium Sofa Set',
            desc: `Host in style with the Premium Sofa Set.\nSpacious seating for family and friends.\nPlush cushions provide exceptional comfort.\nDurable upholstery resists wear and tear.\nSturdy frame ensures long-lasting use.\nModern design elevates your living room.\nEasy to clean and maintain.\nNeutral colors match any decor.\nPerfect for gatherings or quiet nights in.\nA centerpiece for your home.`,
            price: '$340 - $354',
            minOrder: '1 Piece',
            rating: 4.9,
            reviews: 236,
            isFavorite: false,
            category: 'desk'
          },
        ].map((product, idx) => {
          const productWithId = { ...product, id: `wholeproducts_${idx}` };
          const isWishlisted = wishlistItems.some(item => item.id === productWithId.id);
          return (
            <Link
              key={idx}
              to={`/product/${idx}`}
              state={{ product: productWithId }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                key={productWithId.id}
                className="d-block"
                style={{
                  background: '#000000',
                  color: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
              >
                <div style={{ height: '180px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="bg-dark">
                  <img
                    src={productWithId.img}
                    alt={productWithId.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
                  />
                  <button
                    type="button"
                    className="btn btn-light p-0 border-0"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '14px',
                      borderRadius: '50%',
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)'
                    }}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    onClick={e => {
                      e.preventDefault();
                      if (isWishlisted) {
                        removeFromWishlist(productWithId.id);
                      } else {
                        addToWishlist(productWithId);
                      }
                    }}
                  >
                    {isWishlisted ? (
                      <i className="fas fa-heart" style={{ color: '#ff4d4f', fontSize: 22 }}></i>
                    ) : (
                      <i className="far fa-heart" style={{ color: '#aaa', fontSize: 22 }}></i>
                    )}
                  </button>
                </div>
                <div style={{ padding: '14px 10px 10px 10px', borderRadius: '0 0 18px 18px', backgroundColor: '#000' }}>
                  <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>{productWithId.title}</h6>
                  <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px', color: '#fff' }} className="clamp">{productWithId.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <i
                        key={i}
                        className="fa fa-star"
                        style={{ color: i < Math.round(productWithId.rating) ? '#ffb400' : '#e0e0e0', marginRight: 2, fontSize: '1rem' }}
                      ></i>
                    ))}
                    <span style={{ fontSize: '0.9rem', color: '#888', marginLeft: 6 }}>
                      {productWithId.rating} ({productWithId.reviews})
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>{productWithId.price}</span>
                    <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
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
          <div style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "10px 0"
          }}>
            {/*
            To avoid violating the Rules of Hooks, move all hooks to the top level.
            We define ProductImageScroller as an inner component of HotDeals.
          */}
            {/* Improved horizontal image scroller with left/right buttons and better usability */}
            {(() => {
              // Instead of just image paths, use product objects for richer info
              const productData = [
                {
                  src: "../src/assets/furniture/head-2.jpg",
                  name: "Modern Headboard",
                  price: 89.99,
                  oldPrice: 119.99,
                  rating: 4,
                  desc: "Elegant, padded headboard for beds Solid wood, timeless design.",
                  tag: "20% OFF"
                },
                {
                  src: "../src/assets/furniture/head-3.jpg",
                  name: "Classic Bed Frame",
                  price: 129.99,
                  oldPrice: 159.99,
                  rating: 5,
                  desc: "Solid wood, timeless design.",
                  tag: "New"
                },
                {
                  src: "../src/assets/furniture/head-1.jpg",
                  name: "Minimalist Headboard",
                  price: 74.99,
                  oldPrice: 99.99,
                  rating: 3,
                  desc: "Simple, modern, easy to install.",
                  tag: "Hot Deal"
                },
              ];

              const [hoveredIdx, setHoveredIdx] = React.useState(null);


              return (
                <div style={{ position: 'relative', width: '100%', minHeight: 130 }}>
                  {/* Image scroller */}
                  <div
                    style={{
                      gap: '18px',
                      display: 'flex',
                      overflowX: 'auto',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      paddingBottom: '8px',
                      scrollBehavior: 'smooth'
                    }}
                    className="hide-scrollbar"
                  >
                    {productData.map((prod, idx) => (
                      <div
                        key={idx}
                        className="hotdeal-product-card"
                        style={{
                          width: '180px',
                          height: '120px',
                          marginBottom: '0px',
                          flex: '0 0 auto',
                          borderRadius: '14px',
                          background: '#fff',
                          boxShadow: hoveredIdx === idx
                            ? '0 8px 32px rgba(161,196,253,0.25)'
                            : '0 2px 12px rgba(0,0,0,0.10)',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'box-shadow 0.3s, transform 0.3s',
                          cursor: 'pointer',
                          transform: hoveredIdx === idx ? 'scale(1.04)' : 'scale(1)'
                        }}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      >
                        {/* Tag badge */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          background: prod.tag === "20% OFF" ? "#e53935" : "#1976d2",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          borderRadius: '8px 0 8px 0',
                          padding: '2px 10px',
                          zIndex: 2,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                        }}>
                          {prod.tag}
                        </div>
                        {/* Product image */}
                        <img
                          src={prod.src}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: 'cover',
                            borderRadius: '14px',
                            filter: hoveredIdx === idx ? 'brightness(0.7)' : 'brightness(1)',
                            transition: 'filter 0.3s'
                          }}
                          alt={prod.name}
                          draggable={false}
                        />
                        {/* Overlay info on hover */}
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            background: hoveredIdx === idx ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
                            color: '#fff',
                            opacity: hoveredIdx === idx ? 1 : 0,
                            pointerEvents: hoveredIdx === idx ? 'auto' : 'none',
                            transition: 'opacity 0.3s, background 0.3s',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '16px 14px 12px 14px',
                          }}
                        >
                          <button
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '7px',
                              background: '#ffffff',
                              color: '#000000',
                              border: 'none',
                              borderRadius: '50%',
                              padding: '20px',
                              fontWeight: 700,
                              fontSize: '1rem',
                              boxShadow: '0 4px 16px rgba(67,206,162,0.18), 0 1.5px 6px rgba(24,90,157,0.10)',
                              cursor: 'pointer',
                              transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                              outline: 'none',
                              letterSpacing: '0.02em',
                              borderColor: '#fff',
                            }}
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => {
                              // Add to cart logic here
                              alert(`Added "${prod.name}" to cart!`);
                            }}
                            aria-label={`Add ${prod.name} to cart`}
                            className="cart-icon-overlay"
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </button>
                          {/* <div style={{fontSize: '0.92rem', color: '#c2e9fb', marginBottom: 4, minHeight: 32}}>
                          {prod.desc}
                        </div> */}
                          {/* <div style={{display: 'flex', alignItems: 'center', gap: '7px', marginBottom: 2}}>
                          <span style={{fontWeight: 700, color: '#ffd700', fontSize: '1.1rem'}}>
                            ${prod.price.toFixed(2)}
                          </span>
                          <strike style={{color: '#bbb', fontSize: '0.95rem'}}>${prod.oldPrice.toFixed(2)}</strike>
                        </div> */}
                          {/* {renderStars(prod.rating)} */}
                        </div>
                        {/* Always show name and price at bottom left, but less prominent */}
                        <div style={{
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          background: 'rgba(0,0,0,0.6)',
                          color: '#fff',
                          borderRadius: '8px',
                          padding: '3px 10px 2px 10px',
                          fontWeight: 600,
                          fontSize: '0.93rem',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                          opacity: hoveredIdx === idx ? 0 : 1,
                          transition: 'opacity 0.2s'
                        }}>
                          {prod.name} &nbsp; <span className="text-danger fs-lg">${prod.price.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
          <div className="d-flex justify-content-between text-white">
            <h5>Living Room collections</h5>
            <h5 className="text-warning">$246.99</h5>
          </div>
          <button className="btn btn-danger opacity-90">
            <i className="fa fa-shopping-cart me-2"></i>Shop All
          </button>
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
          <div style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "10px 0"
          }}>
            {/*
            To avoid violating the Rules of Hooks, move all hooks to the top level.
            We define ProductImageScroller as an inner component of HotDeals.
          */}
            {/* Improved horizontal image scroller with left/right buttons and better usability */}
            {(() => {
              // Instead of just image paths, use product objects for richer info
              const productData = [
                {
                  src: "../src/assets/furniture/head-2.jpg",
                  name: "Modern Headboard",
                  price: 89.99,
                  oldPrice: 119.99,
                  rating: 4,
                  desc: "Elegant, padded headboard for beds Solid wood, timeless design.",
                  tag: "20% OFF"
                },
                {
                  src: "../src/assets/furniture/head-3.jpg",
                  name: "Classic Bed Frame",
                  price: 129.99,
                  oldPrice: 159.99,
                  rating: 5,
                  desc: "Solid wood, timeless design.",
                  tag: "New"
                },
              ];

              const [hoveredIdx, setHoveredIdx] = React.useState(null);


              return (
                <div style={{ position: 'relative', width: '100%', minHeight: 130 }}>
                  {/* Image scroller */}
                  <div
                    style={{
                      gap: '18px',
                      display: 'flex',
                      overflowX: 'auto',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      paddingBottom: '8px',
                      scrollBehavior: 'smooth'
                    }}
                    className="hide-scrollbar"
                  >
                    {productData.map((prod, idx) => (
                      <div
                        key={idx}
                        className="hotdeal-product-card"
                        style={{
                          width: '180px',
                          height: '120px',
                          marginBottom: '0px',
                          flex: '0 0 auto',
                          borderRadius: '14px',
                          background: '#fff',
                          boxShadow: hoveredIdx === idx
                            ? '0 8px 32px rgba(161,196,253,0.25)'
                            : '0 2px 12px rgba(0,0,0,0.10)',
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'box-shadow 0.3s, transform 0.3s',
                          cursor: 'pointer',
                          transform: hoveredIdx === idx ? 'scale(1.04)' : 'scale(1)',
                          flex: 1
                        }}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                      >
                        {/* Tag badge */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          background: prod.tag === "20% OFF" ? "#e53935" : "#1976d2",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          borderRadius: '8px 0 8px 0',
                          padding: '2px 10px',
                          zIndex: 2,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                        }}>
                          {prod.tag}
                        </div>
                        {/* Product image */}
                        <img
                          src={prod.src}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: 'cover',
                            borderRadius: '14px',
                            filter: hoveredIdx === idx ? 'brightness(0.7)' : 'brightness(1)',
                            transition: 'filter 0.3s'
                          }}
                          alt={prod.name}
                          draggable={false}
                        />
                        {/* Overlay info on hover */}
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            background: hoveredIdx === idx ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)',
                            color: '#fff',
                            opacity: hoveredIdx === idx ? 1 : 0,
                            pointerEvents: hoveredIdx === idx ? 'auto' : 'none',
                            transition: 'opacity 0.3s, background 0.3s',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '16px 14px 12px 14px',
                          }}
                        >
                          <button
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '7px',
                              background: '#ffffff',
                              color: '#000000',
                              border: 'none',
                              borderRadius: '50%',
                              padding: '20px',
                              fontWeight: 700,
                              fontSize: '1rem',
                              boxShadow: '0 4px 16px rgba(67,206,162,0.18), 0 1.5px 6px rgba(24,90,157,0.10)',
                              cursor: 'pointer',
                              transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                              outline: 'none',
                              letterSpacing: '0.02em',
                              borderColor: '#fff',
                            }}
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => {
                              // Add to cart logic here
                              alert(`Added "${prod.name}" to cart!`);
                            }}
                            aria-label={`Add ${prod.name} to cart`}
                            className="cart-icon-overlay"
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </button>
                          {/* <div style={{fontSize: '0.92rem', color: '#c2e9fb', marginBottom: 4, minHeight: 32}}>
                          {prod.desc}
                        </div> */}
                          {/* <div style={{display: 'flex', alignItems: 'center', gap: '7px', marginBottom: 2}}>
                          <span style={{fontWeight: 700, color: '#ffd700', fontSize: '1.1rem'}}>
                            ${prod.price.toFixed(2)}
                          </span>
                          <strike style={{color: '#bbb', fontSize: '0.95rem'}}>${prod.oldPrice.toFixed(2)}</strike>
                        </div> */}
                          {/* {renderStars(prod.rating)} */}
                        </div>
                        {/* Always show name and price at bottom left, but less prominent */}
                        <div style={{
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          background: 'rgba(0,0,0,0.6)',
                          color: '#fff',
                          borderRadius: '8px',
                          padding: '3px 10px 2px 10px',
                          fontWeight: 600,
                          fontSize: '0.93rem',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                          opacity: hoveredIdx === idx ? 0 : 1,
                          transition: 'opacity 0.2s'
                        }}>
                          {prod.name} &nbsp; <span className="text-danger fs-lg">${prod.price.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
          <div className="d-flex justify-content-between text-white">
            <h5>Living Room collections</h5>
            <h5 className="text-warning">$246.99</h5>
          </div>
          <button className="btn btn-danger opacity-90">
            <i className="fa fa-shopping-cart me-2"></i>Shop All
          </button>
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
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/7.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Modern Lounge Chair</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Soft fabric, wooden legs, perfect for living rooms.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>4.5 (120)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$199</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/5.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Classic Wooden Table</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Solid oak, minimalist design, fits any dining room.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>4.0 (89)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$299</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/3.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Minimalist Sofa</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Comfortable, stylish, and easy to clean fabric.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>3.5 (54)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$399</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/4.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Scandinavian Lamp</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Elegant lighting for your modern home office.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$89</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/7.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Modern Lounge Chair</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Soft fabric, wooden legs, perfect for living rooms.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>4.5 (120)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$199</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/7.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Modern Lounge Chair</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Soft fabric, wooden legs, perfect for living rooms.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>4.5 (120)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$199</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/7.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Modern Lounge Chair</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Soft fabric, wooden legs, perfect for living rooms.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>4.5 (120)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$199</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
        <div className="d-block" style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', overflow: 'hidden', transition: 'transform 0.2s', cursor: 'pointer' }}>
          <div style={{ height: '180px', background: '#f7f7f7', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="../src/assets/furniture/7.png"
              alt="Modern Chair"
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0 0 12px 12px' }}
            />

          </div>
          <div style={{ padding: '14px 10px 10px 10px' }}>
            <h6 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>Modern Lounge Chair</h6>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '8px' }}>Soft fabric, wooden legs, perfect for living rooms.</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
              <i className="fa fa-star-half-o" style={{ color: '#ffb400', marginRight: 6 }}></i>
              <span style={{ fontSize: '0.9rem', color: '#888' }}>4.5 (120)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#e74c3c', fontSize: '1.1rem' }}>$199</span>
              <button style={{ background: '#232526', color: '#fff', border: 'none', borderRadius: '16px', padding: '4px 16px', fontSize: '0.95rem' }}>Add <i className="fa fa-cart-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    </section >

      <section className="p-3" style={{ backgroundColor: '' }}>
        <h2 className="text-light">Trending Furnitures</h2>
        <nav aria-label="Trending Furniture Filters" style={{ margin: '20px 0' }}>
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
                    background: idx === 0 ? 'var(--primary, #e53935)' : '#232323',
                    color: idx === 0 ? '#fff' : '#fff',
                    fontWeight: idx === 0 ? 'bold' : '500',
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
            <div style={{ display: 'grid', gridTemplate: 'auto auto/ repeat(6, 1fr)', width: '100%', marginTop: '20px', gap: '10px' }}>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
                    backgroundColor: 'blue',
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
                  src="../src/assets/furniture/arrival-1.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
                    backgroundColor: 'blue',
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
                  src="../src/assets/furniture/arrival-11.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
                    backgroundColor: 'blue',
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
                  src="../src/assets/furniture/arrival-12.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-13.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-8.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-10.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-10.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-10.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-10.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-10.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '300px', marginBottom: '0px', objectFit: 'cover', borderRadius: '8px', position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    paddingInline: '30px',
                    width: '48px',
                    height: '25px',
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
                  src="../src/assets/furniture/arrival-10.jpg"
                  style={{
                    width: "100%",
                    height: "55%",
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt="Home carbonated table"
                />
                <div className="text-light">
                  <p style={{ margin: 0, fontWeight: 500, fontSize: '1rem' }}>Home carbonated table...</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 2 }}></i>
                    <i className="fa fa-star" style={{ color: '#ffb400', marginRight: 6 }}></i>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>5.0 (32)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px' }}>
                    <h1 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red' }}>$43.20</h1>
                    <strike style={{ color: '#bbb', fontSize: '0.95rem' }}>$62.32</strike>
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