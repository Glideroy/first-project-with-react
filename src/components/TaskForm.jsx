import {useState} from 'react'

//createContext para crear el contexto
//useContext para poder usar ese contexto 

import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'



export function TaskForm (){

    //const Title = ''
    const [Title, setTitle] = useState('')
    //const Descripcion = ''
    const [Descripcion, setDescripcion] = useState('')


     //-------------------USO DE CONTEXTO -----------------------------
    //Llamamos al contexto qeu vamos a usar
    //en este caso del contexto TaskContext usaremos su funcion createTask
    const {createTask} = useContext(TaskContext)
    
    //------------------------------------------------------------------



    //contralodr del submid
    const handleSubmid =(e)=>{
        //resive un evento y .preventDefault(); cancela su comportamiento por defecto (cuando envias un formulario 'submid' por defecto se refresca la pagina)
        e.preventDefault();
        
        //Estamos creando una nueva tarea
        const addTask = {
            title: Title,
            descripcion: Descripcion
        }
        console.log(addTask)
        createTask(addTask)
        //Estas 2 linea spara que el estado del formulario se limpie en automatico cuando agregue suna tarea
        setTitle('')
        setDescripcion('')
    }





    /*
    value={Title}: el valor sera el mismo que el estado de Title (para que se limpie el formulario por si solo)
    autoFocus:Cuando cargues la pagina el cursor marcara de forma automatica el imput (listo para escrivir)
    */
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