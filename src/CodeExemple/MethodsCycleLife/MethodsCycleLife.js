import React, { Component } from "react";
import "./style.css";

class MethodsCycleLife extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Titulo 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "Titulo 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "Titulo 3",
        body: "O corpo 3",
      },
    ],
  };

  timeOutUpdate = null; //atributo.

  //   componentDidMount() {
  //     //método de enquanto monta a tela faça alguma coisa!
  //     this.setState({
  //       posts: [
  //         {
  //           id: 1,
  //           title: "Titulo 1",
  //           body: "O corpo 1",
  //         },
  //         {
  //           id: 2,
  //           title: "Titulo 2",
  //           body: "O corpo 2",
  //         },
  //         {
  //           id: 3,
  //           title: "Titulo 3",
  //           body: "O corpo 3",
  //         },
  //       ],
  //     });
  //   }

  componentDidMount() { //Monta na tela. 
    this.handleTimeount();
  }

  componentDidUpdate() { //Atualizara o component em um loop infinito.
    this.handleTimeount();
  }

  componentWillUnmount() {  //destroi o componente que foi montado na tela.
    clearTimeout(this.timeOutUpdate); //limpa lixo das atualizações do método.
  }

  handleTimeount = () => {
    const { posts, counter } = this.state;
    posts[0].title = "O titulo mudou!";
    this.timeOutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 2000);
  };

  render() {
    const { posts, counter } = this.state;
    return (
      <React.Fragment>
        <div className="App-header ">
          <h1>{counter}</h1>
          <div style={{ color: "#fff" }}>
            {posts.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MethodsCycleLife;
