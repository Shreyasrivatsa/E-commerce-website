
// final2
// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { products as dataProducts } from '../Components/Assets/Data';
// import allProducts from '../Components/Assets/All_products';
// import newCollections from '../Components/Assets/new_collections';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const storedCart = localStorage.getItem('cartItems');
//     return storedCart ? JSON.parse(storedCart) : [];
//   });
  



//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const getProductById = (id) => {
//     id = String(id);
//     let product = dataProducts.find((p) => String(p.id) === id);
//     if (!product) {
//       product = allProducts.find((p) => String(p.id) === id);
//     }
//     if (!product) {
//       product = newCollections.find((p) => String(p.id) === id);
//     }
//     return product;
//   };

//   const addToCart = (product) => {
//     const exists = cartItems.find(
//       (item) => String(item.id) === String(product.id) && item.selectedSize === product.selectedSize
//     );

//     if (exists) {
//       setCartItems((prev) =>
//         prev.map((item) =>
//           String(item.id) === String(product.id) && item.selectedSize === product.selectedSize
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//       toast.info('Increased quantity in cart!');
//     } else {
//       setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
//       toast.success('Item added to cart!');
//     }
//   };

//   const removeFromCart = (productId, selectedSize) => {
//     setCartItems((prev) =>
//       prev.filter(
//         (item) =>
//           String(item.id) !== String(productId) || item.selectedSize !== selectedSize
//       )
//     );
//     toast.error('Item removed from cart!');
//   };

//   const increaseQuantity = (productId, selectedSize) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         String(item.id) === String(productId) && item.selectedSize === selectedSize
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQuantity = (productId, selectedSize) => {
//     setCartItems((prevItems) =>
//       prevItems
//         .map((item) => {
//           if (
//             String(item.id) === String(productId) &&
//             item.selectedSize === selectedSize
//           ) {
//             if (item.quantity > 1) {
//               return { ...item, quantity: item.quantity - 1 };
//             } else {
//               toast.error('Item removed from cart!');
//               return null;
//             }
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//   };

//   const getTotalCartItems = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//         getTotalCartItems,
//         getProductById,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products as dataProducts } from '../Components/Assets/Data';
import allProducts from '../Components/Assets/All_products';
import newCollections from '../Components/Assets/new_collections';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const getProductById = (id) => {
    id = String(id);
    let product = dataProducts.find((p) => String(p.id) === id);
    if (!product) {
      product = allProducts.find((p) => String(p.id) === id);
    }
    if (!product) {
      product = newCollections.find((p) => String(p.id) === id);
    }
    return product;
  };

  const addToCart = (product) => {
    const exists = cartItems.find(
      (item) => String(item.id) === String(product.id) && item.selectedSize === product.selectedSize
    );

    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          String(item.id) === String(product.id) && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.info('Increased quantity in cart!');
    } else {
      setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success('Item added to cart!');
    }
  };

  const removeFromCart = (productId, selectedSize) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          String(item.id) !== String(productId) || item.selectedSize !== selectedSize
      )
    );
    toast.error('Item removed from cart!');
  };

  const increaseQuantity = (productId, selectedSize) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        String(item.id) === String(productId) && item.selectedSize === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId, selectedSize) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (
            String(item.id) === String(productId) &&
            item.selectedSize === selectedSize
          ) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              toast.error('Item removed from cart!');
              return null;
            }
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // <<<<<< Add this function <<<<<
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalCartItems,
        getProductById,
        clearCart,   // <---- Provide it here
      }}
    >
      {children}
    </CartContext.Provider>
  );
};




