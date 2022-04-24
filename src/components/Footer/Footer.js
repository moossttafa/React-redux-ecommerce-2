import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <h5>
        &copy; {new Date().getFullYear()}
        <span> E-commerce </span>
      </h5>
      <h5>By Mostafa</h5>
    </footer>
  )
}

export default Footer