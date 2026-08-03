function reconhecerBotao(botao) {
    // Função auxiliar interna se necessário
}

function toggleProjeto(botao) {
    // Acha o card do projeto pai onde o botão foi clicado
    const card = botao.closest('.projeto-card');
    
    // Encontra a div de detalhes dentro desse card
    const detalhes = card.querySelector('.detalhes-projeto');
    
    // Alterna a classe 'ativo' para expandir ou recolher o texto
    detalhes.classList.toggle('ativo');
    
    // Altera o texto do botão dinamicamente
    if (detalhes.classList.contains('ativo')) {
        botao.textContent = 'Ver Menos';
    } else {
        botao.textContent = 'Ver Mais';
    }
}
