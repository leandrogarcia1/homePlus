import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from "mdb-react-ui-kit";

import productosData from "../../db.json"


export default function ItemListContainer() {
  return (
    <MDBRow>
      {productosData.productos.map((producto) => (
        <MDBCol key={producto.id} md="4" >
          <MDBCard>
            <MDBCardImage src={producto.img} position="top" alt={producto.producto} />
            <MDBCardBody>
              <MDBCardTitle>{producto.producto}</MDBCardTitle>
              <MDBCardText> Categoria: {producto.categoria}</MDBCardText>
              <MDBCardText> $ {producto.precio}</MDBCardText>
              <MDBBtn href={`/productos/${producto.id}`}>Ver Mas</MDBBtn>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}
