# Prompt Templates

## Stem 1: Generate a File

```linenums="0"
Generate a single p5.js sketch file that draws on a 400x400 canvas.

## Step 2: Add Controls and Buttons

```linenums="0"
Add range control sliders at the bottom of the canvas for changing the X and Y.
```

```linenums="0"
Add range control sliders at the bottom of the canvas for changing the X and Y.
Include the label and values for the sliders.
```

```linenums="0"
Add buttons for "Run", "Stop", "Step" and "Reset" at the bottom of the canvas.
```

## Step 3: Specify Labe, Value and Slider Layout

```
Add the slider labels and values to the left of the sliders.
Have the sliders begin at x=100 and span the rest of the width of the canvas.
```

## Add the Canvas Const and Reference

```linenums="0"
Add the following at the start of the draw function:
  const canvas = createCanvas(600, 200);
  // remove comment to place in HTML page with a canvas-container ID
  // canvas.parent('canvas-container');
```

## Example

```linenums="0"
Generate a p5.js sketch file that teaches trigonometry concepts on a 400x400 canvas.

Allow the user to change two values using range control sliders placed at the bottom of the canvas.

The canvas contains a plot of a sine wave from -2 PI to 2 PI.

The first slider should control the amplitude of a sine curve ranging from .1 to 2 in .1 steps and the default amplitude of 1.0

The second slider should control the frequency of the sine wave.

The third slider should control the phase of the sine wave.

At the end of the draw() function use the text() function to draw the labels and values of the sliders.

Make the sliders span the width of the canvas minus the label and values.
