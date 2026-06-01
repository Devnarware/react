


const Api = () => {

    const apiCall = async() =>{
        const response = await fetch('https://dummyjson.com/quotes')
        const data = await response.json()
        console.log(data.quotes);  
    }

  return (
    <div>
        <button 
        onClick={apiCall}
        className="m-10 p-3 bg-red-300 text-3xl rounded-xl"
        >Click me</button>
    </div>
  )
}

export default Api