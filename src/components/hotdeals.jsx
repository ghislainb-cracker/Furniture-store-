import React, { useRef, useState } from "react";

const videoSources1 = [
  "../src/assets/furniture/one.mp4",
  "../src/assets/furniture/one.mp4"
  // Add more video paths as needed
];

const videoSources2 = [
  "../src/assets/furniture/fun_video.mp4",
  "../src/assets/furniture/fun_video.mp4"
  // Add more video paths as needed
];

function VideoAdCard({ sources, height = "200px" }) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % sources.length);
  };

  return (
    <div
      style={{
        width: "100%",
        height,
        marginBottom: "10px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "6px",
        opacity: 0.7
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop={false}
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0
        }}
        onEnded={handleEnded}
        key={current}
      >
        <source src={sources[current]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default function HotDeals(){
  return(
    <>
     <section>
      <div className="d-block mt-5">
        {/*
          Refactored: All hardcoded images/cards are now in an array and iterated over.
        */}
        <div style={{height: "100%", width: '100%', display: "flex", padding: '10px'}}>
          <div style={{width: "80%", display: "grid", gridTemplate: 'auto auto/ repeat(5, 1fr)', gap: 5}}>
            <div style={{gridColumn: 'span 2', marginBottom: '0px', display: 'block', paddingInline: '5px', color: '#ffffff'}}>
              <div className="w-full d-flex flex-column justify-content-center align-items-center position-relative" 
                style={{border: '1px solid white', borderRadius: '15px 15px 0 0', backgroundColor: '#000', color: '#fff', paddingBlock: '10px'}}>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 80 80"
                  fill="none"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0.3,
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                >
                  <rect x="18" y="18" width="44" height="44" rx="12" stroke="#ffffff" strokeWidth="4" />
                  <circle cx="10" cy="10" r="36" stroke="#ffffff"  strokeWidth="6" />
                </svg>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 80 80"
                  fill="none"
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '60px',
                    opacity: 0.3,
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                >
                  <rect x="18" y="18" width="44" height="44" rx="12" stroke="#ffffff" strokeWidth="4" style={{animation: 'move 6s linear infinite'}}/>
                  <circle cx="40" cy="40" r="36" stroke="#ffffff"  strokeWidth="6" style={{animation: 'zoom 5s ease-in-out infinite'}}/>
                </svg>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  style={{
                    position: 'absolute',
                    bottom: '0px',
                    right: '2px',
                    opacity: 0.2,
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}
                >
                  <polygon points="30,5 55,55 5,55" stroke="#fff" strokeWidth="4" fill="none" />
                  <circle cx="30" cy="30" r="10" stroke="#fff" strokeWidth="2" />
                </svg>
                <h3>Discover</h3>
                <h2 style={{letterSpacing: '3px'}}><span className="text-danger">HOT </span> Deals</h2>
              </div>
              {(() => {
                // Set the offer end time (e.g., 2 days from now)
                const offerEnd = new Date();
                offerEnd.setDate(offerEnd.getDate() + 2);
                offerEnd.setHours(23, 59, 59, 999);

                function pad(n) {
                  return n.toString().padStart(2, '0');
                }

                function Countdown() {
                  const [timeLeft, setTimeLeft] = React.useState(() => {
                    const now = new Date();
                    const diff = offerEnd - now;
                    return diff > 0 ? diff : 0;
                  });

                  React.useEffect(() => {
                    if (timeLeft <= 0) return;
                    const interval = setInterval(() => {
                      setTimeLeft(prev => {
                        const next = prev - 1000;
                        return next > 0 ? next : 0;
                      });
                    }, 1000);
                    return () => clearInterval(interval);
                  }, [timeLeft]);

                  // Calculate days, hours, minutes, seconds
                  const totalSeconds = Math.floor(timeLeft / 1000);
                  const days = Math.floor(totalSeconds / (3600 * 24));
                  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
                  const minutes = Math.floor((totalSeconds % 3600) / 60);
                  const seconds = totalSeconds % 60;

                  return (
                    <div
                      className='text-center p-3 mb-4 rounded-4 mt-2'
                      style={{
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                        zIndex: 1,
                        border: '1px solid linear-gradient(270deg, #456738, #8a8493, #958694)'
                      }}
                    >
                      {/* Decorative vector icons in the background */}
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        style={{
                          position: 'absolute',
                          top: '-18px',
                          left: '-18px',
                          opacity: 0.13,
                          zIndex: 0,
                          pointerEvents: 'none'
                        }}
                      >
                        <circle cx="40" cy="40" r="36" stroke="#ffffff" strokeWidth="6" />
                        <rect x="18" y="18" width="44" height="44" rx="12" stroke="#ffffff" strokeWidth="4" />
                      </svg>
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        style={{
                          position: 'absolute',
                          bottom: '-12px',
                          right: '-12px',
                          opacity: 0.12,
                          zIndex: 0,
                          pointerEvents: 'none'
                        }}
                      >
                        <polygon points="30,5 55,55 5,55" stroke="#fff" strokeWidth="4" fill="none" />
                        <circle cx="30" cy="30" r="10" stroke="#fff" strokeWidth="2" />
                      </svg>
                      <h5 className='text-white mb-2' style={{position: 'relative', zIndex: 1, letterSpacing: 1}}>Limited Time Offer</h5>
                      <div
                        className="d-flex justify-content-center align-items-center gap-2 text-light rounded-pill p-2"
                        style={{position: 'relative', zIndex: 1, border: '1px solid rgba(209, 209, 209, 0.35)', boxShadow: '0 2px 20px rgba(255, 255, 255, 0.5)'}}
                      >
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow"
                          style={{
                            width: '40px',
                            height: '40px',
                            fontSize: '1.2rem',
                            background: 'rgba(0, 0, 0, 0.92)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                          }}
                        >
                          {pad(days)}
                        </div>
                        <span className="text-white h3 mx-2" style={{fontWeight: 700, fontSize: '2rem'}}>:</span>
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow"
                          style={{
                            width: '40px',
                            height: '40px',
                            fontSize: '1.2rem',
                            background: 'rgba(0, 0, 0, 0.92)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                          }}
                        >
                          {pad(hours)}
                        </div>
                        <span className="text-white h3 mx-2" style={{fontWeight: 700, fontSize: '2rem'}}>:</span>
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow"
                          style={{
                            width: '40px',
                            height: '40px',
                            fontSize: '1.2rem',
                            background: 'rgba(0, 0, 0, 0.92)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                          }}
                        >
                          {pad(minutes)}
                        </div>
                        <span className="text-white h3 mx-2" style={{fontWeight: 700, fontSize: '2rem'}}>:</span>
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow"
                          style={{
                            width: '40px',
                            height: '40px',
                            fontSize: '1.2rem',
                            background: 'rgba(0, 0, 0, 0.92)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
                          }}
                        >
                          {pad(seconds)}
                        </div>
                      </div>
                    </div>
                  );
                }

                return <Countdown />;
              })()}
            </div>
            {/* Array of hot deal cards */}
            {[
              {
                tag: "20%",
                tagStyle: { backgroundColor: "#e53935", paddingInline: "30px", width: "48px" },
                tagClass: "h6 text-light",
                img: "../src/assets/furniture/arrival-9.jpg",
                imgHeight: "55%",
                alt: "Home carbonated table",
                title: "Home carbonated table...",
                rating: 5,
                ratingText: "5.0 (32)",
                price: "$43.20",
                oldPrice: "$62.32"
              },
              {
                tag: "Free Shipping",
                tagStyle: { backgroundColor: "blue", paddingInline: "0px", width: "98px", fontSize: "12px" },
                tagClass: "text-light",
                img: "../src/assets/furniture/arrival-10.jpg",
                imgHeight: "55%",
                alt: "Home carbonated table",
                title: "Bamboo stylish X-chair..",
                rating: 4,
                ratingText: "4.0 (32)",
                price: "$274.20"
              },
              {
                tag: "20%",
                tagStyle: { backgroundColor: "#e53935", paddingInline: "0px", width: "48px" },
                tagClass: "h6 text-light",
                img: "../src/assets/furniture/arrival-11.jpg",
                imgHeight: "60%",
                alt: "Home carbonated table",
                title: "Decorated bend table...",
                rating: 4,
                ratingText: "4.0 (72)",
                price: "$499.20",
                oldPrice: "$562.00"
              },
              {
                tag: "20%",
                tagStyle: { backgroundColor: "#e53935", paddingInline: "30px", width: "48px" },
                tagClass: "h6 text-light",
                img: "../src/assets/furniture/arrival-12.jpg",
                imgHeight: "55%",
                alt: "Home carbonated table",
                title: "Furistic caple bed...",
                rating: 5,
                ratingText: "5.0 (32)",
                price: "$776.99",
                oldPrice: "$835.32"
              },
              {
                tag: "Free Shipping",
                tagStyle: { backgroundColor: "blue", paddingInline: "0px", width: "98px", fontSize: "12px" },
                tagClass: "text-light",
                img: "../src/assets/furniture/arrival-13.jpg",
                imgHeight: "55%",
                alt: "Home carbonated table",
                title: "Wireless charging sofa...",
                rating: 3,
                ratingText: "3.0 (340)",
                price: "$357.19"
              },
              {
                tag: "20%",
                tagStyle: { backgroundColor: "#e53935", paddingInline: "30px", width: "48px" },
                tagClass: "h6 text-light",
                img: "../src/assets/furniture/arrival-8.jpg",
                imgHeight: "55%",
                alt: "Home carbonated table",
                title: "Home carbonated table...",
                rating: 5,
                ratingText: "5.0 (32)",
                price: "$43.20",
                oldPrice: "$62.32"
              },
              {
                tag: "Free Shipping",
                tagStyle: { backgroundColor: "blue", paddingInline: "0px", width: "98px", fontSize: "12px" },
                tagClass: "text-light",
                img: "../src/assets/furniture/arrival-7.jpg",
                imgHeight: "55%",
                alt: "Home carbonated table",
                title: "Home carbonated table...",
                rating: 5,
                ratingText: "5.0 (32)",
                price: "$43.20",
                oldPrice: "$62.32"
              },
              {
                tag: "20%",
                tagStyle: { backgroundColor: "#e53935", paddingInline: "30px", width: "48px" },
                tagClass: "h6 text-light",
                img: "../src/assets/furniture/head-1.jpg",
                imgHeight: "55%",
                alt: "Home carbonated table",
                title: "Home carbonated table...",
                rating: 5,
                ratingText: "5.0 (32)",
                price: "$43.20",
                oldPrice: "$62.32"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  width: '200px',
                  height: item.imgHeight === "60%" ? '270px' : '300px',
                  marginBottom: '0px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    borderRadius: '0 8px 0 8px',
                    height: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 2,
                    fontWeight: 700,
                    fontSize: '1rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    ...item.tagStyle
                  }}
                  className={item.tagClass}
                >
                  {item.tag}
                </div>
                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    height: item.imgHeight,
                    objectFit: 'cover',
                    borderRadius: '6px 6px 6px 6px',
                  }}
                  alt={item.alt}
                />
                <div className="text-light">
                  <p style={{margin: 0, fontWeight: 500, fontSize: '1rem'}}>{item.title}</p>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="fa fa-star" style={{color: '#ffb400', marginRight: 2}}></i>
                    ))}
                    {item.rating < 5 && item.ratingText.includes('.') && (
                      <i className="fa fa-star-half-o" style={{color: '#ffb400', marginRight: 6}}></i>
                    )}
                    <span style={{fontSize: '0.9rem', color: '#888', marginLeft: 4}}>{item.ratingText}</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1px'}}>
                    <h1 style={{margin: 0, color: '#fff', fontWeight: 700, fontSize: '1.3rem', color: 'red'}}>{item.price}</h1>
                    {item.oldPrice && (
                      <strike style={{color: '#bbb', fontSize: '0.95rem'}}>{item.oldPrice}</strike>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{width: "20%", height: '100%', paddingLeft: '20px'}}>
            <VideoAdCard sources={videoSources1} height="220px" />
            <VideoAdCard sources={videoSources2} height="300px" />
          </div>
        </div>
        <div style={{height: "100%", width: '100%', display: "flex", padding: '10px', margin: '0px 0 0 0'}}>
          {/* 
            To use flex instead of grid and maintain the design:
            - Use a flex container with flexWrap: 'wrap' to allow items to wrap to the next line.
            - For the section title, use a full-width flex-basis: '100%' or width: '100%' so it spans all columns.
            - For the image cards, set a fixed width (e.g., 170px) and margin for spacing.
            - Use gap or margin for spacing between items.
          */}
          <div style={{
            width: "70%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: "10px 0"
          }}>
            <div
              className="h3 d-flex justify-content-center align-items-center rounded-4 shadow-sm  text-light"
              style={{
                width: "100%",
                color: '#1a2236',
                fontWeight: 700,
                letterSpacing: '0.03em',
                fontSize: '1.7rem',
                padding: '15px 0'
              }}
            >
              Swimming pool &amp; Garden
            </div>
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
              {
                src: "../src/assets/furniture/head-4.jpg",
                name: "Upholstered Bed",
                price: 199.99,
                oldPrice: 249.99,
                rating: 5,
                desc: "Luxurious comfort, premium fabric.",
                tag: "Best Seller"
              },
              {
                src: "../src/assets/furniture/head-5.jpg",
                name: "Rustic Headboard",
                price: 109.99,
                oldPrice: 139.99,
                rating: 4,
                desc: "Distressed wood, farmhouse style.",
                tag: "20% OFF"
              },
              {
                src: "../src/assets/furniture/head-7.jpg",
                name: "Kids Bed Frame",
                price: 69.99,
                oldPrice: 89.99,
                rating: 4,
                desc: "Fun, safe, and sturdy for children.",
                tag: "Limited"
              },
              {
                src: "../src/assets/furniture/arrival-6.jpg",
                name: "Velvet Headboard",
                price: 149.99,
                oldPrice: 189.99,
                rating: 5,
                desc: "Soft velvet, luxury feel.",
                tag: "New"
              },
              {
                src: "../src/assets/furniture/arrival-5.jpg",
                name: "Panel Bed",
                price: 119.99,
                oldPrice: 149.99,
                rating: 3,
                desc: "Classic panel design, easy assembly.",
                tag: "Deal"
              }
            ];

            const scrollRef = React.useRef(null);
            const [canScrollLeft, setCanScrollLeft] = React.useState(false);
            const [canScrollRight, setCanScrollRight] = React.useState(true);
            const [hoveredIdx, setHoveredIdx] = React.useState(null);

            // Update scroll button states
            const updateScrollButtons = () => {
              const el = scrollRef.current;
              if (!el) return;
              setCanScrollLeft(el.scrollLeft > 0);
              setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
            };

            React.useEffect(() => {
              updateScrollButtons();
              const el = scrollRef.current;
              if (!el) return;
              el.addEventListener('scroll', updateScrollButtons);
              window.addEventListener('resize', updateScrollButtons);
              return () => {
                el.removeEventListener('scroll', updateScrollButtons);
                window.removeEventListener('resize', updateScrollButtons);
              };
            }, []);

            const scrollByAmount = 200; // px

            const handleScroll = (dir) => {
              const el = scrollRef.current;
              if (!el) return;
              el.scrollBy({
                left: dir * scrollByAmount,
                behavior: 'smooth'
              });
            };

            // Helper for stars
            const renderStars = (rating) => (
              <div style={{display: 'flex', gap: '2px'}}>
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa fa-star${i < rating ? '' : '-o'}`}
                    style={{color: i < rating ? '#ffd700' : '#bbb', fontSize: '1rem'}}
                    aria-hidden="true"
                  ></i>
                ))}
              </div>
            );

            return (
              <div style={{ position: 'relative', width: '100%', minHeight: 130 }}>
                {/* Left chevron */}
                <button
                  onClick={() => handleScroll(-1)}
                  disabled={!canScrollLeft}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.92)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: canScrollLeft ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    cursor: canScrollLeft ? 'pointer' : 'default',
                    zIndex: 2
                  }}
                  aria-label="Scroll left"
                  tabIndex={canScrollLeft ? 0 : -1}
                >
                  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {/* Image scroller */}
                <div
                  ref={scrollRef}
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
                        marginBottom: '10px',
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
                {/* Right chevron */}
                <button
                  onClick={() => handleScroll(1)}
                  disabled={!canScrollRight}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.92)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: canScrollRight ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    cursor: canScrollRight ? 'pointer' : 'default',
                    zIndex: 2
                  }}
                  aria-label="Scroll right"
                  tabIndex={canScrollRight ? 0 : -1}
                >
                  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {/* Hide scrollbar with CSS */}
                <style>
                  {`
                    .hide-scrollbar {
                      scrollbar-width: none;
                    }
                    .hide-scrollbar::-webkit-scrollbar {
                      display: none;
                    }
                    .hotdeal-product-card {
                      transition: box-shadow 0.3s, transform 0.3s;
                    }
                  `}
                </style>
              </div>
            );
          })()}
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
              {
                src: "../src/assets/furniture/head-4.jpg",
                name: "Upholstered Bed",
                price: 199.99,
                oldPrice: 249.99,
                rating: 5,
                desc: "Luxurious comfort, premium fabric.",
                tag: "Best Seller"
              },
              {
                src: "../src/assets/furniture/head-5.jpg",
                name: "Rustic Headboard",
                price: 109.99,
                oldPrice: 139.99,
                rating: 4,
                desc: "Distressed wood, farmhouse style.",
                tag: "20% OFF"
              },
              {
                src: "../src/assets/furniture/head-7.jpg",
                name: "Kids Bed Frame",
                price: 69.99,
                oldPrice: 89.99,
                rating: 4,
                desc: "Fun, safe, and sturdy for children.",
                tag: "Limited"
              },
              {
                src: "../src/assets/furniture/arrival-6.jpg",
                name: "Velvet Headboard",
                price: 149.99,
                oldPrice: 189.99,
                rating: 5,
                desc: "Soft velvet, luxury feel.",
                tag: "New"
              },
              {
                src: "../src/assets/furniture/arrival-5.jpg",
                name: "Panel Bed",
                price: 119.99,
                oldPrice: 149.99,
                rating: 3,
                desc: "Classic panel design, easy assembly.",
                tag: "Deal"
              }
            ];

            const scrollRef = React.useRef(null);
            const [canScrollLeft, setCanScrollLeft] = React.useState(false);
            const [canScrollRight, setCanScrollRight] = React.useState(true);
            const [hoveredIdx, setHoveredIdx] = React.useState(null);

            // Update scroll button states
            const updateScrollButtons = () => {
              const el = scrollRef.current;
              if (!el) return;
              setCanScrollLeft(el.scrollLeft > 0);
              setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
            };

            React.useEffect(() => {
              updateScrollButtons();
              const el = scrollRef.current;
              if (!el) return;
              el.addEventListener('scroll', updateScrollButtons);
              window.addEventListener('resize', updateScrollButtons);
              return () => {
                el.removeEventListener('scroll', updateScrollButtons);
                window.removeEventListener('resize', updateScrollButtons);
              };
            }, []);

            const scrollByAmount = 200; // px

            const handleScroll = (dir) => {
              const el = scrollRef.current;
              if (!el) return;
              el.scrollBy({
                left: dir * scrollByAmount,
                behavior: 'smooth'
              });
            };

            // Helper for stars
            const renderStars = (rating) => (
              <div style={{display: 'flex', gap: '2px'}}>
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa fa-star${i < rating ? '' : '-o'}`}
                    style={{color: i < rating ? '#ffd700' : '#bbb', fontSize: '1rem'}}
                    aria-hidden="true"
                  ></i>
                ))}
              </div>
            );

            return (
              <div style={{ position: 'relative', width: '100%', minHeight: 130 }}>
                {/* Left chevron */}
                <button
                  onClick={() => handleScroll(-1)}
                  disabled={!canScrollLeft}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.92)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: canScrollLeft ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    cursor: canScrollLeft ? 'pointer' : 'default',
                    zIndex: 2
                  }}
                  aria-label="Scroll left"
                  tabIndex={canScrollLeft ? 0 : -1}
                >
                  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {/* Image scroller */}
                <div
                  ref={scrollRef}
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
                        marginBottom: '10px',
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
                {/* Right chevron */}
                <button
                  onClick={() => handleScroll(1)}
                  disabled={!canScrollRight}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.92)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: canScrollRight ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    cursor: canScrollRight ? 'pointer' : 'default',
                    zIndex: 2
                  }}
                  aria-label="Scroll right"
                  tabIndex={canScrollRight ? 0 : -1}
                >
                  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            );
          })()}
          </div>
          <div style={{width: "30%", height: '100%', paddingLeft: '10px'}}>
          {/* Dynamic Furniture Image Carousel */}
          {/* FurnitureCarousel is not defined, so let's implement a simple version here */}
          <div style={{width: "100%", height: '50%', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', position: 'relative', overflow: 'hidden', borderRadius: '10px', opacity: 0.5}}>
            {/* Simple Furniture Carousel Implementation */}
            {(() => {
              // Use import instead of require, and reference images as relative URLs for the browser
              const images = [
                "/src/assets/furniture/head-2.jpg",
                "/src/assets/furniture/head-3.jpg",
                "/src/assets/furniture/head-4.jpg",
                "/src/assets/furniture/head-1.jpg",
                "/src/assets/furniture/head-6.jpg",
                "/src/assets/furniture/head-7.jpg",
              ];
              const [index, setIndex] = React.useState(0);

              React.useEffect(() => {
                const interval = setInterval(() => {
                  setIndex((prev) => (prev + 1) % images.length);
                }, 2000);
                return () => clearInterval(interval);
              }, [images.length]);

              return (
                <div style={{width: '100%', height: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                  <img
                    src={images[index]}
                    alt="Furniture"
                    style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s', borderRadius: '10px'}}
                  />
                  <div style={{position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 4}}>
                    {images.map((_, i) => (
                      <span
                        key={i}
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: i === index ? 'pink' : '#ddd',
                          display: 'inline-block'
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}