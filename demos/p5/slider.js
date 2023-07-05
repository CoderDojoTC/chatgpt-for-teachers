
let simpleSlider;

function setup() {
  createCanvas(400, 400);
  // min, max, default, increment
  simpleSlider = createSlider(0, 360, 100, 1);
  // x and y position
  simpleSlider.position(70, 10);
  // how wide the slider should be
  simpleSlider.style('width', '330px');
}

function draw() {
  background(220);
  let val = simpleSlider.value();
  fill('black');
  circle(width/2, height/2, val);
  text('Value: ' + val, 5, 15);
}