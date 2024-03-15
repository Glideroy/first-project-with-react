import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Importamos el contexto
import {TaskContextProvider } from './context/TaskContext.jsx'


//<React.StrictMode es recomendable usarlo en react ya que le dices que tu codigo esta en desarrollo el entorno de desarrollo te dara recomendaciones, esto en buenas paracticas 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
