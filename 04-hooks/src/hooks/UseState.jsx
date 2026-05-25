import { useState } from "react";





function UseState() {

  const [num, setNum] = useState(0)

  return (
    <div className="w-100">
      <h1 className="text-9xl bg-gray-700 rounded-3xl flex items-center justify-center py-10">{num}</h1>
      <button className="m-2 py-5 px-7 text-3xl text-cyan-50 border-2 rounded-3xl bg-mauve-500" onClick={() =>{
        setNum(num+1)
      }}>Increase</button>
      <button className="m-2 py-5 px-7 text-3xl text-cyan-50 border-2 rounded-3xl bg-mauve-500" onClick={() =>{
        setNum(num-1)
      }}>Decrease</button>
    </div>
  )
}

export default UseState