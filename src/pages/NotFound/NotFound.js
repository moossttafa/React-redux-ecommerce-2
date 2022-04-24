import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const NotFound = () => {
  return (
    <section>
      <h1>404</h1>
      <h3>Sorry, the page you tried cannot be found</h3>
      <Link to="/" className="back">back home</Link>
  </section>
  )
}

export default NotFound