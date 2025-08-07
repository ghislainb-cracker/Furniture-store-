import React, { useContext, useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const SignUp = () => {
    const { username, setUsername, email, setEmail, password, setPassword, loading, handleRegister } = useContext(UserContext)

    return (
        <>
            <Header />
            <div className="signup-container">
                <div className="welcome">
                    <h1>Welcome to Fun Furniture store, creative and passion driven store</h1>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleRegister} className="signup-form-real">

                        <div className='brand-wrapper2'>
                            <div className="logo-circle2">
                                <i className="fas fa-couch logo-icon2"></i>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

                        <input type="text" name="username" id="registerUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                      
                        <input type="email" name="email" id="registerEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                       
                        <input type="password" name="password" id="registerPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        {loading ? <button className="bg-secondary" disabled>Wait...</button> :  <button>Sign Up</button>}
                        <p>Already have an account? 
                            <Link to='/login' className="text-decoration-none"><a href="">Login</a></Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};
