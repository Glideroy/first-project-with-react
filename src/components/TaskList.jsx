//RFC
import {TaskCard} from './TaskCard.jsx'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'



export  function TaskList() {

    const {Tasks} = useContext(TaskContext)
    
    if (Tasks.length === 0){
        return(
            <h1 className='text-white text-3xl font-bold  text-center'>No hay tareas aun</h1>
        )
    }


    //APLICANDO ESTILOS CON TailwinCSS
    return (
        <div className='grid gap-2' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {Tasks.map((tarea, index)=>{
                return(
                    <TaskCard Task={tarea} key={index} ></TaskCard>
                )
            })}
        </div>
    )
}

