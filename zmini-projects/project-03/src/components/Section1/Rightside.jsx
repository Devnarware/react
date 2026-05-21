import CardContent from "./CardContent.jsx"

function Rightside() {
  return (
    <div className='h-full w-full bg-gray-700 flex gap-10'>
      <div className=' h-[90%] w-95 rounded-[50px] overflow-hidden relative'>
        <img src="https://images.unsplash.com/photo-1696453424412-fe6ea4b2db54?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='object-cover h-full '/>

        <CardContent />
      </div>
      
      
    </div>
  )
}

export default Rightside