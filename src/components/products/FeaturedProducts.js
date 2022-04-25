import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../../redux/actions/productActions'
import AddCardButton from '../Button/AddCardButton'
import "./style.css"

function FeaturedProducts() { 
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchProducts())
   }, [dispatch]);
   
   const renderList = products.slice(0, 4).map((products) => {
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
              className="btn btn-header my-3"> 
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className='featured-products'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className="cardList">
        <div className="container">
          <div className='row'> 
           {renderList}
          </div>
        </div>
      </div>
      <Link to="/product" className="btn-product"> All Product </Link>
    </section>
  )
}

export default FeaturedProducts
