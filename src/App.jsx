import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Componentes/Formulario'
import Cita from './Componentes/Cita'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="root">

        <h1>ADMINISTRADOR DE PACIENTES</h1>

        <div className="container">

          <div>
            <Formulario />
          </div>

          <div>
            <Cita/>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
