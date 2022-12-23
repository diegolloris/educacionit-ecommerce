import './App.css';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/cart/CartPage.jsx'
import IndexPage from './pages/index/IndexPage.jsx'
import DetailsPage from './pages/details/DetailsPage.jsx'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/cart' element={<CartPage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='/' element={<IndexPage />} />
          <Route path='/home' element={<IndexPage />} />
        
        <Route path='/*' element={<h1>ruta no encontrada</h1> } />
      </Routes>
    </div>
  );
}

export default App;
