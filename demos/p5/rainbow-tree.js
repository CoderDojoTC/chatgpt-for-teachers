// rainbow tree
let sliderLength, sliderAngle;
let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan'];
let lenLabel, angleLabel;
let labelWidth = 100;

function setup() {
  const canvas = createCanvas(450, 450);
  canvas.parent('canvas-container');
  background(0);
  
  lenLabel = createDiv('Length:');
  lenLabel.position(10, 410);
  lenLabel.style('color', 'white');
  sliderLength = createSlider(0, 200, 150);
  sliderLength.position(labelWidth, 410);
  sliderLength.style('width', width - labelWidth + 'px');

  angleLabel = createDiv('Angle:');
  angleLabel.position(10, 430);
  angleLabel.style('color', 'white');
  sliderAngle = createSlider(0, PI / 2, PI / 8, 0.01);
  sliderAngle.position(labelWidth, 430);
  sliderAngle.style('width', width - labelWidth + 'px');
}

function draw() {
  background(0);
  translate(width/2, height);
  let len = sliderLength.value();
  let angle = sliderAngle.value();
  lenLabel.html(`Length: ${len}`);
  angleLabel.html(`Angle: ${int(angle * 115)}`);
  strokeWeight(7);
  branch(len, angle, 0);
}

function branch(len, angle, depth) {
  stroke(rainbowColors[depth % rainbowColors.length]);
  line(0, 0, 0, -len);
  if (len > 4) {
    push();
    translate(0, -len);
    rotate(angle);
    strokeWeight(map(len, 0, 200, 1, 7));
    branch(0.67 * len, angle, depth + 1);
    rotate(-2 * angle);
    branch(0.67 * len, angle, depth + 1);
    pop();
  }
}
