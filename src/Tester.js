import React, { Component } from 'react';

class Tester extends Component {
    state = {
        name: 'Cristiane',
        idade: 31,
        profissao: 'Desenvolvedora'
    }

    handleClick() {
        this.setState({
            name: 'Vitor',
            idade: 11,
            profissao: 'Faz nada'
        })
    }


    render() {
        return (
            <div>
                <center>
                    <p>Meu nome é {this.state.name} tenho {this.state.idade} anos e trabalho como {this.state.profissao} &#128512;.</p>
                    <button onClick={() => this.handleClick()}>Clique para mudar o estado</button>
                </center> 
           </div> 
        );
    }
}

export default Tester;
