// import React from 'react'

// const NotFound = () => {
//   return (
//     <div>
//       <h1 className='text-red-800'>404 Page Not Found</h1>
//     </div>
//   )
// }

// export default NotFound
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[10rem] font-black bg-gradient-to-r from-amber-400 to-cyan-500 bg-clip-text text-transparent leading-none">
        404
      </h1>
      <h2 className="text-3xl font-bold text-slate-800 mt-4">Page Not Found</h2>
      <p className="text-slate-500 mt-2 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
      >
        ← Back to Home
      </Link>
    </div>
  )
}

export default NotFound