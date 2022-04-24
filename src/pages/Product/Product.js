import React from 'react'
import ProductComponent from '../../components/products/ProductComponent';
import "./style.css";

const Product = () => {
  return (
    <div className="all-product">   
      <div className="section-center">
      <div className='filter'> 
        {
        // <Filter />
        }
      </div>
      <div className='products'>
        <ProductComponent />  
      </div> 
    </div>
  </div> 
  )
}

export default Product