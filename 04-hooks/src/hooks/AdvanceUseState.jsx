import { useState } from "react";


function AdvanceUseState() {

    const btnClicked = () =>{
        console.log("hello");
    }

    const [obj, setName] = useState({name: "Dev", age: 23})

  return (
    <div>
        <h1 className="text-3xl ">{obj.name}, { obj.age}</h1>
        <button onClick={btnClicked} className="text-3xl p-10 border-2">Click me</button>
    </div>
  )
}

export default AdvanceUseState