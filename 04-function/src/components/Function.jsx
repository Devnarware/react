
const hello = () => { 
    console.log("hello");
    
}

function Function() {
  return (
    <div className="">
        <button className="m-10 bg-gray-700 p-10 rounded-full text-white cursor-pointer" onClick={hello}>Click me</button>
        <button className="m-10 bg-red-400 p-10 rounded-full text-white cursor-pointer" onClick={() => {
          console.log("Press me button input");
          
        }}>Press me</button>

        
    </div>
  )
}

export default Function