let particles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let p of particles) {
    p.attractTo(createVector(mouseX, mouseY));
    p.update();
    p.display();
  }
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector();
    this.size = random(10, 30); // Larger size
    this.color = color(random(255), random(255), random(255), 150); // Semi-transparent, random color
  }

  attractTo(target) {
    let force = p5.Vector.sub(target, this.position);
    force.setMag(0.1); // Setting a constant magnitude for simplicity
    this.acceleration = force;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0); // Reset acceleration each frame
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}