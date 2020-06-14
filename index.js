import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
  }

  render(){
    console.log(this.props);
    return(
    <>
    <p>Contador: {this.state.contador} </p>
    <button onClick={ ()=>this.setState({ contador: this.state.contador + 1 }) }>Sumar</button>
    </>
    )
  }
}

render(<App name={2} />, document.getElementById('titulo'));