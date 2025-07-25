import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const formatPrice = (price) => {

  let cleanPrice = price;
  if (typeof cleanPrice === "string" && cleanPrice.includes("$")) {
    cleanPrice = cleanPrice.replace("$", "");
  }
  return parseFloat(cleanPrice);
};

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.cartItemId] = 1;
      return acc;
    }, {})
  );

  // Update quantities if cartItems change (e.g. after remove)
  React.useEffect(() => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      cartItems.forEach((item) => {
        if (!newQuantities[item.cartItemId]) newQuantities[item.cartItemId] = 1;
      });
      // Remove quantities for items no longer in cart
      Object.keys(newQuantities).forEach((id) => {
        if (!cartItems.find((item) => item.cartItemId === id)) {
          delete newQuantities[id];
        }
      });
      return newQuantities;
    });
  }, [cartItems]);

  const handleQuantityChange = (cartItemId, value) => {
    if (value < 1) return;
    setQuantities((prev) => ({
      ...prev,
      [cartItemId]: value,
    }));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + formatPrice(item.price) * (quantities[item.cartItemId] || 1),
    0
  );

  const shipping = cartItems.length > 0 ? 9.99 : 0;
  const tax = cartItems.length > 0 ? subtotal * 0.07 : 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="p-4 my-1 ">
      <div
        className="w-full rounded-4 px-4 py-3 mb-3 d-flex align-items-center"
        style={{
          background: '#2A7B9B',
          background: 'linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'
        }}
      >
        <h2 className="fw-bold text-light">
          <i className="fa fa-shopping-cart me-2"></i>Your Shopping Cart
        </h2>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            style={{ width: 120, opacity: 0.5 }}
          />
          <h4 className="mt-4 text-secondary">Your cart is empty</h4>
          <Link to="/" className="btn btn-primary mt-3">
            <i className="fa fa-arrow-left me-2"></i>Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="table-responsive table-dark shadow rounded bg-black">
              <table className="table align-middle mb-0">
                <thead className="bg-black">
                  <tr>
                    <th style={{ minWidth: 120 }}>Product</th>
                    <th>Details</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.cartItemId} className="border-bottom">
                      <td>
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                            borderRadius: 8,
                          }}
                        />
                      </td>
                      <td>
                        <div className="fw-bold">{item.title}</div>
                        <div className="text-muted" style={{ fontSize: 13 }}>
                          {item.description || "No description"}
                          {item.color && <span> | Color: {item.color}</span>}
                          {item.size && <span> | Size: {item.size}</span>}
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="fw-semibold">
                          ${formatPrice(item.price).toFixed(2)}
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            style={{ minWidth: 32 }}
                            onClick={() =>
                              handleQuantityChange(
                                item.cartItemId,
                                (quantities[item.cartItemId] || 1) - 1
                              )
                            }
                            disabled={quantities[item.cartItemId] <= 1}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                          <input
                            type="number"
                            min="1"
                            className="form-control mx-2 text-center"
                            style={{ width: 50 }}
                            value={quantities[item.cartItemId] || 1}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.cartItemId,
                                Math.max(1, parseInt(e.target.value) || 1)
                              )
                            }
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            style={{ minWidth: 32 }}
                            onClick={() =>
                              handleQuantityChange(
                                item.cartItemId,
                                (quantities[item.cartItemId] || 1) + 1
                              )
                            }
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className="fw-semibold">
                          $
                          {(
                            formatPrice(item.price) *
                            (quantities[item.cartItemId] || 1)
                          ).toFixed(2)}
                        </span>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-danger btn-md"
                          onClick={() => removeFromCart(item.cartItemId)}
                          title="Remove from cart"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link to="/" className="btn btn-link mt-3">
              <button className="btn btn-lg btn-primary">
                <i className="fa fa-arrow-left me-2"></i>Continue Shopping
              </button>
            </Link>
          </div>
          {/* Cart Summary */}
          <div className="col-lg-4">
            <div className="card shadow-lg border-0 sticky-top" style={{ top: 90 }}>
              <div className="card-body">
                <h4 className="card-title mb-4 fw-bold">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-success">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold fs-5">Total</span>
                  <span className="fw-bold fs-5 text-success">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Link to="/checkout">
                  <button className="btn btn-success w-100 py-2 fw-bold" disabled>
                    Proceed to Checkout
                  </button>
                </Link>
                <div className="text-muted mt-2" style={{ fontSize: 13 }}>
                  <i className="fa fa-lock me-1"></i>
                  Secure checkout – coming soon!
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;