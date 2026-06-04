import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between py-3 px-10 text-3xl bg-[#297078]'>
      <h2 className='text-3xl'>Amazon</h2>
      <div className='flex gap-25 text-xl'>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  )
}

export default Navbar