// import React from 'react'
// import { Link, Outlet, useLocation } from 'react-router-dom'

// const Products = () => {
//   const location = useLocation()
//   const tabs = [
//     { name: 'Mens', path: 'men' },
//     { name: 'Womens', path: 'women' },
//     { name: 'Kids', path: 'kids' },
//   ]

//   return (
//     <div className="min-h-[80vh] p-6">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//         Our Products
//       </h1>

//       {/* Tabs */}
//       <div className="flex justify-center gap-3 mb-10 flex-wrap">
//         {tabs.map((tab) => {
//           const isActive = location.pathname.includes(tab.path)
//           return (
//             <Link
//               key={tab.path}
//               to={tab.path}
//               className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                 isActive
//                   ? 'bg-cyan-700 text-white shadow-md'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {tab.name}
//             </Link>
//           )
//         })}
//       </div>

//       <Outlet />
//     </div>
//   )
// }

// export default Products
import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Products = () => {
  const location = useLocation()
  const tabs = [
    { name: '👔 Mens', path: 'men' },
    { name: '👗 Womens', path: 'women' },
    { name: '🧒 Kids', path: 'kids' },
  ]

  return (
    <div className="min-h-[80vh]">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Our <span className="text-amber-400">Collection</span>
          </h1>
          <p className="text-slate-400">Explore our handpicked products</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-md sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto flex justify-center gap-2 py-4 px-4 flex-wrap">
          {tabs.map((tab) => {
            const isActive = location.pathname.includes(tab.path)
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.name}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Products