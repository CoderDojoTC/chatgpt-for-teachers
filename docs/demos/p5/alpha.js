let width = 300;
let height = 150;
let labelValueWidth = 100;

function setup() {
  const canvas = createCanvas(width, height)
  canvas.parent('canvas-container');
  textSize(16)
  
  alphaSlider = createSlider(0, 256, 100, 1);
  alphaSlider.position(labelValueWidth, height - 25);
  alphaSlider.style('width', width - labelValueWidth - 20 + 'px');
}

function draw() {
  clear();
  background(240);
  alphaValue = alphaSlider.value();
  const squareColor = color(0, 0, 255);
  squareColor.setAlpha(alphaValue);
  fill(squareColor);
  rect(13, 13, width - 26, height - 50);
  const textColor = color(0);
  textColor.setAlpha(255);
  fill(textColor);
  text('Alpha: ' + alphaValue, 10, height-10)
}