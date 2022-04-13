function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  resetaCarros();
  movimentaAtor();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}