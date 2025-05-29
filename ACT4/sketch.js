let img;

function preload() {
  
  img = loadImage("pppp.jpg");
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);   
  filter(INVERT);     
}

function draw() {
  
  noLoop(); 
}