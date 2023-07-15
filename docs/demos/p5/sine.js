// p5.js code to generate a sine wave with amplitude and period controls

let xspacing = 10; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude; // Height of wave
let period; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let canvasHeight = 400;
let canvasWidth = 700;
let percentHeightDraw = .75;
let verticalDrawHight = canvasHeight * percentHeightDraw;
let horzAxisHeight = (canvasHeight * percentHeightDraw) / 2;

let amplitudeSlider, periodSlider, phaseSlider;
let animateButton;
//let animate = true;

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas-container');
  w = width + 16;
  
  // Create sliders
  amplitudeSlider = createSlider(0, 130, 100);
  amplitudeSlider.position(110, canvasHeight - 90);
  amplitudeSlider.style('width', '220px')
  
  periodSlider = createSlider(0, 1000, 500);
  periodSlider.position(110, canvasHeight - 60);
  periodSlider.style('width', '220px')
  
  // default is zero
  phaseSlider = createSlider(-TWO_PI, TWO_PI, 0, 0.01);
  phaseSlider.position(110, canvasHeight - 30);
  phaseSlider.style('width', '220px')
  
  // Create animate button
  //animateButton = createButton('Stop Animation');
  //animateButton.position(20, 80);
  //animateButton.mousePressed(toggleAnimation);

  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(255);  // white background
  
  // Use the slider values
  amplitude = amplitudeSlider.value();
  period = periodSlider.value();
  theta = phaseSlider.value();
  dx = (TWO_PI / period) * xspacing;
  
  calcWave();
  renderWave();
  
  // Draw text for sliders
  stroke(0)
  strokeWeight(0);
  fill('black'); // Text color
  text('Amplitude: ' + amplitude/100, 10, canvasHeight-90);
  text('Period: ' + period, 10, canvasHeight-60);
  let theta2 = theta + 1.25;
  text('Phase: ' + theta2.toFixed(2), 10, canvasHeight-30);
  
  // Draw x and y axis
  stroke('gray');
  strokeWeight(1);
  // horizontal axis
  line(0, horzAxisHeight, width, horzAxisHeight); // x-axis
  // vertical
  line(width / 2, 0, width / 2, verticalDrawHight); // y-axis
}

// used for animation
function calcWave() {
  // print('in calcWave')
  // Increment theta (try different values for 'angular speed')
  // theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noFill();
  strokeWeight(4);
  stroke('blue'); // wave color
  beginShape();
  for (let x = 0; x < yvalues.length; x++) {
    vertex(x * xspacing, horzAxisHeight + yvalues[x]);
  }
  endShape();
}

//function toggleAnimation() {
//  animate = !animate;
//  animateButton.html(animate ? 'Stop Animation' : 'Start Animation');
//}
