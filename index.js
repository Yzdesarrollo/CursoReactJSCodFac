import React, { useState } from 'react';
import { render } from 'react-dom';

const Boton = () =>
{
  const [conteo, setConteo] = useState(0);
  return(
    <div>
      <p>Presionado: { conteo }</p>
      <button onClick={ () => console.log(':3') }>Click me!</button>
    </div>
  )
}


const App = () => 
{
  return <div><Boton /></div>
}

render( <App />, document.getElementById('titulo'));