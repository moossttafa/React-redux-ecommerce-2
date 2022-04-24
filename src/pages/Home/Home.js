import React, { Fragment } from 'react'
import FeaturedProducts from '../../components/products/FeaturedProducts'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <FeaturedProducts />
    </Fragment>
  )
}

export default Home