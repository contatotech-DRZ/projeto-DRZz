// --- Controle do Menu Mobile (Hambúrguer) ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

function abrirModal() {
    document.getElementById('modal-performance').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal-performance').style.display = 'none';
}

// Fecha o modal ao clicar fora da caixa branca
window.onclick = function(event) {
    const modal = document.getElementById('modal-performance');
    if (event.target === modal) {
        fecharModal();
    }
}

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

// Fecha o menu mobile ao clicar em qualquer link de navegação
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// --- Efeitos ao rolar a página (Navbar fixa e links ativos) ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section, header');
    const scrollPosition = window.scrollY;

    // Torna a barra de navegação escura/borrada com o scroll
    if (scrollPosition > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    // Identifica qual seção está na tela e atualiza o menu
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// --- Efeito de Digitação Automática (Typing Effect) ---
const words = ["através de Dados.", "com Automação.", "em Infraestrutura TI."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2200);
            return false;
        }
        timer = setTimeout(loopTyping, 80);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loop
