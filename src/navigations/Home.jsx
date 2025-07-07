import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import newArrivals from '../arrays/newArrivals';
import BlogsArray from '../arrays/blogsArray';
import Header from '../components/header';
import HotDeals from '../components/hotdeals';
import Categories from '../arrays/categories';
import Star from '../components/star';
import WholeProducts from '../components/wholeproducts';
import CustomerReview from '../components/customerReview';

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
      {/* Header */}
      <Header/>
      
   {/* show case */}
<section className="text-light mt-2 text-center text-sm-start raised-section" data-aos="fade-up">
  <div className="container">
    <div className="row align-items-center">
      {/* Content Column - Fixed width */}
      <div className="col-12 col-sm-6">
        <h1 className='fs-3xl' id="animated-text">Discover top quality furniture for your home decor need</h1>
        <p className='fs-md white2'>Browse by category or explore our latest collections</p>
        <div className='d-flex align-items-center flex-wrap'>
          <div className='input-group rounded-7' style={{maxWidth: '600px'}}>
            <input 
              type="text" 
              className='form-control dark8 my-4 rounded-pill no-outline custom-placeholder'
              placeholder='Search for furniture...🙋‍♀️🙋‍♂️🙋'
              style={{padding: '9px', border: '1px solid #ffffff', outline: 'none', boxShadow: 'none'}}
              aria-describedby='search-icon'
              aria-label='search'
            />
            <span 
              className="input-group-text rounded-pill text-white dark8 fs-2xl my-4" 
              style={{ backgroundColor: '#424242', color: '#ffffff', border: 'none', marginLeft: '10px', border: '1px solid #ffffff'}}
              id="search-icon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      
      {/* Image Column - Fixed width with reserved space */}
      <div className="col-12 col-sm-6 d-none d-sm-block">
        <div className="image-container" style={{minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <img 
            className="img-fluid" 
            src="../src/assets/furniture/kitchen.png" 
            alt=""
            style={{maxHeight: '500px', width: 'auto', marginLeft: '70px'}}
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Categories Section */}
      <HotDeals/>
      
      {/* Featured Products Section */}
      <WholeProducts/>

      {/* Customer Review */}
      <CustomerReview/>
      {/* Footer */}
      <footer className="py-5" style={{backgroundColor: '#1a1aa', borderTop: '1px solid #ffffff'}}>
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