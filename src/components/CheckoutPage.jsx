import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🎉 Order placed successfully!\nWe’ll be in touch soon.");
   
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")),
    0
  );
  const shipping = cartItems.length > 0 ? 9.99 : 0;
  const tax = cartItems.length > 0 ? subtotal * 0.07 : 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-light">🛍️ Checkout</h2>
      <div className="row">
       
        <div className="col-md-7">
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
            <h5 className="mb-3">Customer Info</h5>
            <div className="mb-3">
              <input name="name" className="form-control" placeholder="Full Name" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="email" className="form-control" placeholder="Email Address" type="email" onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input name="phone" className="form-control" placeholder="Phone Number" onChange={handleChange} required />
            </div>

            <h5 className="mt-4 mb-3">Shipping Address</h5>
            <div className="mb-3">
              <input name="address" className="form-control" placeholder="Street Address" onChange={handleChange} required />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input name="city" className="form-control" placeholder="City" onChange={handleChange} required />
              </div>
              <div className="col-md-3 mb-3">
                <input name="zip" className="form-control" placeholder="ZIP" onChange={handleChange} required />
              </div>
              <div className="col-md-3 mb-3">
                <input name="country" className="form-control" placeholder="Country" onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3">
              <textarea name="notes" className="form-control" rows="3" placeholder="Order notes (optional)" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100 fw-bold">
              Place Order
            </button>
          </form>
        </div>

        
        <div className="col-md-5">
          <div className="bg-white p-4 rounded shadow sticky-top" style={{ top: "80px" }}>
            <h5 className="mb-3">Order Summary</h5>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.title} <span>${parseFloat(item.price.replace("$", "")).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="d-flex justify-content-between">
              <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Shipping:</span> <span>${shipping.toFixed(2)}</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Tax (7%):</span> <span>${tax.toFixed(2)}</span>
            </p>
            <hr />
            <h5 className="d-flex justify-content-between">
              <span>Total:</span> <span className="text-success">${total.toFixed(2)}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
