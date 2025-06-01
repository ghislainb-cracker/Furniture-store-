import React from "react";
import './header.css';

export default function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark pb-4 border-bottom border-white border-2">
              <div className="container position-relative">
                <a href="/" className="navbar-brand brand-container">
                  <div className='brand-wrapper'>
                    <div className="logo-circle">
                      <i className="fas fa-couch logo-icon"></i>
                    </div>
                    <h3 className='brand-text'>FUN</h3>
                  </div>
                </a>
        
              <div className="collapse navbar-collapse ms-5" id="navbar">
                <ul className="navbar-nav nav-links">
                    <li className="nav-item">
                        <a href="/living" className="nav-link text-light fw-bold">Living</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-light fw-bold">Sofas</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light fw-bold">Chair</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-light fw-bold">Tables</a>
                    </li>
                </ul>
              </div>
              <div className='action-buttons'>
                <div className="icon-circle">
                  <a href="#"><i className="fa fa-search"></i></a>
                </div>
                <div className="icon-circle">
                  <a href="#"><i className="fa fa-shopping-cart"></i></a>
                </div>
                <div className="icon-circle">
                  <a href="#"><i className="fa fa-user"></i></a>
                </div>
                <button type='button' className='signup-btn'>Signup</button>
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