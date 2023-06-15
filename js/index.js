/*   passo 1 - dar um jeito de pegar o elemento HTML dos botões

    passo 2 - dar um geito de identificar o clique do usuário no botão

    passo 3 - desmarcar o botão selecionado anterior

    passo 4 - marcar o botão clicando como se estivesse selecionado

    passo 5 - esconder a imagem ativa de fundo

    passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

// Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - dar um geito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => { 
    botao.addEventListener('click', () =>{

        // Passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4 - marcar o botão clicando como se estivesse selecionado
        botao.classList.add('selecionado');

        // passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa')
    })
})

