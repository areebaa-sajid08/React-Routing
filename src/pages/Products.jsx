import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Products = () => {
  const location = useLocation()
  const tabs = [
    { name: 'Mens', path: 'men' },
    { name: 'Womens', path: 'women' },
    { name: 'Kids', path: 'kids' },
  ]

  return (
    <div className="min-h-[80vh] p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Our Products
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {tabs.map((tab) => {
          const isActive = location.pathname.includes(tab.path)
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-cyan-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.name}
            </Link>
          )
        })}
      </div>

      <Outlet />
    </div>
  )
}

export default Products