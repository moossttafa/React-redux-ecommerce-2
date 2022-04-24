import React, { Fragment } from 'react'
import ReactPaginate from 'react-paginate'; 
import { Link } from 'react-router-dom'; 
import AddCardButton from '../Button/AddCardButton';
// import ReactPaginate from 'react-paginate';

import "./style.css"

const ProductComponent = () => { 
    
    return (
      <Fragment> 
        <div className='row'>   
          <div className='col-lg-3 col-md-4 col-sm-6' >
            <div className='card'>
              <Link to={`/product/`}> 
                <div className='image'>
                  <img src="" alt="das" />
                </div>
              </Link> 
              <div className='content'>
                <div className='header'>asd</div>
                <div className=' price'>5</div>
                <div className='category'>cdsd</div> 
                <AddCardButton/>
              </div>
            </div> 
          </div> 
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