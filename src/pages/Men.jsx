import React from 'react'
import Card from '../components/Card'

const Men = ({ menCollection }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-cyan-800 mb-2">
        Men's Collection
      </h2>
      <p className="text-center text-gray-500 mb-8">
        {menCollection.length} products available
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menCollection.map((items) => (
          <Card
            key={items.id}
            name={items.name}
            price={items.price}
            image={items.image}
            category={items.category}
          />
        ))}
      </div>
    </div>
  )
}

export default Men