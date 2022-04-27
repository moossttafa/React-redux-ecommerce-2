import React, { Fragment, useEffect } from 'react'
import ReactPaginate from 'react-paginate'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { addToCart } from '../../redux/actions/CartActions';
import { fetchProducts } from '../../redux/actions/productActions';
// import AddCardButton from '../Button/AddCardButton';
// import ReactPaginate from 'react-paginate';

import "./style.css"

const ProductComponent = () => { 
  const products = useSelector((state) => state.allProducts.products);
  const cartItems = useSelector((state) => state.Cart?.cartItems); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchProducts())
   }, [dispatch]);

   const renderList = products.map((products) => {
    const {id , title,image,price,category} = products;
    return(  
      <div className='col-lg-3 col-md-4 col-sm-6'  key={id}> 
        <div className='card'>
          <Link to={`/product/${id}`}>
            <div className='image'>
              <img src={image} alt={title} />
            </div>
          </Link>
          <div className='content'>
            <h3 className='header'>{title}</h3>
            <span className='price'>{price}</span>
            <p className='category'>{category}</p>
            <button
              className="btn btn-header my-3"
              onClick={(e) => {
                dispatch(addToCart(cartItems, products));
                e.stopPropagation();
              }}
              > 
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  })
    
    return (
      <Fragment> 
        <div className='row'>   
          {renderList} 
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >" 
          pageCount={5} 
          marginPagesDisplayed={3}
          containerClassName={"pagination justify-content-center my-4"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          previousLabel="< previous" 
          // onPageChange={changePage}
    />
    </Fragment>
  );
  }
export default ProductComponent