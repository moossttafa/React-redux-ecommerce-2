import React, { Fragment } from 'react'
import Categores from '../../components/Category/category'
import FeaturedProducts from '../../components/products/FeaturedProducts'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <FeaturedProducts />
      <Categores />
    </Fragment>
  )
}

export default Home