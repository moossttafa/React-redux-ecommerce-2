import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import "./Header.css" 
import { links } from '../../data';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const [showLinks , setShowLinks] = useState(false)
  const linksContainerRef = useRef(null);

  useEffect(() => { 
    if (showLinks){
      linksContainerRef.current.style.height = `${250}px`;
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks]);

  return (
    <Fragment> 
    <nav>
    <div className="nav-center">
      <div className="nav-header"> 
        <NavLink to="/" className="logo">APPLE MART</NavLink>    
        <button className="nav-toggle" 
          onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <div
        className="links-container" ref={linksContainerRef} >
          <ul className="links">
            {links.map((link) => { 
              return (
                <li key={link.id}>
                  <Link to={link.url} >{link.text}</Link>
                </li>
              )
            })}
          </ul>
          <NavLink to="/cart" className="btn btn-header ms-5"> Cart 
              <span className="shopping-cart ml-3">{cartItems.length}</span> 
          </NavLink>
          </div> 
    </div>
  </nav>
</Fragment>
  )
}

export default Header