import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Gallery = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  async function getData() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=2`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])



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
    <div className=''>

      <Navbar />

      <div className='flex gap-10 flex-wrap mx-25 my-10 justify-around'>
        {showData}
      </div>

      <div className='flex justify-center gap-40 m-20'>
        <button className='px-5 py-4 text-2xl bg-[#5d5d5d] rounded-2xl active:scale-96 cursor-pointer flex justifybetween '
          onClick={() => {
            console.log(index);
            
            if (index > 1) {
              setUserData([])
              setIndex(index - 1)
            }
            
          }}
          > <ChevronLeft className='mt-0.5' size={30} strokeWidth={2}/> Prev</button>
          <h1 className='text-3xl px-10 py-4'>{index}</h1>
        <button className='px-5 py-4 text-2xl bg-[#5d5d5d] rounded-2xl active:scale-96 cursor-pointer flex gap-1.5'
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
        >Next <ChevronRight className='mt-0.5' size={30} strokeWidth={2}/></button>
      </div>
    </div>
  )
}

export default Gallery