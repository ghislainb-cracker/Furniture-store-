import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import newArrivals from '../arrays/newArrivals';
import BlogsArray from '../arrays/blogsArray';
import Header from '../components/header';
import CategoriesSection from '../components/categories';
import Categories from '../arrays/categories';
import Star from '../components/star';

export default function Home(props) {
  const[likedItems, setLikedItems] = useState({});
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  function handleClick(id) {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="position-relative" style={{ minHeight: '100vh' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{zIndex: -1, objectFit: 'cover', filter: 'brightness(60%)'}}
        >
          <source src="../src/assets/furniture/fun_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Header */}        
        <Header/>
        
        {/* Hero Content */}
        <section className="text-light p-5 text-center text-sm-start" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className='display-4 mb-4'>Discover top quality furniture for your home decor need</h1>
                <p className='fs-5 mb-4' style={{color: '#e0e0e0'}}>Browse by category or explore our latest collections</p>
                
                <div className='row g-3'>
                  <div className='col-md-8'>
                    <div className='input-group'>
                      <input 
                        type="text" 
                        className='form-control py-3'
                        placeholder='Search for furniture...🙋‍♀️🙋‍♂️🙋'
                        style={{
                          backgroundColor: 'rgba(66, 66, 66, 0.9)', 
                          border: 'none', 
                          color: 'white',
                          borderRadius: '20px'
                        }}
                      />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <button type='button' className='btn btn-primary btn-lg w-100 py-3 rounded-pill'>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Categories Section */}
      <CategoriesSection id={Categories.id} category={Categories}/>
      
      {/* Featured Products Section */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="row g-4">
            {/* Sidebar */}
            <div className='col-lg-4'>
              {/* Featured Products Header */}
              <div 
                className='d-flex align-items-center justify-content-center text-white rounded-pill mb-4 p-3'
                style={{backgroundColor: '#424242'}}
              >
                <i className="fas fa-couch fs-4 me-3"></i>
                <h4 className='mb-0'>Featured Products</h4>
              </div>
              
              {/* Sofa Sets Card */}
              <div className='text-center p-4 mb-4 rounded-4' style={{backgroundColor: '#424242'}}>
                <div className='position-relative mb-3'>
                  <div 
                    className='position-absolute top-0 end-0 rounded-circle d-flex flex-column align-items-center justify-content-center text-white'
                    style={{
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: '#dc3545',
                      transform: 'translate(25%, -25%)',
                      fontSize: '0.8rem'
                    }}
                  >
                    <span className='fw-bold'>20%</span>
                    <span className='fw-bold'>OFF</span>
                  </div>
                  <img 
                    src="../src/assets/furniture/sofa-sets.jpg" 
                    alt="Sofa sets" 
                    className='img-fluid rounded-3 mb-3'
                    style={{width: '150px', height: '100px', objectFit: 'cover'}} 
                  />
                </div>
                <h5 className='text-white mb-2'>Sofa sets</h5>
                <p className='text-light mb-4'>By Design Haven</p>
                <button 
                  type='button' 
                  className='btn btn-danger rounded-pill px-4 py-2'>
                  Shop now
                </button>
              </div>

              {/* New Arrivals Card */}
              <div className='text-center p-4 mb-4 rounded-4' style={{backgroundColor: '#424242'}}>
                <div className='position-relative mb-3'>
                  <div 
                    className='position-absolute top-0 end-0 rounded-circle d-flex flex-column align-items-center justify-content-center text-white'
                    style={{
                      width: '70px', 
                      height: '70px', 
                      backgroundColor: '#dc3545',
                      transform: 'translate(25%, -25%)',
                      fontSize: '0.8rem'
                    }}
                  >
                    <span className='fw-bold'>20%</span>
                    <span className='fw-bold'>OFF</span>
                  </div>
                  <img 
                    src="../src/assets/furniture/new-arrivals.jpg" 
                    alt="New arrivals" 
                    className='img-fluid rounded-3 mb-3'
                    style={{width: '150px', height: '100px', objectFit: 'cover'}} 
                  />
                </div>
                <h5 className='text-white mb-2'>New Arrivals</h5>
                <p className='text-light mb-4'>Discover our latest</p>
                <button 
                  type='button' 
                  className='btn btn-danger rounded-pill px-4 py-2'>
                  View now
                </button>
              </div>

              {/* Limited Time Offer */}
              <div className='text-center p-4 mb-4 rounded-4' style={{backgroundColor: '#424242'}}>
                <h5 className='text-white mb-2'>Limited Time Offer</h5>
                <p className='text-light mb-4'>Ends soon</p>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                       style={{width: '40px', height: '40px'}}>1</div>
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                       style={{width: '40px', height: '40px'}}>0</div>
                  <span className="text-white h3 mx-2">:</span>
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                       style={{width: '40px', height: '40px'}}>5</div>
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                       style={{width: '40px', height: '40px'}}>7</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='col-lg-8'>
              {/* New Arrivals Header */}
              <div 
                className='d-flex justify-content-between align-items-center rounded-pill p-3 mb-4'
                style={{backgroundColor: '#424242'}}
              >
                <div className='d-flex align-items-center text-white'>
                  <i className="fas fa-couch fs-4 me-3"></i>
                  <h4 className='mb-0'>New Arrivals</h4>
                </div>
                <div className='d-flex gap-3 text-white'>
                  <i className="fas fa-chevron-left fs-4" style={{cursor: 'pointer'}}></i>
                  <i className="fas fa-chevron-right fs-4" style={{cursor: 'pointer'}}></i>
                </div>
              </div>
              
              {/* New Arrivals Grid */}
              <div className='row g-3 mb-5'>
                {newArrivals.map(item => (
                  <div className='col-md-6 col-lg-4' key={item.id}>
                    <div className='rounded-4 overflow-hidden' style={{backgroundColor: '#424242'}}>
                      <img 
                        src={item.image} 
                        alt={item.description}
                        className="img-fluid w-100"
                        style={{height: '160px', objectFit: 'cover'}} 
                      />
                      <div className="p-3">
                        <div className='d-flex justify-content-between align-items-start mb-2'>
                          <h6 className='text-white mb-0'>{item.description}</h6>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h6 className='text-white mb-0'>{item.price}</h6>
                          <div className='d-flex gap-2'>
                            <Star 
                              on={likedItems[item.id] || false}
                              handleClick={() => handleClick(item.id)}
                            />
                            <i className="fa fa-shopping-cart text-white" style={{cursor: 'pointer'}}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Products Header */}
              <div 
                className='d-flex align-items-center rounded-pill p-3 mb-4'
                style={{backgroundColor: '#424242'}}
              >
                <i className="fas fa-star fs-4 me-3 text-white"></i>
                <h4 className='mb-0 text-white'>Featured products</h4>
              </div>

              {/* Featured Products Grid */}
              <div className='row g-3 mb-5'>
                <div className='col-md-6'>
                  <div className='position-relative rounded-4 overflow-hidden'>
                    <img 
                      src="../src/assets/furniture/arrival-5.jpg" 
                      alt="Luxury Sofas"
                      className="img-fluid w-100"
                      style={{height: '250px', objectFit: 'cover', filter: 'brightness(70%)'}} 
                    />
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                      <h4 className='fw-bold mb-2' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>
                        Luxury Sofas
                      </h4>
                      <p className='mb-3' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>
                        Explore our premium sofa collections
                      </p>
                      <button type='button' className='btn btn-dark btn-lg rounded-pill fw-bold'>
                        Explore more
                      </button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='position-relative rounded-4 overflow-hidden'>
                    <img 
                      src="../src/assets/furniture/arrival-3.jpg" 
                      alt="Work from Home"
                      className="img-fluid w-100"
                      style={{height: '250px', objectFit: 'cover', filter: 'brightness(70%)'}} 
                    />
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                      <h4 className='fw-bold mb-2' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>
                        Work from Home
                      </h4>
                      <p className='mb-3' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>
                        Desks, Chairs, Storage
                      </p>
                      <button type='button' className='btn btn-dark btn-lg rounded-pill fw-bold'>
                        Explore more
                      </button>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='py-5' style={{backgroundColor: '#1a1a1a'}}>
        <div className="container">
          <div className="row text-white mb-5">
            <div className='col-lg-6 mb-4 mb-lg-0'>
              <h2>Explore millions of offerings tailored to your business needs</h2>
            </div>
            <div className='col-lg-6'>
              <div className="row g-3">
                <div className='col-6'>
                  <div className='p-3 rounded-4' style={{backgroundColor: '#424242'}}>
                    <h3 className='text-danger mb-1'>200M+</h3>
                    <p className='mb-0'>products</p>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='p-3 rounded-4' style={{backgroundColor: '#424242'}}>
                    <h3 className='text-danger mb-1'>200K+</h3>
                    <p className='mb-0'>suppliers</p>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='p-3 rounded-4' style={{backgroundColor: '#424242'}}>
                    <h3 className='text-danger mb-1'>5,900</h3>
                    <p className='mb-0'>product categories</p>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='p-3 rounded-4' style={{backgroundColor: '#424242'}}>
                    <h3 className='text-danger mb-1'>200+</h3>
                    <p className='mb-0'>countries and regions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-5" style={{backgroundColor: '#424242'}} data-aos="fade-up">
        <div className="container text-light">
          <div className='text-center mb-5'> 
            <h3 className='mb-3'>Visit our Blog</h3>
            <div 
              className="bg-danger mx-auto mb-4"
              style={{width: '70px', height: '6px'}}
            ></div>
          </div>
          
          <div className='row g-4'>
            {BlogsArray.map(blog => (
              <div className='col-md-6 col-lg-4' key={blog.id}>
                <div className='rounded-4 overflow-hidden' style={{backgroundColor: '#333'}}>
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="img-fluid w-100"
                    style={{height: '160px', objectFit: 'cover'}} 
                  />
                  <div className="p-3">
                    <h6 className='mb-3'>{blog.title}</h6>
                    <p className='mb-3 text-light'>{blog.descrption}</p>
                    <div className="d-flex align-items-center">
                      <img 
                        src={blog.author_image}
                        alt={blog.author_name}
                        className='rounded-circle me-2'
                        style={{width: '33px', height: '33px', objectFit: 'cover'}}
                      />
                      <p className='mb-0 small'>{blog.author_name}</p>
                    </div>  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5" style={{backgroundColor: '#1a1a1a'}}>
        <div className="container">
          <div className='row g-4 text-white mb-4'>
            <div className="col-md-6 col-lg-3">
              <h5 className='mb-3'>Get to know Us</h5>
              <ul className="list-unstyled lh-lg">
                <li>Careers</li>
                <li>Blog</li>
                <li>About Fun Furniture</li>
                <li>Investor Relation</li>
                <li>Fun Furniture Devices</li>
                <li>Fun Furniture science</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className='mb-3'>Make money with us</h5>
              <ul className="list-unstyled lh-lg">
                <li>Sell products on Fun Furniture</li>
                <li>Sell on Fun Furniture Business</li>
                <li>Sell Apps on Fun Furniture</li>
                <li>Become an Affiliate</li>
                <li>Advertise you products</li>
                <li>Self-publish with us</li>
                <li>Host on Fun Furniture Hub</li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className='mb-3'>Amazon payment products</h5>
              <ul className="list-unstyled lh-lg">
                <li>Fun Furniture Rewards Visa Signature Cards</li>
                <li>Fun Furniture Store Card</li>
                <li>Fun Furniture Secured Card</li>
                <li>Fun Furniture Corporate Credit Line</li>
                <li>Fun Furniture Business Line of Credit</li>
              </ul>  
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className='mb-3'>Let us help you</h5>
              <ul className="list-unstyled lh-lg">
                <li>Fun Furniture and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>Shipping Rates & Policies</li>
                <li>Returns & Replacements</li>
                <li>Manage Your Content and Devices</li>
                <li>Fun Furniture App Download</li>
              </ul>  
            </div>
          </div>
          
          <hr className="text-white-50" />
          
          <div className='d-flex flex-column flex-md-row justify-content-between align-items-center text-light'>
            <div className='d-flex gap-4 mb-3 mb-md-0'>
              <h6 className="mb-0">Funstore</h6>
              <span>Instagram</span>
              <span>Twitter</span>
              <span>Discord</span>
            </div>
            <div>
              <p className="mb-0">&copy;Funstore 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}