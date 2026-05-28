


const Input = () => {
  return (
    <div>
        <form className='flex flex-col text-4xl w-1/3 gap-3'>
            <input type="text" 
                placeholder='Enter the title here'
                className='border-3 px-5 py-2 rounded'
            />
            <textarea 
                className='border-3 px-5 py-2 h-50 rounded'
                placeholder='Write the details here'>
            </textarea>
            <button 
                className="px-5 py-2 bg-[#c5c5c5] text-[#000000] rounded-2xl"
            >Add Note</button>
        </form>
    </div>
  )
}

export default Input