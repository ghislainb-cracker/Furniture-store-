import React from "react";

export default function CustomerReview(){
    return(
        <section style={{overflow: 'hidden', position: 'relative', padding: '40px 0', background: 'transparent'}}>
            <h1 className="text-light mb-4 text-center">What our customers say</h1>
            <div 
                className="customer-testimonials-slider"
                style={{
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '10px 0'
                }}
            >
                <div
                    className="testimonials-track"
                    style={{
                        display: 'flex',
                        gap: '30px',
                        animation: 'scrollTestimonials 30s linear infinite',
                        willChange: 'transform'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.animationPlayState = 'running';
                    }}
                >
                    {[
                        {
                            name: "Uwizeyimana M.",
                            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                            text: "Absolutely love my new sofa! The quality is top-notch and delivery was super fast. Will definitely shop here again.",
                            rating: 5
                        },
                        {
                            name: "Kamanzi J.",
                            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                            text: "Great customer service and the dining table fits perfectly in my apartment. Highly recommend Fun Furniture!",
                            rating: 4
                        },
                        {
                            name: "Uwase L.",
                            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                            text: "The bed I ordered is so comfy and stylish. The whole process was smooth and easy.",
                            rating: 5
                        },
                        {
                            name: "Mucyo B.",
                            avatar: "https://randomuser.me/api/portraits/men/76.jpg",
                            text: "I was impressed by the variety and the prices. My new bookshelf looks amazing in my study.",
                            rating: 4
                        },
                        {
                            name: "Kananura G.",
                            avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                            text: "Fast shipping and the product matches the description perfectly. Thank you!",
                            rating: 5
                        },
                        {
                            name: "Manzi R.",
                            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
                            text: "The chair is sturdy and comfortable. I appreciate the eco-friendly packaging too.",
                            rating: 4
                        }
                    ].map((review, idx) => (
                        <div
                            key={idx}
                            className="testimonial-card"
                            style={{
                                minWidth: '320px',
                                maxWidth: '340px',
                                background: '#232323',
                                color: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                                padding: '28px 24px 20px 24px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(161,196,253,0.25)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
                            }}
                        >
                            <img
                                src={review.avatar}
                                alt={review.name}
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: '16px',
                                    border: '3px solid #a1c4fd'
                                }}
                            />
                            <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px'}}>{review.name}</div>
                            <div style={{marginBottom: '12px', color: '#c2e9fb', fontSize: '0.95rem', textAlign: 'center', minHeight: '60px'}}>"{review.text}"</div>
                            <div style={{display: 'flex', gap: '2px', marginBottom: '0'}}>
                                {[...Array(5)].map((_, i) => (
                                    <i
                                        key={i}
                                        className={`fa fa-star${i < review.rating ? '' : '-o'}`}
                                        style={{color: i < review.rating ? '#ffd700' : '#888', fontSize: '1.1rem'}}
                                        aria-hidden="true"
                                    ></i>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {[
                        {
                            name: "Sarah M.",
                            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                            text: "Absolutely love my new sofa! The quality is top-notch and delivery was super fast. Will definitely shop here again.",
                            rating: 5
                        },
                        {
                            name: "James K.",
                            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                            text: "Great customer service and the dining table fits perfectly in my apartment. Highly recommend Fun Furniture!",
                            rating: 4
                        },
                        {
                            name: "Linda W.",
                            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                            text: "The bed I ordered is so comfy and stylish. The whole process was smooth and easy.",
                            rating: 5
                        },
                        {
                            name: "Michael B.",
                            avatar: "https://randomuser.me/api/portraits/men/76.jpg",
                            text: "I was impressed by the variety and the prices. My new bookshelf looks amazing in my study.",
                            rating: 4
                        },
                        {
                            name: "Aisha T.",
                            avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                            text: "Fast shipping and the product matches the description perfectly. Thank you!",
                            rating: 5
                        },
                        {
                            name: "Carlos R.",
                            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
                            text: "The chair is sturdy and comfortable. I appreciate the eco-friendly packaging too.",
                            rating: 4
                        }
                    ].map((review, idx) => (
                        <div
                            key={'dup-' + idx}
                            className="testimonial-card"
                            style={{
                                minWidth: '320px',
                                maxWidth: '340px',
                                background: '#232323',
                                color: '#fff',
                                borderRadius: '16px',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                                padding: '28px 24px 20px 24px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(161,196,253,0.25)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
                            }}
                        >
                            <img
                                src={review.avatar}
                                alt={review.name}
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: '16px',
                                    border: '3px solid #a1c4fd'
                                }}
                            />
                            <div style={{fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px'}}>{review.name}</div>
                            <div style={{marginBottom: '12px', color: '#c2e9fb', fontSize: '0.95rem', textAlign: 'center', minHeight: '60px'}}>"{review.text}"</div>
                            <div style={{display: 'flex', gap: '2px', marginBottom: '0'}}>
                                {[...Array(5)].map((_, i) => (
                                    <i
                                        key={i}
                                        className={`fa fa-star${i < review.rating ? '' : '-o'}`}
                                        style={{color: i < review.rating ? '#ffd700' : '#888', fontSize: '1.1rem'}}
                                        aria-hidden="true"
                                    ></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}