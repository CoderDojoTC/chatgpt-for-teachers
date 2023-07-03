
let simpleSlider;

function setup() {
  createCanvas(400, 400);
  simpleSlider = createSlider(0, 360, 50, 1);
  simpleSlider.position(65, 10);
  simpleSlider.style('width', '340px');
}

function draw() {
  background('white');
  let val = simpleSlider.value();
  fill('black');
  text('Value: ' + val, 0, 15);
  circle(width/2, height/2, val);
}