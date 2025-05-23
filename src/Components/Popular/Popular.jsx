


// // import React, { useContext } from 'react';
// // import { Link } from 'react-router-dom'; // For navigation
// // import { CartContext } from '../../Context/CartContext';

// // import { products as dataProducts } from '../../Components/Assets/Data'; // Your product data

// // const Popular = () => {
// //   const { addToCart } = useContext(CartContext); // Get the addToCart function from context

// //   const handleAddToCart = (product) => {
// //     addToCart(product); // Add product to cart
// //   };

// //   // Duplicate the products array to make the carousel loop infinitely
// //   const duplicateProducts = [...dataProducts, ...dataProducts]; 

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Popular Products</h1>

// //       {/* Flexbox container with animation */}
// //       <div
// //         style={{
// //           display: 'flex',
// //           flexDirection: 'row',
// //           gap: '20px',
// //           padding: '10px',
// //           overflow: 'hidden', // Hide the overflowing part
// //         }}
// //       >
// //         {/* Animated track */}
// //         <div
// //           style={{
// //             display: 'flex',
// //             animation: 'scroll-left 30s linear infinite', // Apply scrolling animation
// //           }}
// //         >
// //           {duplicateProducts.map((product) => (
// //             <div
// //               key={product.id}
// //               style={{
// //                 flex: '0 0 auto', // Prevent shrinking and ensure uniform width
// //                 width: '250px',
// //                 textAlign: 'center',
// //                 backgroundColor: 'white',
// //                 border: '1px solid #ddd',
// //                 borderRadius: '10px',
// //                 padding: '10px',
// //               }}
// //             >
// //               <img
// //                 src={product.image}
// //                 alt={product.name}
// //                 style={{
// //                   width: '100%',
// //                   height: '250px',
// //                   objectFit: 'cover',
// //                   borderRadius: '8px',
// //                 }}
// //               />
// //               <h3>{product.name}</h3>
// //               <p>₹{product.new_price}</p> {/* Price in ₹ */}

// //               {/* Link to view the product details */}
// //               <Link to={`/popular-product/${product.id}`}>
// //                 <button
// //                   style={{
// //                     padding: '5px 10px',
// //                     marginTop: '10px',
// //                     backgroundColor: '#2196F3',
// //                     color: 'white',
// //                     border: 'none',
// //                     borderRadius: '5px',
// //                   }}
// //                 >
// //                   View Details 
// //                 </button>
// //               </Link>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* CSS for the animation */}
// //       <style>
// //         {`
// //           @keyframes scroll-left {
// //             0% { transform: translateX(0); }
// //             100% { transform: translateX(-50%); }
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default Popular;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../../Context/CartContext';
// import { products as dataProducts } from '../../Components/Assets/Data';

// const Popular = () => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//   };

//   const duplicateProducts = [...dataProducts, ...dataProducts];

//   return (
//     <div
//       style={{
//         padding: '40px',
//         background: 'linear-gradient(135deg, #F8C8D5, #A0D8D3)',
//         minHeight: '100vh',
//       }}
//     >
//       <h1
//         style={{
//           textAlign: 'center',
//           fontSize: '3rem',
//           color: '#fff',
//           fontFamily: 'Georgia, serif',
//           marginBottom: '40px',
//           textShadow: '2px 2px 6px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         Popular Products
//       </h1>

//       <div
//         style={{
//           display: 'flex',
//           overflow: 'hidden',
//         }}
//       >
//         <div
//           style={{
//             display: 'flex',
//             animation: 'scroll-left 35s linear infinite',
//             gap: '30px',
//           }}
//         >
//           {duplicateProducts.map((product) => (
//             <div
//               key={product.id}
//               style={{
//                 flex: '0 0 auto',
//                 width: '240px',
//                 backgroundColor: 'white',
//                 borderRadius: '20px',
//                 padding: '15px',
//                 boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
//                 textAlign: 'center',
//                 transition: 'transform 0.3s ease',
//               }}
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 style={{
//                   width: '100%',
//                   height: '220px',
//                   objectFit: 'cover',
//                   borderRadius: '15px',
//                 }}
//               />
//               <h3 style={{ fontFamily: 'Georgia, serif', margin: '10px 0', color: '#444' }}>
//                 {product.name}
//               </h3>
//               <p style={{ color: '#E91E63', fontWeight: 'bold', fontSize: '1.1rem' }}>
//                 ₹{product.new_price}
//               </p>

//               <Link to={`/popular-product/${product.id}`}>
//                 <button
//                   style={{
//                     padding: '10px 20px',
//                     marginTop: '12px',
//                     backgroundColor: '#A0D8D3',
//                     color: '#fff',
//                     border: 'none',
//                     borderRadius: '50px',
//                     fontWeight: 'bold',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                   }}
//                 >
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes scroll-left {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Popular;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { products as dataProducts } from '../../Components/Assets/Data';

const Popular = () => {
  const { addToCart } = useContext(CartContext);
  const duplicateProducts = [...dataProducts, ...dataProducts];

  return (
    <div
      style={{
        padding: '40px 0',
        background: 'linear-gradient(135deg, #F8C8D5, #A0D8D3)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '3rem',
          color: '#fff',
          fontFamily: 'Georgia, serif',
          marginBottom: '40px',
          textShadow: '2px 2px 6px rgba(0,0,0,0.2)',
        }}
      >
        Popular Products
      </h1>

      {/* Outer viewport */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          alignItems: 'center',    // center cards vertically
          padding: '20px 0',        // give some vertical breathing space
        }}
      >
        {/* Scrolling track */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start', // let cards size naturally
            gap: '30px',
            animation: 'scroll-left 35s linear infinite',
          }}
        >
          {duplicateProducts.map((product) => (
            <div
              key={product.id}
              style={{
                width: '240px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                padding: '15px',
                boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {/* Image wrapper */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px', 
                  borderRadius: '15px',
                  border: '1px solid #eee',
                  background: '#fafafa',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    maxHeight: '160px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '12px',
                  }}
                />
              </div>

              {/* Info */}
              <h3 style={{ margin: 0, color: '#444', fontFamily: 'Georgia, serif' }}>
                {product.name}
              </h3>
              <p style={{ margin: 0, color: '#E91E63', fontWeight: 'bold' }}>
                ₹{product.new_price}
              </p>
              <Link to={`/popular-product/${product.id}`}>
                <button
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#A0D8D3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop: 'auto', // push button to bottom
                  }}
                >
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Popular;
