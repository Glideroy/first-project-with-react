
//Usamos un contexto

//{props.children} devuelve los componentes hijo en este caso del componnete TaskContext seria:
/*todo lo que este encerrado entre:

        <TaskContext>
            <></>
            <></>
            <></>
        </TaskContext>

Ppero en otro componente
*/

/**Hay 2 formas de crear un contexto: */

/**FORMA 1 */
/** 
export function TaskContext (props){
    return(
        <>
            <h1>Componente Context</h1>
            {props.children}
        </>
    )
}
*/

//FORMA 2

import {createContext, useState, useEffect} from 'react'
import {TAREAS as Data} from '../data/task.js'

//Creamos un contexto
export const TaskContext = createContext()

//TaskContext almacena los datos tambien es el nomre del contexto (encapsula todo lo que enviemos por el value)
//TaskContextProvider es el componente que englova a todos los demas componentes

export function TaskContextProvider (props){

    //hacemos que la lista este aqui devido a que de esta forma la lista de tareas sera accesible para TaskList y para TaskForm
    //Les pasamlos la TaskList como un prop
    //inicializamos task =[]
    const [Task, setTask] = useState([])


    useEffect(() => {
        setTask(Data)
    }, [])


    //Funcion que permitira agregar una nueva tarae
    //<TaskForm createTask={createTask}> posteriormente le pasamos la funcion
    function createTask (newTask){
        setTask([...Task, {
        id: Task.length,
        ...newTask
        }])
    }


    function deleteTask (idTask){
        //Elimina elementos con id igual a idTask
        setTask(
            Task.filter((tarea) => tarea.id != idTask)
        )
    }


    //dent4ro del value es los datos que proveera el contexto
    
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



