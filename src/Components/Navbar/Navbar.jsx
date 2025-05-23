


// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import './Navbar.css';
// import logo from '../Assets/logo.jpg';
// import cartIcon from '../Assets/cart.png';
// import { CartContext } from '../../Context/CartContext';

// const Navbar = () => {
//   const { getTotalCartItems } = useContext(CartContext); // Accessing cart data from context
//   const cartCount = getTotalCartItems(); // Get the total count of items in the cart

//   return (
//     <header className="navbar">
//       {/* Left section: Logo and Brand */}
//       <Link to="/" className="navbar__left">
//         <img src={logo} alt="Logo" className="navbar__logo" />
//         <span className="navbar__brand">VastraVogue</span>
//       </Link>

//       {/* Center section: Navigation Links */}
//       <nav className="navbar__center">
//         <NavLink to="/" end className="navbar__link">SHOP</NavLink>
//         <NavLink to="/mens" className="navbar__link">MEN</NavLink>
//         <NavLink to="/womens" className="navbar__link">WOMEN</NavLink>
//         <NavLink to="/kids" className="navbar__link">KIDS</NavLink>
//       </nav>

//       {/* Right section: Cart Icon */}
//       <div className="navbar__right">
//         <Link to="/cart" className="navbar__cart">
//           <img src={cartIcon} alt="Cart" className="navbar__cart-icon" />
//           {/* Conditionally render the cart count badge if there are items in the cart */}
//           {cartCount > 0 && (
//             <span className="navbar__cart-badge">{cartCount}</span>
//           )}
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// final2
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cartIcon from '../Assets/cart.png';
import { CartContext } from '../../Context/CartContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(CartContext); // Accessing cart data from context
  const cartCount = getTotalCartItems(); // Get the total count of items in the cart

  return (
    <header className="navbar">
      {/* Left section: Logo and Brand */}
      <Link to="/" className="navbar__left">
        <img src={logo} alt="Logo" className="navbar__logo" />
        <span className="navbar__brand">VastraVogue</span>
      </Link>

      {/* Center section: Navigation Links */}
      <nav className="navbar__center">
        <NavLink to="/" end className="navbar__link">SHOP</NavLink>
        <NavLink to="/mens" className="navbar__link">MEN</NavLink>
        <NavLink to="/womens" className="navbar__link">WOMEN</NavLink>
        <NavLink to="/kids" className="navbar__link">KIDS</NavLink>
      </nav>

      {/* Right section: Cart Icon */}
      <div className="navbar__right">
        <Link to="/cart" className="navbar__cart">
          <img src={cartIcon} alt="Cart" className="navbar__cart-icon" />
          {/* Conditionally render the cart count badge if there are items in the cart */}
          {cartCount > 0 && (
            <span className="navbar__cart-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

