import { CornerDownRight } from 'lucide-react';

function Navbar() {
  return (
    <div className='flex items-center justify-between py-12 px-15'>
        <h1 className='bg-black text-white text-lg px-6 py-4 rounded-full uppercase tracking-widest'>
          <pre>Target Audience</pre>
        </h1>
        <button className= 'bg-gray-100 flex gap-3 uppercase px-6 py-4 rounded-full border-none tracking-widest cursor-pointer text-lg'>
          <CornerDownRight size={25} strokeWidth={1.5}/>
          <pre>digital banking platform</pre>
        </button>
        
    </div>
  )
}

export default Navbar ;