import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../../redux/actions/CartActions';
import { selectedProductActions } from '../../../redux/actions/productActions';
import AddCardButton from '../../Button/AddCardButton';
import "./style.css";

const ProductDetails = () => { 
  const { id } = useParams(); 
  // const productId = window.location.pathname.replace("/", "").split("/")[1];
  const product = useSelector((state) => state.allProducts.product);
  const cartItems = useSelector((state) => state.Cart?.cartItems); 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedProductActions(id))
  }, [dispatch,id])

  console.log("product" , product);
  

  return (
    <div className="Product-details">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
      <div className="container"> 
          <div className="row">
            <div className="col-md-6">
              <div className="image-wrapper">
                <img className='img' src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="col-md-6">
              <h1>{product.title}</h1>
              <h2>
                <p className="ui teal tag label">${product.price}</p>
              </h2>
              <h3 className="ui brown block header">{product.category}</h3>
              <p>{product.description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <button
                  className="btn btn-header my-3"
                  onClick={(e) => {
                    dispatch(addToCart(cartItems, product));
                    e.stopPropagation();
                  }}
                  > 
                  Add To Cart
                </button>
              </div>
            </div> 
        </div>
      </div>
    )} 
    </div>
  );
};

export default ProductDetails