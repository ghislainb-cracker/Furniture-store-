import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./navigations/Home";
import Living from "./navigations/Living"
import CartPage from "./navigations/CartPage";
import WishlistPage from "./navigations/WishlistPage";
import ProductPage from "./components/productPage";
import CategoryPage from "./components/CategoryPage";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./components/CheckoutPage";
import { WishlistProvider } from "./context/WishlistContext";
import { SignUp } from "./navigations/SignUp";
import { Login } from "./navigations/LogIn";
import { UserContextProvider } from "./context/UserContext";
import { ToastContainer, Zoom } from 'react-toastify'
import { Forgot } from "./navigations/Forgot";
import { Reset } from "./navigations/Reset";


export default function App(){
  return (
    <Router>
      <UserContextProvider>
        <CartProvider>
          <WishlistProvider>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot" element={ <Forgot /> } />
              <Route path="/login" element={<Login />} />
              <Route path="/reset" element={ <Reset /> } />
              <Route path="/living" element={<Living/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="checkout" element={<CheckoutPage/>}/>
              <Route path="/product/:id" element={<ProductPage/>}/>
              <Route path="/wishlist" element={<WishlistPage/>}/>
              <Route path="/category/:categoryName" element={<CategoryPage />} />
            </Routes>
            <ToastContainer position="bottom-right" autoClose={4000} limit={2} hideProgressBar transition={Zoom} theme="dark" />
          </WishlistProvider>
        </CartProvider>
      </UserContextProvider>
    </Router>
  )
}