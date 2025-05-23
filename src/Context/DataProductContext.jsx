


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
