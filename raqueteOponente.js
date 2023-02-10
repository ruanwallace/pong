// Coordenadas inicial da raquete oponente.
const posicaoXRaqueteOponente = 579;
let posicaoYRaqueteOponente = 171;

// Tamanho da raquete oponente.
const larguraRaqueteOponente = 11;
const alturaRaqueteOponente = 58;

// Nível de dificuldade do oponente.
let dificuldade = 0;

// Ponto do oponente.
let pontosOponente = 0;

// Desenha a raquete do oponente.
function raqueteOponente() {
    pincel.fillStyle = "white";
    pincel.fillRect(posicaoXRaqueteOponente, posicaoYRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente);
}

// Parâmetro da raquete oponente.
function parametroRaqueteOponente() {
    return xBolinha + raio >= posicaoXRaqueteOponente &&
        yBolinha - raio <= posicaoYRaqueteOponente + alturaRaqueteOponente &&
        yBolinha + raio >= posicaoYRaqueteOponente;
}

// Colisão da bolinha com a raquete oponente
function colideRaqueteOponente() {
    if (parametroRaqueteOponente()) {
        velocidadeXBolinha *= -1;
        audioRaquetada.play();
    }
}

// Gera níveis de dificuldade, fazendo com que a raquete oponente mude o seu comportamento.
function geraDificuldade() {
    if (pontosOponente >= meusPontos) {
        dificuldade = Math.random() * 120 - 60;
    } else {
        dificuldade = Math.random() *90 - 45;
    }
}

// Faz com que a raquete oponente não ultrapasse a borda de cima e a de baixo.
function oponenteNaoColideComALateral() {
    if (posicaoYRaqueteOponente <= 0) {
        posicaoYRaqueteOponente = 0;
    }
    if (posicaoYRaqueteOponente + alturaRaqueteOponente >= yFundo) {
        posicaoYRaqueteOponente = yFundo - alturaRaqueteOponente;
    }  
}

// Movimenta a raquete oponente de acordo com a coordenada Y da bola.
function movimentaRaqueteOponente() {
    let velocidadeRaqueteOponente = yBolinha - alturaRaqueteOponente / 2;
    posicaoYRaqueteOponente = velocidadeRaqueteOponente + dificuldade;
}

// Marca pontos para o oponente.
function marcaPontos() {
    if (xBolinha - raio <= 0) {
        pontosOponente += 1;
        audioPonto.play();
    }
}

// Se o oponente marcar 5 pontos primeiro, mostrará que você perdeu.
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

// Mostra o placar do oponente.
function placarOponente() {
    pincel.textAlign = "center";
    pincel.fillStyle = "white";
    pincel.font = "40px Orbitron";
    pincel.fillText(pontosOponente, 370, 50);

    oponenteGanhou();
}

// Executa a função que gera dificuldade.
setInterval(geraDificuldade, 4000)