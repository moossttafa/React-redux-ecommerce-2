import React from 'react';
import {RiDeleteBin5Line} from 'react-icons/ri';
import "./Cart.css"

const Cart = () => {

  const style ={color : "#dc3545" , fontSize : "24px"}
  
  return (
    <div className='cart'>
    <div className='container'>
      <div className='d-flex justify-content-between mb-2'> 
          <h5 className="my-3">
              This is Item In Cart
          </h5> 
          <button 
            className="my-3 btn btn-danger"
          >
            Remove All Products
          </button> 
      </div> 
        <div className='cart-content'>
          <div className='d-flex'>
            <div className='cart-image'>
              <img
                src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                alt="example"
                layout="fill"
                className="image"
              />
            </div>
            <div className='cart-info'>
              <h6>Name: Mens Casual Premium Slim Fit T-Shirts </h6>
              <h6>Price: 15.99</h6>
              <h6>count: 55</h6>
            </div>
          </div>
          <div className='"deleteContainer'>
            <RiDeleteBin5Line style={style}/>
          </div>
        </div>  
    </div>
  </div>
  )
}

export default Cart