# Set the Alpha Channel on a Rectangle

## How to use this simulation in a classroom setting

**Concept Understanding:** Introduce students to the concept of transparency and alpha values in digital graphics.

**Interactive Learning:** Allow students to interact with the slider and observe how the transparency of the rectangle changes in real-time.

**Experimentation:** Encourage students to predict what will happen when they adjust the slider before they do it, fostering hypothesis testing and observation skills.

**Extension Activities:**

1. Ask students to create multiple shapes with different transparency levels.
2. Introduce RGB color values and let students adjust the color of the rectangle along with the transparency.
3. To extend this simulation, you could add more sliders to control other aspects, like the rectangle's position, size, or the background color of the canvas. This would give students a more comprehensive introduction to graphical programming concepts.

You can copy this code directly into the p5.js web editor to see it in action and share it with your students.

## Prompt

```linenums="0"
Create a single file p5.ja sketch.
Create a demonstration of changing the transparency of a rectangle.
Create a canvas of 300x150.
Have a slider change the alpha value.
Position the slider 30 up from the bottum.
The slider should range from 0 to 255 with a default of 100.
The slider should have a label and value to the left of it.
The slider should span the width of the canvas less the margin for the label and value.
Make the margin to the left of the slider be 100.
Place the label and value to the left of the slider at the bottom.
Reset the alpha to 255 before drawing the label and value.
```

[Demo of Alpha Channel](alpha.html)

## Sample Code

```js
let width = 300;
let height = 150;
let labelValueWidth = 100;

function setup() {
  const canvas = createCanvas(width, height)
  canvas.parent('canvas-container');
  textSize(16)
  
  alphaSlider = createSlider(0, 256, 100, 1);
  alphaSlider.position(labelValueWidth, height - 25);
  alphaSlider.style('width', width - labelValueWidth - 20 + 'px');
}

function draw() {
  clear();
  background(240);
  alphaValue = alphaSlider.value();
  const squareColor = color(0, 0, 255);
  squareColor.setAlpha(alphaValue);
  fill(squareColor);
  rect(13, 13, width - 26, height - 50);
  // Reset alpha to 255 for label and value
  fill(0, 255);
  text('Alpha: ' + alphaValue, 10, height-10)
}
```