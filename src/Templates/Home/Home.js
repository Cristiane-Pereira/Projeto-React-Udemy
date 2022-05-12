import React, { useEffect, useState, useCallback } from "react";
import ButtonPaginationPosts from "../../components/ButtonPaginationPosts/ButtonPaginationPosts";
import CardPosts from "../../components/CardPosts/CardPosts";
import TextInput from "../../components/TextInput/TextInput";
import { loadPosts } from "../../utils/load-post";
import "./style.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(8);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue // (!!)converte a string por boolean no caso só vai filtrar se for true "tiver valor no searchValue"
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes( //faz o filtro acontecer...
          searchValue.toLocaleLowerCase()
        );
      })
    : posts;

  const handleLoadPosts = useCallback(async(page, postsPerPage) => { //como foi passado parametros para a função não é necessario que se passe as dependencias no colchetes.
    const postsAndPhotos = await loadPosts(); //onde esta as Promisses do fetch das APis.
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

    useEffect(() => { //useEffect é o msm que componentDidMount.
    // console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]); //dentro desses colchetes é passado a dependência do useEffect.

  const loadMorePosts = () => { //função que seta os posts por paginação.
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => { //Função do input
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <React.Fragment>
      <section className="container">
        <TextInput value={searchValue} onchange={handleChange} />

        {filteredPosts.length > 0 && ( // se tiver post filtrado vai mostrar....
          <div className="posts">
            {filteredPosts.map((post) => (
              <CardPosts propsPost={post} key={post.id} />
            ))}
          </div>
        )}
        {filteredPosts.length === 0 && ( // se não tiver post vai aparecer uma msg...
          <p>Não existem posts =(</p>
        )}

        <div className="button-container">
          {!searchValue && ( //se tiver valor no filtro vai ocultar o botão...
            <ButtonPaginationPosts
              className="button"
              textProps="Load More Posts"
              onClickPropsEvent={loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
