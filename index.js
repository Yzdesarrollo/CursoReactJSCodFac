import React from 'react';
import { render } from 'react-dom';

const nombres = ['Camilo', 'Santiago', 'Simon']

const Saludar = ({ nombre, idioma })=>
{
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return <p>{saludo} {nombre}</p>
}


const App = () => 
{
  return <div><Saludar nombre='MARIA' idioma='en'/></div>
}

render( <App />, document.getElementById('titulo'));