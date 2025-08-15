import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
const backend = import.meta.env.VITE_BACKEND_URL;

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
     const [User, SetUser] = useState({})
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [username, setUsername] = useState('')
     const [loading, setLoading] = useState(false)
     const [token, setToken] = useState('')
     const [newPassword, setNewPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')

     const navigate = useNavigate()

     const handleLogin = async (e) => {
          e.preventDefault()
          setLoading(true)
          try {    
               const response = await axios.post(`${backend}/api/users/login`, { email, password })
               SetUser({username: response.data.data.username, useremail: response.data.data.useremail, userId: response.data.data.userid, userrole: response.data.data.userrole})
               setLoading(false)
               setToken(response.data.data.token)
               toast.success(response.data.message)
               navigate("/")
          } catch (error) {
               setLoading(false)
               if (error.response.data) {
                    toast.warn(error.response.data.message)
               } else {
                    toast.warn("Failed to login")
               }
               console.warn("Login: ", error)
          }
     }
     
     const handleRegister = async (e) => {
          e.preventDefault()
          setLoading(true)
          try {    
               const response = await axios.post(`${backend}/api/users/register`, { name: username, email, password })
               SetUser({username: response.data.data.username, useremail: response.data.data.useremail, userId: response.data.data.userid, userrole: response.data.data.userrole})
               setLoading(false)
               setToken(response.data.data.token)
               toast.success(response.data.message)
               navigate("/")
          } catch (error) {
               setLoading(false)
               if (error.response.data) {
                    toast.warn(error.response.data.message)
               } else {
                    toast.warn("Failed to register")
               }
               console.warn("Register: ", error)
          }
     }
     
     const handleForgot = async (e) => {
          e.preventDefault()
          setLoading(true)
          try {    
               const response = await axios.post(`${backend}/api/users/forgot`, { email }, { headers: { Platform: 'web' } })
               setLoading(false)
               toast.success("Email is sent")
               console.log("Forgot: ", response)
          } catch (error) {
               setLoading(false)
               if (error.response.data) {
                    toast.warn(error.response.data.message)
               } else {
                    toast.warn("Failed to send email")
               }
               console.warn("Forgot: ", error)
          }
     }
     
     const handleReset = async (e, token) => {
          e.preventDefault()
          
          if (!token || token == "") {
               toast.warn("token is required")
               return
          } else if (!newPassword || newPassword == "" || !confirmPassword || confirmPassword == "") {
               toast.warn("All fields are required required")
               return
          } else if (newPassword !== confirmPassword) {
               toast.warn("Password should match")
               return
          }
          
          setLoading(true)
          try {    
               const response = await axios.post(`${backend}/api/users/reset`, { token, newPassword }, { headers: { Platform: 'web' } })
               setLoading(false)
               setToken(response.data.data.token)
               SetUser({username: response.data.data.username, useremail: response.data.data.useremail, userId: response.data.data.userid, userrole: response.data.data.userrole})
               toast.success(response.data.message)
               navigate('/')
          } catch (error) {
               setLoading(false)
               if (error.response.data) {
                    toast.warn(error.response.data.message)
               } else {
                    toast.warn("Failed to reset")
               }
               console.warn("Reset: ", error)
          }
     }

     return (
          <UserContext.Provider value={{
               User, email, setEmail, password, setPassword, username, setUsername, loading, token, newPassword, confirmPassword, setConfirmPassword, setNewPassword,
               handleLogin, handleRegister, handleForgot, handleReset
          }}>
               { children }
          </UserContext.Provider>
     )
}