import React, { useContext, useState } from "react";
import Header from "../components/header";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export const Login = () => {
    const { email,  password, handleLogin, setEmail, setPassword, loading } = useContext(UserContext)

    return (
        <>
            <Header />
            <div className="signup-container">
                <div className="welcome">
                    <h1>Welcome to Fun Furniture store, creative and passion driven store</h1>
                </div>
                <div className="login-form">
                    <form onSubmit={handleLogin} className="login-form-real">

                        <div className='brand-wrapper2'>
                            <div className="logo-circle2">
                                <i className="fas fa-couch logo-icon2"></i>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                      
                        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                       
                        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        {loading ? <button className="bg-secondary" disabled>Wait...</button> :  <button>Log In</button>}
                        <p><Link to={'/forgot'}>Forgot password?</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
};
