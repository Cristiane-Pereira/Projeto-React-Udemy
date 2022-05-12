import React, { Component } from "react";
import ButtonPaginationPosts from "../../components/ButtonPaginationPosts/ButtonPaginationPosts";
import CardPosts from "../../components/CardPosts/CardPosts";
import TextInput from "../../components/TextInput/TextInput";
import { loadPosts } from "../../utils/load-post";
import "./style.css";

class HomeComponentClassCards extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 8,
    searchValue: "",
  };

  async componentDidMount() { //Monta na tela.
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts(); //onde esta po fetch das APis.
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage), //faz a paginação dos posts.
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, allPosts, postsPerPage, posts } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  };


  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?  // (!!)converte a string por boolean no caso só vai filtrar se for true "tiver valor no searchValue"
      allPosts.filter(post => {
        return post.title.toLowerCase().includes( //faz o filtro acontecer...
          searchValue.toLocaleLowerCase()
        );
      })
      : posts;
    return (
      <React.Fragment>
        <section className="container">
          <TextInput value={searchValue} onchange={this.handleChange} />

          {filteredPosts.length > 0 &&( // se tiver post filtrado vai mostrar....
            <div className="posts">
              {filteredPosts.map((post) => (
                <CardPosts propsPost={post} key={post.id} />
              ))}
          </div>
          )}
          {filteredPosts.length === 0 &&(  // se não tiver post vai aparecer uma msg...
            <p>Nenhum Post encontrado :(</p>
          )}
          
          <div className="button-container">
            {!searchValue && ( //se tiver valor no filtro vai ocultar o botão...
              <ButtonPaginationPosts
                className="button"
                textProps="+ Load More Posts +"
                onClickPropsEvent={this.loadMorePosts}
                disabled={noMorePosts}
              />
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default HomeComponentClassCards;
