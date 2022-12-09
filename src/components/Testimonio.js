import React from 'react';
import '../index.css';

export function Testimonio(props){
  return(
    <div className='container'>
      <img className='imagen' src={require(`../imagenes/${props.imagen}.png`)} alt='' />
      <div className='container-testimonio'>
        <p className='nombre'>{props.nombre} en {props.pais}</p>
        <p className='cargo'>{props.cargo} en {props.empresa}</p>
        <p className='testimonio'>{props.testimonio}</p>
      </div>
    </div>
    
  );
}
