import React from 'react'
import Card from '../components/Card'

const Women = ({ womenCollection }) => {
  return (
    <div>
      <h1>Women's Collecion</h1>
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
