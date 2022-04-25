import React from 'react';
import {RiDeleteBin5Line} from 'react-icons/ri';
import { useSelector } from 'react-redux';
import "./Cart.css"

const Cart = () => {

  const cartItems = useSelector((state) => state.Cart.cartItems);
  console.log(cartItems , "cartItems");

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
      {cartItems && cartItems?.map((item) => (
        <div className='cart-content' key={item.id}>
          <div className='d-flex'>
            <div className='cart-image'>
              <img
                src={item.image}
                alt="example"
                layout="fill"
                className="image"
              />
            </div>
            <div className='cart-info'>
                <h6>Name: {item.title}</h6>
                <h6>Price: {item.price}</h6>
                <h6>count: {item.count}</h6>
              </div>
          </div>
          <div className='"deleteContainer'>
            <RiDeleteBin5Line style={style}/>
          </div>
        </div>  
     ))}
    </div>
  </div>
  )
}

export default Cart