import { CornerDownRight } from 'lucide-react';

function Navbar() {
  return (
    <div className='flex items-center justify-between py-8 px-10'>
        <h1 className='bg-black text-white px-4.5 py-2.5 rounded-full uppercase tracking-widest'><pre>Target Audience</pre></h1>
        <button className='bg-gray-100 flex gap-3 uppercase px-4 py-2.5 rounded-full border-none tracking-widest cursor-pointer font-'>
          <CornerDownRight size={20}/>
          <pre>digital banking platform</pre>
        </button>
        
    </div>
  )
}

export default Navbar ;