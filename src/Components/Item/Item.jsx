
// import React from 'react';
// import './item.css';
// import { Link, useLocation } from 'react-router-dom';

// const Item = (props) => {
//   const location = useLocation();
//   const isRelated = location.pathname.includes('product');

//   const linkTo = isRelated ? `/related-product/${props.id}` : `/product/${props.id}`;

//   return (
//     <div className='item-card'>
//       <Link to={linkTo}>
//         <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} className="item-image" />
//       </Link>
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">{props.new_price}</div>
//         <div className="item-price-old">{props.old_price}</div>
//       </div>
//     </div>
//   );
// };

// export default Item;

import React from 'react';
import './item.css';
import { Link, useLocation } from 'react-router-dom';

const Item = (props) => {
  const location = useLocation();
  const isRelated = location.pathname.includes('product');

  const linkTo = isRelated ? `/related-product/${props.id}` : `/product/${props.id}`;

  return (
    <div className='item-card'>
      <Link to={linkTo}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="item-image"
        />
      </Link>
      <p className="item-name">{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
      {
        props.showButton && (
          <Link to={linkTo}>
            <button className="view-details-btn">View Details</button>
          </Link>
        )
      }
    </div>
  );
};

export default Item;
