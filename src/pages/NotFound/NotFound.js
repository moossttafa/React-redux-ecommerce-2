import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const NotFound = () => {
  return (
    <section className='not-found'>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <div className='back-to'>
        <Link to="/" className="back btn btn-header ms-5">back home</Link>
      </div>
  </section>
  )
}

export default NotFound