// import React from 'react'

// const Card = ({ name, price, image, category }) => {
//   return (
//     <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
//       {/* Image */}
//       <div className="overflow-hidden">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//       </div>

//       {/* Info */}
//       <div className="p-4">
//         <span className="inline-block text-[10px] uppercase tracking-wider font-bold bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full">
//           {category}
//         </span>
//         <h3 className="text-base font-semibold text-gray-800 mt-2 truncate">
//           {name}
//         </h3>
//         <p className="text-lg font-bold text-gray-900 mt-2">
//           Rs. {price}
//         </p>
//         <button className="mt-3 w-full bg-gray-900 text-white text-sm py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Card
import React from 'react'

const Card = ({ name, price, image, category }) => {
  const categoryColor = {
    Men: 'bg-cyan-100 text-cyan-700',
    Women: 'bg-pink-100 text-pink-700',
    Kids: 'bg-amber-100 text-amber-700',
  }[category] || 'bg-gray-100 text-gray-700'

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${categoryColor} backdrop-blur-sm`}>
          {category}
        </span>
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white">
          ❤
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-slate-800 truncate">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-black text-slate-900">Rs. {price}</p>
          <div className="flex text-amber-400 text-xs">★★★★★</div>
        </div>
        <button className="mt-4 w-full bg-slate-900 text-white text-sm py-2.5 rounded-xl font-medium hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card