import {TaskList} from './components/TaskList.jsx'
import {TaskForm} from './components/TaskForm.jsx'

//import {useState, useEffect} from 'react'

function App (){


  return (
    <main className='bg-zinc-800 min-h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm ></TaskForm>
        <TaskList ></TaskList>
      </div>
    </main>
  )
}

export default App
