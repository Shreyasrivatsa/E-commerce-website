import React, { useContext } from 'react';
import { AllProductContext } from '../Context/AllProductContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProductCart = () => {
  const {
    cartItems,
    getCartCount,
    getSubtotal,
    getTax,
    getTotal,
    removeFromCart,
  } = useContext(AllProductContext);

  const handleRemove = (key) => {
    removeFromCart(key);
    // No extra toast needed here; context already includes toast on remove
  };

  const renderCartItems = () => {
    return Object.entries(cartItems).map(([key, item]) => (
      <div key={key} className="cart-item">
        <img src={item.image} alt={item.name} className="cart-item-img" />
        <div className="cart-item-info">
          <h4>{item.name}</h4>
          <p>Size: {item.size}</p>
          <p>Price: ₹{item.new_price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ₹{item.new_price * item.quantity}</p>
          <button className="remove-btn" onClick={() => handleRemove(key)}>
            Remove
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="cart-container">
      <h2>Your All Product Cart</h2>
      {getCartCount() === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">{renderCartItems()}</div>
          <div className="cart-summary">
            <div>
              <span>Subtotal:</span>
              <span>₹{getSubtotal().toFixed(2)}</span>
            </div>
            <div>
              <span>Tax (18% GST):</span>
              <span>₹{getTax().toFixed(2)}</span>
            </div>
            <div>
              <strong>Total:</strong>
              <strong>₹{getTotal().toFixed(2)}</strong>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllProductCart;
