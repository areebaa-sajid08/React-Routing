import React from 'react'

const Card = ({ name, price, image, category }) => {
    return (
        <div className="border border-gray-300 rounded-xl shadow-md p-4 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3 text-gray-800">{name}</h3>
            <span className="inline-block text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full mt-1">
                {category}
            </span>
            <p className="text-md font-bold text-gray-900 mt-2">Rs. {price}</p>
        </div>
    )
}

export default Card