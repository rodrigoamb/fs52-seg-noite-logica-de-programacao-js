// function trazerPostagens() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       return res.json();
//     })
//     .then((posts) => {
//       console.log(posts);
//     })
//     .catch((err) => {
//       console.error(err);
//     });

//   return "algum valor";
// }
// const meusPosts = trazerPostagens();

//do código acima, notem que o console.log(meusPosts) está retornando undefined. Por quê?
//R: Porque a função trazerPostagens é assíncrona e o console.log está sendo executado antes da resolução da Promise retornada pela função fetch. Portanto, meusPosts recebe undefined, pois a função ainda não retornou os dados quando o console.log é chamado.

async function buscarPosts() {
  try {
    console.log("Carregando...");

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dados = await resposta.json();
    console.log("async/await", dados);

    console.log("Dados carregados com sucesso...");
  } catch (error) {
    console.error(error);
  }
}

buscarPosts();
