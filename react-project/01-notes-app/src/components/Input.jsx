


const Input = () => {
  return (
    <div className="lg:w-[40%] h-screen  border-r-4">
        <div className="m-12">
            <h2 className="text-5xl font-bold mt-15 mb-10">Add Note</h2>
        <form 
            className='flex flex-col gap-3 '>
            <input type="text" 
                placeholder='Enter the title here'
                className='border-3 px-6 py-4 rounded text-2xl'
            />
            <textarea 
                className='border-3 px-6 py-3 h-50 rounded text-2xl'
                placeholder='Write the details here'>
            </textarea>
            <button 
                className="px-5 py-2 bg-[#c5c5c5] text-[#000000] rounded-2xl text-3xl"
            >Add Note</button>
        </form>
        </div>
    </div>
  )
}

export default Input