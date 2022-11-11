import React from 'react';
import "../stylesheets/Testimonio.css"

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require(`../Imagenes/testimonio${props.imagen}.png`)}
      alt={props.descripcionFoto}/>

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargo-testimonio">
          <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          {props.testimonio}
        </p>
      </div>
    </div>
  );
} 

export default Testimonio;