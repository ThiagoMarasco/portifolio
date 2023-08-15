const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled'); // Adiciona uma classe quando a página é rolada
    } else {
        nav.classList.remove('scrolled'); // Remove a classe quando a página volta ao topo
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const botaoMostrar = document.getElementById("mostrar-conteudo");
    const conteudo = document.getElementById("conteudo");

    botaoMostrar.addEventListener("click", function() {
        if (conteudo.style.display === "none") {
            conteudo.style.display = "flex"; // Muda para block para exibir
        } else {
            conteudo.style.display = "none"; // Muda para none para esconder
        }
    });

    window.addEventListener("scroll", function() {
        conteudo.style.display = "none"; // Esconde o conteúdo ao redimensionar a tela
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const conteudo = document.getElementById("fase-1");
    const conteudo1 = document.getElementById("fase-2");

    conteudo.addEventListener("click", function() {
        conteudo.classList.toggle('hidden');
        conteudo1.classList.toggle("hidden");
    });
    conteudo1.addEventListener("click", function() {
        conteudo.classList.toggle('hidden');
        conteudo1.classList.toggle("hidden");
    });



});

