// test switch
let isSwitchClosed = false;

let topLine = 100;
let leftLine = 100;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  // create toggle button
  buttonToggle = createButton('Toggle Switch');
  buttonToggle.position(20, 10);
  buttonToggle.mousePressed(toggleSwitch);
}

function toggleSwitch() {
  isSwitchClosed = !isSwitchClosed;
}

function hline(x,y,w) {
  strokeWeight(1);
  line(x, y, x+w, y);
}

function vline(x,y,w) {
  strokeWeight(1);
  line(x, y, x, y+w);
}

function drawSwitchHoriz(x, y, w, isClosed) {
  circle(x, y, 4)
  circle(x+w, y, 4)
  stroke(0);
  strokeWeight(3);
  if(isClosed) {
    line(x, y, x + w, y);
    strokeWeight(0);
    text('on',x+15,y-10)
  } else {
    line(x, y, x + w * .8, y - w * .6);
    strokeWeight(0);
    text('off',x+20,y)
  }
}

function drawSwitchVert(x, y, w, isClosed) {
  circle(x, y, 4)
  circle(x, y+w, 4)
  stroke(0);
  strokeWeight(2);
  if(isClosed) {
    line(x, y, x, y + w);
    strokeWeight(0);
    text('on',x+7,y+29);
  } else { 
    line(x, y, x + w*.8, y + w * .6);
    strokeWeight(0);
    text('off',x,y+29);
  }
}

function draw() {
  background(220);
  
  hline(0, topLine, 100);
  // closed - on - 1
  drawSwitchHoriz(100, topLine, 50, isSwitchClosed ? 1 : 0);
  hline(150, topLine, 50);
  drawSwitchHoriz(200, topLine, 50, isSwitchClosed ? 0 : 1);
  hline(250, topLine, 400);
  
  vline(leftLine, 150, 50);
  // on
  drawSwitchVert(leftLine, 200, 50, isSwitchClosed ? 1 : 0);
  vline(leftLine, 250, 50);
  drawSwitchVert(leftLine, 300, 50, isSwitchClosed ? 0 : 1);
  vline(leftLine, 350, 50);
}

