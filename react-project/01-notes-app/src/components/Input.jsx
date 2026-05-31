import { useState } from "react"



const Input = (props) => {
    

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

    return (
        <div className="lg:w-[40%] lg:h-screen  border-r-4">
            <div className="m-12">
                <h2 className="text-5xl font-bold mt-15 mb-10">Add Note</h2>
                <form
                    className='flex flex-col gap-4 '
                    onSubmit={(e)=>{
                        e.preventDefault()
                        
                        const copyTask = [...props.tasks]
                        copyTask.push({title, details})
                        props.setTask(copyTask)

                        setTitle("")
                        setDetails("")

                        // local storage
                        const allTasks = JSON.stringify(copyTask)
                        localStorage.setItem("allTask", allTasks)

                    }}    
                >
                    <input type="text"
                        placeholder='Enter the title here'
                        className='border-3 px-6 py-4 rounded text-2xl'
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                    />
                    <textarea
                        className='border-3 px-6 py-3 h-50 rounded text-2xl'
                        placeholder='Write the details here'
                        value={details}
                        onChange={(e)=>{
                            setDetails(e.target.value)
                        }}
                    >
                    </textarea>
                    <button
                        className="px-5 py-2 bg-[#c5c5c5] active:scale-95 text-[#000000] rounded-2xl text-3xl"
                    >Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Input