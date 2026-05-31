

const Display = (props) => {
  return (
    <div className='lg:w-[60%]'>
      <div className="m-12">
        <h2 className="text-5xl font-bold mt-15 mb-10">Recent Notes</h2>
        <div className='flex flex-wrap gap-9 h-245 overflow-y-auto'>


          {props.task.map(function (elem, idx) {
            return (
              <div className="h-104 w-75 rounded-2xl bg-red-400 bg-cover overflow-hidden px-10 pt-11 flex flex-col justify-between"
              >

                <div key={idx} className="flex flex-col gap-3 h-[90%]  ">
                  <h3 className="text-3xl font-bold text-[#111] leading-8 ">{elem.title}</h3>
                  <p className=" text-[#5a5a5a] h-[90%] overflow-auto">{elem.details}</p>
                </div>

                <button 
                  key={idx} 
                  className=" h-[12%] w-[90%] bg-red-500 mb-2 rounded-2xl text-[#fcfcfc]"
                  onClick={()=>{
                    const copyTask = [...props.task]
                    copyTask.splice(idx, 1)
                    props.setTask(copyTask)

                    // local storage
                    const allTasks = JSON.stringify(copyTask)
                    localStorage.setItem("allTask",allTasks)
                  }}
                >Delete
                </button>
              </div>
            )
          })}


        </div>
      </div>
    </div>
  )
}

export default Display

