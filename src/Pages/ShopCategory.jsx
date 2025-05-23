

// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { DataProductContext } from '../Context/DataProductContext';
// import { AllProductContext } from '../Context/AllProductContext';
// import './CSS/ShopCategory.css';

// const ShopCategory = ({ category, banner }) => {
//   const products = useContext(DataProductContext);
//   const allProducts = useContext(AllProductContext);

//   useEffect(() => {
//     console.log('Category:', category);
//     console.log('Products from context:', products);
//     console.log('All Products from context:', allProducts);
//   }, [category, products, allProducts]);

//   if (!category) {
//     return <p>Error: category prop is missing.</p>;
//   }

//   if (
//     (!products || !Array.isArray(products)) &&
//     (!allProducts || !Array.isArray(allProducts))
//   ) {
//     return <p>Error: products are not available yet.</p>;
//   }

//   const categoryProducts = [
//     ...products.filter(
//       (product) =>
//         product.category &&
//         product.category.toLowerCase() === category.toLowerCase()
//     ),
//     ...allProducts.filter(
//       (product) =>
//         product.category &&
//         product.category.toLowerCase() === category.toLowerCase()
//     ),
//   ];

//   return (
//     <div className="shop-category-container">
//       <img
//         src={banner}
//         alt={`${category} banner`}
//         className="category-banner"
//       />
//       <h2 className="category-heading">
//         {category.charAt(0).toUpperCase() + category.slice(1)} Products
//       </h2>

//       <div className="product-list">
//         {categoryProducts.length > 0 ? (
//           categoryProducts.map((product) => (
//             <div key={product.id} className="product-item">
//               <div className="image-wrapper">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image"
//                 />
//               </div>
//               <div className="product-details">
//                 <h3 className="product-name">{product.name}</h3>
//                 <p className="product-price">₹{product.new_price}</p>
//                 <Link to={`/product/${product.id}`} className="view-details-link">
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products available in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;


import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataProductContext } from '../Context/DataProductContext';
import { AllProductContext } from '../Context/AllProductContext';
import './CSS/ShopCategory.css';

const ShopCategory = ({ category, banner }) => {
  const products = useContext(DataProductContext);
  const allProducts = useContext(AllProductContext);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    console.log('Category:', category);
    console.log('Products from context:', products);
    console.log('All Products from context:', allProducts);
  }, [category, products, allProducts]);

  if (!category) {
    return <p>Error: category prop is missing.</p>;
  }

  if (
    (!products || !Array.isArray(products)) &&
    (!allProducts || !Array.isArray(allProducts))
  ) {
    return <p>Error: products are not available yet.</p>;
  }

  const categoryProducts = [
    ...products.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase() === category.toLowerCase()
    ),
    ...allProducts.filter(
      (product) =>
        product.category &&
        product.category.toLowerCase() === category.toLowerCase()
    ),
  ];

  const visibleProducts = showAll ? categoryProducts : categoryProducts.slice(0, 4);

  return (
    <div className="shop-category-container">
      <img
        src={banner}
        alt={`${category} banner`}
        className="category-banner"
      />
      <h2 className="category-heading">
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </h2>
      <div className="product-list">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.new_price}</p>
              <Link to={`/product/${product.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>

      {categoryProducts.length > 4 && (
        <button
          className="explore-button"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'Show Less' : 'Explore More'}
        </button>
      )}
    </div>
  );
};

export default ShopCategory;
