

const Display = () => {
  return (
    <div className='lg:w-[60%]'>
      <div className="m-12">
        <h2 className="text-5xl font-bold mt-15 mb-10">Recent Notes</h2>
        <div className='flex flex-wrap gap-9 h-245 overflow-y-auto'>

          
          <div className="h-104 w-75 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover overflow-hidden px-10 pt-11 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-3 h-[90%]  ">
              <h3 className="text-3xl font-bold text-[#111] leading-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <p className=" text-[#5a5a5a] h-[90%] overflow-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere at dolores cupiditate tempore, sit animi exercitationem accusantium fuga harum porro ratione quisquam et distinctio laborum dolore assumenda suscipit molestias recusandae sed. Facilis quisquam odio atque quaerat deserunt? Nihil incidunt sed fuga porro nobis? Nisi neque aliquam quos obcaecati fugit dolorum.</p>
            </div>
            <button className=" h-[12%] w-[90%] bg-red-500 mb-2 rounded-2xl text-[#fcfcfc]">Delete</button>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Display