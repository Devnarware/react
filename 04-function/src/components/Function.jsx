


function Function() {
  return (
    <div className="">
        
      <div 
        className="bg-gray-600 text-3xl "
        onWheel={function(i){
          if (i.deltaY > 0) {
            console.log("seedha scrolling");
          }else{
            console.log("ulta scrolling");
          }
          
        }}
      >
        <div className="h-screen w-screen">Page1</div>
        <div className="h-screen w-screen">Page2</div>
        <div className="h-screen w-screen">Page3</div>
      </div>
        
    </div>
  )
}

export default Function