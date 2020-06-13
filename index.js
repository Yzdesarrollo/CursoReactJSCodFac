import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Boton = () =>
{
  const [conteo, setConteo] = useState(0);
  useEffect( ()=>
  {
    console.log('Me ejecute');
  })
  return <button onClick={ ()=> setConteo(conteo+1) }>Click { conteo }</button>
}

const App = () => <Boton />


render( <App />, document.getElementById('titulo'));