// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='fixed bottom-0 text-center w-full bg-cyan-800 text-amber-50 p-3 *:'>

//       © 2026 SMIT. All rights reserved
//     </div>
//   )
// }

// export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-black bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent mb-3">
            SMIT Store
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your one-stop shop for the latest fashion trends. Quality products, unbeatable prices.
          </p>
        </div>

        <div>
          <h4 className="text-amber-400 font-semibold mb-3 uppercase text-sm tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber-400 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-amber-400 transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-amber-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-amber-400 font-semibold mb-3 uppercase text-sm tracking-wider">
            Contact
          </h4>
          <p className="text-sm text-slate-400">📍 Karachi, Pakistan</p>
          <p className="text-sm text-slate-400 mt-1">📧 info@smitstore.pk</p>
          <p className="text-sm text-slate-400 mt-1">📞 +92 300 1234567</p>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © 2026 SMIT Store. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer