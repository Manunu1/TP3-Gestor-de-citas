import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Componentes/Formulario'
import Listado from './Componentes/Listado'

function App() {
  const [count, setCount] = useState(0)

  const datos = [
    ['Nina','Martin','2021-08-05','08:20','Le duele la pierna'],
    ['Sifon','Flecha','2023-08-05','09:24','Duerme mucho'],
    ['Floki','Ari','2023-08-05','16:15','No está comiendo']
  ];

  return (
    <>
      <div id="root">

        <h1>ADMINISTRADOR DE PACIENTES</h1>

        <div className="container">

          <div>
            <h2>Crear mi cita</h2>
            <Formulario />
          </div>

          <div>
            <h2>Administra tus citas</h2>
            <Listado ArrayCitas={datos} />
          </div>

        </div>

      </div>

    </>
  )
}

export default App
