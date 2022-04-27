import React from 'react'
import { useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import ProductComponent from '../../components/products/ProductComponent';
import "./style.css";

const Product = () => {

  // const filteredItems = useSelector((state) => state.allProducts.filteredItems);


  return (
    <div className="all-product">   
      <div className="section-center">
      <div className='filter'>  
        <Filter /> 
      </div>
      <div className='products'> 
        <ProductComponent />  
      </div> 
    </div>
  </div> 
  )
}

export default Product