// import { ChevronRight } from 'lucide-react';

// function CardContent() {
//   return (
//     <div className="absolute top-0 h-full w-95 rounded-[50px] p-10 flex flex-col justify-between ">
//         <h2 className="h-15 w-15 bg-gray-100 rounded-full flex items-center justify-center text-3xl">1</h2>
//         <div className="  text-2xl/10 font-sans font-stretch-120% font-light text-gray-100 ">
//             <p className="mb-15"> Prime customers, that have access to bank credit and are satisfied with the current product</p>
//             <div className='flex justify-between items-center' >
//                 <button className='bg-blue-700 px-6 py-2 rounded-full text-white'>Satisfied</button>
//                 <button className='bg-blue-700 p-2 flex justify-center items-center rounded-full'>
//                     <ChevronRight size={35} />
//                 </button>
//             </div>
//         </div>
        
//     </div>
//   )
// }

// export default CardContent



import { ChevronRight } from 'lucide-react';

function CardContent() {
  return (
    <div className="absolute inset-0 rounded-[50px] overflow-hidden">
      
      {/* Blur overlay with smooth mask fade */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{
          maskImage: 'linear-gradient(to top, black 30%, transparent 65%)',
          WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 65%)',
        }}
      />

      {/* Dark gradient for text readability */}
      <div 
        className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"
        style={{
          maskImage: 'linear-gradient(to top, black 30%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-10 flex flex-col justify-between">
        <h2 className="h-15 w-15 bg-gray-100 rounded-full flex items-center justify-center text-3xl">1</h2>
        <div className="text-2xl/10 font-sans font-stretch-120% font-light text-gray-100">
          <p className="mb-15">Prime customers, that have access to bank credit and are satisfied with the current product</p>
          <div className='flex justify-between items-center'>
            <button className='bg-blue-700 px-6 py-2 rounded-full text-white'>Satisfied</button>
            <button className='bg-blue-700 p-2 flex justify-center items-center rounded-full'>
              <ChevronRight size={35} />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardContent
