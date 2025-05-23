
//Final 
// import React, { createContext, useState } from 'react';
// import { products } from '../Components/Assets/Data';
// import { toast } from 'react-toastify';

// export const DataProductContext = createContext();

// export const DataProductProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const updated = { ...prev };

//       // Check if the product is already in the cart
//       if (updated[product.id]) {
//         // If the product is already in the cart, just increase the quantity
//         updated[product.id].quantity += 1;
//       } else {
//         // If it's not in the cart, add it and set quantity to 1
//         updated[product.id] = { ...product, quantity: 1 };
//         // Only show the notification the first time the product is added to the cart
//         toast.success(`${product.name} added to cart!`);
//       }

//       return updated;
//     });
//   };

//   const getCartCount = () => {
//     return Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
//   };

//   const getSubtotal = () => {
//     return Object.values(cartItems).reduce((sum, item) => sum + item.new_price * item.quantity, 0);
//   };

//   const getTax = () => {
//     return getSubtotal() * 0.18; // 18% GST
//   };

//   const getTotal = () => {
//     return getSubtotal() + getTax();
//   };

//   return (
//     <DataProductContext.Provider
//       value={{
//         products,
//         cartItems,
//         addToCart,
//         getCartCount,
//         getSubtotal,
//         getTax,
//         getTotal,
//       }}
//     >
//       {children}
//     </DataProductContext.Provider>
//   );
// };

// import React, { createContext, useState, useContext } from 'react';
// import { products } from '../Components/Assets/Data'; // ✅ Import your product data

// export const DataProductContext = createContext();

// export const DataProductProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const getCartCount = () => cart.length;

//   return (
//     <DataProductContext.Provider value={{ cart, addToCart, getCartCount, products }}>
//       {children}
//     </DataProductContext.Provider>
//   );
// };

// export const useDataProductContext = () => useContext(DataProductContext);


import React, { createContext, useState, useEffect } from 'react';
import { products } from '../Components/Assets/Data';  // Import your hardcoded products

// Create the context
export const DataProductContext = createContext();

// The provider component
export const DataProductProvider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState(products);  // Using hardcoded products

  useEffect(() => {
    // Simulating an API call to fetch products
    setDataProducts(products);  // You can modify this to make it dynamic if needed
  }, []);

  return (
    <DataProductContext.Provider value={dataProducts}>
      {children}
    </DataProductContext.Provider>
  );
};
