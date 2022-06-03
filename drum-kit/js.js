'use strict'; 

const sons = { //Criando um JSON que sera as configurações dos sons com as letras.
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

// Função para criar Divs.
const criarDiv = (texto) => { 
    const div = document.createElement('div'); // Criando uma div.
    div.classList.add('key'); // Criando uma class chamada 'key' para a div.
    div.textContent = texto; // Criando o conteudo da div "A, S, D, F, G, H, J, K, L".
    div.id = texto; // Criando um id a div.
    document.getElementById('container').appendChild(div); //onde sera inserido as divs.
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);
const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.toggle('active');

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend',removeActive);
};

const ativarDiv = (evento) => {

    const letra = evento.type == 'click' ? evento.target.id : evento.key.toUpperCase();
    
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}


exibir(sons);
document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keyup',ativarDiv);
