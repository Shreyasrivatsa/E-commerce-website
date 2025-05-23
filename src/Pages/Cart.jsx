
//final
// import React, { useContext } from 'react';
// import { CartContext } from '../Context/CartContext';
// import { products as dataProducts } from '../Components/Assets/Data';
// import allProducts from '../Components/Assets/All_products';
// import newCollections from '../Components/Assets/new_collections'; // ✅ Add this line

// import './CSS/Cart.css';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cart = () => {
//   const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

//   // const getProductById = (id) => {
//   //   id = String(id);
//   //   let product = dataProducts.find((p) => String(p.id) === id);
//   //   if (!product) {
//   //     product = allProducts.find((p) => String(p.id) === id);
//   //   }
//   //   return product;
//   // };

//   const getProductById = (id) => {
//     id = String(id);
//     let product = dataProducts.find((p) => String(p.id) === id);
//     if (!product) {
//       product = allProducts.find((p) => String(p.id) === id);
//     }
//     if (!product) {
//       product = newCollections.find((p) => String(p.id) === id); // ✅ Add this line
//     }
//     return product;
//   };
  

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       const product = getProductById(item.id);
//       if (product && product.new_price) {
//         return total + Number(product.new_price) * item.quantity;
//       }
//       return total;
//     }, 0);
//   };

//   const subtotal = calculateSubtotal();
//   const tax = subtotal * 0.18;
//   const total = subtotal + tax;

//   const handleRemove = (productId, selectedSize) => {
//     removeFromCart(productId, selectedSize);
//     toast.error('Item removed from cart!');
//   };

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="empty-cart">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="cart-content">
//             {cartItems.map((item) => {
//               const product = getProductById(item.id);
//               if (!product) return null;

//               return (
//                 <div key={`${item.id}-${item.selectedSize}`} className="cart-item">
//                   <img src={product.image} alt={product.name} className="cart-image" />
//                   <div className="cart-details">
//                     <h3>{product.name}</h3>
//                     <p><strong>Size:</strong> {item.selectedSize}</p>
//                     <p><strong>Price:</strong> ₹{product.new_price}</p>

//                     <div className="quantity-controls">
//                       <button onClick={() => decreaseQuantity(item.id, item.selectedSize)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => increaseQuantity(item.id, item.selectedSize)}>+</button>
//                     </div>

//                     <button
//                       className="remove-btn"
//                       onClick={() => handleRemove(item.id, item.selectedSize)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="order-summary">
//             <h2>Order Summary</h2>
//             <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
//             <p>Tax (18%): ₹{tax.toFixed(2)}</p>
//             <p><strong>Total: ₹{total.toFixed(2)}</strong></p>
//             <button className="checkout-btn">Proceed to Checkout</button>
//           </div>
//         </>
//       )}


      
//     </div>
//   );
// };

// export default Cart;


import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { products as dataProducts } from '../Components/Assets/Data';
import allProducts from '../Components/Assets/All_products';
import newCollections from '../Components/Assets/new_collections';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CSS/Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const getProductById = (id) => {
    id = String(id);
    return (
      dataProducts.find((p) => String(p.id) === id) ||
      allProducts.find((p) => String(p.id) === id) ||
      newCollections.find((p) => String(p.id) === id)
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return product && product.new_price
        ? total + Number(product.new_price) * item.quantity
        : total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handleRemove = (productId, selectedSize) => {
    removeFromCart(productId, selectedSize);
    toast.error('Item removed from cart!');
  };

  const proceedToCheckout = () => {
    const orderSummary = {
      items: cartItems,
      subtotal,
      tax,
      total,
    };
    localStorage.setItem('orderSummary', JSON.stringify(orderSummary));
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-content">
            {cartItems.map((item) => {
              const product = getProductById(item.id);
              if (!product) return null;

              return (
                <div key={`${item.id}-${item.selectedSize}`} className="cart-item">
                  <img src={product.image} alt={product.name} className="cart-image" />
                  <div className="cart-details">
                    <h3>{product.name}</h3>
                    <p><strong>Size:</strong> {item.selectedSize}</p>
                    <p><strong>Price:</strong> ₹{product.new_price}</p>

                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id, item.selectedSize)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id, item.selectedSize)}>+</button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.id, item.selectedSize)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Tax (18%): ₹{tax.toFixed(2)}</p>
            <p><strong>Total: ₹{total.toFixed(2)}</strong></p>
            <button className="checkout-btn" onClick={proceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
