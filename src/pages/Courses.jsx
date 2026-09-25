// import React from 'react'
// import { useParams } from 'react-router-dom'

// const Courses = () => {
   
//   return (
    
//     <div>
//       <h1>Courses</h1>
    
//     </div>
//   )
// }

// export default Courses
import React from 'react'
import { Link } from 'react-router-dom'

const courses = [
  { id: 1, name: 'Web Development', duration: '6 Months', level: 'Beginner', price: 'Free' },
  { id: 2, name: 'React JS', duration: '3 Months', level: 'Intermediate', price: 'Free' },
  { id: 3, name: 'Python Programming', duration: '4 Months', level: 'Beginner', price: 'Free' },
  { id: 4, name: 'Digital Marketing', duration: '2 Months', level: 'Beginner', price: 'Free' },
  { id: 5, name: 'Graphic Design', duration: '3 Months', level: 'Intermediate', price: 'Free' },
  { id: 6, name: 'Mobile App Development', duration: '5 Months', level: 'Advanced', price: 'Free' },
]

const Courses = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 px-4 text-center">
        <h1 className="text-5xl font-black text-white mb-3">
          Our <span className="text-amber-400">Courses</span>
        </h1>
        <p className="text-slate-400">Learn from the best</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                {course.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{course.name}</h3>
              <div className="flex gap-2 text-xs mb-4">
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{course.duration}</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{course.level}</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-green-600">{course.price}</span>
                <span className="text-sm text-slate-500 group-hover:text-amber-500 transition">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses