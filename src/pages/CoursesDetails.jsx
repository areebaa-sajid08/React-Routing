// import React from 'react'
// import {useParams } from 'react-router-dom'
// const CoursesDetails = () => {
//     const { id } = useParams()

//     return (
//         <div>
//             <h1>{id} Course Details</h1>
//         </div>
//     )
// }

// export default CoursesDetails
import React from 'react'
import { useParams, Link } from 'react-router-dom'

const CoursesDetails = () => {
  const { id } = useParams()

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
          Course Details
        </span>
        <h1 className="text-4xl font-black text-slate-800 mb-4">
          Course ID: <span className="text-amber-500">#{id}</span>
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          This is a detailed view for course #{id}. In a real application,
          you'd see the full syllabus, instructor bio, pricing, and enrollment
          options here.
        </p>
        <Link
          to="/course"
          className="inline-block px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
        >
          ← Back to Courses
        </Link>
      </div>
    </div>
  )
}

export default CoursesDetails