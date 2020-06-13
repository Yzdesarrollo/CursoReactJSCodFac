import React from 'react';
import { render } from 'react-dom';

const Saludo = () =>
{
    const curso = 'Primeros Pasos con ReactJS'
    return <p>Hola { `${curso}` }</p>;
}

const App = () => 
{
    return <h1><Saludo /></h1>;
}

render( <App />, document.getElementById('titulo'));