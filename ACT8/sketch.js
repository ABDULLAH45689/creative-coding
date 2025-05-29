let song;
let fft;

function preload() {
  // Load your audio file (place it in the project folder or use a URL)
  song = loadSound('123.mp3'); 
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fft = new p5.FFT();
  
  // Start the song on click
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);
  text('Click to play', width / 2, height / 2);
}

function draw() {
  background(0);
  
  if (song.isPlaying()) {
    let waveform = fft.waveform();
    
    translate(width / 2, height / 2);
    stroke(255);
    noFill();
    beginShape();
    for (let i = 0; i < 360; i++) {
      let index = floor(map(i, 0, 360, 0, waveform.length));
      let r = map(waveform[index], -1, 1, 100, 250);
      let x = r * cos(i);
      let y = r * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

function mousePressed() {
  if (!song.isPlaying()) {
    song.play();
  }
}
