// import React from 'react'

// const About = () => {
//   return (
//     <div>
//         <h1>About Us</h1>
//     </div>
//   )
// }

// export default About
import React from 'react'

const About = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 px-4 text-center">
        <h1 className="text-5xl font-black text-white mb-3">
          About <span className="text-amber-400">Us</span>
        </h1>
        <p className="text-slate-400">Our story, our mission</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              We bring style to your doorstep
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              SMIT Store is Pakistan's premier online fashion destination.
              Since our founding, we've been committed to bringing the latest
              trends to our customers at unbeatable prices.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From casual wear to formal attire, from kids to adults — we've
              got something for everyone in the family.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-cyan-500 rounded-3xl p-8 text-white">
            <p className="text-5xl font-black mb-2">5+</p>
            <p className="text-sm uppercase tracking-widest">Years of Trust</p>
            <div className="mt-6 border-t border-white/30 pt-6">
              <p className="text-5xl font-black mb-2">10K+</p>
              <p className="text-sm uppercase tracking-widest">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🚚', title: 'Fast Delivery', desc: 'Nationwide shipping in 2-3 days' },
            { icon: '💎', title: 'Premium Quality', desc: 'Only the best products' },
            { icon: '💬', title: '24/7 Support', desc: 'Always here to help you' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About