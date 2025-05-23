

// //f
// import React, { useContext, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { CartContext } from '../Context/CartContext';
// import { AllProductContext } from '../Context/AllProductContext';
// import { DataProductContext } from '../Context/DataProductContext';
// import { NewCollectionContext } from '../Context/NewCollectionContext'; // add this line

// import './CSS/Product.css';

// const Product = () => {
//   const { productId } = useParams();

//   const allProducts = useContext(AllProductContext) || [];
//   const dataProducts = useContext(DataProductContext) || [];
//   const newCollections = useContext(NewCollectionContext) || [];

//    const combined = [...allProducts, ...dataProducts, ...newCollections];


//   // const combined = [...allProducts, ...dataProducts];
//   const product = combined.find((p) => String(p.id) === String(productId));

//   const { addToCart, cartItems } = useContext(CartContext);
//   const [added, setAdded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [showError, setShowError] = useState(false);

//   if (!product) return <h2>Product not found!</h2>;

//   const { id, name, image, description, old_price, new_price, category } = product;

//   const productName = name.toLowerCase();

//   let sizeOptions = [];
// if (
//   productName.includes('jeans') ||
//   productName.includes('pants') ||
//   productName.includes('bottom') ||
//   productName.includes('trouser') ||
//   productName.includes('leggings')
// ) {
//   sizeOptions = ['28', '30', '32', '34'];
// } else if (
//   productName.includes('shirt') ||
//   productName.includes('top') ||
//   productName.includes('t-shirt') ||
//   productName.includes('kurti') ||
//   productName.includes('dress') ||
//   productName.includes('blazer') ||
//   productName.includes('crop top') ||
//   productName.includes('frock') ||
//   productName.includes('hoodie') ||
//   productName.includes('sweater') ||
//   productName.includes('cord set') ||
//   productName.includes('jacket') ||
//   productName.includes('coat')
// ) {
//   sizeOptions = ['S', 'M', 'L', 'XL'];
// } else if (
//   productName.includes('shoes') ||
//   productName.includes('sneaker') ||
//   productName.includes('footwear') ||
//   productName.includes('sandals') ||
//   productName.includes('boots') ||
//   productName.includes('flats') ||
//   productName.includes('heels')
// ) {
//   sizeOptions = ['6', '7', '8', '9', '10'];
// }

//   const isInCart = cartItems.some(
//     (item) => String(item.id) === String(id) && item.selectedSize === selectedSize
//   );

//   const handleAdd = () => {
//     if (sizeOptions.length > 0 && !selectedSize) {
//       setShowError(true);
//       return;
//     }

//     const productWithQuantity = { ...product, quantity, selectedSize };
//     addToCart(productWithQuantity);
//     setAdded(true);
//     setShowError(false);
//   };

//   // const handleSizeChange = (size) => {
//   //   setSelectedSize(size);
//   //   setShowError(false);
//   // };
   
//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//     setShowError(false);
  
//     const exists = cartItems.some(
//       (item) => String(item.id) === String(id) && item.selectedSize === size
//     );
  
//     setAdded(exists); // update "Added" state based on size
//   };
  
//   // Filter "You may also like" products by category
//      const relatedProducts = combined
//     .filter((p) => String(p.id) !== String(productId) && p.category === category)
//     .slice(0, 4);

    

//   return (
//     <div className="product-detail-page">
//       <img className="product-image" src={image} alt={name} />
//       <div className="product-detail-info">
//         <h1>{name}</h1>
//         <p className="product-description">{description || 'No description available.'}</p>

//         <div className="price-section">
//           {old_price && (
//             <p>
//               <span className="price-label">Old Price: </span>
//               <span className="old-price">₹{old_price}</span>
//             </p>
//           )}
//           <p>
//             <span className="price-label">New Price: </span>
//             <span className="new-price">₹{new_price}</span>
//           </p>
//         </div>

