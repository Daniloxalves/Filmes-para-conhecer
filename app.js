function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se o campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do filme</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()
  
  console.log(campoPesquisa);

  // String que armazenará o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada item de dado na lista de resultados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemnto
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
    }
   
  }

  if (!resultados) {
    resultados = "<p>Nada foi econtrado</p>"
  }

  // Atualiza o conteúdo da seção com os resultados da pesquisa
  section.innerHTML = resultados;
}
