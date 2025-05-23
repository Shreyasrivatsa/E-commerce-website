
// //final
// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import { parsePhoneNumberFromString } from 'libphonenumber-js';
// import { CartContext } from '../Context/CartContext';
// import './CSS/Checkout.css';

// const Checkout = () => {
//   const { cartItems, clearCart } = useContext(CartContext);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [phoneError, setPhoneError] = useState('');
//   const [selectedPayment, setSelectedPayment] = useState('COD'); // make case consistent

//   const navigate = useNavigate();

//   const subtotal = cartItems.reduce(
//     (acc, item) =>
//       acc +
//       (Number(item.price || item.new_price || item.old_price) || 0) *
//         (Number(item.quantity) || 0),
//     0
//   );

//   const tax = subtotal * 0.18;
//   const total = subtotal + tax;

//   useEffect(() => {
//     if (!phone) {
//       setPhoneError('Phone number is required');
//       return;
//     }

//     try {
//       const phoneNumberObj = parsePhoneNumberFromString('+' + phone);
//       if (!phoneNumberObj || !phoneNumberObj.isValid()) {
//         setPhoneError('Invalid phone number');
//       } else {
//         setPhoneError('');
//       }
//     } catch {
//       setPhoneError('Invalid phone number');
//     }
//   }, [phone]);

//   const handlePlaceOrder = () => {
//     if (!name.trim() || !address.trim() || !phone || phoneError) {
//       alert('Please fill all required fields correctly.');
//       return;
//     }

//     // Pick first product from cart to pass to inventory (or customize as needed)
//     const firstProduct = cartItems[0];

//     const orderDetails = {
//       name: name.trim(),
//       address: address.trim(),
//       phone: '+' + phone,
//       paymentMethod: selectedPayment,
//       total,
//       items: cartItems,
//     };

//     localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

//     // Prepare URL params for inventory page
//     const params = new URLSearchParams({
//       name: orderDetails.name,
//       address: orderDetails.address,
//       phone: orderDetails.phone,
//       payment: orderDetails.paymentMethod,
//       productName: firstProduct?.name || 'Unknown Product',
//       // productImage: firstProduct?.image || 'https://via.placeholder.com/60',
//       productPrice: (
//         firstProduct?.price ||
//         firstProduct?.new_price ||
//         firstProduct?.old_price ||
//         0
//       ).toString(),
//     });

//     // Open Inventory page with params in new tab
//     // window.open(`http://localhost:3001/inventory?${params.toString()}`, '_blank');

//     clearCart();
//     navigate('/thankyou');
//   };

//   return (
//     <div className="checkout-page">
//       <h2>Checkout</h2>

//       <div className="order-summary">
//         <h3>🧾 Order Summary</h3>

//         {cartItems.map((item, index) => (
//           <div className="order-item" key={index}>
//             <img src={item.image} alt={item.name} />
//             <div className="item-details">
//               <p className="item-name">{item.name}</p>
//               <p>Qty: {item.quantity}</p>
//               <p>₹{(item.price || item.new_price || item.old_price) * item.quantity}</p>
//             </div>
//           </div>
//         ))}

//         <div className="summary-totals">
//           <p>
//             <span>Subtotal:</span> ₹{subtotal.toFixed(2)}
//           </p>
//           <p>
//             <span>Tax (18%):</span> ₹{tax.toFixed(2)}
//           </p>
//           <p className="total">
//             <strong>Total:</strong> ₹{total.toFixed(2)}
//           </p>
//         </div>
//       </div>

//       <div className="customer-details">
//         <h3>👤 Customer Details</h3>
//         <div className="checkout-form">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Shipping Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />

//           <div className="phone-field">
//             <PhoneInput
//               country={'in'}
//               value={phone}
//               onChange={setPhone}
//               enableSearch
//               countryCodeEditable={false}
//               inputStyle={{
//                 width: '100%',
//                 height: '45px',
//                 fontSize: '16px',
//                 paddingLeft: '50px',
//                 borderRadius: '8px',
//                 border: phoneError ? '2px solid #d93025' : '1px solid #ccc',
//               }}
//               buttonStyle={{
//                 borderTopLeftRadius: '8px',
//                 borderBottomLeftRadius: '8px',
//               }}
//             />
//             {phoneError && <div className="phone-error">{phoneError}</div>}
//           </div>
//         </div>
//       </div>

