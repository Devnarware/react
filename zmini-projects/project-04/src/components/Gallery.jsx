import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'

const Gallery = () => {

  const [userData, setUserData] = useState([])

  async function getData(){
    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=100')
    setUserData(response.data)
  }
 
  useEffect(() =>{
    getData()
  }, [])

  

  let showData = "Loading....."
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
    <div >
      
      <Navbar />
      
      {/* <div className='flex gap-10 flex-wrap mx-25 my-10 justify-around'>
        {showData}
      </div> */}
    </div>
  )
}

export default Gallery