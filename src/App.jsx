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


export default function App(){
  return(
    <CartProvider>
    <WishlistProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/living" element={<Living/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/wishlist" element={<WishlistPage/>}/>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
    </WishlistProvider>
    </CartProvider>
  )
}