//         {sizeOptions.length > 0 && (
//           <div className="size-selection">
//             <span className="size-label">Select Size: </span>
//             <div className="size-buttons">
//               {sizeOptions.map((size) => (
//                 <button
//                   key={size}
//                   className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//                   onClick={() => handleSizeChange(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//             {showError && (
//               <p className="size-error">Please select a size before adding to cart.</p>
//             )}
//           </div>
//         )}

//         <div className="button-section">
//           <button
//             className={`add-to-cart-btn ${isInCart || added ? 'added' : ''}`}
//             onClick={handleAdd}
//             disabled={isInCart}
//           >
//             {isInCart || added ? 'Added ✔' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="related-products">
//         <h2>You may also like</h2>
//         <div className="related-product-list">
//           {relatedProducts.map((item) => (
//             <div key={item.id} className="related-product-card">
//               <Link to={`/product/${item.id}`}>
//                 <img src={item.image} alt={item.name} />
//               </Link>
//               <h4>{item.name}</h4>
//               <p>₹{item.new_price}</p>
//               <Link to={`/product/${item.id}`}>
//                 <button className="view-btn">View</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


//f
// import React, { useContext, useState } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { CartContext } from '../Context/CartContext';
// import { AllProductContext } from '../Context/AllProductContext';
// import { DataProductContext } from '../Context/DataProductContext';
// import { NewCollectionContext } from '../Context/NewCollectionContext';

// import './CSS/Product.css';

// const Product = () => {
//   const { productId } = useParams();
//   const navigate = useNavigate();

//   const allProducts = useContext(AllProductContext) || [];
//   const dataProducts = useContext(DataProductContext) || [];
//   const newCollections = useContext(NewCollectionContext) || [];

//   const combined = [...allProducts, ...dataProducts, ...newCollections];

//   const currentIndex = combined.findIndex((p) => String(p.id) === String(productId));
//   const product = combined[currentIndex];

//   const { addToCart, cartItems } = useContext(CartContext);
//   const [added, setAdded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [showError, setShowError] = useState(false);

//   if (!product) return <h2>Product not found!</h2>;

//   const { id, name, image, description, old_price, new_price, category } = product;

//   const productName = name.toLowerCase();

//   let sizeOptions = [];
//   if (
//     productName.includes('jeans') ||
//     productName.includes('pants') ||
//     productName.includes('bottom') ||
//     productName.includes('trouser') ||
//     productName.includes('leggings')
//   ) {
//     sizeOptions = ['28', '30', '32', '34'];
//   } else if (
//     productName.includes('shirt') ||
//     productName.includes('top') ||
//     productName.includes('t-shirt') ||
//     productName.includes('kurti') ||
//     productName.includes('dress') ||
//     productName.includes('blazer') ||
//     productName.includes('crop top') ||
//     productName.includes('frock') ||
//     productName.includes('hoodie') ||
//     productName.includes('sweater') ||
//     productName.includes('cord set') ||
//     productName.includes('jacket') ||
//     productName.includes('coat')
//   ) {
//     sizeOptions = ['S', 'M', 'L', 'XL'];
//   } else if (
//     productName.includes('shoes') ||
//     productName.includes('sneaker') ||
//     productName.includes('footwear') ||
//     productName.includes('sandals') ||
//     productName.includes('boots') ||
//     productName.includes('flats') ||
//     productName.includes('heels')
//   ) {
//     sizeOptions = ['6', '7', '8', '9', '10'];
//   }

//   const isInCart = cartItems.some(
//     (item) => String(item.id) === String(id) && item.selectedSize === selectedSize
//   );

//   const handleAdd = () => {
//     if (sizeOptions.length > 0 && !selectedSize) {
//       setShowError(true);
//       return;
//     }

//     const productWithQuantity = { ...product, quantity, selectedSize };
//     addToCart(productWithQuantity);
//     setAdded(true);
//     setShowError(false);
//   };

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//     setShowError(false);

