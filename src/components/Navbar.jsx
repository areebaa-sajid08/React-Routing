import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location= useLocation()
  return (
    <nav className='flex justify-between px-4 bg-cyan-800 text-amber-50 p-3'>
        <h2 className='text-3xl'>Smit</h2>
        <div>
          <Link className={`${location.pathname === '/' ?'underline' : 'm-3'}`} to="/">Home</Link>
          <Link className={`${location.pathname === '/about' ?'underline' : 'm-3'}`} to="/about">About Us</Link>
          <Link className={`${location.pathname === '/contact' ?'underline' : 'm-3'}`} to="/contact">Contact Us</Link>
          <Link className={`${location.pathname === '/course' ?'underline' : 'm-3'}`} to="/course">Courses</Link>
          <Link className={`${location.pathname === '/products' ?'underline' : 'm-3'}`} to="/products">Products</Link>
        </div>
      </nav>
  )
}

export default Navbar
