import { useState } from "react"
import Contexto from "./Contexto"

const Provider = ({children}) => {

  const [palabraCorrecta, setPalabraCorrecta] = useState("")

  const agregarPalabra=(e)=>{
    setPalabraCorrecta(e)
  }

  return (
    <>
    <Contexto.Provider value={{
      agregarPalabra,
      palabraCorrecta
    }}>
        {children}
    </Contexto.Provider>
    </>
  )
}

export default Provider