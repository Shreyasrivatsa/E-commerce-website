


// import React, { createContext, useState } from 'react';
// import allProducts from '../Components/Assets/All_products'; 

// export const ShopContext = createContext(null); 
// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < allProducts.length; index++) {
//     cart[allProducts[index].id] = {
//       quantity: 0,
//       size: null,
//     };
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (itemId, size) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: {
//         quantity: prev[itemId].quantity + 1,
//         size: prev[itemId].size || size,
//       },
//     }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const newQuantity = prev[itemId].quantity - 1;
//       return {
//         ...prev,
//         [itemId]: {
//           ...prev[itemId],
//           quantity: newQuantity > 0 ? newQuantity : 0,
//         },
//       };
//     });
//   };

//   const deleteFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: {
//         quantity: 0,
//         size: null,
//       },
//     }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const itemId in cartItems) {
//       const cartItem = cartItems[itemId];
//       if (cartItem.quantity > 0) {
//         const product = allProducts.find((product) => product.id === Number(itemId));
//         if (product) {
//           totalAmount += product.new_price * cartItem.quantity;
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItems = 0;
//     for (const itemId in cartItems) {
//       totalItems += cartItems[itemId].quantity;
//     }
//     return totalItems;
//   };

//   const contextValue = {
//     allProducts,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     deleteFromCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import React, { createContext, useState, useEffect } from 'react';
import allProducts from '../Components/Assets/All_products';

export const CartContext = createContext(null);

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id, selectedSize) => {
    const existing = cartItems.find(item => item.id === id && item.selectedSize === selectedSize);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { id, selectedSize, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, selectedSize) => {
    setCartItems(cartItems.filter(item => !(item.id === id && item.selectedSize === selectedSize)));
  };

  const increaseQuantity = (id, selectedSize) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.selectedSize === selectedSize
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQuantity = (id, selectedSize) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.selectedSize === selectedSize
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    ));
  };

  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

