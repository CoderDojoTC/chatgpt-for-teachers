// bouncing ball - version 2
// designed for touch sensitive whiteboard in a classroom

let width = 500;
let height = 300;
r = 20; // radius of the ball

// initial position
x = 100;
y = 100;
speed = 3; // default speed
// direction of motion
dx = speed;
dy = speed;
sliderLeftMargin = 90;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent('canvas-container');
  speedSlider = createSlider(0, 20, speed);
  speedSlider.position(sliderLeftMargin, height - 15);
  speedSlider.style('width', width - sliderLeftMargin - 15 + 'px');
}

function draw() {
  background(240);
  textSize(16);
  
  speed = speedSlider.value()
  if (dx > 0) dx = speed;
     else dx = -speed;
  
  if (dy > 0) dy = speed;
     else dy = -speed;
  
  // Add the current speed to the position.
  x += dx;
  y += dy;

  // checks for edges
  if ((x > width-r) || (x < r)) {
    dx = dx * -1;
  }
  if ((y > height - r) || (y < r)) {
    dy = dy * -1;
  }

  fill('blue');
  circle(x, y, r*2);
  fill('black');
  text('Speed: ' + speed, 10, height-10)
}
