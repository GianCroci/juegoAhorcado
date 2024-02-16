import React from 'react'
import { useNavigate } from 'react-router-dom'
import imagen from "../assets/el-ahorcado5.jpg"

const Perdio = () => {

  const navegacion = useNavigate()

  return (
    <>
    <div className='gameOver'>
      <h1>PERDISTE</h1>
      <p>Dejaste que una persona inocente como tipito nos abandonara, deja de boludear y mira mas futbol</p>
      <div>
        <img src={imagen} alt="" />
      </div>
      <button onClick={()=>navegacion("/juego")}>VOLVER A JUGAR</button>
    </div>
      
    </>
  )
}

export default Perdio