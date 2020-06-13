import React from 'react';
import { render } from 'react-dom';

const paises = ['Peru', 'Chile', 'Uruguay', 'Colombia']

function getPaises()
{
  const elementos = [];
  for(let i = 0; i < paises.length; i ++)
  {
    elementos.push(<li>{paises[i]}</li>);
  }
  return elementos;
}

const Paises = () => 
{
  return <ul>{ getPaises() }</ul>
}

const App = () =>
{
  return <h1><Paises /></h1>;
}

render(<App />, document.getElementById('titulo'));