import React, { useContext } from 'react'
import Contexto from '../contexto/Contexto'
import { useNavigate } from 'react-router-dom'
import imagen from "../assets/el-ahorcado.jpg"

const Gano = () => {

  const {palabraCorrecta} = useContext(Contexto)
  const navegacion = useNavigate();

  return (
    <>
    <div className='ganoContainer'>
      <h2>FELICITACIONES SALVASTE AL TIPITO</h2>
      <img src={imagen} alt="" />
      <h3>El equipo argentino esconido era: {palabraCorrecta}</h3>
      <button onClick={()=>navegacion("/juego/")}>Jugar otra vez</button>
    </div>
    </>
  )
}

export default Gano