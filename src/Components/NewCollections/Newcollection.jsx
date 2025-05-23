

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
                            collectionType: 'new_collection', 
                            products: items,                 
                            currentIndex: i,                 
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

