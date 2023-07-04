function setup() {
    // Create a p5.js canvas inside the div with id "sketch-container"
    const canvas = createCanvas(200, 200);
    canvas.parent('sketch-container');
  }
  
  function draw() {
    background(220);
    // Your drawing code goes here
    fill('blue');
    circle(100, 100, 100);
  }
  