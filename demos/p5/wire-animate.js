let speedSlider;

function setup() {
  createCanvas(400, 400);
  speedSlider = createSlider(1, 20, 10);
  speedSlider.position(120, 10);
  speedSlider.style('width', '250px')
}

function draw() {
  background(240);

  // Get speed from the slider
  speed1 = speedSlider.value()
  speed2 = speed1 / 10000;

  // Draw animate wires
  animatedWire(100, 100, 300, 100, speed2);
  animatedWire(300, 100, 300, 300, speed2);
  animatedWire(300, 300, 100, 300, speed2);
  animatedWire(100, 300, 100, 100, speed2);
  stroke('black')
  fill(0)
  textSize(24)
  strokeWeight(0);
  text('Speed:' + speed1, 10, 30)
}

function animatedWire(x1, y1, x2, y2, speed1) {
  // get a timestamp and do a remainder with modulo
  let t = (millis() * speed1) % 1;

  // Calculate the current position
  // lerp is linear interval between points
  // Calculates a new number between two numbers at a specific increment.
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  // draw black wire
  stroke('black');
  strokeWeight(15);
  line(x1, y1, x2, y2);
  // Draw the moving circle along the line
  fill(220);
  noStroke();
  ellipse(x, y, 10, 10);
}
