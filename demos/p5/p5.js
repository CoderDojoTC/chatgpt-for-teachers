let slopeSlider, interceptSlider;
let slopeValue, interceptValue;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvasContainer');
  slopeSlider = select('#slopeSlider');
  interceptSlider = select('#interceptSlider');
  slopeValue = select('#slopeValue');
  interceptValue = select('#interceptValue');
}

function draw() {
  background(255);
  
  // Display grid
  stroke(200);
  for(let i = 0; i <= width; i += 50){
    if(i % 100 === 0){
      strokeWeight(2);
    } else {
      strokeWeight(1);
      drawingContext.setLineDash([5, 15]);
    }
    line(i, 0, i, height);
    line(0, i, width, i);
    drawingContext.setLineDash([]);
  }
  
  let slope = slopeSlider.value();
  let intercept = interceptSlider.value();
  slopeValue.html(slope);
  interceptValue.html(intercept);
  
  // Plot line
  stroke(0, 0, 255);
  strokeWeight(2);
  line(0, height - intercept, width, height - (slope * width + intercept));
}
