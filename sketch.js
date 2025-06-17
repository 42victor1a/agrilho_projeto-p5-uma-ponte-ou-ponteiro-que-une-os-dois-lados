function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  // Desenho do campo à esquerda
  fill(34, 139, 34); // verde para o campo
  rect(0, height/2, width/2, height/2);
  fill(255, 255, 0);
  ellipse(width/4, height/2 - 20, 40, 40); // sol
  
  // Desenho da cidade à direita
  fill(169, 169, 169); // cinza para prédios
  rect(width/2 + 50, height/2 - 100, 50, 100);
  rect(width/2 + 120, height/2 - 150, 50, 150);
  rect(width/2 + 200, height/2 - 80, 50, 80);
  
  // Conexão: uma ponte ou ponteiro que une os dois lados
  stroke(0);
  line(width/2, height/2, width/2 + 50, height/2 - 50);
  line(width/2, height/2, width/2 - 50, height/2 - 50);
}
