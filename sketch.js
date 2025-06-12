function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(135, 206, 235); // Céu azul

  // Sol
  fill(255, 223, 0);
  ellipse(500, 80, 80, 80);

  // Nuvens que se movem com o mouse
  fill(255);
  ellipse(mouseX, 100, 100, 60);
  ellipse(mouseX + 40, 90, 80, 50);
  ellipse(mouseX - 40, 90, 80, 50);

  // Solo
  fill(34, 139, 34);
  rect(0, 300, width, 100);

  // Plantas que crescem ao clicar
  for (let i = 0; i < plants.length; i++) {
    plants[i].display();
    plants[i].grow();
  }
}

let plants = [];

function mousePressed() {
  if (mouseY > 300) { // Só planta no solo
    plants.push(new Plant(mouseX, 300));
  }
}

class Plant {
  constructor(x, groundY) {
    this.x = x;
    this.y = groundY;
    this.height = 10;
    this.growing = true;
  }

  grow() {
    if (this.growing && this.height < 100) {
      this.height += 1;
    } else {
      this.growing = false;
    }
  }

  display() {
    fill(0, 100, 0);
    rect(this.x - 5, this.y - this.height, 10, this.height); // caule
    fill(34, 139, 34);
    ellipse(this.x, this.y - this.height, 30, 30); // folha
  }
}
