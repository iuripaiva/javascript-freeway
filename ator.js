//variaveis do ator

let xAtor = 85;
let yAtor = 366;
let velocidadeAtor = 3;
colisao = false;
let meusPontos = 0;

//funções do ator

function mostraAtor (){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    yAtor -= velocidadeAtor
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    if (podeSeMover()){
      yAtor += velocidadeAtor;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      resetaAtor();
      somColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function resetaAtor(){
  yAtor = 366;
}

function incluiPontos(){
  fill(163, 51, 163);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    resetaAtor();
    somPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}