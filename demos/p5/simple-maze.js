let maze;
let cellSize = 15;
let startButton, stopButton, stepButton, resetButton;
let intervalID;
let mouse;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('canvas-container');
  
  maze = createMaze(35, 35);
  mouse = new Mouse(0, 0);

  startButton = createButton('Start');
  startButton.position(0, height);
  startButton.mousePressed(start);

  stopButton = createButton('Stop');
  stopButton.position(startButton.x +           
                      startButton.width, height);
  stopButton.mousePressed(stop);

  stepButton = createButton('Step');
  stepButton.position(stopButton.x + stopButton.width, height);
  stepButton.mousePressed(step);

  resetButton = createButton('Reset');
  resetButton.position(stepButton.x + stepButton.width, height);
  resetButton.mousePressed(resetSim);
}

function draw() {
  background(220);
  maze.display();
  mouse.display();
}

function start() {
  // delay between visible steps in milliseconds
  intervalID = setInterval(step, 100);
}

function stop() {
  clearInterval(intervalID);
}

function step() {
  mouse.move();
}

function resetSim() {
  stop();
  mouse.reset();
}

class Maze {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.cells = [];
    for (let i = 0; i < w; i++) {
      this.cells[i] = [];
      for (let j = 0; j < h; j++) {
        this.cells[i][j] = (random() < 0.2);
      }
    }
  }

  display() {
    for (let i = 0; i < this.w; i++) {
      for (let j = 0; j < this.h; j++) {
        if (this.cells[i][j]) {
          fill(0);
        } else {
          fill(255);
        }
        rect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  }
}

class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(255, 0, 0);
    rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);
  }

  move() {
    if (!maze.cells[this.x + 1][this.y]) {
      this.x++;
    } else if (!maze.cells[this.x][this.y + 1]) {
      this.y++;
    }
  }

  reset() {
    this.x = 0;
    this.y = 0;
  }
}

function createMaze(w, h) {
  return new Maze(w, h);
}
