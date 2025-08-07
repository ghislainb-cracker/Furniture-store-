import React, { useContext, useState } from "react";
import Header from "../components/header";
import { UserContext } from "../context/UserContext";

export const Forgot = () => {
    const { email, handleForgot, setEmail, loading } = useContext(UserContext)

     return (
          <>
               <Header />
               <div className="signup-container">
                    <div className="welcome">
                         <h1>Reset password for your account. Enter your email to receive a reset url to reset your password</h1>
                    </div>
                    <div className="login-form">
                         <form onSubmit={handleForgot} className="login-form-real">
                              <div className='brand-wrapper2'>
                                   <div className="logo-circle2">
                                        <i className="fas fa-couch logo-icon2"></i>
                                   </div>
                              </div>

                              <h2 className="text-2xl font-bold mb-4 text-center">Forgot password</h2>
                              
                              <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                              
                              {loading ? <button className="bg-secondary" disabled>Wait...</button> :  <button>Get link</button>}
                         </form>
                    </div>
               </div>
          </>
     );
};
