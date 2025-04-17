const imagem = document.getElementById("minhaImagem");
const botao = document.getElementById("trocarImagem");

let imagemAtual = 1;

function trocarImagem() {
  if (imagemAtual === 1) {
    imagem.src = "img/joto.webp"; // Troca para imagem2
    imagemAtual = 2;
  } else {
    imagem.src = "img/bisteca.webp"; // Volta para imagem1
    imagemAtual = 1;
  }
}

botao.addEventListener("click", trocarImagem);

