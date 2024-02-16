import React from 'react'
import { useNavigate } from 'react-router-dom'


const Inicio = () => {

    const navigate = useNavigate();

  return (
    <div className='inicio'>
        <h3>BIENVENIDO AL JUEGO <br />DEL AHORCADO</h3>
        <p>La vida de un inocente tipito lineal está en tus manos</p>
        <button onClick={()=>navigate("/juego")}>Comenzar</button>
    </div>
  )
}

export default Inicio