import React from 'react'
import Card from '../components/Card'

const Kids = ({ kidsCollection }) => {
  return (
    <div>
      <h1>Kid's Collection</h1>
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
