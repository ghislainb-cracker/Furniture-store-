import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import { UserContext } from "../context/UserContext";
import { useNavigate, useSearchParams } from "react-router-dom";
const WEB_RESET = import.meta.env.VITE_WEB_URL;

export const Reset = () => {
     const { handleReset, newPassword, setNewPassword, confirmPassword, setConfirmPassword, loading } = useContext(UserContext)
     const [searchParams] = useSearchParams()
     const [resetToken, setResetToken] = useState('')
     
     useEffect(() => {
          setResetToken(searchParams.get('token').replace(`${WEB_RESET}/reset?token=`, ''))
     }, [searchParams])

     return (
          <>
               <Header />
               <div className="signup-container">
                    <div className="welcome">
                         <h1>Reset password for your account.</h1>
                    </div>
                    <div className="login-form">
                         <form onSubmit={(e) => handleReset(e, resetToken)} className="login-form-real">
                              <div className='brand-wrapper2'>
                                   <div className="logo-circle2">
                                        <i className="fas fa-couch logo-icon2"></i>
                                   </div>
                              </div>

                              <h2 className="text-2xl font-bold mb-4 text-center">Reset password</h2>
                              
                              <input type="text" name="email" id="newPassword" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                              <input type="password" name="email" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                              
                              {loading ? <button className="bg-secondary" disabled>Wait...</button> :  <button>Reset</button>}
                         </form>
                    </div>
               </div>
          </>
     );
};
