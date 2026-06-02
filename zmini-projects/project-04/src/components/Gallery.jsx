import axios from 'axios'
import { useState } from 'react'

const Gallery = () => {

  const [userData, setUserData] = useState([])

  const getData = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=5')
    setUserData(response.data)
  }

  let showData = "Nothing to show here"
  if (userData.length>1) {
    showData = userData.map(function(elem, idx){
      return(
        <div key={idx}>
          <a href={elem.url}><img src={elem.download_url} alt={idx} /></a>
        </div>
      )
    })
  }

  return (
    <div className="h-screen w-full bg-[#131723]">
      <button 
        className="m-10 py-3 px-6  bg-[#70e0e6] rounded-2xl text-3xl text-[#303030]"
        onClick={getData}
      >
        Click Me
      </button>
      <div>
        {showData}
      </div>
    </div>
  )
}

export default Gallery