import React, { Fragment, useEffect } from 'react'
import ReactPaginate from 'react-paginate'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { fetchProducts } from '../../redux/actions/productActions';
import AddCardButton from '../Button/AddCardButton';
// import ReactPaginate from 'react-paginate';

import "./style.css"

const ProductComponent = () => { 
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchProducts())
   }, [dispatch]);
    
    return (
      <Fragment> 
        <div className='row'>   
        {products.map((product ,id) => 
          <div className='col-lg-3 col-md-4 col-sm-6' key={id}>
            <div className='card'>
            <Link to={`/product/${id}`}> 
              <div className='image'>
                <img src={product.image} alt={product.title} />
              </div>
            </Link> 
            <div className='content'>
              <div className='header'>{product.title}</div>
              <div className=' price'>{product.price}</div>
              <div className='category'>{product.category}</div>
              <AddCardButton productsData={product} />
            </div>
          </div> 
        </div>
        )}
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