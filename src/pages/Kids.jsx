import React from 'react'
import Card from '../components/Card'

const Kids = ({ kidsCollection }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-2">
        Kids' Collection
      </h2>
      <p className="text-center text-gray-500 mb-8">
        {kidsCollection.length} products available
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {kidsCollection.map((kidsItem) => (
          <Card
            key={kidsItem.id}
            name={kidsItem.name}
            price={kidsItem.price}
            image={kidsItem.image}
            category={kidsItem.category}
          />
        ))}
      </div>
    </div>
  )
}

export default Kids