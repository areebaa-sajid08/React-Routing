import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
        Welcome to <span className="text-cyan-700">SMIT</span> Store
      </h1>
      <p className="text-gray-500 mb-10 text-center text-lg">
        Shop the latest trends for Men, Women & Kids
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        <Link
          to="/products/men"
          className="px-10 py-4 bg-cyan-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-cyan-800 hover:scale-105 transition-all duration-300"
        >
          👔 Shop Men
        </Link>
        <Link
          to="/products/women"
          className="px-10 py-4 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transition-all duration-300"
        >
          👗 Shop Women
        </Link>
      </div>
    </div>
  )
}

export default Home