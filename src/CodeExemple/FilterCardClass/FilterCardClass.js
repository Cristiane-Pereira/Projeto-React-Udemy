import React, { Component } from "react";
import "./style.css";

class FilterCard extends Component {
  state = {
    posts: [],
    searchValue: "",
  };

  componentDidMount() { //Monta na tela.
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts"); //fetch => faz a busca.
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos"); //fetch => faz a busca.
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]); // joga a busca (promessa).
    const postsJson = await posts.json(); //converte para Json
    const photosJson = await photos.json(); //converte para Json
    const postsAndPhotos = postsJson.map((post, index) => { //postsJson foi usado pq ele era o array de obj mais pequeno do que das fotos.
      return { ...post, cover: photosJson[index].url }; // pega 1 img por cada item do post atraves do index.
    });
    this.setState({ posts: postsAndPhotos });
  };

  handleChange = (e) => { //pega o valor do input.
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, searchValue } = this.state;

    const filteredPosts = !!searchValue // (!!)converte a string por boolean no caso só vai filtrar se for true "tiver valor no searchValue"
      ? posts.filter((post) => {
          return post.title.toLowerCase().includes( //faz o filtro acontecer, esta fazendo o filtro pelo title...
            searchValue.toLocaleLowerCase()
          );
        })
      : posts;

    return (
      <React.Fragment>
        <section className="container">
          <input
            className="input-search"
            type="search"
            placeholder="Type your search"
            onChange={this.handleChange}
            value={searchValue}
          />

          {filteredPosts.length > 0 && ( //lógica que mostra os posts caso tenha cards.
            <div className="posts">
              {filteredPosts.map((post) => (
                <div className="post" key={post.id}>
                  <img src={post.cover} alt={post.title} />
                  <div className="post-content">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {filteredPosts.length === 0 && ( //lógica que mostra a mensagem caso não tenha cards.
            <div className="container">
            <h4>Nenhum Post encontrado :(</h4>
            </div>
          )}

        </section>
      </React.Fragment>
    );
  }
}
export default FilterCard;
