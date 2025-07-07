import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./navigations/Home";
import Living from "./navigations/Living"
import CartPage from "./navigations/CartPage";
import ProductPage from "./components/productPage";
import { CartProvider } from "./context/CartContext";


export default function App(){
  return(
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/living" element={<Living/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
    </Router>
    </CartProvider>
  )
}