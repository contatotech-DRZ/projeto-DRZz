function toggleProjeto(botao) {
    const card = botao.closest('.projeto-card');
    const detalhes = card.querySelector('.detalhes-projeto');
    
    detalhes.classList.toggle('ativo');
    
    if (detalhes.classList.contains('ativo')) {
        botao.textContent = 'Ver Menos';
    } else {
        botao.textContent = 'Ver Mais';
    }
}
