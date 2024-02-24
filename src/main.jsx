import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/pelis.css'
import { Pelis } from './Componentes/Pelis'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pelis></Pelis>
  </React.StrictMode>,
)
