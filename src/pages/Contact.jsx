// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact us</h1>
//     </div>
//   )
// }

// export default Contact
import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-[80vh]">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 px-4 text-center">
        <h1 className="text-5xl font-black text-white mb-3">
          Get in <span className="text-amber-400">Touch</span>
        </h1>
        <p className="text-slate-400">We'd love to hear from you</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Info</h2>
          <div className="space-y-4">
            {[
              { icon: '📍', label: 'Address', value: 'Karachi, Pakistan' },
              { icon: '📧', label: 'Email', value: 'info@smitstore.pk' },
              { icon: '📞', label: 'Phone', value: '+92 300 1234567' },
              { icon: '🕐', label: 'Hours', value: 'Mon-Sat, 9AM-9PM' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">{item.label}</p>
                  <p className="text-slate-800 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
          >
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact