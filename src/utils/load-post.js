export const loadPosts = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts"); //fetch => faz a busca posts.
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos"); //fetch => faz a busca phothos.
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]); // joga a busca (promessa).
  const postsJson = await posts.json(); //converte para Json
  const photosJson = await photos.json(); //converte para Json

  const postsAndPhotos = postsJson.map((post, index) => {
    //postsJson foi usado pq ele era o array de obj mais pequeno do que das fotos.
    return { ...post, cover: photosJson[index].url }; // pega 1 img por cada item do post atraves do index.
  });
    
    return postsAndPhotos;
};
