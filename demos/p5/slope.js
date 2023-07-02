let slope;

function setup() {
  createCanvas(400, 400);
  slope = createSlider(-1, 1, 0, 0.01);
  slope.id('slope');
}

function draw() {
  background(255);
  
  // Drawing grid
  stroke(200);
  for(let i = 0; i <= width; i += 50){
    if(i % 100 === 0){
      strokeWeight(2);
      line(i, 0, i, height);
      line(0, i, width, i);
    } else {
      strokeWeight(1);
      drawingContext.setLineDash([5, 15]);
      line(i, 0, i, height);
      line(0, i, width, i);
      drawingContext.setLineDash([]);
    }
  }
  
  // Drawing blue line
  stroke(0, 0, 255);
  strokeWeight(2);
  let slopeValue = slope.value();
  line(0, height / 2, width, height / 2 - slopeValue * width);
}
