import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'



const App = () => {
  return (
    <div className="h-screen bg-[#0a1218]">

      <Navbar />
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      
    </div>
  )
}

export default App