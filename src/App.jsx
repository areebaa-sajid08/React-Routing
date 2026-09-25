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

const menCollection = [
  { id: 1, name: 'Denim Jacket', price: 4500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq4Lr19JSqeez8JhNBRB3_5_PrgI8NekwK9i6u5FYBAg&s', category: 'Men' },
  { id: 2, name: 'Formal Shirt', price: 2500, image: 'https://thecambridgeshop.com/cdn/shop/files/BCT5-18.jpg?v=1764746209&width=600', category: 'Men' },
  { id: 3, name: 'Sneakers', price: 6000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpO5aiYPGVqmt2MVjQBGMvly9I_O9yV9lgsq55rJaeA&s=10', category: 'Men' },
  { id: 4, name: 'Leather Belt', price: 1500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnmbD83VKWZjv768fAoq8fcefupovVykHgZEnkG2PzA&s=10', category: 'Men' },
  { id: 5, name: 'Cargo Pants', price: 3200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6ZYJi814aQNUw_-AJJbAMpSXAiwcGmyyadkZ6EFROumCpaFcI0I8-7Q&s=10', category: 'Men' },
  { id: 6, name: 'Hoodie', price: 3800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRot2EVCijsz4OzLpRwEirbctAHyQ1MqsDLfPjv9xKmHpGrsdsvMLxYhq&s=10', category: 'Men' },
  { id: 7, name: 'Wrist Watch', price: 7500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWB3mM5WDNe_51jz8TX61ooaqEEGRb6u8C2XEzhuZqA&s=10', category: 'Men' },
  { id: 8, name: 'Sunglasses', price: 2200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSbtYvRY4N6CrwSMJk5vEphtuzl7Ln_FcZfZX73vcYMcfrotoFgXsy1AMM&s=10', category: 'Men' },
  { id: 9, name: 'Polo T-Shirt', price: 1800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6D7_NRjXDwMssvV5_HWf6E5RB_H8KzhSviFzXp3EMnA&s=10', category: 'Men' },
  { id: 10, name: 'Sports Cap', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqfX-Sv0m9mcuJVEuXpMmcDg2UK3p9cYeT96GmdbI5A&s=10', category: 'Men' },
]

const womenCollection = [
  { id: 1, name: 'Summer Dress', price: 5500, image: 'https://www.cocoon.pk/cdn/shop/articles/cocoon31aug_1187_1024x1024.jpg?v=1777700638', category: 'Women' },
  { id: 2, name: 'Handbag', price: 3500, image: 'https://www.julke.pk/cdn/shop/files/ChatGPT_Image_Sep_17_2026_10_17_50_AM.png?v=1789622254&width=1027', category: 'Women' },
  { id: 3, name: 'Heels', price: 4000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5XzNteXmf30CwgVLpCY_g1itBZT3CTjAGXFyYvSf4zQ2T5if72vTpmHk&s=10', category: 'Women' },
  { id: 4, name: 'Scarf', price: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcdUYF8PUfi562VjRGRjFHCYfxHx-cuupukXQ35qCTQ&s=10', category: 'Women' },
  { id: 5, name: 'Kurta', price: 2800, image: 'https://zaukstore.com/cdn/shop/files/white-Kurta-Set-1.webp?v=1785942758', category: 'Women' },
  { id: 6, name: 'Earrings', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xEtu4MgWza_M2BdwVMyuWAptnEZ2HIahMVeopz_kEw&s=10', category: 'Women' },
  { id: 7, name: 'Lipstick Set', price: 1500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVMxu9TNEahE-hJoUdwR9touaRGlpxnlcEPd_EXqj9w&s=10', category: 'Women' },
  { id: 8, name: 'Jeans', price: 3000, image: 'https://aquila.pk/cdn/shop/files/WhatsApp_Image_2026-05-12_at_20.51.30.jpg?v=1778676946&width=600', category: 'Women' },
  { id: 9, name: 'Perfume', price: 4500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobNu7pEZQyZNcm-CCUdF2FIjgdmK8wx2pvtpjgYbQMw&s=10', category: 'Women' },
  { id: 10, name: 'Sunglasses', price: 2000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx0ttCbT6oFX4EtMjBJ45guus2Ebv6vo0J7w4VzuhqQvE1sJXMst2IlQ&s=10', category: 'Women' },
]

const kidsCollection = [
  { id: 1, name: 'Cartoon T-Shirt', price: 1200, image: 'https://m.media-amazon.com/images/I/31CIbTB0SYL._AC_UY1100_.jpg', category: 'Kids' },
  { id: 2, name: 'Denim Shorts', price: 1500, image: 'https://media.mango.com/is/image/punto/27078275-TC-900?wid=2048', category: 'Kids' },
  { id: 3, name: 'Mini Sneakers', price: 2200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc0-UZUjIK9KtLBWiQJaEVuMpupJPzvWRyQI5-s5n08gtA9_Yr0iraRI&s=10', category: 'Kids' },
  { id: 4, name: 'Toy Car', price: 800, image: 'https://www.borjan.com.pk/cdn/shop/files/1_5cf06490-b783-43b6-ab91-2d01b20ef85c.png?v=1757098703', category: 'Kids' },
  { id: 5, name: 'Frocks', price: 2500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9wRdsnkk8vb4NL8OvlJJ2BCC4DO9lndDxPuv2J-FM3XOZ9hQnfZB3aE&s=10', category: 'Kids' },
  { id: 6, name: 'Kids Cap', price: 600, image: 'https://babiesworld.com.pk/cdn/shop/files/baby-hats-ba3024-3.jpg?v=1769787574', category: 'Kids' },
  { id: 7, name: 'School Bag', price: 3000, image: 'https://katib.pk/cdn/shop/files/18918b2b-6616-423b-a055-cdfce3d6430e_1200x1200.jpg?v=1781517486', category: 'Kids' },
  { id: 8, name: 'Teddy Bear', price: 1800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFu3IafX3dpz8eXB-ZvW2VaQbau8fuZb1Rkg_jlspF0-xKDO4ccK2a8c&s=10', category: 'Kids' },
  { id: 9, name: 'Kids Watch', price: 1400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2D7KlFT_0smu8p6ETa8sx85RZfB8NO_gpeLe1_PIspQTIObfUONg5lE&s=10', category: 'Kids' },
  { id: 10, name: 'Sunglasses', price: 900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4c5HF3yzNI_uGeO9DGr2wV5mjDwPMCzJpZ87XVUW-TmCJfnBdMeucyCB&s=10', category: 'Kids' },
]

const App = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/course' element={<Courses />} />
          <Route path='/course/:id' element={<CoursesDetails />} />
          <Route path='/products' element={<Products />}>
            <Route path='men' element={<Men menCollection={menCollection} />} />
            <Route path='women' element={<Women womenCollection={womenCollection} />} />
            <Route path='kids' element={<Kids kidsCollection={kidsCollection} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
