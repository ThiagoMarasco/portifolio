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
    const botaoapagar = document.getElementById("ocultar-conteudo");
    const conteudo = document.getElementById("conteudo");

    botaoapagar.addEventListener("click", function() {

            conteudo.style.display = "none"; // Muda para none para esconder
            
    
    });

    botaoMostrar.addEventListener("click", function() {
            // Verifica se a barra está visível para decidir se deve mostrar ou esconder
        if (conteudo.style.display === "none") {
            conteudo.style.display = "flex"; // Ou "block", dependendo do layout
            // Espera um breve momento antes de adicionar a classe para a animação
            // Isso garante que a mudança de `display` seja aplicada antes da transição
            setTimeout(() => {
                conteudo.classList.add('aberta');
            }, 10);
        } else {
            conteudo.style.display = "none";
            conteudo.classList.remove('aberta');
        }
    });


});

document.getElementById('checkbox').addEventListener('change', function() {
    if(this.checked) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  });


document.querySelectorAll('.trabalhos a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne a navegação imediata
        const destination = this.getAttribute('href'); // Captura o destino do link

        // Aplica a animação de saída, por exemplo, desvanecer o contêiner `.trabalhos`
        document.querySelector('.trabalhos').style.opacity = '0';

        setTimeout(() => {
            window.location.href = destination; // Redireciona após a animação
        }, 500); // Assumindo que a animação dura 500ms
    });
});


window.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.item-animate');
    let delay = 0;
    
    items.forEach(item => {
        setTimeout(() => {
            item.classList.add('item-animate-visible');
        }, delay);
        delay += 100; // Aumenta o atraso para o próximo item
    });
});



// Supondo que esta função adiciona o novo campo de texto
function adicionarCampoDeTexto(conteudo) {
    const novoCampoTexto = document.createElement('div');
    novoCampoTexto.classList.add('centro-text-mobile');
    novoCampoTexto.innerHTML = `<p>${conteudo}</p>`;
    const container = document.querySelector('.centro-mobile'); // ou '.barra-magica', conforme a estrutura do seu HTML
    container.appendChild(novoCampoTexto);

    // Rola para o novo conteúdo adicionado
    // Usando setTimeout para garantir que a rolagem aconteça após o navegador processar a adição do novo elemento
    setTimeout(() => {
        container.scrollTop = container.scrollHeight;
    }, 0);
}

// Detectar clique em cada botão e adicionar campo de texto correspondente
document.getElementById('midias-sociais').addEventListener('click', function() {
    adicionarCampoDeTexto("Aqui estão minhas mídias sociais: <br> ");
    
    adicionarCampoDeTexto("<a href='https://github.com/ThiagoMarasco'>GitHub</a> <br> ");
    adicionarCampoDeTexto("<a href='https://www.linkedin.com/in/thiago-marasco/'>Linkdin</a> ");
    adicionarCampoDeTexto("<a href='https://drive.google.com/u/0/uc?id=1ddvRlba4ox4zGYMMpqwxek1Pi_E0ttAw&export=download'>Curriculo</a> <br> ");

     
});

document.getElementById('apenas-olhando').addEventListener('click', function() {
    adicionarCampoDeTexto("<a href='https://drive.google.com/u/0/uc?id=1ddvRlba4ox4zGYMMpqwxek1Pi_E0ttAw&export=download'>Curriculo</a> <br> ");
});

document.getElementById('contratar').addEventListener('click', function() {
    adicionarCampoDeTexto('Ótimo! Vamos discutir sobre o projeto. <br> Me envie um email uma mensagem aqui:');
    
    adicionarCampoDeTexto("<a href='https://www.linkedin.com/in/thiago-marasco/'>Linkdin</a> ");

    adicionarCampoDeTexto("<a href='mailto:thiago.s.marasco@gmail.com?Subject=Assunto%20do%20Email&Body=Corpo%20do%20Email'>Enviar Email</a>");

});