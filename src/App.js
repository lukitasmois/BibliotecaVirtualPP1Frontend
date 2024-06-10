import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Libros from './components/libros/libros';
import BuscarLibros from './components/libros/buscarLibros';
import Inventario from './components/sistema/inventario';
import AniadirLibro from './components/sistema/aniadirLibro';
import DescartarLibro from './components/sistema/descartarLibro';


function App() {
  return (
    <div className="aplicacion">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/buscarLibros" element={<BuscarLibros/>} />
          <Route path="/buscarLibros" element={<BuscarLibros/>} />
          <Route path="/inventario" element={<Inventario/>} />
          <Route path="/aniadirLibro" element={<AniadirLibro/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
