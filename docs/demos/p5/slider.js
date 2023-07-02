
let slider;
function setup() {
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  let val = slider.value();
  background(val, 400, 400, 1);
}