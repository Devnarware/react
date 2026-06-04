import {Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar.jsx'

const App = () => {
  return (
    <div className="h-screen bg-gray-700">
      <Routes>
        <Navbar />
      </Routes>
    </div>
  )
}

export default App