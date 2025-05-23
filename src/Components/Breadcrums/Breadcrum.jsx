import React from 'react'
import './Breadcrum.css'

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      <div className="breadcrumb">
        <span>HOME</span>
        <span className="arrow">›</span>
        <span>SHOP</span>
        <span className="arrow">›</span>
        <span>{product.category}</span>
        <span className="arrow">›</span>
        <span>{product.name}</span>
      </div>

      
    </div>
  )
}

export default Breadcrum


