import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className="h-screen bg-[#0a1218]">

      <Navbar />
      

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App