
//final

// import React, { useContext, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { CartContext } from '../../Context/CartContext';
// import { products as dataProducts } from '../Assets/Data';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './PopularProductDetail.css';

// const PopularProductDetail = () => {
//   const { id } = useParams();
//   const { addToCart } = useContext(CartContext);
//   const [isAdded, setIsAdded] = useState(false);
//   const [selectedSize, setSelectedSize] = useState('');

//   const product = dataProducts.find((product) => product.id === Number(id));

//   if (!product) {
//     return (
//       <div className="product-not-found">
//         <h2>Sorry, this product doesn't exist.</h2>
//         <button onClick={() => window.history.back()}>Go Back</button>
//       </div>
//     );
//   }

//   const getSizeOptions = (product) => {
//     const name = product.name.toUpperCase();
//     if (name.includes('JEANS') || name.includes('PANTS')) {
//       return ['32', '34', '36', '38', '40'];
//     } else if (name.includes('BOOTS') || name.includes('SHOES')) {
//       return ['6', '7', '8', '9', '10'];
//     } else if (name.includes('SHIRT') || name.includes('JACKET') || name.includes('CORD SET')) {
//       return ['S', 'M', 'L', 'XL'];
//     }
//     return [];
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       alert('Please select a size');
//       return;
//     }
//     const productWithSize = { ...product, selectedSize };
//     addToCart(productWithSize);
//     toast.success('Item added to cart!', {
//       position: 'top-right',
//       autoClose: 1500,
//     });
//     setIsAdded(true);
//   };

//   const sizeOptions = getSizeOptions(product);

//   // Filter out the current product for the related auto-scroll
//   const otherProducts = dataProducts.filter((p) => p.id !== product.id);

//   return (
//     <div className="product-detail-page">
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>

//       <div className="product-detail-info">
//         <h1>{product.name}</h1>
//         <p className="product-description">{product.description}</p>

//         <div className="price-section">
//           <span className="price-label">Price: </span>
//           <span className="old-price">₹{product.old_price}</span>
//           <span className="new-price">₹{product.new_price}</span>
//         </div>

//         {sizeOptions.length > 0 && (
//           <div className="size-selector">
//             <label>Select Size:</label>
//             <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
//               <option value="">-- Select --</option>
//               {sizeOptions.map((size) => (
//                 <option key={size} value={size}>{size}</option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div className="button-section">
//           <button
//             className="add-to-cart-btn"
//             onClick={handleAddToCart}
//             disabled={!selectedSize}
//           >
//             {isAdded ? 'Added ✔' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>

//       {/* Auto-scrolling other products */}
      
//       <div className="popular-scroll-wrapper">
        
//       <h2 className="section-title"> OTHER POPULAR PRODUCTS...</h2>

//         <div className="popular-scroll">
//           <div className="popular-track">
//             {[...otherProducts, ...otherProducts].map((item, index) => (
//               <div key={index} className="popular-product-card">
//                 <img src={item.image} alt={item.name} />
//                 <h3>{item.name}</h3>
//                 <p>₹{item.new_price}</p>
//                 <button
//                   className="view-button"
//                   onClick={() => window.location.href = `/popular/${item.id}`}
//                 >
//                   View Product
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularProductDetail;


import React, { useContext, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { products as dataProducts } from '../Assets/Data';
import allProducts from '../Assets/All_products';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PopularProductDetail.css';

const PopularProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  // Destructure from location.state
  const {
    collectionType,
    products: passedProducts,
  } = location.state || {};

  // Decide the data source
  let productList = [];

  if (collectionType === 'new_collection' && passedProducts) {
    productList = passedProducts;
  } else if (collectionType === 'all_products') {
    productList = allProducts;
  } else {
    productList = dataProducts; // Default fallback
  }

  const product = productList.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Sorry, this product doesn't exist.</h2>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    );
  }

  const getSizeOptions = (product) => {
    const name = product.name.toUpperCase();
    if (name.includes('JEANS') || name.includes('PANTS')) {
      return ['32', '34', '36', '38', '40'];
    } else if (name.includes('BOOTS') || name.includes('SHOES')) {
      return ['6', '7', '8', '9', '10'];
    } else if (name.includes('SHIRT') || name.includes('JACKET') || name.includes('CORD SET')) {
      return ['S', 'M', 'L', 'XL'];
    }
    return [];
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    const productWithSize = { ...product, selectedSize };
    addToCart(productWithSize);
    // toast.success('Item added to cart!', {
    //   position: 'top-right',
    //   autoClose: 1500,
    // });
    setIsAdded(true);
  };

  const sizeOptions = getSizeOptions(product);

  const otherProducts = productList.filter((p) => p.id !== product.id);

  return (
    <div className="product-detail-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>

        <div className="price-section">
          <span className="price-label">Price: </span>
          <span className="old-price">₹{product.old_price}</span>
          <span className="new-price">₹{product.new_price}</span>
        </div>

        {sizeOptions.length > 0 && (
          <div className="size-selector">
            <label>Select Size:</label>
            <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
              <option value="">-- Select --</option>
              {sizeOptions.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        <div className="button-section">
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={!selectedSize}
          >
            {isAdded ? 'Added ✔' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Auto-scrolling other products */}
      <div className="popular-scroll-wrapper">
        <h2 className="section-title"> YOU MAY ALSO LIKE...</h2>
        <div className="popular-scroll">
          <div className="popular-track">
            {[...otherProducts, ...otherProducts].map((item, index) => (
              <div key={index} className="popular-product-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>₹{item.new_price}</p>
                <button
                  className="view-button"
                  onClick={() =>
                    window.location.href = `/product/${item.id}`
                  }
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProductDetail;
