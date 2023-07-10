// Generated using ChagGPT with small changes to place the sketch in the HTML file
let heightSlider, widthSlider;
let rectHeight = 50;
let rectWidth = 50;

let heightLabel, widthLabel;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  
  // Make sure the range controls get aligned correctly
  // The width of the labels and values of the sliders
  let sliderStartX = 100;
  let sliderStartY = height - 50;
  let sliderWidth = width - sliderStartX;
  
  // we create screen elements to hold the label and values
  heightLabel = createElement('label', 'Height: ' + rectHeight).position(10, sliderStartY);
  widthLabel = createElement('label', 'Width: ' + rectWidth).position(10, sliderStartY + 20);
  
  heightSlider = createSlider(0, height - 100, rectHeight, 1);
  heightSlider.position(sliderStartX, sliderStartY);
  heightSlider.style('width', sliderWidth + 'px');
  
  widthSlider = createSlider(0, width - 100, rectWidth, 1);
  widthSlider.position(sliderStartX, sliderStartY + 20);
  widthSlider.style('width', sliderWidth + 'px');
}

function draw() {
  // light gray background
  background(240);
  
  rectHeight = heightSlider.value();
  rectWidth = widthSlider.value();
  
  // update the values for each draw
  heightLabel.html('Height: ' + rectHeight);
  widthLabel.html('Width: ' + rectWidth);
  
  // draw green
  fill(50, 200, 50);
  rect(50, 50, rectWidth, rectHeight);
}
