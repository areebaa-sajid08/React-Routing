import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Products from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/course' element={<Courses/>} />
          <Route path='/course/:id' element={<CoursesDetails/>} />
        <Route path='/products' element={<Products/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
