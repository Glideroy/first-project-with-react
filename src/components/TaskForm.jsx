import {useState} from 'react'

import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'



export function TaskForm (){

    const [Title, setTitle] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const {createTask} = useContext(TaskContext)
    const handleSubmid =(e)=>{
        const addTask = {
            title: Title,
            descripcion: Descripcion
        }
        console.log(addTask)
        createTask(addTask)
        setTitle('')
        setDescripcion('')
    }

    return(
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmid} className='bg-emerald-500 p-10 mb-4'>
                <h1 className='text-5xl font-bold text-white  mb-5'>Crea tu Tarea</h1>
                <input 
                    className='bg-slate-300 p-3 w-full mb-2'

                    type="text" 
                    placeholder="Escribe una nueva tarea" 
                    onChange={(entrada)=>{
                        setTitle(entrada.target.value)
                    }}
                    value={Title}
                    autoFocus
                />
                <input 
                    className='bg-slate-300 p-3 w-full mb-2'
                    
                    type="text" 
                    placeholder="Describe la tarea" 
                    onChange={(entrada)=>{
                        setDescripcion(entrada.target.value)
                    }}
                    value={Descripcion}
                />
                <button className='bg-indigo-700  p-2 m-2 text-white rounded-md hover:bg-orange-500'> Guardar </button>
            </form>
        </div>
    )

}
