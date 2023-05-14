const botaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterarTema)

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
  body.classList.toggle("modo-escuro");
  if (modoEscuroEstaAtivo) {
    body.classList.remove("modo-escuro");

  } else {
    body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("projeto-listagem-pokemon", "./projeto-listagem-pokemon/imagens/moon.png")
  }

});
