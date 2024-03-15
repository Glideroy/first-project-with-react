import {createContext, useState, useEffect} from 'react'
import {TAREAS as Data} from '../data/task.js'

export const TaskContext = createContext()
export function TaskContextProvider (props){

    const [Task, setTask] = useState([])

    useEffect(() => {
        setTask(Data)
    }, [])

    function createTask (newTask){
        setTask([...Task, {
        id: Task.length,
        ...newTask
        }])
    }


    function deleteTask (idTask){
        setTask(
            Task.filter((tarea) => tarea.id != idTask)
        )
    }

    
    return(
        <TaskContext.Provider value={{
            Tasks: Task,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}



