// OBJETIVO 1 - qunado clicar no botao do personagem na lista,marca o botao selecionado 
//passo 1 - pegar os botoes no js pra poder verificar quando o usuario clicar em cima de um deles
//passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou
//passo 3 - verificar se já existe im botao selecionado, se sim, devemos remover a selecao dele
// OBJETIVO 2 - qundo clicar no botao do personagem mostra as informacoes do personagem
//oasso 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
      desselecionarBotao(); 
      desselecionarPersonagem();
      
      botao.classList.add("selecionado");
      personagens[indice].classList.add("selecionado");
      
    });
});

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}