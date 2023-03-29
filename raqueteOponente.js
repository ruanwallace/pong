const posicaoXRaqueteOponente = 579;
let posicaoYRaqueteOponente = 171;

const larguraRaqueteOponente = 11;
const alturaRaqueteOponente = 58;

let dificuldade = 0;

let pontosOponente = 0;

function raqueteOponente() {
    pincel.fillStyle = "white";
    pincel.fillRect(posicaoXRaqueteOponente, posicaoYRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente);
}

function parametroRaqueteOponente() {
    return xBolinha + raio >= posicaoXRaqueteOponente &&
        yBolinha - raio <= posicaoYRaqueteOponente + alturaRaqueteOponente &&
        yBolinha + raio >= posicaoYRaqueteOponente;
}

function colideRaqueteOponente() {
    if (parametroRaqueteOponente()) {
        velocidadeXBolinha *= -1;
        audioRaquetada.play();
    }
}

function geraDificuldade() {
    if (pontosOponente >= meusPontos) {
        dificuldade = Math.random() * 120 - 60;
    } else {
        dificuldade = Math.random() *90 - 45;
    }
}

function oponenteNaoColideComALateral() {
    if (posicaoYRaqueteOponente <= 0) {
        posicaoYRaqueteOponente = 0;
    }
    if (posicaoYRaqueteOponente + alturaRaqueteOponente >= yFundo) {
        posicaoYRaqueteOponente = yFundo - alturaRaqueteOponente;
    }  
}

function movimentaRaqueteOponente() {
    let velocidadeRaqueteOponente = yBolinha - alturaRaqueteOponente / 2;
    posicaoYRaqueteOponente = velocidadeRaqueteOponente + dificuldade;
}

function marcaPontos() {
    if (xBolinha - raio <= 0) {
        pontosOponente += 1;
        audioPonto.play();
    }
}

function oponenteGanhou() {
    if (pontosOponente == 5) {
        pincel.fillStyle = "red";
        pincel.font = "70px Arial";
        pincel.fillText("Você perdeu", 300, 200);
        
        audioDerrota.play();
        pausaOJogo();
        ligado = true;
    }
}

function placarOponente() {
    pincel.textAlign = "center";
    pincel.fillStyle = "white";
    pincel.font = "40px Orbitron";
    pincel.fillText(pontosOponente, 370, 50);

    oponenteGanhou();
}

setInterval(geraDificuldade, 4000)