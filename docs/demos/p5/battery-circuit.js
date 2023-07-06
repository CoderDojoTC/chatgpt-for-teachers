let switchState = false;
let button;

function setup() {
  createCanvas(400, 400);
  button = createButton('Turn Switch On');
  button.position(20, 20);
  button.mousePressed(toggleSwitch);
}

function draw() {
  background(220);

  // Draw the battery
  ydist = 125
  fill('gold');
  strokeWeight(0)
  rect(50, ydist, 20, 100);
  stroke(0)
  fill('black');
  textSize(20)
  text('battery', 30, ydist+130)

  // Draw the wires
  // top wire
  stroke(0);
  strokeWeight(15)
  wireH = 125
  line(70, wireH, 150, wireH); // Wire from battery to switch
  line(170, wireH, 275, wireH); // Wire from switch to bulb
  line(275, wireH, 275, wireH+100); // Wire near bulb
  
  // Draw the moving circles if switch is on
  if (switchState) {
    let x = map(sin(frameCount / 10), -1, 1, 70, 150);
    stroke('purple')
    ellipse(x, wireH, 10, 10);
    x = map(sin(frameCount / 10), -1, 1, 170, 275);
    ellipse(x, wireH, 10, 10);
  }
  
  stroke(0);
  strokeWeight(15)
  wireH = 225
  line(70, wireH, 170, wireH); // Wire from battery to switch
  line(170, wireH, 275, wireH); // Wire from switch to bulb
  
  // Draw the moving circles if switch is on
  if (switchState) {
    let x = map(sin(frameCount / 10), -1, 1, 70, 150);
    stroke('purple')
    ellipse(x, wireH, 10, 10);
    x = map(sin(frameCount / 10), -1, 1, 170, 275);
    ellipse(x, wireH, 10, 10);
  }
  
  // Draw the switch
  fill(0);
  strokeWeight(0)
  
  if (switchState) {
    fill('green');
    rect(150, ydist-25, 20, 50);
  } else {
    fill('red');
  }
  ellipse(160, ydist, 10, 10);
  stroke(0)
  fill('black');
  text('switch', 130, 90)

  // Draw the light bulb
  if (switchState) {
    fill(255, 255, 0); // Yellow
  } else {
    fill(0); // Black
  }
  ellipse(300, ydist+50, 50, 50);
  stroke(0)
  fill('black');
  text('light bulb', 300, 230)
  
}


function toggleSwitch() {
  switchState = !switchState;
  if (switchState) {
    button.html('Turn Switch Off');
  } else {
    button.html('Turn Switch On');
  }
}