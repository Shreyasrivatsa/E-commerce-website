


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

