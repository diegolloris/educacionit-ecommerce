import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {IndexMioMio} from './IndexMioMio.js'
import { DetailsMioMio } from './DetailsMioMio';
import { CartMioMio } from './CartMioMio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IndexMioMio/> } />
        <Route path='/home' element={<IndexMioMio/> } />
        <Route path='/detail' element={<DetailsMioMio/> } />
        <Route path='/cart' element={<CartMioMio/> } />
        
        <Route path='/*' element={<h1>ruta no encontrada</h1> } />
      </Routes>
    </div>
  );
}

export default App;
