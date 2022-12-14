import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {IndexMioMio} from './components/index/IndexMioMio'
import { DetailsMioMio } from './components/details/DetailsMioMio';
import { CartMioMio } from './components/cart/CartMioMio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IndexMioMio/> } />
        <Route path='/home' element={<IndexMioMio/> } />
        <Route path='/detail/:id' element={<DetailsMioMio/> } />
        <Route path='/cart' element={<CartMioMio/> } />
        
        <Route path='/*' element={<h1>ruta no encontrada</h1> } />
      </Routes>
    </div>
  );
}

export default App;
