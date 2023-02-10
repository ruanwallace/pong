// Coordenadas da bolinha
let xBolinha = 300;
let yBolinha = 200;

// Tamanho da bolinha
const raio = 12;
const diametro = 2 * raio;

// Velocidade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

// Desenha a bolinha.
function desenhaBolinha() {
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(xBolinha, yBolinha, raio, 0, 2 * Math.PI);
    pincel.fill();
}

// Inicia o movimento da bolinha para o X e o Y.
function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha -= velocidadeYBolinha;

    colisaoComAsBordas();
}

// Coordenadas das bordas de cima e a de baixo.
function bordasDeCimaEDeBaixo() {
    return yBolinha + raio >= yFundo || yBolinha - raio <= 0;
}

 // Coordenadas das bordas laterais.
function bordasDosLados() {
    return xBolinha + raio >= xFundo || xBolinha - raio <= 0;
}

// Faz com que a bolinha bata nas bordas da tela e muda a direção dela.
function colisaoComAsBordas() {
    if (bordasDeCimaEDeBaixo()) {
        velocidadeYBolinha *= -1;
    }
    if (bordasDosLados()) {
        velocidadeXBolinha *= -1;
    }
}