import React from 'react';
import { render } from 'react-dom';

const nombres = ['Camilo', 'Santiago', 'Simon']

const Saludar = ({nombre})=>
{
  return <p>Hola {nombre}</p>
}


const App = () => 
{
  return <div><Saludar nombre='MARIA' /></div>
}

render( <App />, document.getElementById('titulo'));