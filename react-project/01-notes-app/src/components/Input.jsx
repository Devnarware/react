


const Input = () => {
  return (
    <div>
        <form className='flex flex-col text-4xl w-1/3'>
            <input type="text" 
                placeholder='Enter the title'
                className='border-3 px-5 py-2'
            />
            <textarea 
                className='border-3 px-5 py-2 '
                placeholder='Enter the description'>
            </textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Input