import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between py-8 px-16'>
        <h1 className='bg-black text-white px-5 py-2 rounded-full uppercase text-sm'>Target Audience</h1>
        <button className='bg-gray-300 uppercase px-5 py-2 rounded-full border-none tracking-wider text-xs cursor-pointer'>digital banking platform</button>
        
    </div>
  )
}

export default Navbar ;