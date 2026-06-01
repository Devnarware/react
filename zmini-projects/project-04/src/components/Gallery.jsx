import axios from 'axios'
import { useState } from 'react'

const Gallery = () => {

  const [data, setData] = useState([])

  const apiCall = async () => {

    const response = await axios('https://picsum.photos/v2/list?page=2&limit=10')
    // const data = await response.data
    setData(response.data)

  }

  let showImg = 'EMPTY'
  if (data.length > 0) {
    setImg = data.map((elem, idx) => {
      return (
        // <img src={elem.data} alt={idx} />
        "HELLO"
      )
    })
  }


  return (

    <div className="h-screen w-full text-3xl bg-[#0c1216]">

      <button
        className="text-3xl text-[#3d3d3d] m-10 py-4 px-6 rounded-3xl bg-[#4fd4d4]"
        onClick={apiCall}
      >Click me</button>

      <div>
        {showImg}
      </div>

    </div>

  )
}

export default Gallery