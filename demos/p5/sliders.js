let heightSlider, widthSlider;
let canvasWidth = 400;
let canvasHeight = 400;
let rectWidth, rectHeight;

function setup() {
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas');
  
  heightSlider = document.getElementById('heightSlider');
  widthSlider = document.getElementById('widthSlider');
  
  heightSlider.addEventListener('input', updateRectSize);
  widthSlider.addEventListener('input', updateRectSize);
  
  rectWidth = widthSlider.value;
  rectHeight = heightSlider.value;
}

function draw() {
  background(220);
  fill(0);
  
  let rectX = canvasWidth / 2 - rectWidth / 2;
  let rectY = canvasHeight / 2 - rectHeight / 2;
  rect(rectX, rectY, rectWidth, rectHeight);
}

function updateRectSize() {
  rectWidth = widthSlider.value;
  rectHeight = heightSlider.value;
}
