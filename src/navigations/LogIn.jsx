import React, { useState } from "react";
import Header from "../components/header";

export const Login = () => {
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
                <div className="login-form">
                    <form onSubmit={handleSubmit} className="login-form-real">

                        <div className='brand-wrapper2'>
                            <div className="logo-circle2">
                                <i className="fas fa-couch logo-icon2"></i>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                      
                        <input type="text" name="" id="" placeholder="Username or Email"/>
                       
                        <input type="text" name="" id="" placeholder="Password"/>

                        <button>Log In</button>
                        <p><a href="">Forgot password?</a></p>
                    </form>
                </div>
            </div>
        </>
    );
};
