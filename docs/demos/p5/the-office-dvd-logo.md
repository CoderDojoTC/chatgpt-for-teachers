# The Office DVD Logo

Inspired by [The Office](https://www.youtube.com/watch?v=QOtuX0jL85Y) and [Project.jdm](http://project.jdm), we have an example of a program that has a small 20x20 rectangle moving diagonally on a rectangle that is not quite exactly square.

[The Office DVD Logo](./the-office-dvd-logo.html)

Here is the prompt we started with:

```linenums="0"
Generate a single file p5.js sketch on a 410x400 canvas.

The p5.js sketch is an animation of a small 20x20 square moving
diagonally on the canvas.

The square starts in the lower-left corner of the screen and
moves to the upper right corner.

When the square hits the edge of the canvas it will bounce off the side.

Make the square leave a colored rainbow pattern as it moves.
```

## ChatGPT Response

```js
// define square and velocity
let square = {
  x: 0,
  y: 400, // should be 380
  w: 20,
  h: 20,
};

let velocity = {
  x: 2,
  y: -2,
};

let hueValue = 0;

function setup() {
  createCanvas(410, 400);
  colorMode(HSB);
}

function draw() {
  // noStroke is used to not have a border around the square
  noStroke();
  
  // Incrementing hue value to create a rainbow effect
  hueValue = (hueValue + 1) % 360;
  
  // Filling square with color and transparency
  fill(hueValue, 100, 100, 0.1);
  
  // draw the square
  rect(square.x, square.y, square.w, square.h);

  // update square position
  square.x += velocity.x;
  square.y += velocity.y;

  // check for collision with edges and reverse if collided
  if (square.x > width - square.w || square.x < 0) {
    velocity.x = -velocity.x;
  }
  if (square.y > height - square.h || square.y < 0) {
    velocity.y = -velocity.y;
  }
}
```

The only bug is the y coordinate of the original rectangle.
It is 400 and it should be 380.  After we fixed that it worked!