import React from 'react'
import { Link } from 'react-router-dom'
import AddCardButton from '../Button/AddCardButton'
import "./style.css"

function FeaturedProducts() {
  return (
    <section className='featured-products'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className="cardList">
        <div className="container">
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
        </div>
      </div>
      <Link to="/product" className="btn-product"> All Product </Link>
    </section>
  )
}

export default FeaturedProducts
