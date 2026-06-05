import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import NotFound from './pages/NotFound.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Kids from './pages/Kids.jsx'



const App = () => {
  return (
    <div className="h-screen bg-[#0a1218]">

      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>


        <Route path='/*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App