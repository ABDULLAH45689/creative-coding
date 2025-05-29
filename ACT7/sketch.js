let trail = [];

function setup() {
  createCanvas(800, 600);
  background(20);
  noCursor();
}

function draw() {
  noStroke();

  // Draw faded background for trailing effect
  fill(20, 20, 20, 25);
  rect(0, 0, width, height);

  // Add new position to trail
  let speed = dist(mouseX, mouseY, pmouseX, pmouseY);
  let hueVal = map(speed, 0, 20, 0, 360);

  let trailDot = {
    x: mouseX,
    y: mouseY,
    size: random(5, 15),
    color: color(hueVal, 255, 255, 150)
  };

  trail.push(trailDot);

  // Limit the trail length
  if (trail.length > 100) {
    trail.shift();
  }

  // Set color mode to HSB for smooth hues
  colorMode(HSB, 360, 255, 255, 255);
  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];
    fill(t.color);
    ellipse(t.x, t.y, t.size);
  }
  colorMode(RGB); // Reset color mode
}

// Press 'S' to save the canvas as an image
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('mouse_trail_art', 'png');
  }
}
