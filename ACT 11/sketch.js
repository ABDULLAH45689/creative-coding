let particles = [];
let particleCount = 50;
let particleSize = 10;
let rainbowMode = false;
let gravityEnabled = true;
let explosionMode = false;
let showTrail = true;
let shapeMode = 'circle'; // 'circle', 'square', 'star'

// Optional: preload sound (put a 'click.mp3' in your project folder)
/*
let clickSound;
function preload() {
  soundFormats('mp3');
  clickSound = loadSound('click.mp3');
}
*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont('monospace');
}

function draw() {
  if (showTrail) {
    background(0, 25);
  } else {
    background(0);
  }

  // Update and display all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }

  // Cursor comet
  drawCursorTrail(mouseX, mouseY);

  // UI
  fill(255);
  textSize(16);
  text(`Count: ${particleCount} | Size: ${particleSize} | Rainbow: ${rainbowMode ? "ON" : "OFF"}`, 20, 30);
  text(`Gravity: ${gravityEnabled ? "ON" : "OFF"} | Explosion: ${explosionMode ? "ON" : "OFF"}`, 20, 50);
  text(`Shape: ${shapeMode} | Trail: ${showTrail ? "ON" : "OFF"}`, 20, 70);
}

function mousePressed() {
  // if (clickSound) clickSound.play(); // play sound if added
  spawnParticles(mouseX, mouseY);
}

function mouseDragged() {
  spawnParticles(mouseX, mouseY);
}

function mouseWheel(event) {
  particleSize = constrain(particleSize + event.delta * -0.01, 2, 50);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(0);
    particles = [];
  }
  if (keyCode === UP_ARROW) {
    particleCount += 10;
  } else if (keyCode === DOWN_ARROW) {
    particleCount = max(10, particleCount - 10);
  }
  if (key === 'r' || key === 'R') rainbowMode = !rainbowMode;
  if (key === 'g' || key === 'G') gravityEnabled = !gravityEnabled;
  if (key === 'e' || key === 'E') explosionMode = !explosionMode;
  if (key === 't' || key === 'T') showTrail = !showTrail;
  if (key === '1') shapeMode = 'circle';
  if (key === '2') shapeMode = 'square';
  if (key === '3') shapeMode = 'star';
}

function spawnParticles(x, y) {
  for (let i = 0; i < particleCount; i++) {
    let angle = random(TWO_PI);
    let speed = explosionMode ? random(5, 12) : random(2, 4);
    let vx = cos(angle) * speed;
    let vy = sin(angle) * speed;
    particles.push(new Particle(x, y, vx, vy));
  }
}

class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 255;
    this.baseColor = color(random(255), random(255), random(255));
  }

  update() {
    if (gravityEnabled) this.vy += 0.1;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;

    // Bounce off walls
    if (this.x <= 0 || this.x >= width) this.vx *= -1;
    if (this.y <= 0 || this.y >= height) this.vy *= -0.7;
  }

  finished() {
    return this.alpha < 0;
  }

  show() {
    let c = this.baseColor;
    if (rainbowMode) {
      let r = (red(c) + frameCount * 2) % 255;
      let g = (green(c) + frameCount * 3) % 255;
      let b = (blue(c) + frameCount * 4) % 255;
      c = color(r, g, b);
    }

    fill(red(c), green(c), blue(c), this.alpha);
    noStroke();

    if (shapeMode === 'circle') {
      ellipse(this.x, this.y, particleSize);
    } else if (shapeMode === 'square') {
      rectMode(CENTER);
      rect(this.x, this.y, particleSize, particleSize);
    } else if (shapeMode === 'star') {
      drawStar(this.x, this.y, particleSize / 2, particleSize, 5);
    }
  }
}

// Rainbow comet following the mouse
function drawCursorTrail(x, y) {
  push();
  colorMode(HSB);
  for (let i = 0; i < 10; i++) {
    fill((frameCount + i * 10) % 255, 255, 255, 180 - i * 18);
    ellipse(x - i * 3, y - i * 3, 8);
  }
  pop();
}

// Draw a star shape
function drawStar(x, y, r1, r2, n) {
  let angle = TWO_PI / n;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * r2;
    let sy = y + sin(a) * r2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * r1;
    sy = y + sin(a + halfAngle) * r1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
