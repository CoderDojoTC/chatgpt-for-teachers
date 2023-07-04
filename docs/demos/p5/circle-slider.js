// draw a circle and use a slider to change the radius
function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
    radiusSlider = createSlider(0, 200, 60, 1);
    radiusSlider.position(70, 0);
    radiusSlider.style('width', '320px');
  }
  
  function draw() {
    background('220');
    let radius = radiusSlider.value();
    fill('blue');
    circle(width/2, height/2, radius*2);
    fill('black');
    text('Radius: ' + radius, 0, 15);
  }