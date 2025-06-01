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
    {/* Header */}
    <Header/>
    
     {/* show case */}
    <section className="text-light p-5 text-center text-sm-start raised-section" data-aos="fade-up">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h1 className='fs-3xl'>Discover top quality furniture for your home decor need</h1>
                    <p className='fs-md white2'>Browse by category or explore our latest collections</p>
                    
                    <div className='d-flex align-items-center'>
                    <div className='input-group w-50 mx-left rounded-7'>
                        <input 
                        type="text" 
                        className='form-control dark8 my-4 border-none no-outline custom-placeholder'
                        placeholder='Search for furniture...🙋‍♀️🙋‍♂️🙋'
                        style={{padding: '9px', border: 'none', outline: 'none', boxShadow: 'none'}}
                        aria-describedby='search-icon'
                        aria-label='search'
                        />
                        <span 
                        className="input-group-text text-white dark8 fs-2xl my-4" 
                        style={{ backgroundColor: '#424242', color: '#ffffff', border: 'none'}}
                        id="search-icon">
                         <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <button type='button' className='btn dark8 ms-3 btn-lg px-5 rounded-pill'>Search</button>
                    </div>
                </div>
                <img className="img-fluid w-50 d-none d-sm-block" src="../src/assets/furniture/kitchen.png" alt=""/>
            </div>
        </div>
     </section>

     {/* categories */}
     
     <CategoriesSection id={Categories.id} category={Categories}/>
     
     {/* Featured Products */}
     <section data-aos="fade-up">
      <div className="container d-flex g-4">
      <div className='a-third'>
        <div 
        className='d-flex text-center all-flex dark8 rounded-pill mb-5'
        style={{height: "70px"}}
        >
        <i className="fas fa-couch fs-lg text-center"></i>
        <h4 className='ms-3'>Featured Products</h4>
        </div>
        <div className='all-flex2 dark8 radius20 mb-4'>
          <h4 className='mb-0 mt-4'>Sofa sets</h4>
          <p className='mb-5'>By Design Haven</p>
          <div 
          style={{height: '70px', width: '70px', position: 'absolute', margin: "-100px 0 0 100px"}} 
          className='rounded-circle bg-color text-light all-flex2'>
            <h5>20%</h5>
            <h5>OFF</h5>
          </div>
          <img 
          src="../src/assets/furniture/sofa-sets.jpg" 
          alt="" 
          className='img-fluid mb-5'
          style={{width: '130px', borderRadius: '15px'}} 
          />
          <button 
          type='button' 
          className='btn bg-color text-white mb-4 rounded-pill' 
          style={{width: "220px", height: "50px"}}>Shop now</button>
        </div>
        <div className='all-flex2 dark8 radius20 mb-4'>
          <h4 className='mb-0 mt-4'>New Arrivals</h4>
          <p className='mb-4'>Discover our latest</p>
          <div 
          style={{height: '70px', width: '70px', position: 'absolute', margin: "-100px 0 0 100px"}} 
          className='rounded-circle bg-color text-light all-flex2'>
            <h5>20%</h5>
            <h5>OFF</h5>
          </div>
          <img 
          src="../src/assets/furniture/new-arrivals.jpg" 
          alt="" 
          className='img-fluid mb-4'
          style={{width: '130px', borderRadius: '15px'}} 
          />
          <button 
          type='button' 
          className='btn bg-color text-white mb-4 rounded-pill' 
          style={{width: "220px", height: "50px"}}>View now</button>
        </div>
        <div className='all-flex2 dark8 radius20 mb-4'>
          <h4 className='mb-0 mt-4'>Limited Time Offer</h4>
          <p className='mb-4'>Ends soon</p>
          <div className="container all-flex">
            <div 
            className="rounded-circle shadow1 h2 all-flex"
            style={{width: '40px',height: '50px',}}
            >1</div>
            <div 
            className="rounded-circle shadow1 h2 all-flex"
            style={{width: '40px',height: '50px',}}
            >0</div>
            <h1>:</h1>
            <div 
            className="rounded-circle shadow1 h2 all-flex"
            style={{width: '40px',height: '50px',}}
            >5</div>
            <div 
            className="rounded-circle shadow1 h2 all-flex"
            style={{width: '40px',height: '50px',}}
            >7</div>
          </div>
        </div>
      </div>


      <div 
      className='a-seventh'
      style={{marginLeft: "100px"}}
      >
        <div 
        className='justify-content-between d-flex radius20 mb-5 dark8 rounded-pill p-4'
        style={{height: '70px'}}
        >
          <div className='half-flex'>
          <i className="fas fa-couch fs-lg text-center"></i>
          <h3 className='ms-3'>New Arrivals</h3>
          </div>
          <div className='half-flex gap-4'>
            <i className="fas fa-chevron-left fs-lg"></i>
            <i className="fas fa-chevron-right fs-lg"></i>
          </div>
        </div>
        {/* New Arrivals */}
        <div className='griddng3 mb-5'>
        {newArrivals.map(item => {
          
          return(
            <div className='dark8 radius20' key={item.id}>
            <img 
            src={item.image} 
            alt="" 
            className="img-fluid radius20 mb-3 w-full"
            style={{width: '272px', height: '160px', objectFit: 'cover',}} 
            />
            <div className="container">
              <span className='half-flex gap-3 justify-content-between'>
              <h5>{item.description}</h5>
              </span>
              <span className='half-flex gap-4'>
              <h6>{item.price}</h6>
              <Star 
               on={likedItems[item.id] || false}
               handleClick={() => handleClick(item.id)}
              />
 
              <i className="fa fa-shopping-cart text-white"></i>
              </span>
            </div>
            </div>
          )
        })}
        </div>
        <div
        className='d-flex radius20 mb-4 dark8 rounded-pill p-4'
        style={{height: '70px'}}
        >
          <div className='half-flex'>
          <i className="fas fa-star fs-lg text-center"></i>
          <h3 className='ms-3'>Featured products</h3>
          </div>
        </div>
        <div className='griddng2 mb-5'>
          <div className='dark8 radius20 position-relative'>
            <img 
            src="../src/assets/furniture/arrival-5.jpg" 
            alt="" 
            className="img-fluid radius20 mb-3 position-relative dark-img"
            style={{width: '425px', height: '250px', objectFit: 'cover',}} 
            />
            <div className="position-absolute text-light top-50 start-50 translate-middle text-center">
              <h3 className='fw-bold' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>Luxury Sofas</h3>
              <p style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>Explore our premium sofa collections</p>
              <button type='button' className='btn btn-dark btn-lg rounded-pill fw-bold'>Explore more</button>
            </div>
            </div>
            <div className='dark8 radius20 position-relative'>
            <img 
            src="../src/assets/furniture/arrival-3.jpg" 
            alt="" 
            className="img-fluid radius20 mb-3 position-relative dark-img"
            style={{width: '425px', height: '250px', objectFit: 'cover',}} 
            />
            <div className="position-absolute text-light top-50 start-50 translate-middle text-center">
              <h3 className='fw-bold' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>Work from Home</h3>
              <p style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.9)' }}>Desks, Chairs, Storage</p>
              <button type='button' className='btn btn-dark btn-lg rounded-pill fw-bold'>Explore more</button>
            </div>
            </div>
        </div> 
      </div>
      </div>
     </section>

     {/* Total clients */}
     <section className='customers' style={{marginBottom: '100px'}}>
      <div className="container d-flex text-light mb-5">
        <div className='percent55'>
          <h1>Explore millions of offerings tailored to your business needs</h1>
        </div>
        <div className='percent45'>
          <div className="container griddng2">
            <div className='dark8 radius20 paddingLeft30'>
              <h1 className='text-danger'>200M+</h1>
              <p className='fs-md'>products</p>
            </div>
            <div className='dark8 radius20 paddingLeft30'>
            <h1 className='text-danger'>200K+</h1>
            <p>suppliers</p>
            </div>
            <div className='dark8 radius20 paddingLeft30'>
            <h1 className='text-danger'>5,900</h1>
            <p>product categories</p>
            </div>
            <div className='dark8 radius20 paddingLeft30'>
            <h1 className='text-danger'>200+</h1>
            <p>countries and regions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full bg-secondary container flex text-center text-light mt-5">
        <i className="fa fa-google">google</i>
      </div>
     </section>
     {/* Footer */}
     <section className="blog dark8" data-aos="fade-up">
      <div className="container text-light pt-5">
        <div className='mb-5'> 
        <div className='columning'>
        <h4 className='text-center'>Visit our Blog</h4>
        <div 
        className="bg-danger flex mb-5"
        style={{width: '70px', height: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        ></div>
        </div>
        <div className='griddng3'>
        {BlogsArray.map(blog => {
          return(
          <div className='dark8 radius20' key={blog.id}>
            <img 
            src={blog.image}
            alt="" 
            className="img-fluid radius20 mb-3 w-full"
            style={{width: '100%', height: '160px', objectFit: 'cover',}} 
            />
            <div className="container">
              <h5 className='mb-3'>{blog.title}</h5>
              <p className='mb-3'>{blog.descrption}</p>
              <div className="flex text-center justify-center align-center">
                <img 
                src={blog.author_image}
                alt="" 
                className='rounded-circle'
                style={{width: '33px'}}
                />
                <p className='ms-2 h6 text-center'>{blog.author_name}</p>
              </div>  
            </div>
            </div>
          )
        })}
        </div>
        
          
            {/* <div className='dark8 radius20'>
            <img 
            src="../src/assets/furniture/arrival-5.jpg" 
            alt="" 
            className="img-fluid radius20 mb-3"
            style={{width: '100%', height: '160px', objectFit: 'cover',}} 
            />
             <div className="container">
              <h5 className='mb-3'>Tips for small Spaces</h5>
              <p className='mb-3'>Maximize your space with smart furniture solutions</p>
              <div className="flex text-center justify-center align-center">
                <img 
                src="../src/assets/image-circle.png" 
                alt="" 
                className='rounded-circle'
                style={{width: '33px'}}
                />
                <p className='ms-2 h6 text-center'>Inspired by John</p>
              </div>  
            </div>
            </div>
            <div className='dark8 radius20'>
            <img 
            src="../src/assets/furniture/arrival-6.jpg" 
            alt="" 
            className="img-fluid radius20 mb-3"
            style={{width: '100%', height: '160px', objectFit: 'cover',}} 
            />
            <div className="container">
              <h5 className='mb-3'>Tips for choosing the right Furniture</h5>
              <p className='mb-3'>Guidance on selecting the perfect pieces for your home</p>
              <div className="flex text-center justify-center align-center">
                <img 
                src="../src/assets/image-circle.png" 
                alt="" 
                className='rounded-circle'
                style={{width: '33px'}}
                />
                <p className='ms-2 h6 text-center'>Inspired by Byimbo</p>
              </div>  
            </div>
            </div>   */}
          </div>
      </div>
     </section>
     <section>
      <div className='half-flex2 gap-5 text-white pb-5'>
        <div>
          <h4 className='pb-3'>Get to know Us</h4>
          <ul style={{listStyle: 'none', lineHeight: 2,padding: 0}}>
            <li style={{display: 'flex', flexDirection: 'column', left: 0}}>Careers</li>
            <li>Blog</li>
            <li>About Fun Furniture</li>
            <li>Investor Relation</li>
            <li>Fun Furniture Devices</li>
            <li>Fun Furniture science</li>
          </ul>
        </div>
        <div>
          <h4 className='pb-3'>Make money with us</h4>
          <ul style={{listStyle: 'none', lineHeight: 2, padding: 0}}>
            <li>Sell products on Fun Furniture</li>
            <li>Sell on Fun Furniture Business</li>
            <li>Sell Apps on Fun Furniture</li>
            <li>Become an Affiliate</li>
            <li>Advertise you products</li>
            <li>Self-publish with us</li>
            <li>Host on Fun Furniture Hub</li>
          </ul>
        </div>
        <div>
          <h4 className='pb-3'>Amazon payment products</h4>
          <ul style={{listStyle: 'none', lineHeight: 2, padding: 0}}>
            <li className=''>Fun Furniture Rewards Visa Signature Cards</li>
            <li>Fun Furniture Store Card</li>
            <li>Fun Furniture Secured Card</li>
            <li>Fun Furniture Corporate Credit Line</li>
            <li>Fun Furniture Business Line of Credit</li>
          </ul>  
        </div>
        <div>
          <h4 className='pb-3'>let us help you</h4>
          <ul style={{listStyle: 'none', lineHeight: 2, padding: 0}}>
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
      <div className='d-flex justify-content-between text-light'>
            <span className='d-flex gap-4'>
              <h5>Funstore</h5>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Discord</p>
            </span>
            <span>
              <p>&copy;Funstore 2025</p>
            </span>
          </div>
     </section>
     </div>
  );
}
