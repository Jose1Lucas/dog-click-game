let dogImage; // Variável para a imagem do rosto de cachorro
let boneImage; // Variável para a imagem do osso
let boneX; // Posição X do osso
let boneY; // Posição Y do osso
let bonesCollected = 0; // Contador de ossos coletados
let timer = 60; // Tempo inicial em segundos
let timerX; // Variável para a posição X do timer

function preload() {
  // Carregue as imagens antes de iniciar o programa
  dogImage = loadImage('cachorro.png'); // Substitua 'cachorro.png' pelo caminho da sua imagem de rosto de cachorro
  boneImage = loadImage('osso.png'); // Substitua 'osso.png' pelo caminho da sua imagem de osso
}

function alertaobjetivo() {
  alert("Colete os ossos antes que o tempo acabe!");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Inicialize a posição do osso
  boneX = random(70, width - 70);
  boneY = random(70, height - 70);
  // Mostre o alerta inicial
  alertaobjetivo();
}

function updateTimer() {
  timer--;
  if (timer <= 0) {
    timer = 60; // Resete o timer para 60 segundos
    reiniciarJogo(); // Reinicie o jogo
  }
}

setInterval(updateTimer, 1000); // Atualiza o timer a cada segundo

function draw() {
  background(255);

  // Desenhe a imagem do rosto de cachorro na posição central do mouse
  const dogWidth = 100;
  const dogHeight = 100;
  image(dogImage, mouseX - dogWidth / 2, mouseY - dogHeight / 2, dogWidth, dogHeight);

  timerWidth = textWidth(`TEMPO: ${timer}`); // Obtenha a largura do texto do timer
  timerX = (width - timerWidth) / 2; // Posicione o texto horizontalmente no centro

  // Verifique a colisão com o osso (imagem)
  const distance = dist(mouseX, mouseY, boneX, boneY);

  if (distance < 50) {
    // Colisão detectada! Aumente o contador de ossos
    bonesCollected++;

    // Crie um novo osso em uma posição aleatória que não seja muito próxima da borda
    boneX = random(70, width - 70);
    boneY = random(70, height - 70);
  }

  // Desenhe o osso atual
  image(boneImage, boneX, boneY, 60, 60);

  // Exiba o contador de ossos coletados no topo da página
  fill(0); // Cor do texto (preto)
  textSize(24); // Tamanho da fonte
  textAlign(CENTER, TOP); // Alinhe o texto ao centro e no topo
  text(`OSSOS COLETADOS, ${bonesCollected}`, width / 2, 10); // Exiba o contador

  // Exiba o timer no fundo da tela
  fill(0); // Cor do texto (preto)
  textSize(24); // Tamanho da fonte
  textAlign(CENTER, BOTTOM); // Alinhe o texto ao centro e na base
  text(`TEMPO: ${timer}`, width / 2, height - 10); // Exiba o timer
}

function mostrarAlerta(bonesColetados) {
  alert(`Parabéns! Você coletou ${bonesColetados} ossos!`);
}

function alertatentardenovo() {
  alert("Clique em ok para jogar novamente!");
  }  

function reiniciarJogo() {
  mostrarAlerta(bonesCollected); // Exiba o alerta com a quantidade de ossos coletados
  alertatentardenovo();
  bonesCollected = 0; // Reinicie o contador de ossos
  boneX = random(70, width - 70); // Gere um novo osso em uma posição aleatória
  boneY = random(70, height - 70);
}
