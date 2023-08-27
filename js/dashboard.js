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