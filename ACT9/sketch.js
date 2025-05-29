let genres = [
  { label: "Action", value: 25 },
  { label: "Comedy", value: 20 },
  { label: "Drama", value: 15 },
  { label: "Horror", value: 10 },
  { label: "Sci-Fi", value: 30 }
];

let margin = 50;
let barWidth;
let maxVal;

function setup() {
  createCanvas(600, 400);
  textSize(14);
  textAlign(CENTER, CENTER);
  maxVal = max(genres.map(g => g.value));
  barWidth = (width - 2 * margin) / genres.length;
}

function draw() {
  background(255);

  // Title
  textSize(20);
  fill(0);
  text("Favorite Movie Genres (Bar Chart)", width / 2, 25);
  textSize(14);

  // Axes
  stroke(180);
  line(margin, height - margin, width - margin, height - margin); // x-axis
  line(margin, margin, margin, height - margin); // y-axis

  // Y-axis labels and grid lines
  noStroke();
  fill(0);
  for (let i = 0; i <= maxVal; i += 5) {
    let y = map(i, 0, maxVal, height - margin, margin);
    text(i + "%", margin - 25, y);
    stroke(230);
    line(margin, y, width - margin, y);
    noStroke();
  }

  // Draw bars
  for (let i = 0; i < genres.length; i++) {
    let x = margin + i * barWidth + 10;
    let h = map(genres[i].value, 0, maxVal, 0, height - 2 * margin);
    let y = height - margin - h;

    // Bar fill color
    fill(100, 150, 255);
    noStroke();

    // Highlight on hover
    if (mouseX > x && mouseX < x + barWidth - 20 && mouseY > y && mouseY < height - margin) {
      fill(255, 100, 100);
      stroke(0);
      rect(mouseX + 10, mouseY - 30, 100, 30, 5);
      noStroke();
      fill(0);
      text(`${genres[i].label}: ${genres[i].value}%`, mouseX + 60, mouseY - 15);
    }

    rect(x, y, barWidth - 20, h);

    // Label below bar
    fill(0);
    text(genres[i].label, x + (barWidth - 20) / 2, height - margin + 15);
  }
}
