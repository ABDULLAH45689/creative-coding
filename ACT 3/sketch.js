function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(20, 20, 40);
    translate(width / 2, height / 2);
    drawAlien();
}

function drawAlien() {
    // Head
    fill(100, 255, 100);
    stroke(50, 150, 50);
    strokeWeight(2);
    beginShape();
    vertex(-50, -80);
    bezierVertex(-80, -150, 80, -150, 50, -80);
    bezierVertex(60, 0, -60, 0, -50, -80);
    endShape(CLOSE);

    // Eyes
    fill(0);
    ellipse(-25, -60, 20, 40);
    ellipse(25, -60, 20, 40);
    fill(255);
    ellipse(-23, -65, 5, 10);
    ellipse(27, -65, 5, 10);
    
    // Antennas
    stroke(100, 255, 100);
    strokeWeight(3);
    line(-30, -100, -50, -130);
    line(30, -100, 50, -130);
    fill(100, 255, 100);
    ellipse(-50, -130, 10, 10);
    ellipse(50, -130, 10, 10);

    // Glowing effect
    noFill();
    stroke(100, 255, 100, 100);
    strokeWeight(8);
    ellipse(0, 0, 130, 180);

    // Body
    fill(100, 255, 100);
    stroke(50, 150, 50);
    strokeWeight(2);
    beginShape();
    vertex(-40, 0);
    bezierVertex(-50, 100, 50, 100, 40, 0);
    endShape(CLOSE);

    // Arms with claws
    strokeWeight(5);
    line(-40, 30, -70, 80);
    line(40, 30, 70, 80);
    fill(100, 255, 100);
    triangle(-75, 85, -70, 80, -65, 85);
    triangle(65, 85, 70, 80, 75, 85);

    // Legs with feet
    strokeWeight(5);
    line(-20, 100, -30, 140);
    line(20, 100, 30, 140);
    fill(100, 255, 100);
    ellipse(-30, 145, 15, 10);
    ellipse(30, 145, 15, 10);
    
    // Extra alien feature: Tail
    stroke(100, 255, 100);
    strokeWeight(4);
    noFill();
    beginShape();
    vertex(0, 80);
    bezierVertex(30, 120, 50, 100, 40, 140);
    endShape();
}
