const imagem = document.getElementById("minhaImagem");
const botao = document.getElementById("trocarImagem");

// Estado atual da imagemw
let imagemAtual = 1;

// Função que troca a imagem
function trocarImagem() {
  if (imagemAtual === 1) {
    imagem.src = "img/bisteca.webp";
    imagemAtual = 2;
  } else {
    imagem.src = "img/joto.webp";
    imagemAtual = 1;
  }
}

// Associa o evento de clique
botao.addEventListener("click", trocarImagem);