// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const Navbar = () => {
//   const location = useLocation()
//   const links = [
//     { name: 'Home', path: '/' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Contact Us', path: '/contact' },
//     { name: 'Courses', path: '/course' },
//     { name: 'Products', path: '/products' },
//   ]

//   return (
//     <nav className="flex justify-between items-center px-6 bg-cyan-800 text-amber-50 py-4 shadow-lg">
//       <h2 className="text-2xl font-bold">SMIT</h2>
//       <div className="flex gap-6">
//         {links.map((link) => {
//           const isActive = location.pathname === link.path
//           return (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`transition-all duration-200 ${
//                 isActive
//                   ? 'underline decoration-2 underline-offset-4 font-semibold'
//                   : 'hover:text-cyan-200'
//               }`}
//             >
//               {link.name}
//             </Link>
//           )
//         })}
//       </div>
//     </nav>
//   )
// }

// export default Navbar
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Courses', path: '/course' },
    { name: 'Products', path: '/products' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl font-black bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
            SMIT
          </span>
          <span className="text-xs text-amber-400 font-semibold tracking-widest uppercase mt-2">
            Store
          </span>
        </Link>

        <div className="flex gap-1 md:gap-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-400 text-slate-900 shadow-md'
                    : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar