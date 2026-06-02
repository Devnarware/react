import axios from 'axios'
import { useEffect, useState } from 'react'

const Gallery = () => {

  const [userData, setUserData] = useState([])


  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=500')
  }

  

  let showData = "Nothing to show here"
  if (userData.length > 1) {
    showData = userData.map(function (elem, idx) {
      return (
        <div key={idx} className='flex flex-col gap-5'>
          <a href={elem.url} target='_blank'>
            <div>
              <img src={elem.download_url} alt={idx}
                className='h-60 object-cover'
              />
            </div>
          </a>
          <h1 className='text-2xl text-center'>{elem.author}</h1>
        </div>
      )
    })
  }

  return (
    <div className="h-full w-full bg-[#131723]">
      {/* <button
        className="m-10 py-3 px-6  bg-[#70e0e6] rounded-2xl text-3xl text-[#303030]"
        onClick={getData}
      >
        Click Me
      </button> */}

      
      <div className='flex gap-10 flex-wrap mx-25 my-10 justify-around'>
        {showData}
      </div>
    </div>
  )
}

export default Gallery