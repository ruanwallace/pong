let xBolinha = 300;
let yBolinha = 200;

const raio = 12;
const diametro = 2 * raio;

let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

function desenhaBolinha() {
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(xBolinha, yBolinha, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha -= velocidadeYBolinha;

    colisaoComAsBordas();
}

function bordasDeCimaEDeBaixo() {
    return yBolinha + raio >= yFundo || yBolinha - raio <= 0;
}

function bordasDosLados() {
    return xBolinha + raio >= xFundo || xBolinha - raio <= 0;
}

function colisaoComAsBordas() {
    if (bordasDeCimaEDeBaixo()) {
        velocidadeYBolinha *= -1;
    }
    if (bordasDosLados()) {
        velocidadeXBolinha *= -1;
    }
}