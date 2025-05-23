

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './Components/Navbar/Navbar';  

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import AllProductCart from './Pages/AllProductCart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import PopularProductDetail from './Components/Popular/PopularProductDetail';
import RelatedProductPage from './Components/RelatedProducts/RelatedProductPage';


import {CartProvider} from './Context/CartContext'; 

import AllProductProvider from './Context/AllProductContext';
import { DataProductProvider } from './Context/DataProductContext';
import NewCollectionProvider from './Context/NewCollectionContext';


import men_banner from './Components/Assets/banner_men.jpg';
import women_banner from './Components/Assets/banner_womens.jpg';
import kid_banner from './Components/Assets/banner_kids.webp';

import Checkout from './Pages/Checkout';
import ThankYou from './Pages/Thankyou';


function App() {
  return (
    <AllProductProvider>
      <DataProductProvider>
        <NewCollectionProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
              <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
              <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
              <Route path="/popular/:id" element={<PopularProductDetail />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/popular-product/:id" element={<PopularProductDetail />} />
              <Route path="/related-product/:relatedProductId" element={<RelatedProductPage />} />
              
              <Route path="/cart" element={<Cart />} />
              <Route path="/all-cart" element={<AllProductCart />} />
              <Route path="/login" element={<LoginSignup />} />

              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thankyou" element={<ThankYou />} />



            </Routes>
            <Footer />
            <ToastContainer position="top-right" autoClose={2000} />
          </CartProvider>
        </NewCollectionProvider>
      </DataProductProvider>
    </AllProductProvider>
  );
}
export default App;

