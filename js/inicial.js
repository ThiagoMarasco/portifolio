const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled'); // Adiciona uma classe quando a página é rolada
    } else {
        nav.classList.remove('scrolled'); // Remove a classe quando a página volta ao topo
    }
});


document.addEventListener("DOMContentLoaded", function() {
    
    const main = document.querySelector("main");
    setTimeout(() => {
      main.classList.add("fade");
    }, 150); // Atraso para a classe ser adicionada
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



