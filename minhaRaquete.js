const posicaoXMinhaRaquete = 10;
let posicaoYMinhaRaquete = 171;

const larguraMinhaRaquete = 11;
const alturaMinhaRaquete = 58;

const velocidadeMinhaRaquete = 1.9;

const paraCima = 38;
const paraBaixo = 40;

let moveUp = false;
let moveDown = false;

let meusPontos = 0;

function minhaRaquete() {
    pincel.fillStyle = "white";
    pincel.fillRect(posicaoXMinhaRaquete, posicaoYMinhaRaquete, larguraMinhaRaquete, alturaMinhaRaquete);
}

function moveMinhaRaquete(e) {
    if (moveUp && posicaoYMinhaRaquete >= 0) {
        posicaoYMinhaRaquete -= velocidadeMinhaRaquete;
    }
    if (moveDown && posicaoYMinhaRaquete + alturaMinhaRaquete <= yFundo) {
        posicaoYMinhaRaquete += velocidadeMinhaRaquete;
    }
}

function permiteAndar(e) {
    if (e.keyCode == paraCima) {
        moveUp = true;
    }
    if (e.keyCode == paraBaixo) {
        moveDown = true;
    }
}

function tiraPermissaoDeAndar() {
    moveUp = false;
    moveDown = false;
}

function colideMinhaRaquete() {
    if (xBolinha - raio <= posicaoXMinhaRaquete + larguraMinhaRaquete &&
        yBolinha - raio <= posicaoYMinhaRaquete + alturaMinhaRaquete &&
        yBolinha + raio >= posicaoYMinhaRaquete) {
        velocidadeXBolinha *= -1;
        audioRaquetada.play();
    }
}

function marcaMeusPontos() {
    if (xBolinha + raio >= xFundo) {
        meusPontos += 1;
        audioPonto.play();
    }
}

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

function meuPlacar() {
    pincel.textAlign = "center";
    pincel.fillStyle = "white";
    pincel.font = "40px Orbitron";
    pincel.fillText(meusPontos, 230, 50);

    voceGanhou();
}

onkeydown = permiteAndar;
onkeyup = tiraPermissaoDeAndar;