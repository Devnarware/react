

const Display = (props) => {
  return (
    <div className='lg:w-[60%]'>
      <div className="m-12">
        <h2 className="text-5xl font-bold mt-15 mb-10">Recent Notes</h2>
        <div className='flex flex-wrap gap-9 h-245 overflow-y-auto'>


          {props.task.map(function (elem, idx) {
            return (
              <div className="h-104 w-75 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover overflow-hidden px-10 pt-11 flex flex-col justify-between"
              >

                <div key={idx} className="flex flex-col gap-3 h-[90%]  ">
                  <h3 className="text-3xl font-bold text-[#111] leading-8 ">{elem.title}</h3>
                  <p className=" text-[#5a5a5a] h-[90%] overflow-auto">{elem.details}</p>
                </div>

                <button 
                  key={idx} 
                  className=" h-[12%] w-[90%] bg-red-500 mb-2 rounded-2xl text-[#fcfcfc]"
                  onClick={()=>{
                    
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