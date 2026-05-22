import CardContent from "./CardContent.jsx"

function Rightside() {
  return (
    <div className='h-full w-full flex gap-10 mt-12'>
      <div className=' h-[90%] w-95 rounded-[50px] overflow-hidden relative'>
        <img src="https://images.unsplash.com/photo-1688989667243-221eee13cbdb?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" 
        
          className='object-cover h-full '
        />

        <CardContent />
      </div>
      <div className=' h-[90%] w-95 rounded-[50px] overflow-hidden relative'>
        <img src="https://images.unsplash.com/photo-1615840287409-bda7eedb0d09?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" 
        
          className='object-cover h-full '
        />

        <CardContent />
      </div>
      <div className=' h-[90%] w-95 rounded-[50px] overflow-hidden relative'>
        <img src="https://images.unsplash.com/photo-1602803056945-ebac8ae8fd00?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" 
        
          className='object-cover h-full '
        />

        <CardContent />
      </div>
     
      
      
    </div>
  )
}

export default Rightside