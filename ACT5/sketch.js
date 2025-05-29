function setup() {
  createCanvas(600, 600);
  noLoop(); // Draw only once
  background(30);

  let gridSize = 50;

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      
      // Random color
      let r = random(100, 255);
      let g = random(100, 255);
      let b = random(100, 255);
      fill(r, g, b);

      // Decision: choose shape based on position
      if ((x + y) % 100 === 0) {
        // Diagonal tiles: draw ellipse
        ellipse(x + gridSize / 2, y + gridSize / 2, gridSize * 0.8);
      } else if (random(1) < 0.3) {
        // 30% chance: draw triangle
        triangle(x, y + gridSize, x + gridSize / 2, y, x + gridSize, y + gridSize);
      } else {
        // Default: draw rectangle
        rect(x, y, gridSize, gridSize);
      }

      // Optional: random rotation
      if (random(1) < 0.1) {
        push();
        translate(x + gridSize / 2, y + gridSize / 2);
        rotate(HALF_PI * int(random(4)));
        fill(255, 255, 0, 80);
        rect(-10, -10, 20, 20);
        pop();
      }
    }
  }
}
