import React, { useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {

    }

    return (
        <>
            <Header />
            <div className="signup-container">
                <div className="welcome">
                    <h1>Welcome to Fun Furniture store, creative and passion driven store</h1>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit} className="signup-form-real">

                        <div className='brand-wrapper2'>
                            <div className="logo-circle2">
                                <i className="fas fa-couch logo-icon2"></i>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

                        <input type="text" name="" id="" placeholder="Username"/>
                      
                        <input type="text" name="" id="" placeholder="Email"/>
                       
                        <input type="text" name="" id="" placeholder="Password"/>

                        <button>Sign Up</button>
                        <p>Already have an account? 
                            <Link to='/login' className="text-decoration-none">
                            <a href="">Login</a>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};
