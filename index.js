import React from 'react';
import { render } from 'react-dom';

const nombres = ['Camilo', 'Santiago', 'Simon']

const Saludar = ({nombre, idioma= 'en'})=>
{
  const saludo = idioma === 'es' ? 'Hola' : 'Hello';
  return <p>{saludo} {nombre}</p>
}


const App = () => 
{
  return <div><Saludar nombre='MARIA' idioma='es'/></div>
}

render( <App />, document.getElementById('titulo'));