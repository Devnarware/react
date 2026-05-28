import Input from './Input.jsx'
import Display from './Display.jsx'
import { useState } from 'react'



const NotesApp = () => {

  const [task, setTask] = useState([])

  return (
    <div className='lg:flex '>
        <Input arr={task}/>
        <Display />
    </div>        
  )
}

export default NotesApp