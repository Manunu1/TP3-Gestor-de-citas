import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Componentes/Formulario'
import Listado from './Componentes/Listado'

function App() {

  const [citas, setCitas] = useState([]);

  return (
    <>
      <div id="root">

        <h1>ADMINISTRADOR DE PACIENTES</h1>

        <div className="container">

          <div>
            <h2>Crear mi cita</h2>
            <Formulario citas = {citas} setCitas = {setCitas} />
          </div>

          <div>
            <h2>Administra tus citas</h2>
            <Listado citas={citas} setCitas = {setCitas}/>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
