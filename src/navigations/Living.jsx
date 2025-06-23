import React from "react";
import Header from '../components/header';
import Bamboo from "../components/bamboo";
import Card from "../components/card";
export default function Living(){
    
    return(
        <>
         {/* Header */}
         <Header/>
          
           <section  style={{ minHeight: '90vh' }} className="text-light p-5 text-center text-sm-start  position-relative overflow-hidden" id="first-section">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                style={{zIndex: 0, objectFit: 'cover', filter: 'brightness(60%)'}}
            >
                <source src="../src/assets/furniture/living-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Dark Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{background: 'rgba(0,0,0,0.5)', zIndex: 1}}
            ></div>
            {/* Content */}
            <div className="container position-relative hero-content" style={{zIndex: 2}}>
                <div className="row m-0 p-0">
                    <div className="col-lg-8">
                        <h1 className="fs-4xl">Upgrade Your Living Space</h1>
                        <p className="fs-lg dark8">Transform your home with our curated collection of modern furniture. From sleek sofas to elegant coffee tables, discover pieces that blend comfort with contemporary style.</p>
                        
                        <div className="hero-stats">
                            
                        </div>

                        <div className="hero-buttons">
                            <button className="hero-btn btn btn-lg btn-dark">
                                Shop All Living Room
                                <i className="fa fa-chevron-right ms-2"></i>
                            </button>
                            <button className="hero-btn btn btn-lg btn-outline-light">
                                <i className="fa fa-clock me-2"></i>
                                Room Inspirations
                            </button>
                        </div>

                        <div className="mt-5 d-flex align-items-center gap-4">
                            <div className="d-flex align-items-center">
                                <div className="position-relative">
                                    <img 
                                        src="../src/assets/furniture/customer-img.png" 
                                        alt="Customer" 
                                        className="rounded-circle"
                                        style={{width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-15px'}}
                                    />
                                    <img 
                                        src="../src/assets/furniture/customer-img.png" 
                                        alt="Customer" 
                                        className="rounded-circle"
                                        style={{width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-15px'}}
                                    />
                                    <img 
                                        src="../src/assets/furniture/customer-img.png" 
                                        alt="Customer" 
                                        className="rounded-circle"
                                        style={{width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-15px'}}
                                    />
                                </div>
                                <div className="ms-3">
                                    <div className="text-white">Trusted by 10k+ Customers</div>
                                    <div className="text-white-50">
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <i className="fas fa-star text-warning"></i>
                                        <span className="ms-2">4.9/5 Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </section> 
         {/* Sub-category */}
         <section className="mt-5">
            <div className=" m-3 p-3 rounded-5 flex justify-content-between" id ="sub-category2">
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-couch text-light fs-3xl"></i>
                    <h5 className="mt-3">Sofas</h5>
                </div>
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-table text-secondary fs-3xl"></i>
                    <h5 className="mt-3">Table</h5>
                </div>
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-tv text-secondary fs-3xl"></i>
                    <h5 className="mt-3">TV Units</h5>
                </div>
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-book text-secondary fs-3xl"></i>
                    <h5 className="mt-3">Books</h5>
                </div>
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-chair text-secondary fs-3xl"></i>
                    <h5 className="mt-3">Chairs</h5>
                </div>
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-rug text-secondary fs-3xl"></i>
                    <h5 className="mt-3">Rugs</h5>
                </div>
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-car text-secondary fs-3xl"></i>
                    <h5 className="mt-3">Ligh</h5>
                </div>
                <div className="text-center rounded-circle border px-5 py-4 text-light">
                    <i className="fa fa-car text-secondary fs-3xl"></i>
                    <h5 className="mt-3">Ligh</h5>
                </div>
                
            </div>
         </section>
         
        {/* Featured Products */}
                 <section className="flex justify-content-center">
                    <div className="a-third h-4">
                        <h4 className="text-light mb-4">Shop Top Categories</h4>
                        <div id="all-categories">
                            <div className="container card dark8 text-light mb-4 ">
                                <div className="flex m-0 p-0 gap-4">
                                <img 
                                src="../src/assets/furniture/cat-chair.png" 
                                alt="" 
                                className="img-fluid align-self-center"
                                style={{width: '60px', height: '50px', objectFit: 'cover'}}
                                />
                                <div>
                                <h5>Sofas</h5>  
                                <p className="white2">discover luxiariou sofas</p>
                                </div>
                                </div>
                            </div>
                            <div className="container card dark8 text-light mb-4 ">
                                <div className="flex m-0 p-0 gap-4">
                                <img 
                                src="../src/assets/furniture/cat-desk.png" 
                                alt="" 
                                className="img-fluid align-self-center"
                                style={{width: '60px', height: '50px', objectFit: 'cover'}}
                                />
                                <div>
                                <h5>Sofas</h5>  
                                <p className="white2">discover luxiariou sofas</p>
                                </div>
                                </div>
                            </div>
                            <div className="container card dark8 text-light mb-4 ">
                                <div className="flex m-0 p-0 gap-4">
                                <img 
                                src="../src/assets/furniture/cat-bed.png" 
                                alt="" 
                                className="img-fluid align-self-center"
                                style={{width: '60px', height: '50px', objectFit: 'cover'}}
                                />
                                <div>
                                <h5>Sofas</h5>  
                                <p className="white2">discover luxiariou sofas</p>
                                </div>
                                </div>
                            </div>
                            <div className="container card dark8 text-light mb-4 ">
                                <div className="flex m-0 p-0 gap-4">
                                <img 
                                src="../src/assets/furniture/cat-table.png" 
                                alt="" 
                                className="img-fluid align-self-center"
                                style={{width: '60px', height: '50px', objectFit: 'cover'}}
                                />
                                <div>
                                <h5>Sofas</h5>  
                                <p className="white2">discover luxiariou sofas</p>
                                </div>
                                </div>
                            </div>
                            <div className="container card dark8 text-light mb-4 ">
                                <div className="flex m-0 p-0 gap-4">
                                <img 
                                src="../src/assets/furniture/cat-desk.png" 
                                alt="" 
                                className="img-fluid align-self-center"
                                style={{width: '60px', height: '50px', objectFit: 'cover'}}
                                />
                                <div>
                                <h5>Sofas</h5>  
                                <p className="white2">discover luxiarious sofas</p>
                                </div>
                                </div>
                            </div>
                            <div className="card dark8">
                                <div className="flex justify-content-around">
                                    <p>Before</p>
                                    <p>After</p>
                                </div>
                                <div className="lightblue2 flex justify-content-between align-items-center position-relative" style={{opacity: 0.5}}>
                                    <img src="../src/assets/furniture/arrival-7.jpg" alt="" style={{width: '157px'}} />
                                    {/* Center the icon using flex utilities and absolute positioning */}
                                    <div 
                                        className="bg-danger rounded-circle d-flex justify-content-center align-items-center position-absolute"
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 2
                                        }}
                                    >
                                        <i className="fa fa-chevron-right text-light"></i>
                                    </div>
                                    <img src="../src/assets/furniture/arrival-7.jpg" alt="" style={{width: '157px'}}/>
                                </div>
                            </div>
                    </div>
                     <div className="bg-secondary w-full h-full mt-5">
                        <div>
                            <img src="../src/assets/furniture/arrival-7.jpg" alt="" className="d-flex w-full" style={{width: "100%", height: "100%", objectFit: 'cover'}}/>
                            <img src="../src/assets/furniture/arrival-1.png" alt="" className="d-none" style={{width: "100%", height: "100%", objectFit: 'cover'}}/>
                            <img src="../src/assets/furniture/arrival-1.png" alt="" className="d-none" style={{width: "100%", height: "100%", objectFit: 'cover'}}/>
                        </div>
                    </div>
                    </div>
                    <div className="a-seventh h-4">
                        <div className="container ms-5">
                        <h4 className="text-light mb-5">Featured Living Room Collections</h4>
                        <div className="griddng3 gap-3">
                            <div className="text-light">
                                <img 
                                src="../src/assets/furniture/arrival-7.jpg" 
                                alt=""
                                className='img-fluid mb-2'
                                style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                                />
                                <h5>Luxury Sofa Sets</h5>
                                <div className="flex gap-3">
                                <p>The best curved wood furniture for best home decor</p>
                                {/* <p 
                                className="bg-secondary rounded-3 h-2 flex align-items-center justify-content-center"
                                style={{width: '70px', height: '30px'}}
                                >38% off</p> */}
                        </div>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-8.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Compact Spaces</h5>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-9.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                </div>
                </div>
                <button className="btn w-full border-light ms-5 container text-light mb-5 btn-hover">Shop All Bundle</button>
                <div className="text-light ms-5 container">
                <h3 className="mb-5">Trending Living Room Products</h3>
                <div className="griddng3 gap-3">
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-7.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Luxury Sofa Sets</h5>
                        <div className="flex gap-3">
                        <p>The best curved wood furniture for best home decor</p>
                        {/* <p 
                        className="bg-secondary rounded-3 h-2 flex align-items-center justify-content-center"
                        style={{width: '70px', height: '30px'}}
                        >38% off</p> */}
                        </div>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-8.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Compact Spaces</h5>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-9.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-9.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-10.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-11.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-12.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    <div className="text-light">
                        <img 
                        src="../src/assets/furniture/arrival-13.jpg" 
                        alt=""
                        className='img-fluid mb-2'
                        style={{width: '270px',height: '160px',borderRadius: '15px', objectFit: 'cover'}} 
                        />
                        <h5>Eco-friendly furniture</h5>
                        <p>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </p>
                        <p>The best curved wood furniture for best home decor</p>
                        <p className="fw-bold">from: <strike>$113</strike>/ To: $895</p>
                    </div>
                    
                </div>
            </div>
            </div>
         </section>
         {/* Bamboo fun section */}
         < Bamboo />                      
            

        </>
        
    )
}