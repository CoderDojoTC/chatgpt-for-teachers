// single slider with text feedback
function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
    radiusSlider = createSlider(0, 400, 60, 1);
    radiusSlider.position(70, 0);
    radiusSlider.style('width', '320px');
  }
  
  function draw() {
    background('white');
    let val = radiusSlider.value();
    fill('blue');
    text('Radius: ' + val, 0, 15);
    circle(width/2, height/2, val);
  }