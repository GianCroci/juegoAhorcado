import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Juego from './paginas/Juego';
import Gano from './paginas/Gano';
import Provider from './contexto/Provider';
import Perdio from './paginas/Perdio';


function App() {
  return (
    <>
    <Provider>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/juego' element={<Juego/>}/>
          <Route path='/gano' element={<Gano/>}/>
          <Route path='/perdio' element={<Perdio/>}/>
        </Routes>
    </Provider>
    </>
  );
}

export default App;
