import React from "react";
import Header from '../components/header';

export default function Living(){
    return(
        <>
         {/* Header */}
         <Header/>
           <section className="text-light p-5 text-center text-sm-start raised-section">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h1 className='fs-4xl'>Discover our latest Living Furniture</h1>
                    <p className='fs-md white2'>Explore the million of living the stylish life by using our furnitures</p>
                    <button className="btn btn-lg btn-dark bg-secondary rounded-5 mt-5">
                        Explore Now
                        <i className="fa fa-chevron-right ms-2"></i>
                    </button>
                    <div className='d-flex align-items-center'>
                    </div>
                </div>
                <img 
                className="img-fluid w-50 d-none d-sm-block rounded-circle mt-5" 
                src="../src/assets/furniture/head-5.jpg" 
                style={{height: '450px',objectFit: "cover"}}
                alt=""
                />
            </div>
        </div>
     </section> 
         {/* Sub-category */}
         <section>
            <h2 className="text-center text-light">Living Sub-Category</h2>
            <div className="dark7 m-5 p-3 rounded-5 flex justify-content-around gap-5">
                <div className="text-center">
                    <i className="fa fa-couch text-white fs-3xl"></i>
                    <h5>Sofas</h5>
                </div>
                <div className="text-center">
                    <i className="fa fa-table text-white fs-3xl"></i>
                    <h5>Coffee Table</h5>
                </div>
                <div className="text-center">
                    <i className="fa fa-tv text-white fs-3xl"></i>
                    <h5>TV Units</h5>
                </div>
                <div className="text-center">
                    <i className="fa fa-book text-white fs-3xl"></i>
                    <h5>Book shelve</h5>
                </div>
                <div className="text-center">
                    <i className="fa fa-chair text-white fs-3xl"></i>
                    <h5>Chairs</h5>
                </div>
                <div className="text-center">
                    <i className="fa fa-rug text-white fs-3xl"></i>
                    <h5>Rugs & Corpets</h5>
                </div>
                <div className="text-center">
                    <i className="fa fa-car text-white fs-3xl"></i>
                    <h5>Ligh shelves</h5>
                </div>
            </div>
         </section>
         
         {/* Featured Products */}
         <section className="flex justify-content-center">
            <div className="a-third h-4">
                <h5 className="text-light">Shop Top Categories</h5>
                <div>
                    <div className="card dark8 text-light w-50 mb-4">
                        <div className="all-flex2">
                        <div className="flex gap-5">
                        <img 
                        src="../src/assets/furniture/cat-chair.png" 
                        alt="" 
                        className="img-fluid"
                        style={{width: '50px', height: '40px', objectFit: 'cover'}}
                        />
                        <h5 className="all-flex">Sofas</h5>  
                        </div>
                        <div className="block">
                            <p>discover luxiariou sofas</p>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="card  dark8 text-light w-50 mb-4">
                        <div className="all-flex2">
                        <div className="flex gap-5">
                        <img 
                        src="../src/assets/furniture/cat-desk.png" 
                        alt="" 
                        className="img-fluid"
                        style={{width: '50px', height: '40px', objectFit: 'cover'}}
                        />
                        <h5 className="all-flex">Tables</h5>  
                        </div>
                        <div className="block">
                            <p>discover luxiarious sofas</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="card dark8 text-light w-50 mb-4">
                        <div className="all-flex2">
                        <div className="flex gap-5">
                        <img 
                        src="../src/assets/furniture/cat-bed.png" 
                        alt="" 
                        className="img-fluid"
                        style={{width: '50px', height: '40px', objectFit: 'cover'}}
                        />
                        <h5 className="all-flex">Shelves</h5>  
                        </div>
                        <div className="block">
                            <p>discover luxiarious sofas</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="card dark8 text-light w-50 mb-4">
                        <div className="all-flex2">
                        <div className="flex gap-5">
                        <img 
                        src="../src/assets/furniture/cat-table.png" 
                        alt="" 
                        className="img-fluid"
                        style={{width: '50px', height: '40px', objectFit: 'cover'}}
                        />
                        <h5 className="all-flex">Desks</h5>  
                        </div>
                        <div className="block">
                            <p>discover luxiarious sofas</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="card dark8 text-light w-50 mb-4">
                        <div className="all-flex2">
                        <div className="flex gap-5">
                        <img 
                        src="../src/assets/furniture/cat-chair.png" 
                        alt="" 
                        className="img-fluid"
                        style={{width: '50px', height: '40px', objectFit: 'cover'}}
                        />
                        <h5 className="all-flex">Beds</h5>  
                        </div>
                        <div className="block">
                            <p>discover luxiarious sofas</p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="a-seventh bg-danger h-4">two</div>
         </section>
         {/* Get Inspired */}
         <section>

         </section>
        </>
    )
}