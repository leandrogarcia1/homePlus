import { useParams } from "react-router-dom";
import productosData from "../../db.json";

function DetalleProducto() {
  const { id } = useParams();
  const producto = productosData.productos.find((producto) => producto.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
        <div className='bg-image hover-overlay'>
      <img src={producto.img} className='img-fluid' />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
      <h2>{producto.producto}</h2>
      <p>{producto.precio}</p>
      <p>{producto.categoria}</p>
      <p>{producto.nota}</p>
    </div>
  );
}

export default DetalleProducto;