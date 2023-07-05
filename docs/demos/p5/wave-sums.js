// Sum of waveforms
let waves = [];
let sumWave = [];
let checkboxes = [];
let waveHeight = 60;
let waveMargin = 10
let waveTotal = waveHeight + waveMargin
let halfHeight = waveHeight/2;
let sumHeight = 300;

function setup() {
  createCanvas(400, 510);
  
  // Create sine waves with different frequencies and checkboxes
  for(let i = 0; i < 4; i++) {
    waves[i] = [];
    for(let x = 0; x < width; x++) {
      // Adjust to change the frequency of the waves
      waves[i][x] = sin((i+1)*0.02*x) * halfHeight; 
    }
    checkboxes[i] = createCheckbox('Include in sum', false);
    checkboxes[i].position(5, i*waveTotal);
  }
}

function draw() {
  background(245);

  // Reset the sum wave
  sumWave = new Array(width).fill(0);

  stroke(0);
  noFill();
  for(let i = 0; i < 4; i++) {
    rect(0, i*waveHeight + i*waveMargin, width, waveHeight); // Draw bounding box
    stroke('sliver');
    strokeWeight(1)
    downDist = i*waveHeight + i*waveMargin
    dd2 = downDist + halfHeight
    line(0, dd2, width, dd2); // Draw zero line
    stroke('blue');
    for(let x = 1; x < width; x++) {
      if(checkboxes[i].checked()) {
        sumWave[x] += waves[i][x]; // Add to the sum
      }
      line(x-1, dd2+waves[i][x-1], x, dd2+waves[i][x]);
    }
  }

  // Display the sum wave
  stroke('black');
  strokeWeight(1)
  text('Sum of waveforms', 0, 290)
  stroke('green');
  strokeWeight(2)
  // Draw bounding box for the sum
  rect(0, sumHeight, width, waveHeight*4);
  
  // Draw the axis line
  stroke('silver');
  line(0, 400, width, 400); // Draw zero line
  
  // Draw the sum of the waveforms
  stroke('purple');
  strokeWeight(3)
  for(let x = 1; x < width; x++) {
    line(x-1, 400+sumWave[x-1], x, 400+sumWave[x]);
  }
}
