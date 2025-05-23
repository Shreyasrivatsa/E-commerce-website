import React, { useContext, useEffect, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { All_products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [selectedSizes, setSelectedSizes] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('cartItemSizes');
    if (saved) setSelectedSizes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItemSizes', JSON.stringify(selectedSizes));
  }, [selectedSizes]);

  const handleSizeChange = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  return (
    <div className='cartitems'>
      <div className="cartitems-row header">
        <p>Product</p>
        <p>Title & Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />

      {All_products.length === 0 && <p>Loading Products...</p>}

      {All_products.map(product => {
        const qty = cartItems[product.id] || 0;
        if (qty === 0) return null;

        const lower = product.name.toLowerCase();
        const isShoe = ['shoe', 'sandal', 'sneaker', 'boot'].some(t => lower.includes(t));
        const sizes = isShoe ? [6,7,8,9,10] : ['S','M','L','XL'];

        return (
          <React.Fragment key={product.id}>
            <div className="cartitems-row">
              <div className="product-col">
                <img src={product.image} alt={product.name} className="carticon-product-icon" />
              </div>

              <div className="title-size-col">
                <p className="product-name">{product.name}</p>
                <select
                  className="cartitems-size-dropdown"
                  value={selectedSizes[product.id] || ''}
                  onChange={e => handleSizeChange(product.id, e.target.value)}
                >
                  <option value="" disabled>Select Size</option>
                  {sizes.map(sz => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>

              <div className="price-col">
                <p>₹{product.new_price.toLocaleString()}</p>
              </div>

              <div className="quantity-col">
                <button onClick={() => removeFromCart(product.id)}>-</button>
                <span>{qty}</span>
                <button onClick={() => addToCart(product.id)}>+</button>
              </div>

              <div className="remove-col">
                <img src={remove_icon} alt="Remove" onClick={() => removeFromCart(product.id)} />
              </div>
            </div>
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CartItems;
