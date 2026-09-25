import React from 'react'
import Card from '../components/Card'

const Women = ({ womenCollection }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-2">
        Women's Collection
      </h2>
      <p className="text-center text-gray-500 mb-8">
        {womenCollection.length} products available
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenCollection.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default Women