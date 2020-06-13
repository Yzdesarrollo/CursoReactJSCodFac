import React from 'react';
import { render } from 'react-dom';

const Saludo = () =>
{
  const idioma = 'en';
   return(
     <div>
     {
       idioma === 'en' ? <p>Hello</p> : <p>Hola</p>
     }
     </div>
   )
  
}

const App = () => 
{
    return <h1><Saludo /></h1>;
}

render( <App />, document.getElementById('titulo'));