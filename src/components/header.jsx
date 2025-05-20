import React from "react";

export default function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark py-3 border-bottom border-white border-2">
              <div className="container">
                <a href="/" className="navbar-brand centering">
                <div className='flex justify-center align-center centering'>
                <img 
                className="text-white centering flex justify-center align-center"
                src='./src/assets/couch-solid.svg'
                />
                <h2 className='flex text-center align-center justify-center centering ms-2'>FUN</h2>
                </div>
                </a>
        
              <div className="collapse navbar-collapse ms-5" id="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/living" className="nav-link text-light fw-bold cursor-pointer">LIVING</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-light fw-bold cursor-pointer">SOFAS</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light fw-bold cursor-pointer">CHAIR</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light fw-bold cursor-pointer">TABLES</a>
                    </li>
                </ul>
              </div>
              <div className='ms-auto half-flex gap-4 mr-5'>
                <a href="#"><i className="fa fa-search text-white fs-4"></i></a>
                <a href="#"><i className="fa fa-shopping-cart text-white fs-4"></i></a>
                <a href="#"><i className="fa fa-user text-white fs-4"></i></a>
                <button type='button' className='btn bg-color btn-dark border-white border-1 ms-3 btn-lg rounded-pill'>Signup</button>
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
        </>
    )
}