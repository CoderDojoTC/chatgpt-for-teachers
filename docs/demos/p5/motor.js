// scale motor test
// Goal: add a size to the motor drawing to not require only a fixed size hard coded in the draw.

let direction = 1;
let radiusSlider;
let angle = 0;
let circleRadius = 100; // default value
let myFrameRate = 24;

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
    // this changes the entire layout
    
  
    let forwardButton = createButton('Fwd');
    forwardButton.position(10, height-20);
    forwardButton.mousePressed(forward);
    
    let stopButton = createButton('Stop');
    stopButton.position(55, height-20);
    stopButton.mousePressed(stop);
    
    let reverseButton = createButton('Rev');
    reverseButton.position(105, height-20);
    reverseButton.mousePressed(turnReverse);

    // radiusSlider = createSlider(0, 200, circleRadius);
    radiusSlider = createSlider(50,350,200);
    radiusSlider.position(215, height - 35);
    radiusSlider.style('width', '180px');

        // radiusSlider = createSlider(0, 200, circleRadius);
    speedSlider = createSlider(0, 20, 2, .1);
    speedSlider.position(215, height - 16);
    speedSlider.style('width', '180px');
    frameRate(myFrameRate);
}

function stop() {
    direction = 0;
  }
  
  function forward() {
    direction = 1;
  }
  
  function turnReverse() {
    direction = -1;
  }

function draw() {
    background(240);

    // Update the circle radius based on slider value
    circleRadius = radiusSlider.value();
    motorSpeed = speedSlider.value();

    // Center the motor on the canvas
    angle += direction * motorSpeed;
    drawMotor(width / 2, height / 2, circleRadius, angle, direction, 1)

    // Draw the label and the current radius value
    stroke(0);
    strokeWeight(0);
    fill(0); // black color for the text
    text("Radius: " + circleRadius, 140, height - 30);
    text("Speed: " + motorSpeed, 140, height - 10);
}

function drawMotor(x, y, size, angle, direction, speed) {
  angleMode(DEGREES);  // Change the mode to 
  strokeWeight(2);
  stroke('black')
  noFill();

  circle(x,y, size)
  scalePts = 200/size
  push();
      translate(x, y);
      noFill();
      
      rotate(angle);

      strokeWeight(10);
      stroke('black')
      noFill();
      // top circle
      arc(0, 0, size * .8, size * .8, 180, 300, OPEN);
      // bottom circle
      arc(0, 0, size * .8, size * .8, 0, 130, OPEN);

      // fowward
      if (direction == 1) {
        // up right
        drawArrowTip(50,-75, 140)
        // lower left
        drawArrowTip(-60, 70, -30)
      }
      // reverse
      if (direction == -1) {
        // up right
        drawArrowTip(90 + int(size/200), 0, -20, size)
        // lower left
        drawArrowTip(-90 + int(size/200), -10, 164, size)
      }
  pop();
}

// draw a triangle with a base at (x,y) in the direction of rotationAngle
function drawArrowTip(x, y, rotationAngle, size) {
  push();  // Save the current drawing style and transformations
    translate(x, y);  // Move the origin to the given location
    rotate(rotationAngle);  // Rotate by the given angle
    fill(0);  // Set the fill color to black
    noStroke();  // Disable drawing an outline
    // set the size
    let sz = 10 + int(size*.01);
    // lower right, top, lower left
    triangle(sz, 0,  0,-3*sz,   -sz,0);  // Draw the arrow tip
  pop();  // Restore the previous drawing style and transformations
}
