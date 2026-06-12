// Controle do Menu Mobile (Hambúrguer)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

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

// Efeitos ao rolar a página (Navbar fixa e links ativos)
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

// Efeito de Digitação Automática (Typing Effect) focado em Dados e TI
const words = ["através de Dados.", "com Automação.", "em Infraestrutura TI."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2200); // Tempo que a palavra fica estática na tela
            return false;
        }
        timer = setTimeout(loopTyping, 80); // Velocidade de digitação
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0; // Reinicia o loop de palavras
            }
            setTimeout(typingEffect, 400);
            return false;
        }
        timer = setTimeout(loopDeleting, 40); // Velocidade de deleção
    };
    loopDeleting();
}

// Inicia o script assim que a página carrega completamente
document.addEventListener("DOMContentLoaded", typingEffect);