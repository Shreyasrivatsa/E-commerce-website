

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './newcollection.css';
// import new_collection from '../Assets/new_collections';

// const Newcollection = () => {
//   const items = [...new_collection, ...new_collection];

//   // Size category logic
//   const topwear = ['T-shirt', 'Shirt', 'Jacket', 'Hoodie', 'Peplum Top'];
//   const bottomwear = ['Pant', 'Trouser', 'Jeans', 'Leggings'];
//   const footwear = ['Shoes', 'Boots', 'Sandals'];

//   // Function to get sizes dynamically
//   const getSizes = (category) => {
//     if (topwear.includes(category)) return ['S', 'M', 'L', 'XL'];
//     if (bottomwear.includes(category)) return ['32', '34', '36', '38', '40'];
//     if (footwear.includes(category)) return ['6', '7', '8', '9', '10'];
//     return []; // default if category is missing
//   };

//   return (
//     <div
//       style={{
//         padding: '40px 0',
//         background: 'linear-gradient(135deg, #F8C8D5, #A0D8D3)',
//       }}
//     >
//       <h1
//         style={{
//           textAlign: 'center',
//           fontSize: '3rem',
//           color: '#fff',
//           fontFamily: 'Georgia, serif',
//           marginBottom: '40px',
//           textShadow: '2px 2px 6px rgba(0,0,0,0.2)',
//         }}
//       >
//         New Collections
//       </h1>

//       {/* Scrollable wrapper */}
//       <div
//         style={{
//           display: 'flex',
//           overflow: 'hidden',
//           alignItems: 'center',
//           padding: '20px 0',
//         }}
//       >
//         {/* Scrolling track */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'flex-start',
//             gap: '30px',
//             animation: 'scroll-left 35s linear infinite',
//           }}
//         >
//           {items.map((item, i) => {
//             const sizes = getSizes(item.category || '');

//             return (
//               <div
//                 key={i}
//                 style={{
//                   width: '260px',
//                   minHeight: '355px',
//                   backgroundColor: '#fff',
//                   borderRadius: '20px',
//                   padding: '20px',
//                   boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
//                   textAlign: 'center',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 {/* Image */}
//                 <div
//                   style={{
//                     height: '180px',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     border: '1px solid #eee',
//                     borderRadius: '15px',
//                     background: '#fafafa',
//                     marginBottom: '15px',
//                   }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     style={{
//                       maxHeight: '150px',
//                       maxWidth: '100%',
//                       objectFit: 'contain',
//                       borderRadius: '12px',
//                     }}
//                   />
//                 </div>

//                 {/* Name */}
//                 <h3
//                   style={{
//                     margin: '10px 0 5px',
//                     fontSize: '1.1rem',
//                     fontWeight: '600',
//                     color: '#333',
//                     fontFamily: 'Georgia, serif',
//                   }}
//                 >
//                   {item.name}
//                 </h3>

//                 {/* Price */}
//                 <p
//                   style={{
//                     margin: '5px 0',
//                     color: '#E91E63',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   ₹{item.new_price}
//                 </p>

//                 {/* Sizes (hidden here, shown on product detail page) */}
//                 {/* Removed sizes display from here */}

//                 {/* Button */}
//                 <Link to={`/product/${item.id}`}>
//                   <button
//                     style={{
//                       padding: '10px 20px',
//                       backgroundColor: '#A0D8D3',
//                       color: '#fff',
//                       border: 'none',
//                       borderRadius: '50px',
//                       fontWeight: 'bold',
//                       cursor: 'pointer',
//                       marginTop: 'auto',
//                     }}
//                   >
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Inline keyframes animation */}
//       <style>{`
//         @keyframes scroll-left {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Newcollection;


import React from 'react';
import { Link } from 'react-router-dom';
import './newcollection.css'; // Import the new collection styles
import new_collection from '../Assets/new_collections';

const Newcollection = () => {
  const items = [...new_collection, ...new_collection];


  const topwear = ['T-shirt', 'Shirt', 'Hoodie', 'Peplum Top'];
  const bottomwear = ['Pant', 'Trouser', 'Jeans', 'Leggings'];
  const footwear = ['Shoes', 'Boots', 'Sandals'];
  const outerwear = ['Jacket', 'Bomber Jacket', 'Coat', 'Puffer Jacket', 'Leather Jacket'];

 
  const getSizes = (category) => {
    if (topwear.includes(category)) return ['S', 'M', 'L', 'XL'];
    if (bottomwear.includes(category)) return ['32', '34', '36', '38', '40'];
    if (footwear.includes(category)) return ['6', '7', '8', '9', '10'];
    if (outerwear.includes(category)) return ['S', 'M', 'L', 'XL']; // Size options for jackets
    return []; 
  };

  return (
    <div className="newcollection-container">
      <h1 className="newcollection-title">
        New Collections
      </h1>

      {/* Scrollable wrapper */}
      <div className="scrollable-wrapper">
        {/* Scrolling track */}
        <div className="scrollable-track">
          {items.map((item, i) => {
            const sizes = getSizes(item.category || '');

            return (
              <div key={i} className="newcollection-item">
                {/* Image */}
                <div className="item-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                </div>

                {/* Name */}
                <h3 className="item-name">
                  {item.name}
                </h3>

                {/* Price */}
                <p className="item-price">
                  ₹{item.new_price}
                </p>

                {/* Button to pass size details */}
                <Link
                        to={{
                          pathname: `/product/${item.id}`,
                          state: {
                            sizes: sizes,
                            collectionType: 'new_collection', // ✅ Pass this so we know source dataset
                            products: items,                 // ✅ Complete list of products to pass
                            currentIndex: i,                 // ✅ For scrolling suggestions, optional
                          },
                        }}
                      >
                        <button className="view-details-button">View Details</button>
                      </Link>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Newcollection;

