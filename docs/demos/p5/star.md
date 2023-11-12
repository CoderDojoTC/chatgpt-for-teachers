# Multi-pointed Star

Here is a p5 sketch that generates a multi-pointed star.  

[Multi-pointed Star](./star.html)

Here is the prompt I used to generate
this program.

```linenums="0"
Generate a p5.js sketch that draws a star at the center 
of a 400x400 canvas.  Use a default text size of 16.

Add a slider for the number of points on the star that
ranges from 4 to 20 with a default of 10.
Make the slider indented 100 and span the width of the
canvas.

Make the slider width be 360px and display the label
and number of points by using the text() function at
the end of the draw() function.  Place the label, value and
slider at the bottom of the canvas.
```

## Result

```js
// Draw a gold star whith number points as a paramter
let pointsSlider;
let width = 400;
let height = 400;
let cx = width / 2;
let cy = height / 2;

function setup() {
  createCanvas(width, height);
  textSize(16);
  pointsSlider = createSlider(4, 20, 10);
  pointsSlider.position(90, height - 25);
  pointsSlider.style('width', '280px');
}

function draw() {
  background(220);
  
  // center


  // radius
  const r = min(width, height) * 0.45;

  // points
  points = pointsSlider.value();
  // tempory move of coordinate system to center
  push();
     translate(cx, cy);
     star(0, 0, r * 0.6, r, points);
  pop();
  
  text("Points:" + points, 10, height - 20);
}

// draw star at (x,y) with inner and outer radius and n points
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill('gold')
  beginShape();
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
```