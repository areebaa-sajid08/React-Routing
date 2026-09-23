import React from 'react'
import Card from '../components/Card'

const Men = ({ menCollection }) => {
  return (
    <div>
      <h1>Men's Collection</h1>
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
