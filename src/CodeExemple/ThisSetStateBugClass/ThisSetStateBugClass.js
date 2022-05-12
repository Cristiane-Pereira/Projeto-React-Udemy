import { Component } from 'react';
import './style.css'

export class ThisSetStateBugClass extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => { // aqui foi resolvido o bug de atualização de estado do DOM com o VirtualDOM que no React é uma cópia do DOM.
        return { counter: prevState.counter + prevProps.numberToIncrement }
      },
      () => {
        console.log('POST', this.state.counter);
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

/*O React não manipula diretamente o DOM do navegador, ou seja, a gente não consegue
 manipular os elementos que estão na tela, o que o react manipula é o virtualDOM, ou seja, 
 é uma cópia do DOM que tem no navegador só que em JavaScript.*/