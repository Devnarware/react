import { useState } from "react";

let i = 0
const TwoWayBinding = () => {

    const [title, setTitle] = useState('')

  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(title);
            
        }}>
            <input
                type="text" 
                placeholder="Enter your name" value={title}
                className="text-3xl border-2 py-1 px-3"
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
            />
        </form>
    </div>
  )
}

export default TwoWayBinding