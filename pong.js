const canvas = document.querySelector("canvas");
const pincel = canvas.getContext("2d");

const xFundo = 600;
const yFundo = 400;

const audioRaquetada = document.getElementById("raquetada");
const audioPonto = document.getElementById("ponto");
const audioTrilha = document.getElementById("trilha");
const audioVitoria = document.getElementById("vitoria");
const audioDerrota = document.getElementById("derrota");

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");

let jogo;

let ligado = false;

function fundo() {
    pincel.fillStyle = "black";
    pincel.fillRect(0, 0, xFundo, yFundo);

    pontilhaOMeio();
}

function pontilhaOMeio() {
    let pontilhada = 0;
    const distanciaPontilho = 30;

    while (pontilhada < yFundo) {
        pincel.fillStyle = "white";
        pincel.fillRect(300, pontilhada, 10, 20);

        pontilhada += distanciaPontilho;
    }
}

function atualiza() {
    fundo();
    minhaRaquete();
    raqueteOponente();
    desenhaBolinha();
    movimentaBolinha();
    moveMinhaRaquete();
    colideMinhaRaquete();
    colideRaqueteOponente();
    movimentaRaqueteOponente();
    marcaPontos();
    marcaMeusPontos();
    placarOponente();
    meuPlacar();
    oponenteNaoColideComALateral();
}

function comecaOJogo() {
    if (!ligado) {
        jogo = setInterval(atualiza, 3);
        audioTrilha.play();
        ligado = true;
    }
}

function pausaOJogo() {
    if (ligado) {
        clearInterval(jogo);
        ligado = false;
        audioTrilha.pause();
    }
}

function recomecaOJogo() {
    meusPontos = 0;
    pontosOponente = 0;
    yBolinha = 200;
    xBolinha = 300;
    posicaoYMinhaRaquete = 171;
    posicaoYRaqueteOponente = 171;
    velocidadeXBolinha = 2;
    velocidadeYBolinha = 2;
    audioTrilha.currentTime = 0;
    pausaOJogo();
    atualiza();
}

atualiza();

start.onclick = comecaOJogo;
pause.onclick = pausaOJogo;
restart.onclick = recomecaOJogo;