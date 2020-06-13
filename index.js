import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Boton = () =>
{
  const [conteo, setConteo] = useState(0);
  useEffect( ()=>
  {
    console.log('Me ejecute');
    return ()=>
    {
      console.log('Adios');
    }
  },[]);
  return <button onClick={ ()=> setConteo(conteo+1) }>Click { conteo }</button>
}

const App = () => 
{
  const [mostrarBoton, setMostrarBoton] = useState(true);
  return(
    <div>
      <button onClick ={ ()=> setMostrarBoton(false)}>Eliminar botón</button>
      <div>
        {mostrarBoton && <Boton />}
      </div>
    </div>
  )
}


render( <App />, document.getElementById('titulo'));