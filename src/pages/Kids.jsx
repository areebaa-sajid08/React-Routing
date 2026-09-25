// import React from 'react'
// import Card from '../components/Card'

// const Kids = ({ kidsCollection }) => {
//   return (
//     <div>
//       <h2 className="text-3xl font-bold text-center text-yellow-500 mb-2">
//         Kids' Collection
//       </h2>
//       <p className="text-center text-gray-500 mb-8">
//         {kidsCollection.length} products available
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {kidsCollection.map((kidsItem) => (
//           <Card
//             key={kidsItem.id}
//             name={kidsItem.name}
//             price={kidsItem.price}
//             image={kidsItem.image}
//             category={kidsItem.category}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Kids

import React from 'react'
import Card from '../components/Card'

const Kids = ({ kidsCollection }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-black text-slate-800">
          Kids' <span className="text-amber-500">Collection</span>
        </h2>
        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {kidsCollection.length} items
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {kidsCollection.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Kids