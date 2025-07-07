import { createContext, useState, useEffect } from "react";

// 1. Create the context
export const CartContext = createContext();

// 2. Create the provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product, options = {}) => {
    // Generate a unique cart item id based on product id and options
    const cartItemId = `${product.id}_${options.color || 'default'}_${options.size || 'default'}`;
    setCartItems(prev => [
      ...prev,
      { ...product, ...options, cartItemId }
    ]);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Return the provider
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
