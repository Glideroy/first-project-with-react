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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gridAutoRows: 'minmax(100px, auto)', gap: '1rem' }}>
            <center>
                {Tasks.map((tarea, index)=>{
                    return(
                        <TaskCard Task={tarea} key={index} ></TaskCard>
                    )
                })}
            </center>
        </div>
    )
}

