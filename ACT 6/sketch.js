let phrase = "BATH SPA UNIVERSITY";
let spacing = 40;

function setup() {
  createCanvas(900, 400);
  noFill();
  backgroundGradient();
  strokeWeight(2);
  
  let x = 50;
  let y = height / 2;

  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase.charAt(i);
    stroke(random(255), random(255), random(255)); // Random color
    drawLetter(letter, x, y);
    x += spacing;
  }
}

function backgroundGradient() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(10, 10, 30), color(70, 120, 200), inter);
    stroke(c);
    line(0, y, width, y);
  }

  // Add random stars/dots
  noStroke();
  for (let i = 0; i < 100; i++) {
    fill(255, 255, 255, random(50, 200));
    ellipse(random(width), random(height), random(1, 3));
  }
}

function drawLetter(letter, x, y) {
  switch (letter) {
    case 'A':
      triangle(x, y, x + 10, y - 40, x + 20, y);
      line(x + 5, y - 20, x + 15, y - 20);
      break;
    case 'B':
      beginShape();
      vertex(x, y);
      vertex(x, y - 40);
      vertex(x + 15, y - 35);
      vertex(x, y - 20);
      vertex(x + 15, y - 5);
      vertex(x, y);
      endShape();
      break;
    case 'C':
      arc(x + 10, y - 20, 25, 40, PI * 0.2, PI * 1.8);
      break;
    case 'H':
      line(x, y, x, y - 40);
      line(x + 20, y, x + 20, y - 40);
      line(x, y - 20, x + 20, y - 20);
      break;
    case 'S':
      beginShape();
      vertex(x + 15, y - 40);
      vertex(x, y - 40);
      vertex(x, y - 20);
      vertex(x + 15, y - 20);
      vertex(x + 15, y);
      vertex(x, y);
      endShape();
      break;
    case 'T':
      line(x, y - 40, x + 20, y - 40);
      line(x + 10, y - 40, x + 10, y);
      break;
    case 'P':
      beginShape();
      vertex(x, y);
      vertex(x, y - 40);
      vertex(x + 15, y - 40);
      vertex(x + 15, y - 20);
      vertex(x, y - 20);
      endShape();
      break;
    case 'U':
      beginShape();
      vertex(x, y - 40);
      vertex(x, y - 10);
      vertex(x + 20, y - 10);
      vertex(x + 20, y - 40);
      endShape();
      break;
    case 'N':
      line(x, y, x, y - 40);
      line(x, y - 40, x + 20, y);
      line(x + 20, y, x + 20, y - 40);
      break;
    case 'I':
      line(x + 10, y, x + 10, y - 40);
      break;
    case 'V':
      line(x, y - 40, x + 10, y);
      line(x + 10, y, x + 20, y - 40);
      break;
    case 'E':
      line(x + 15, y, x, y);
      line(x, y, x, y - 40);
      line(x, y - 20, x + 15, y - 20);
      line(x, y - 40, x + 15, y - 40);
      break;
    case 'R':
      beginShape();
      vertex(x, y);
      vertex(x, y - 40);
      vertex(x + 15, y - 40);
      vertex(x + 15, y - 20);
      vertex(x, y - 20);
      vertex(x + 20, y);
      endShape();
      break;
    case 'Y':
      line(x, y - 40, x + 10, y - 20);
      line(x + 20, y - 40, x + 10, y - 20);
      line(x + 10, y - 20, x + 10, y);
      break;
    case ' ':
      // Skip space
      break;
    default:
      // Draw a box for unknown characters
      rect(x, y - 40, 20, 40);
  }
}
