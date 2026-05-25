import { useState } from "react";


function AdvanceUseState() {

    const btnClicked = () =>{
        const obj2 = {...obj}
        obj2.name = "david"
        setName(obj2)
        console.log(obj, obj2);    
    }

    const [obj, setName] = useState({name: "Dev", age: 23})

  return (
    <div>
        <h1 className="text-3xl ">{obj.name}, { obj.age}</h1>
        <button onClick={btnClicked} className="text-3xl p-10 border-2 cursor-pointer">Click me</button>
    </div>
  )
}

export default AdvanceUseState