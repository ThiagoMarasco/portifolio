const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled'); // Adiciona uma classe quando a página é rolada
    } else {
        nav.classList.remove('scrolled'); // Remove a classe quando a página volta ao topo
    }
});
