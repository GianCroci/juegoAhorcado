import { useContext, useEffect, useState } from 'react'
import { Palabras } from '../assets/Palabras'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../contexto/Contexto'

const Juego = () => {


  
  const abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  const letrasArray = abecedario.split("")
  const misColores = [{backgroundColor: "white", cursor: "pointer"}, 
  {backgroundColor:"green", color:"white"}, {backgroundColor: "red", color: "white"}]
  const {agregarPalabra} = useContext(Contexto)
  const [azar, setAzar] = useState(0)
  useEffect(()=>{
    setAzar(Math.floor(Math.random()*Palabras.length))
  },[])

  const [palabra, setPalabra] = useState([])
  useEffect(()=>{
    setPalabra(Palabras[azar].equipo.split(""))
    agregarPalabra(Palabras[azar].equipo)
  },[azar])

  const [misLetras, setMisLetras] = useState([])
  const [letrasAcertadas, setLetrasAcertadas] = useState(0)
  const [correctas, setCorrectas] = useState([])
  const [erradas, setErradas] = useState([])
  const [posibilidades, setPosibilidades] = useState(0)
  const navegacion = useNavigate();
 
  const apretado=(e)=>{
   
    const letra = e.target.innerHTML;
    setMisLetras([...misLetras, letra])
    if(palabra.indexOf(letra)===-1){
      setErradas([...erradas, letra])
      setPosibilidades((posibilidades<5)
      ?posibilidades+1
      :5)
    }else{
      setCorrectas([...correctas, letra])
      setLetrasAcertadas(letrasAcertadas+1)
    }
    if(posibilidades===4){
      navegacion("/perdio")
    }
  }
  useEffect(()=>{
    let noEncontrado = 0;
    palabra.map(e=>{
      if (misLetras.find(p=>p===e)===undefined){
        noEncontrado++;
      }
    })
      if(noEncontrado===0 && correctas.length>0){
        navegacion("/gano")
      }
    
    },[correctas])

  console.log(palabra)
  return (
    <>
    <div className="juego">
      <h1>ADIVINA EL EQUIPO DEL FUTBOL ARGENTINO</h1>
      <div>
        <img src={require(`../assets/el-ahorcado${posibilidades}.jpg`)} alt="" />
      </div>
      <h3>{posibilidades} / 5</h3>
      <div className='palabra'>
        {palabra.map((letra, i)=>(
          misLetras.indexOf(letra)===-1)
        ? <div className='vacio' key={i}></div>
        : <div className='noVacio' key={i}>{letra}</div>
          )
        }
      </div>
      <div className="botones">
        {letrasArray.map(letra=>(
          (correctas.find(e=>e===letra))
          ? <button key={letra} style={misColores[1]}>{letra}</button>
          :
          (erradas.find(e=>e===letra))
          ? <button key={letra} style={misColores[2]}>{letra}</button>
          : <button key={letra} style={misColores[0]} onClick={apretado}>{letra}</button>

        ))}
      </div>
      
    </div>  
    
    </>
  )
}

export default Juego