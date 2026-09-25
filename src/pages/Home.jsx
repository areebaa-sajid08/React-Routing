// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
//       <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
//         Welcome to <span className="text-cyan-700">SMIT</span> Store
//       </h1>
//       <p className="text-gray-500 mb-10 text-center text-lg">
//         Shop the latest trends for Men, Women & Kids
//       </p>

//       <div className="flex gap-6 flex-wrap justify-center">
//         <Link
//           to="/products/men"
//           className="px-10 py-4 bg-cyan-700 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-cyan-800 hover:scale-105 transition-all duration-300"
//         >
//           👔 Shop Men
//         </Link>
//         <Link
//           to="/products/women"
//           className="px-10 py-4 bg-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-pink-700 hover:scale-105 transition-all duration-300"
//         >
//           👗 Shop Women
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <span className="inline-block px-4 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
          ✨ New Season Arrivals
        </span>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
          Discover Your
          <br />
          <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            Perfect Style
          </span>
        </h1>

        <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Shop the latest collections for Men, Women & Kids — curated just for you.
        </p>

        <div className="flex gap-6 flex-wrap justify-center">
          <Link
            to="/products/men"
            className="group px-10 py-4 bg-slate-900 text-white text-lg font-semibold rounded-full shadow-xl hover:bg-slate-800 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            👔 Shop Men
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
          <Link
            to="/products/women"
            className="group px-10 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:from-pink-600 hover:to-pink-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            👗 Shop Women
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-12 flex-wrap">
          <div>
            <p className="text-3xl font-black text-slate-900">30+</p>
            <p className="text-sm text-slate-500 uppercase tracking-wider">Products</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">3</p>
            <p className="text-sm text-slate-500 uppercase tracking-wider">Categories</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">100%</p>
            <p className="text-sm text-slate-500 uppercase tracking-wider">Quality</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home