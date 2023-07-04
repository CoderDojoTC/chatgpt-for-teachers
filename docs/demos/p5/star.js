// global
let pointsSlider;

function setup() {
  const canvas = createCanvas(400, 400);
  // connect the canvas to this HTML id
  canvas.parent('canvas-container');
  pointsSlider = createSlider(4, 20, 4);
  pointsSlider.position(10, 410);
  pointsSlider.style('width', '380px');
}

function draw() {
  background(240);
  
  // center
  const cx = width / 2;
  const cy = height / 2;

  // radius
  const r = min(width, height) * 0.45;

  // points
  const points = pointsSlider.value();

  push();
  translate(cx, cy);
  rotate(-HALF_PI);
  star(0, 0, r * 0.6, r, points);
  pop();
  
  text(`Points: ${points}`, 10, height - 20);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  fill('gold');
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
