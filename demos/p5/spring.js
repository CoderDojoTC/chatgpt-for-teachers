// Spring drawing constants for top bar
let springHeight = 32,
  left,
  right,
  maxHeight = 200,
  minHeight = 200,
  over = false,
  moveSpring = false,
  draggedDown = false,
  prevMouseY;

// Spring simulation constants
let M = 0.8, // Mass
  K = 0.2, // Spring constant
  D = 0.92, // Damping
  R = 150; // Rest position

// Spring simulation variables
let ps = R, // Position
  vs = 0.0, // Velocity
  as = 0, // Acceleration
  f = 0; // Force

let massSlider, springConstantSlider, dampingSlider;
let counter = 0;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  rectMode(CORNERS);
  noStroke();
  left = width / 2 - 100;
  right = width / 2 + 100;
  prevMouseY = mouseY;

  // Create range sliders
  massSlider = createSlider(0.1, 2, M, 0.1);
  massSlider.position(20, 20);
  springConstantSlider = createSlider(0.1, 1, K, 0.1);
  springConstantSlider.position(20, 50);
  dampingSlider = createSlider(0.8, 1, D, 0.01);
  dampingSlider.position(20, 80);
  background(220);
  text('Drag spring down', width - 150, 50)
  drawSpring();
}

function draw() {
  

  if (draggedDown || (prevMouseY !== mouseY && mouseY > ps)) {
    background(220);
    updateSpring();
    drawSpring();
    counter++;
  }
  prevMouseY = mouseY;

  // Display counter
  fill(0);
  text("Mass:" + M + "  Spring Constant:" + K + "   Damping:" + D + "   Draw Counter: " + counter, 10, 120);
}

function mousePressed() {
  if (over) {
    moveSpring = true;
  }
}

function mouseReleased() {
  if (moveSpring) {
    moveSpring = false;
    draggedDown = true;
  }
}

function drawSpring() {
  // Draw base
  fill(0.2);
  let baseWidth = 0.5 * ps + -8;
  rect(width / 2 - baseWidth, ps + springHeight, width / 2 + baseWidth, height);

  // Set color and draw top bar
  if (over || moveSpring) {
    fill(0,0,255);
  } else {
    fill(204);
  }

  rect(left, ps, right, ps + springHeight);
}

function updateSpring() {
  // Update the spring position
  if (!moveSpring) {
    f = -K * (ps - R); // f=-ky
    as = f / M; // Set the acceleration, f=ma == a=f/m
    vs = D * (vs + as); // Set the velocity
    ps = ps + vs; // Updated position
  }

  if (abs(vs) < 0.1) {
    vs = 0.0;
  }

  // Test if mouse is over the top bar
  if (mouseX > left && mouseX < right && mouseY > ps && mouseY < ps + springHeight) {
    over = true;
  } else {
    over = false;
  }

  // Set and constrain the position of top bar
  if (moveSpring) {
    ps = mouseY - springHeight / 2;
    ps = constrain(ps, minHeight, maxHeight);
  }

  // Update simulation constants from sliders
  M = massSlider.value();
  K = springConstantSlider.value();
  D = dampingSlider.value();
}
