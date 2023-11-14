
// p5.js sketch for least squares fit demonstration

// global variables
let width = 600;
let height = 500;
let data = [];
let slopeSlider, interceptSlider;
let calculatedSlope, calculatedIntercept;
let labelValueMargin = 150

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent('canvas-container');
  textSize(16);
  generateData();
  calculateLeastSquares();
  
  slopeSlider = createSlider(100, 220, calculatedSlope, 0.1);
  slopeSlider.position(labelValueMargin, height - 50);
  slopeSlider.style('width', width - labelValueMargin - 20 + 'px');
  
  interceptSlider = createSlider(-200000, 200000, calculatedIntercept, 1000);
  interceptSlider.position(labelValueMargin, height - 25);
  interceptSlider.style('width', width - labelValueMargin - 20 + 'px');
}

function draw() {
  background(240);
  drawAxis();
  displayData();
  drawLine();
  displaySliderValues();
}

function generateData() {
  for (let i = 0; i < 20; i++) {
    let sqft = random(1500, 3500);
    let basePrice = map(sqft, 1500, 3500, 150000, 500000);
    let variation = random(-basePrice * 0.1, basePrice * 0.1);
    let price = basePrice + variation;
    data.push(createVector(sqft, price));
  }
}

function displayData() {
  for (let point of data) {
    let x = map(point.x, 1500, 3500, 0, width);
    let y = map(point.y, 150000, 500000, height, 0);
    fill(0);
    ellipse(x, y, 8, 8);
  }
}

function calculateLeastSquares() {
  let xSum = 0, ySum = 0, xySum = 0, x2Sum = 0, n = data.length;
  for (let point of data) {
    xSum += point.x;
    ySum += point.y;
    xySum += point.x * point.y;
    x2Sum += point.x * point.x;
  }
  calculatedSlope = (n * xySum - xSum * ySum) / (n * x2Sum - xSum * xSum);
  calculatedIntercept = (ySum - calculatedSlope * xSum) / n;
}

function drawLine() {
  let slope = slopeSlider.value();
  let intercept = interceptSlider.value();
  let x1 = 1500;
  let y1 = slope * x1 + intercept;
  let x2 = 3500;
  let y2 = slope * x2 + intercept;
  let screenX1 = map(x1, 1500, 3500, 0, width);
  let screenY1 = map(y1, 150000, 500000, height, 0);
  let screenX2 = map(x2, 1500, 3500, 0, width);
  let screenY2 = map(y2, 150000, 500000, height, 0);
  stroke('red');
  strokeWeight(3)
  line(screenX1, screenY1, screenX2, screenY2);
}

function displaySliderValues() {
  fill(0)
  noStroke();
  text('Slope: ' + slopeSlider.value(), 10, height - 37);
  text('Intercept: $' + interceptSlider.value(), 10, height - 15);
}

function drawAxis() {
  stroke('green');
  strokeWeight(1)
  
  
  line(1, map(150000, 150000, 500000, height, 0), width, map(150000, 150000, 500000, height, 0)); // X-axis
  
  strokeWeight(0)
  text("Home Price", 10, 20)
  text("Calculated Slope: " + Math.round(calculatedSlope), 10, 50)
  text("Calculated Intercept: " + Math.round(calculatedIntercept), 10, 70)
  
  line(map(1500, 1500, 3500, 0, width), 0, map(1500, 1500, 3500, 0, width), height); // Y-axis
  text("Square Footage", width - 130, height - 50)
}