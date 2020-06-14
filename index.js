import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component{
  render(){
    return <p>Hola mundo! </p>
  }
}

render(<App />, document.getElementById('titulo'));