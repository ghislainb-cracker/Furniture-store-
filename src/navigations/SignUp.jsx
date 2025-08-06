import React, { useState } from "react";
import Header from "../components/header";

export const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(){
        
    }

    return (
        <>
        <Header/>
            <div className="signup-container">
                <div className="welcome">
                    <h1>Welcome to Fun Furniture store, creative and passion driven store</h1>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit} className="signup-form-real">
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                    </form>
                </div>
            </div>
        </>
    );
};
