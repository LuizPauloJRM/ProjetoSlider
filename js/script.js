// Seleciona os elementos necessários
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const agentImage = document.querySelector('.Agente01 img'); // Certifique-se de selecionar o <img>
const content = document.querySelector('.content');

// Função para ativar a transição
function activateTransition() {
    agentImage.parentElement.classList.add('active'); // Adiciona a classe ao contêiner da imagem
    content.classList.add('active'); // Adiciona a classe para o texto

    // Remove as classes após a transição para permitir repetição
    setTimeout(() => {
        agentImage.parentElement.classList.remove('active');
        content.classList.remove('active');
    }, 500); // Duração da transição (500ms)
}

// Adiciona eventos de clique para as setas
leftArrow.addEventListener('click', activateTransition);
rightArrow.addEventListener('click', activateTransition);