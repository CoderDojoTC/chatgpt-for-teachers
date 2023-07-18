// define square and velocity
let square = {
    x: 0,
    y: 380,
    w: 20,
    h: 20,
  };
  
  let velocity = {
    x: 2,
    y: -2,
  };
  
  let hueValue = 0;
  
  function setup() {
    const canvas = createCanvas(410, 400);
    canvas.parent('canvas-container');
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