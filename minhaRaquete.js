// Posição inicial da minha raquete
const posicaoXMinhaRaquete = 10;
let posicaoYMinhaRaquete = 171;

// Tamanho da minha raquete
const larguraMinhaRaquete = 11;
const alturaMinhaRaquete = 58;

// Velocidade da minha raquete
const velocidadeMinhaRaquete = 1.9;

// Code das setas
const paraCima = 38;
const paraBaixo = 40;

// Váriavel que permite mover ou não
let moveUp = false;
let moveDown = false;

let meusPontos = 0;


// Corpo da minha raquete
function minhaRaquete() {
    pincel.fillStyle = "white";
    pincel.fillRect(posicaoXMinhaRaquete, posicaoYMinhaRaquete, larguraMinhaRaquete, alturaMinhaRaquete);
}
// Movimenta a minha raquete e evita ultrapassar a lateral
function moveMinhaRaquete(e) {
    if (moveUp && posicaoYMinhaRaquete >= 0) {
        posicaoYMinhaRaquete -= velocidadeMinhaRaquete;
    }
    if (moveDown && posicaoYMinhaRaquete + alturaMinhaRaquete <= yFundo) {
        posicaoYMinhaRaquete += velocidadeMinhaRaquete;
    }
}

// Permite mover
function permiteAndar(e) {
    if (e.keyCode == paraCima) {
        moveUp = true;
    }
    if (e.keyCode == paraBaixo) {
        moveDown = true;
    }
}

// Desativa as váriaveis de andar
function tiraPermissaoDeAndar() {
    moveUp = false;
    moveDown = false;
}

// Faz com que a bolinha bata na minha raquete e volte
function colideMinhaRaquete() {
    if (xBolinha - raio <= posicaoXMinhaRaquete + larguraMinhaRaquete &&
        yBolinha - raio <= posicaoYMinhaRaquete + alturaMinhaRaquete &&
        yBolinha + raio >= posicaoYMinhaRaquete) {
        velocidadeXBolinha *= -1;
        audioRaquetada.play();
    }
}

// Faz a contagem dos meus pontos e adiciona o som.
function marcaMeusPontos() {
    if (xBolinha + raio >= xFundo) {
        meusPontos += 1;
        audioPonto.play();
    }
}

// Quando meus pontos chegarem ao valor máximo (5) antes dos pontos do oponente, mostre que eu ganhei.
function voceGanhou() {
    if (meusPontos == 5) {
        pincel.fillStyle = "green";
        pincel.font = "70px Arial";
        pincel.fillText("Você ganhou", 300, 200);
        
        audioVitoria.play();
        pausaOJogo();
        ligado = true;
    }
}

// Mostra as contagens dos meus pontos na tela.
function meuPlacar() {
    pincel.textAlign = "center";
    pincel.fillStyle = "white";
    pincel.font = "40px Orbitron";
    pincel.fillText(meusPontos, 230, 50);

    voceGanhou();
}

// Identifica quando a tecla arrow é pressionada
onkeydown = permiteAndar;
// Identifica quando a tecla arrow deixa de ser pressionada
onkeyup = tiraPermissaoDeAndar;