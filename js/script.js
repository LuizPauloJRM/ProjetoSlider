// Seleciona os elementos necessários
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const items = document.querySelectorAll('.item'); // Todos os agentes
const indicators = document.querySelectorAll('.indicators ul li'); // Indicadores

let currentIndex = 0; // Índice do agente atual

// Função para atualizar o agente visível
function updateAgent(index) {
    // Remove as classes "active", "previous" e "next" de todos os agentes
    items.forEach((item, i) => {
        item.classList.remove('active', 'previous', 'next');
        indicators[i].classList.remove('active');
    });

    // Define o agente atual como "active"
    items[index].classList.add('active');
    indicators[index].classList.add('active');

    // Define o agente anterior como "previous"
    const previousIndex = (index - 1 + items.length) % items.length;
    items[previousIndex].classList.add('previous');

    // Define o próximo agente como "next"
    const nextIndex = (index + 1) % items.length;
    items[nextIndex].classList.add('next');

    // Atualiza o número do indicador
    document.querySelector('.indicators .number').textContent = index + 1;

    // Garante que o conteúdo (texto e botão) seja exibido corretamente
    const activeContent = items[index].querySelector('.content');
    if (activeContent) {
        activeContent.style.opacity = '1';
        activeContent.style.transform = 'translateX(0)';
    }
}

// Evento para a seta da direita
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Vai para o próximo agente
    updateAgent(currentIndex);
});

// Evento para a seta da esquerda
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Volta para o agente anterior
    updateAgent(currentIndex);
});

// Evento para os indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index; // Atualiza o índice para o indicador clicado
        updateAgent(currentIndex);
    });
});

// Inicializa o estado inicial
updateAgent(currentIndex);