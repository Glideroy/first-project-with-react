
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskCard({Task}){


    const {deleteTask} = useContext(TaskContext)

    //APLICANDO ESTILOS CON TailwinCSS
    return(
        <>
            <div className="bg-gray-800 text-white p-2 rounded-md">
                <h3 className="text-3xl font-bold capitalize">{Task.title}</h3>
                <p className="text-gray-400 text-sm">{Task.descripcion}</p>
                <button 
                className="bg-blue-400 px-2 py-2 rounded-md mt-4 hover:bg-red-400"
                onClick={() => {deleteTask(Task.id)}}>
                    Eliminar Tarea
                </button>
            </div>
        </>
    )
}
