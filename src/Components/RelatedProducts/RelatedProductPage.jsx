

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from '../Assets/Data';
// import './RelatedProductPage.css';

// const RelatedProductPage = () => {
//   const { relatedProductId } = useParams();
//   const product = products.find(p => p.id === Number(relatedProductId));

//   if (!product) return <div>Product Not Found</div>;

//   return (
//     <div className="related-product-page">
//       <div className="related-product-container">
        
//         <div className="product-image">
//           <img src={product.image} alt={product.name} />
//         </div>

       
//         <div className="product-info">
//           <h1>{product.name}</h1>

          
//           {/* <div className="product-rating">
//             <span>⭐</span>
//             <span>⭐</span>
//             <span>⭐</span>
//             <span>⭐</span>
//             <span>☆</span> 
//             <span className="rating-count">(122)</span>
//           </div> */}

//           <h2>{product.new_price} <span className="old-price">{product.old_price}</span></h2>
//           <p>{product.description}</p>

//           <div className="size-select">
//             <h3>Select Size</h3>
//             <div className="size-buttons">
//               <button>S</button>
//               <button>M</button>
//               <button>L</button>
//               <button>XL</button>
//               <button>XXL</button>
//             </div>
//             <button className="add-to-cart">ADD TO CART</button>
//           </div>

//           <div className="category">
//             <span>Category:</span> Women, T-shirt, Crop top
//           </div>
//           <div className="tags">
//             <span>Tags:</span> Modern, Latest
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RelatedProductPage;


// RelatedProductPage.jsx
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Assets/Data';
import { CartContext } from '../../Context/CartContext'; // 🔹 Import CartContext
import './RelatedProductPage.css';

const RelatedProductPage = () => {
  const { relatedProductId } = useParams();
  const product = products.find(p => p.id === Number(relatedProductId));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext); // 🔹 Use context

  if (!product) return <div>Product Not Found</div>;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
    // 🔹 Call addToCart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id);
    }
    alert(`${product.name} (x${quantity}) added to cart!`);
  };

  const handleBuyNow = () => {
    alert(`You are buying ${quantity} of ${product.name} for ₹${product.new_price * quantity}`);
  };

  return (
    <div className="related-product-page">
      <div className="related-product-container">

        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <h2>₹{product.new_price} <span className="old-price">₹{product.old_price}</span></h2>
          <p>{product.description}</p>

          <div className="size-select">
            <h3>Select Size</h3>
            <div className="size-buttons">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>

          <div className="quantity-control">
            <h3>Quantity</h3>
            <div className="quantity-buttons">
              <button onClick={decrementQuantity} disabled={quantity === 1}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>

          <div className="cart-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>

          <div className="category">
            <span>Category:</span> Women, T-shirt, Crop top
          </div>
          <div className="tags">
            <span>Tags:</span> Modern, Latest
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductPage;
