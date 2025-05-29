function setup() {
  createCanvas(600, 400);
  background(180, 220, 255); // Sky blue background
  noStroke();
  
  // Road
  fill(50);
  rect(0, 300, width, 100);
  
  // Road lines
  stroke(255);
  strokeWeight(4);
  for (let x = 0; x < width; x += 40) {
    line(x, 340, x + 20, 340);
  }
  noStroke();

  drawCar(150, 250); // Draw car at (150, 250)
}

function drawCar(x, y) {
  // Car body
  fill(255, 50, 50); // Red body
  rect(x, y, 300, 50, 20); // Main body

  // Car top
  fill(240, 100, 100);
  quad(x + 60, y, x + 100, y - 40, x + 200, y - 40, x + 240, y);

  // Windows
  fill(180, 230, 255); // Light blue glass
  rect(x + 110, y - 30, 30, 25, 5);
  rect(x + 160, y - 30, 30, 25, 5);

  // Wheels
  fill(30);
  ellipse(x + 70, y + 50, 50); // Front wheel
  ellipse(x + 230, y + 50, 50); // Rear wheel

  // Wheel hubs
  fill(200);
  ellipse(x + 70, y + 50, 20);
  ellipse(x + 230, y + 50, 20);

  // Headlight
  fill(255, 255, 100);
  ellipse(x + 10, y + 15, 20, 10);

  // Taillight
  fill(255, 0, 0);
  ellipse(x + 290, y + 15, 15, 10);

  // Optional: Car shadow
  fill(0, 0, 0, 50);
  ellipse(x + 150, y + 60, 280, 20);
}
