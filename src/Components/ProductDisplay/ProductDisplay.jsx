


// src/Components/ProductDisplay/ProductDisplay.jsx
import React, { useContext, useState, useEffect } from 'react';
import './ProductDisplay.css';


import { AllProductContext } from '../../Context/AllProductContext';
import { DataProductContext } from '../../Context/DataProductContext';
import { CartContext } from '../../Context/CartContext';

const ProductDisplay = ({ product }) => {
 
  const allProducts = useContext(AllProductContext) || [];
  const dataProducts = useContext(DataProductContext) || [];
  

  const { addToCart } = useContext(CartContext);

  
  const [thumbs, setThumbs] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showChart, setShowChart] = useState(false);

  // Initialize thumbnails & size options
  useEffect(() => {
    setThumbs(Array.isArray(product.thumbnails) ? product.thumbnails : []);

    if (product.sizes?.length > 0) {
      setSizes(product.sizes);
    } else {
      const name = product.name?.toLowerCase() || '';
      const category = product.category?.toLowerCase() || '';
      let fallback = [];

      if (
        category.includes('bottomwear') ||
        ['jeans', 'pant', 'trouser', 'shorts'].some(k => name.includes(k))
      ) {
        fallback = ['28', '30', '32', '34', '36', '38'];
      } else if (
        category.includes('footwear') ||
        ['shoe', 'sandal', 'boot'].some(k => name.includes(k))
      ) {
        fallback = ['6', '7', '8', '9', '10'];
      } else {
        fallback = ['S', 'M', 'L', 'XL'];
      }
      setSizes(fallback);
    }
  }, [product]);

  // Price parsing
  const strip = s => Number(String(s).replace(/[^0-9.-]+/g, '')) || 0;
  const newPriceNum = strip(product.new_price);
  const oldPriceNum = strip(product.old_price);

  // Add to cart handler now uses the unified cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      return alert('Please select a size');
    }
    // Pass product.id and size into CartContext
    addToCart(product.id, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pd-page">
      <div className="pd-breadcrumbs">
        HOME &gt; SHOP &gt; {product.category?.toUpperCase()} &gt; {product.name}
      </div>
      <div className="pd-content">
        <div className="pd-images">
          <div className="pd-thumb-list">
            {thumbs.map((src, idx) => (
              <img key={idx} src={src} alt={`thumb-${idx}`} />
            ))}
          </div>
          <div className="pd-main-img">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="pd-info">
          <h1>{product.name}</h1>
          <p className="pd-reviews">({product.reviews ?? 0} reviews)</p>
          <div className="pd-prices">
            {oldPriceNum > 0 && (
              <span className="pd-old">₹{oldPriceNum.toLocaleString()}</span>
            )}
            <span className="pd-current">₹{newPriceNum.toLocaleString()}</span>
          </div>
          <p className="pd-description">{product.description}</p>

          <div className="pd-size">
            <div className="pd-size-header">
              <h3>Select Size</h3>
              <button onClick={() => setShowChart(true)}>Size Chart 📏</button>
            </div>
            <div className="pd-sizes">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`pd-size-btn ${
                    size === selectedSize ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            className={`pd-add ${isAdded ? 'pd-added' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? '✔️ ADDED' : 'ADD TO CART'}
          </button>

          <p className="pd-category">
            Category: <strong>{product.category}</strong>
          </p>
        </div>
      </div>

      {showChart && (
        <div className="pd-size-chart-modal" onClick={() => setShowChart(false)}>
          <div
            className="pd-size-chart-content"
            onClick={e => e.stopPropagation()}
          >
            <h2>Size Chart</h2>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Sizes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Footwear</td>
                  <td>6, 7, 8, 9, 10</td>
                </tr>
                <tr>
                  <td>Bottomwear</td>
                  <td>28, 30, 32, 34, 36, 38</td>
                </tr>
                <tr>
                  <td>Clothing</td>
                  <td>S, M, L, XL</td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => setShowChart(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
