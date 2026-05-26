let i = 0 
const submit = (e) => {
    e.preventDefault()
    console.log("hello", i++);
    
}

function FormHandling() {
  return (
    <div>
        <form onSubmit={(e)=>{submit(e)}}>
            <input type="text" placeholder="Enter your name" className="text-3xl border-2 py-1 px-5"  />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormHandling