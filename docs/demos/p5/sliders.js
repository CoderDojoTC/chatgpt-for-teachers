let widthSlider;
let heightSlider;

function setup() {
  createCanvas(400, 400);

  widthSlider = createSlider(0, 360, 50, 1);
  widthSlider.position(65, 10);
  widthSlider.style('width', '340px');
  
  heightSlider = createSlider(0, 360, 50, 1);
  heightSlider.position(65, 30);
  heightSlider.style('width', '340px');
}

function draw() {
  background(230);
  fill(20);
  width = widthSlider.value()
  height = heightSlider.value()
  text('Width: ' + width, 0, 15);
  text('Height: ' + height, 0, 35);
  
  let myHeight = heightSlider.value();
  let myWidth = widthSlider.value();
  rect(10, 50, myWidth, myHeight);
}
