# Rotating Motor

We want to animate a rotating motor as a circle.

The motor must have circular arrows on it that show the direction of the rotation of the motor.

## Draw Rotating Motor

[Rotating Motor Demo](./motor.html)

```js
function drawMotor(x, y, direction, speed) {
  strokeWeight(2);
  stroke('black')
  noFill();
  circle(x,y,250)
  push();
      translate(x, y);
      noFill();
      angle += direction;
      rotate(angle);

      strokeWeight(10);
      stroke('black')
      noFill();
      // top circle
      arc(0, 0, 180, 180, 185, 310, OPEN);
      // bottom circle
      arc(0, 0, 180, 180, 0, 130, OPEN);

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
        drawArrowTip(90,0, -20)
        // lower left
        drawArrowTip(-90, -10, 164)
      }
  pop();
}

function drawArrowTip(x, y, rotationAngle) {
  push();  // Save the current drawing style and transformations
  translate(x, y);  // Move the origin to the given location
  rotate(rotationAngle);  // Rotate by the given angle
  fill(0);  // Set the fill color to black
  noStroke();  // Disable drawing an outline
  // set the size
  let sz = 20;
  // lower right, top, lower left
  triangle(sz, 0,  0,-3*sz,   -sz,0);  // Draw the arrow tip
  pop();  // Restore the previous drawing style and transformations
}

```

## Draw Arrow Tim

```js
function drawArrowTip(x, y, rotationAngle) {
  push();  // Save the current drawing style and transformations
  translate(x, y);  // Move the origin to the given location
  rotate(rotationAngle);  // Rotate by the given angle
  fill(0);  // Set the fill color to black
  noStroke();  // Disable drawing an outline
  // set the size
  let sz = 20;
  // lower right, top, lower left
  triangle(sz, 0,  0,-3*sz,   -sz,0);  // Draw the arrow tip
  pop();  // Restore the previous drawing style and transformations
}
```