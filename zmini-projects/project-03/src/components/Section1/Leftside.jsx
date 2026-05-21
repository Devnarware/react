import { ArrowUpRight } from 'lucide-react';

function Leftside() {
  return (
    <div className="h-full w-1/3  flex flex-col justify-between py-10">
      <div className="text flex flex-col ">
        <h2 className='text-6xl/19 font-bold font-font-sans font-stretch-110% tracking-tight mb-15'>Prospective <span className='bg-gray-100 px-3 py-2 rounded-full'>customer</span> segmentation</h2>
        <p className='text-2xl/10 font-sans font-stretch-110% font-extralight'> Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
      </div>
      <div className="flex items-baseline-last">
        <ArrowUpRight size={100} strokeWidth={2} className='mt-10'/>
      </div>
    </div>
  )
}

export default Leftside