//     const exists = cartItems.some(
//       (item) => String(item.id) === String(id) && item.selectedSize === size
//     );

//     setAdded(exists);
//   };

//   const relatedProducts = combined
//     .filter((p) => String(p.id) !== String(productId) && p.category === category)
//     .slice(0, 4);

//   // Navigate to Previous/Next product
//   const handlePrevNext = (direction) => {
//     const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
//     if (newIndex >= 0 && newIndex < combined.length) {
//       const nextProduct = combined[newIndex];
//       navigate(`/product/${nextProduct.id}`);
//     }
//   };

//   return (
//     <div className="product-detail-page">
//       <img className="product-image" src={image} alt={name} />
//       <div className="product-detail-info">
//         <h1>{name}</h1>
//         <p className="product-description">{description || 'No description available.'}</p>

//         <div className="price-section">
//           {old_price && (
//             <p>
//               <span className="price-label">Old Price: </span>
//               <span className="old-price">₹{old_price}</span>
//             </p>
//           )}
//           <p>
//             <span className="price-label">New Price: </span>
//             <span className="new-price">₹{new_price}</span>
//           </p>
//         </div>

//         {sizeOptions.length > 0 && (
//           <div className="size-selection">
//             <span className="size-label">Select Size: </span>
//             <div className="size-buttons">
//               {sizeOptions.map((size) => (
//                 <button
//                   key={size}
//                   className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//                   onClick={() => handleSizeChange(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//             {showError && (
//               <p className="size-error">Please select a size before adding to cart.</p>
//             )}
//           </div>
//         )}

//         <div className="button-section">
//           <button
//             className={`add-to-cart-btn ${isInCart || added ? 'added' : ''}`}
//             onClick={handleAdd}
//             disabled={isInCart}
//           >
//             {isInCart || added ? 'Added ✔' : 'Add to Cart'}
//           </button>
//         </div>

//         {/* 👇 Previous / Next buttons */}
//         <div className="prev-next-buttons">
//           <button
//             onClick={() => handlePrevNext('prev')}
//             disabled={currentIndex <= 0}
//             className="nav-btn1"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => handlePrevNext('next')}
//             disabled={currentIndex >= combined.length - 1}
//             className="nav-btn2"
//           >
//             Next 
//           </button>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="related-products">
//         <h2>You may also like</h2>
//         <div className="related-product-list">
//           {relatedProducts.map((item) => (
//             <div key={item.id} className="related-product-card">
//               <Link to={`/product/${item.id}`}>
//                 <img src={item.image} alt={item.name} />
//               </Link>
//               <h4>{item.name}</h4>
//               <p>₹{item.new_price}</p>
//               <Link to={`/product/${item.id}`}>
//                 <button className="view-btn">View</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;


