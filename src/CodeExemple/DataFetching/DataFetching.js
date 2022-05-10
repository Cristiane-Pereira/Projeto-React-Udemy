import React, { Component } from "react";
import CardPosts from "../../components/CardPosts/CardPosts";
import "./style.css";

class DataFetching extends Component {
  state = {
    posts: [],
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
        return { ...post, cover: photosJson[index].url} // pega 1 img por cada item do post atraves do index.
    })

    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <section className="container">
          <div className="posts">
            {posts.map((post) => (
              <CardPosts propsPost={post} key={post.id}/>
            ))}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default DataFetching;
