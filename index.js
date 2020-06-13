import React from 'react';
import { render } from 'react-dom';

const nombres = ['Camilo', 'Santiago', 'Simon']

const Saludar = (props)=>
{
  return <p>Hola {props.nombre}</p>
}


const App = () => 
{
  return <div><Saludar nombre='MARIA' /></div>
}

render( <App />, document.getElementById('titulo'));