import React, { useContext, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { AllProductContext } from '../Context/AllProductContext';
import { DataProductContext } from '../Context/DataProductContext';
import { NewCollectionContext } from '../Context/NewCollectionContext';

import './CSS/Product.css';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const allProducts = useContext(AllProductContext) || [];
  const dataProducts = useContext(DataProductContext) || [];
  const newCollections = useContext(NewCollectionContext) || [];

  const combined = [...allProducts, ...dataProducts, ...newCollections];

  const currentIndex = combined.findIndex((p) => String(p.id) === String(productId));
  const product = combined[currentIndex];

  const { addToCart, cartItems } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [showError, setShowError] = useState(false);

  if (!product) return <h2>Product not found!</h2>;

  const { id, name, image, description, old_price, new_price, category } = product;

  const productName = name.toLowerCase();

  let sizeOptions = [];
  if (
    productName.includes('jeans') ||
    productName.includes('pants') ||
    productName.includes('bottom') ||
    productName.includes('trouser') ||
    productName.includes('leggings')
  ) {
    sizeOptions = ['28', '30', '32', '34'];
  } else if (
    productName.includes('shirt') ||
    productName.includes('top') ||
    productName.includes('t-shirt') ||
    productName.includes('kurti') ||
    productName.includes('dress') ||
    productName.includes('blazer') ||
    productName.includes('crop top') ||
    productName.includes('frock') ||
    productName.includes('hoodie') ||
    productName.includes('sweater') ||
    productName.includes('cord set') ||
    productName.includes('jacket') ||
    productName.includes('coat')
  ) {
    sizeOptions = ['S', 'M', 'L', 'XL'];
  } else if (
    productName.includes('shoes') ||
    productName.includes('sneaker') ||
    productName.includes('footwear') ||
    productName.includes('sandals') ||
    productName.includes('boots') ||
    productName.includes('flats') ||
    productName.includes('heels')
  ) {
    sizeOptions = ['6', '7', '8', '9', '10'];
  }

  const isInCart = cartItems.some(
    (item) => String(item.id) === String(id) && item.selectedSize === selectedSize
  );

  const handleAdd = () => {
    if (sizeOptions.length > 0 && !selectedSize) {
      setShowError(true);
      return;
    }

    const productWithQuantity = { ...product, quantity, selectedSize };
    addToCart(productWithQuantity);
    setAdded(true);
    setShowError(false);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setShowError(false);

    const exists = cartItems.some(
      (item) => String(item.id) === String(id) && item.selectedSize === size
    );

    setAdded(exists);
  };

  // ✅ Updated Related Products Logic
  let relatedProducts = [];

  const isFromNewCollection = newCollections.some(
    (item) => String(item.id) === String(productId)
  );

  if (isFromNewCollection) {
    // Show other new collection products
    relatedProducts = newCollections.filter(
      (p) => String(p.id) !== String(productId)
    );
  } else {
    // Show same-category products from combined
    relatedProducts = combined.filter(
      (p) =>
        String(p.id) !== String(productId) &&
        p.category === category
    ).slice(0, 4);
  }

  // 👇 Navigate to Previous/Next product
  const handlePrevNext = (direction) => {
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < combined.length) {
      const nextProduct = combined[newIndex];
      navigate(`/product/${nextProduct.id}`);
    }
  };

  return (
    <div className="product-detail-page">
      <img className="product-image" src={image} alt={name} />
      <div className="product-detail-info">
        <h1>{name}</h1>
        <p className="product-description">{description || 'No description available.'}</p>

        <div className="price-section">
          {old_price && (
            <p>
              <span className="price-label">Old Price: </span>
              <span className="old-price">₹{old_price}</span>
            </p>
          )}
          <p>
            <span className="price-label">New Price: </span>
            <span className="new-price">₹{new_price}</span>
          </p>
        </div>

        {sizeOptions.length > 0 && (
          <div className="size-selection">
            <span className="size-label">Select Size: </span>
            <div className="size-buttons">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            {showError && (
              <p className="size-error">Please select a size before adding to cart.</p>
            )}
          </div>
        )}

        <div className="button-section">
          <button
            className={`add-to-cart-btn ${isInCart || added ? 'added' : ''}`}
            onClick={handleAdd}
            disabled={isInCart}
          >
            {isInCart || added ? 'Added ✔' : 'Add to Cart'}
          </button>
        </div>

        {/* 👇 Previous / Next buttons */}
        <div className="prev-next-buttons">
          <button
            onClick={() => handlePrevNext('prev')}
            disabled={currentIndex <= 0}
            className="nav-btn1"
          >
            Previous
          </button>
          <button
            onClick={() => handlePrevNext('next')}
            disabled={currentIndex >= combined.length - 1}
            className="nav-btn2"
          >
            Next
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products">
        <h2>YOU MAY ALSO LIKE ...</h2>
        <div className="related-product-list">
          {relatedProducts.map((item) => (
            <div key={item.id} className="related-product-card">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <h4>{item.name}</h4>
              <p>₹{item.new_price}</p>
              <Link to={`/product/${item.id}`}>
                <button className="view-btn">View</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
