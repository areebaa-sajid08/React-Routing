import React from 'react'

const Card = ({ name, price, image, category }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="inline-block text-[10px] uppercase tracking-wider font-bold bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-base font-semibold text-gray-800 mt-2 truncate">
          {name}
        </h3>
        <p className="text-lg font-bold text-gray-900 mt-2">
          Rs. {price}
        </p>
        <button className="mt-3 w-full bg-gray-900 text-white text-sm py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card