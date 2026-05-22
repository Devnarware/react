
const change = (val) => { 
    console.log(val);
    
}


function Function() {
  return (
    <div className="">
        
      <input id="dev"placeholder="Enter some text" 
        className="bg-gray-600 m-10 px-10 py-5 text-3xl"
        onChange={function(i){
          change(i.target.value);
        }}
      />
        
    </div>
  )
}

export default Function