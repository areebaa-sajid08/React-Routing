import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Courses', path: '/course' },
    { name: 'Products', path: '/products' },
  ]

  return (
    <nav className="flex justify-between items-center px-6 bg-cyan-800 text-amber-50 py-4 shadow-lg">
      <h2 className="text-2xl font-bold">SMIT</h2>
      <div className="flex gap-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-200 ${
                isActive
                  ? 'underline decoration-2 underline-offset-4 font-semibold'
                  : 'hover:text-cyan-200'
              }`}
            >
              {link.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar