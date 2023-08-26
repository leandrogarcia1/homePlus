import { Routes, Route } from "react-router-dom";
import Home from "../../paginas/home/Home";
import CatalogoProductos from "../../paginas/catalogoProductos/CatalogoProductos";

import ProductoDetalle from "../../paginas/detalleProducto/DetalleProducto";


const Rutas = () => {
  return (
    <Routes>
    
        <>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<CatalogoProductos />} />
          <Route path="/productos/:id" element={<ProductoDetalle/>} />

          
        </>

   
      
    </Routes>
  );
};

export default Rutas;