//       <div className="payment-method">
//         <h3>💳 Select Payment Method</h3>
//         <div className="payment-options">
//           <div
//             className={`payment-card ${selectedPayment === 'COD' ? 'selected' : ''}`}
//             onClick={() => setSelectedPayment('COD')}
//           >
//             Cash on Delivery
//           </div>
//           <div
//             className={`payment-card ${selectedPayment === 'UPI' ? 'selected' : ''}`}
//             onClick={() => setSelectedPayment('UPI')}
//           >
//             UPI
//           </div>
//           <div
//             className={`payment-card ${selectedPayment === 'CARD' ? 'selected' : ''}`}
//             onClick={() => setSelectedPayment('CARD')}
//           >
//             Credit/Debit Card
//           </div>
//         </div>
//       </div>

//       <button
//         className="place-order-btn"
//         onClick={handlePlaceOrder}
//         disabled={!name.trim() || !address.trim() || !phone || phoneError}
//       >
//         🚀 Place Order
//       </button>
//     </div>
//   );
// };

// export default Checkout;


import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { CartContext } from '../Context/CartContext';
import './CSS/Checkout.css';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('COD');
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      (Number(item.price || item.new_price || item.old_price) || 0) *
        (Number(item.quantity) || 0),
    0
  );
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const validatePhone = () => {
    try {
      const phoneNumberObj = parsePhoneNumberFromString('+' + phone);
      if (!phoneNumberObj || !phoneNumberObj.isValid()) {
        setPhoneError('Invalid phone number');
        return false;
      }
      setPhoneError('');
      return true;
    } catch {
      setPhoneError('Invalid phone number');
      return false;
    }
  };

  const handlePlaceOrder = () => {
    if (!name.trim() || !address.trim() || !phone) {
      alert('Please fill all required fields.');
      return;
    }

    if (!validatePhone()) {
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const currentDateTime = new Date().toLocaleString();
    const firstProduct = cartItems[0];

    const orderDetails = {
      name: name.trim(),
      address: address.trim(),
      phone: '+' + phone,
      paymentMethod: selectedPayment,
      total,
      dateTime: currentDateTime, // ✅ Order timestamp
      items: cartItems,
    };

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    const params = new URLSearchParams({
      name: orderDetails.name,
      address: orderDetails.address,
      phone: orderDetails.phone,
      payment: orderDetails.paymentMethod,
      productName: firstProduct?.name || 'Unknown Product',
      productPrice: (
        firstProduct?.price ||
        firstProduct?.new_price ||
        firstProduct?.old_price ||
        0
      ).toString(),
      dateTime: currentDateTime,
    });

    window.open(`http://localhost:3001/inventory?${params.toString()}`, '_blank');

    clearCart();
    navigate('/thankyou');
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="order-summary">
        <h3>🧾 Order Summary</h3>
        {cartItems.map((item, index) => (
          <div className="order-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p>Qty: {item.quantity}</p>
              <p>₹{(item.price || item.new_price || item.old_price) * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="summary-totals">
          <p><span>Subtotal:</span> ₹{subtotal.toFixed(2)}</p>
          <p><span>Tax (18%):</span> ₹{tax.toFixed(2)}</p>
          <p className="total"><strong>Total:</strong> ₹{total.toFixed(2)}</p>
        </div>
      </div>

      <div className="customer-details">
        <h3>👤 Customer Details</h3>
        <div className="checkout-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="phone-field">
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={setPhone}
              enableSearch
              countryCodeEditable={false}
              inputStyle={{
                width: '100%',
                height: '45px',
                fontSize: '16px',
                paddingLeft: '50px',
                borderRadius: '8px',
                border: phoneError ? '2px solid #d93025' : '1px solid #ccc',
              }}
              buttonStyle={{
                borderTopLeftRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            />
            {phoneError && <div className="phone-error">{phoneError}</div>}
          </div>
        </div>
      </div>

      <div className="payment-method">
        <h3>💳 Select Payment Method</h3>
        <div className="payment-options">
          {['COD', 'UPI', 'CARD'].map((method) => (
            <div
              key={method}
              className={`payment-card ${selectedPayment === method ? 'selected' : ''}`}
              onClick={() => setSelectedPayment(method)}
            >
              {method === 'COD' ? 'Cash on Delivery' :
               method === 'UPI' ? 'UPI' :
               'Credit/Debit Card'}
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Order Date/Time Preview */}
      <div className="order-time-preview">
        🕒 Order Date & Time: <strong>{new Date().toLocaleString()}</strong>
      </div>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        🚀 Place Order
      </button>
    </div>
  );
};

export default Checkout;
