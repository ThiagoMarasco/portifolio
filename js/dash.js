document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('pizza');

    const data = {
        labels: ['Imcompleto', 'Completo'],
        datasets: [{
            data: [30, 25],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            borderWidth: 0,
            borderColor: 'white'
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 70,
        plugins: {
            legend: {
                display: false // Não exibir a legenda no próprio gráfico
            }
        }
    };

    const ctx = canvas.getContext('2d');
    const pizzaChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    // Criar a legenda personalizada
    const legendContainer = document.querySelector('.custom-legend');
    if (legendContainer) {
        const legendHTML = createLegendHTML(data.labels, data.datasets[0].backgroundColor);
        legendContainer.innerHTML = legendHTML;
    }

    // Defina a cor de fundo do canvas como transparente
    ctx.canvas.style.backgroundColor = 'transparent';
});

// Função para criar o HTML da legenda
function createLegendHTML(labels, backgroundColors) {
    let legendHTML = '';
    for (let i = 0; i < labels.length; i++) {
        legendHTML += `<li><span class="legend-color" style="background-color: ${backgroundColors[i]}"></span>${labels[i]}</li>`;
    }
    return legendHTML;
}


document.addEventListener('DOMContentLoaded', async function() {
    const listaItems = document.querySelectorAll('.clickable');
    const dateSelect = document.getElementById('date-select'); // Adicione o ID do seu elemento select de datas
    const alertas = document.querySelectorAll('.alertas');
    const favImageElements = document.querySelectorAll('.fav');
    const alertTextElements = document.querySelectorAll('.text');
    const noEventsMessage = document.getElementById('no-events-message');

    // Obter a data atual no formato YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0];

    // Definir o valor do input para a data atual
    dateSelect.value = currentDate; // Adicione o ID do elemento de aviso

    // Carregar os dados do JSON
    // Carregar os dados do PHP usando fetch
    
    const response = await fetch('./php/get_dashboard.php');
    const dadosJSON = await response.json();

    function updateAlerts(selectedDate) {
        const selectedListItem = document.querySelector('.black-text');

        if (selectedListItem) {
            const itemSelecionado = selectedListItem.textContent;
            const eventos = dadosJSON[itemSelecionado];
            const matchingEvents = eventos.filter(evento => evento.data === selectedDate);
            
            if (matchingEvents.length > 0) {
                noEventsMessage.style.display = 'none'; // Esconder o aviso

                alertas.forEach((alerta, index) => {
                    const evento = matchingEvents[index];

                    if (evento) {
                        const favImageElement = favImageElements[index];
                        favImageElement.innerHTML = `<img src="${evento.imagem}" alt="">`;

                        const alertTextElement = alertTextElements[index];
                        alertTextElement.innerHTML = evento.texto;

                        alerta.classList.remove('hidden');
                    } else {
                        alerta.classList.add('hidden');
                    }
                });
            } else {
                noEventsMessage.style.display = 'block'; // Mostrar o aviso
                alertas.forEach(alerta => alerta.classList.add('hidden'));
            }
        }
    }

    listaItems.forEach((item, i) => {
        item.addEventListener('click', function() {
            // Remover a classe 'black-text' de todos os itens
            listaItems.forEach(item => {
                item.classList.remove('black-text');
            });

            // Adicionar a classe 'black-text' apenas ao item clicado
            item.classList.add('black-text');

            const selectedDate = dateSelect.value;
            updateAlerts(selectedDate);
        });
    });

    dateSelect.addEventListener('change', function() {
        const selectedDate = dateSelect.value;
        updateAlerts(selectedDate);
    });
    
    const formulario = document.getElementById('formulariobase');
    const myButton = document.getElementById('botao1-menu');
    const addButton  = document.getElementById('add-agenda')
    const styledElement = document.getElementById('menu-agendamento1');
    const submit = document.getElementById('contact-submit');
    const exit = document.getElementById('exit-form');
      

    myButton.addEventListener('click', function() {
        styledElement.classList.toggle('highlight');
    });
    addButton.addEventListener('click', function() {
        formulario.classList.toggle('formularioAdd');
        styledElement.classList.remove('highlight');
    });
    submit.addEventListener('click', function() {
        formulario.classList.remove('formularioAdd');
    });
    exit.addEventListener('click', function() {
        formulario.classList.remove('formularioAdd');
    });


});













