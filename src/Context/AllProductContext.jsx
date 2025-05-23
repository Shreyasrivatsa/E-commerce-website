// src/Context/AllProductContext.js
import React, { createContext } from 'react';
import allProducts from '../Components/Assets/All_products';

export const AllProductContext = createContext([]);  // ← default to an empty array

export default function AllProductProvider({ children }) {
  return (
    <AllProductContext.Provider value={allProducts}>
      {children}
    </AllProductContext.Provider>
  );
}
  
