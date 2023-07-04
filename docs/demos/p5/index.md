# Processing Examples

## Sliders

Sliders are the input range controls that allow users to change a value.

1. A single slider on a 400x400 canvas with label and text value. This demo
controls the radius of a circle.<br/>
[Single Slider Radius](./slider.html)

1. Two sliders on a 400x400 canvas that control width and height of a rectangle.
<br/>
[Two Sliders Controlling a Rectangle](./sliders.html)

## Sketch Container Placement

In the ```setup()``` function we can use the ```canvas.parent()``` method to indicate the ID of the enclosing HTML div id.

```js
function setup() {
  // Create a p5.js canvas inside the div with id "sketch-container"
  const canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
}

function draw() {
  background(220);
  // Your drawing code goes here
}
```

See the [p5.js parent](https://p5js.org/reference/#/p5.Element/parent) reference document.

[Container Placement Example](./container-placement.html)

## Star

[Multi-pointed Star](./star.html)

Here is a p5 sketch that generates a multi-pointed star.  Here is the prompt I used to generate
this program.

```
Generate a p5.js sketch that draws a star at the center of a 400x400 canvas.  Add a slider for the number of points on the star that ranges from 4 to 20.  Make the slider width be 380px and display the number of points using the text() function at the end of the draw() function.
```

## Slope and Intercept

Students that are learning charts and plotting will learn about the slope and intercept of a line.
This one is tricky since processing uses the upper-left corner as the origin and y increases as
we move down the page.</br>
[Slope and Intercept](./slope.html)

[Supply and Demand](./supply-and-demand.html)

## Brownian Motion

[Brownian Motion](./brownian-motion.html)

## Conway's Game of Life

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) is a simple simulator of cells.  This is a class of simulation called [Cellular Automata](https://en.wikipedia.org/wiki/Cellular_automaton)

[Conway's Game of Life](./conways-life.html)

## Virus Simulation

A classic simulation of the rate that a virus spreads in a network.<br/>
[Virus Simulation](./virus-sim.html)
TODO - use a force-directed graph to rearrange the network.

## Sierpinski Fractal Triangle

[Sierpinski Fractal Triangle](./sierpinski.html)

## Koch Fractal Curve
[Koch Fractal Curve](./koch-fractal-curve.html)

## Rabbit and Foxes

[Rabbit and Foxes](./rabbit-and-foxes.html)

## Canon

[Canon Simulator](./canon.html)

## Tutorials

* [p5.js Learn](https://p5js.org/learn/)

* [p5.js wiki](https://github.com/processing/p5.js/wiki)

* [Tool on Codecademy.com](https://www.codecademy.com/learn/learn-p5js/modules/p5js-introduction-to-creative-coding/cheatsheet)