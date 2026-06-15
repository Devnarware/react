import Input from './Input.jsx'
import Display from './Display.jsx'
import { useState } from 'react'
import { useEffect } from 'react'



const NotesApp = () => {

  const [task, setTask] = useState([])

  // localstorage
  const allTasks = JSON.parse(localStorage.getItem("allTask")) || []
  useEffect(() => {
    setTask(allTasks)
  }, [])


  return (
    <div className='lg:flex '>
      <Input tasks={task} setTask={setTask} />
      <Display task={task} setTask={setTask} />
    </div>
  )
}

export default NotesApp