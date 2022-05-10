import React, { Component } from 'react';
import './style.css'

class StateExemple extends Component {
  constructor(props) {
    super(props);
    this.handleSetState = this.handleSetState.bind(this); //faz com que ligue o this.state com o metodo da função handleClick.
    this.state = {
      name: 'Cristiane',
      last_name: 'Pereira da Silva',
      counter: 0,
    }
  }

  handleClick() {
    let box = document.querySelector('.App-header');
    let span = document.querySelector('span');
    box.style.background = '#fff';
    box.style.color = '#1F2C4D';
    span.style.color = '#F52E80';
    return;
  }

  handleSetState() {
    this.setState({
      name: 'Vitor',
      last_name: 'Gabriel Pereira da Silva'
    })
  }

  handleSetState2 = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className='App-header '>
          <p style={{color: '#55C0EF'}}>{this.state.name} {this.state.last_name}</p>
          <span style={{fontSize: '15px', textAlign: 'center',margin: '0px 80px'}}>"Aqui o componente é controlado por (this), onde seu setState é passado em um métado(function), o React não consegue fazer o (bind) do This, devido
          a isso devemos criar um bind(this) para essa função dentro do escopo do state e assim podemos usar o this dentro do métado(função)."</span>
          <button type="button" style={{ background: '#55C0EF', marginTop: '15px', marginBottom: '50px', color: '#fff', width: '230px', height: '30px', cursor: 'pointer', fontWeight: 'bold', border: 'none' }} onClick={this.handleSetState}>Clique para mudar o nome</button>
         
          <p>{this.state.counter}</p>
          <span style={{ textAlign: 'center', color: 'coral', fontSize: '17px', cursor: 'pointer', fontWeight: 'bold' }} onClick={this.handleSetState2}>Contador</span>
          <span style={{ fontSize: '15px', textAlign: 'center', margin: '0px 80px' }}>"Aqui o métado foi construido com arrowFunction e deste modo não precisamos fazer o destructuring (bind) para usar o this no método, pois na função arrowFunction
          ela vai buscar o (this) na função pai."</span>
        </div>
      </React.Fragment>
    )
  }
}
export default StateExemple;
