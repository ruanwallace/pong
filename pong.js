// Ferramentas para utilização do Canvas.
const canvas = document.querySelector("canvas");
const pincel = canvas.getContext("2d");

// Coordenadas do final da tela.
const xFundo = 600;
const yFundo = 400;

// Áudios do jogo
const audioRaquetada = document.getElementById("raquetada");
const audioPonto = document.getElementById("ponto");
const audioTrilha = document.getElementById("trilha");
const audioVitoria = document.getElementById("vitoria");
const audioDerrota = document.getElementById("derrota");

// Os botões do jogo
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");

// É a váriavel que armazena o setInterval com todos os sistemas do jogo.
let jogo;

// True: o jogo está rodando ou false: o jogo está parado.
let ligado = false;

// É a tela do jogo.
function fundo() {
    pincel.fillStyle = "black";
    pincel.fillRect(0, 0, xFundo, yFundo);

    pontilhaOMeio();
}

// Faz uma linha pontilhada no meio da tela do jogo.
function pontilhaOMeio() {
    let pontilhada = 0;
    const distanciaPontilho = 30;

    while (pontilhada < yFundo) {
        pincel.fillStyle = "white";
        pincel.fillRect(300, pontilhada, 10, 20);

        pontilhada += distanciaPontilho;
    }
}

// São os sistemas do jogo.
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

// Inicia o jogo junto com a trilha sonora.
function comecaOJogo() {
    if (!ligado) {
        jogo = setInterval(atualiza, 3);
        audioTrilha.play();
        ligado = true;
    }
}

// Pausa o jogo junto com a trilha sonora.
function pausaOJogo() {
    if (ligado) {
        clearInterval(jogo);
        ligado = false;
        audioTrilha.pause();
    }
}

// Recomeça o jogo junto com a trilha sonora.
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

// Exibe a imagem do jogo antes de iniciar.
atualiza();

// São os botões vinculados ao evento do clique.
start.onclick = comecaOJogo;
pause.onclick = pausaOJogo;
restart.onclick = recomecaOJogo;