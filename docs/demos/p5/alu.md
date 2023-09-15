# Simulation of an Arithmetic Logic Unit (ALU)

Prompt:

```linenums="0"
Create a single file ps.js sketch on a 400x400 canvas.
The sketch is a simulation of an Arithmetic Logic Unit (ALU).
Place a title "Arithmetic Logic Unit" on the top center of the canvas of text size 16.
The inputs are two registers: A and B.
Place the labels for the registers to the left of text inputs.
Place the input registers so the align vertically.
Place buttons for the operations below the registers.
The operation are: ADD, SUBTRACT, AND, OR, XOR.
Display the value of the output below the operations.
Label the output value "Output" in blue text.
Create an input toggle button to display all values in either binary or decimal.
Make the default value be decimal.
```

[Demo](alu.html)

```js
let inputA;
let inputB;
let outputP;
let binDecToggle;
let isBinary = false;

function setup() {
  createCanvas(400, 400);
  background(220);
  textAlign(CENTER, CENTER);

  // Title
  textSize(16);
  text("Arithmetic Logic Unit", width/2, 20);

  // Register A
  text("Register A:", 60, 60);
  inputA = createInput('201');
  inputA.position(110, 50);

  // Register B
  text("Register B:", 60, 100);
  inputB = createInput('100');
  inputB.position(110, 90);

  // Operations
  let addBtn = createButton('ADD');
  addBtn.position(20, 140);
  addBtn.mousePressed(() => performOperation("ADD"));

  let subBtn = createButton('SUBTRACT');
  subBtn.position(70, 140);
  subBtn.mousePressed(() => performOperation("SUBTRACT"));

  let andBtn = createButton('AND');
  andBtn.position(165, 140);
  andBtn.mousePressed(() => performOperation("AND"));

  let orBtn = createButton('OR');
  orBtn.position(220, 140);
  orBtn.mousePressed(() => performOperation("OR"));

  let xorBtn = createButton('XOR');
  xorBtn.position(265, 140);
  xorBtn.mousePressed(() => performOperation("XOR"));

  // Output label
  fill('blue');
  text("Output:", 60, 200);

  // Output display
  outputP = createP("0");
  outputP.position(110, 175);

  // Binary/Decimal toggle button
  binDecToggle = createButton('Toggle Binary/Decimal');
  binDecToggle.position(100, 220);
  binDecToggle.mousePressed(toggleBinDec);
}

function draw() {
  // nothing
}

function performOperation(operation) {
  let a = int(inputA.value());
  let b = int(inputB.value());

  let result;

  switch (operation) {
    case "ADD":
      result = a + b;
      break;
    case "SUBTRACT":
      result = a - b;
      break;
    case "AND":
      result = a & b;
      break;
    case "OR":
      result = a | b;
      break;
    case "XOR":
      result = a ^ b;
      break;
  }

// Convert decimal number to binary
function dec_bin(decNum) {
  if (decNum === 0) return "0";

  let binary = "";
  while (decNum > 0) {
    binary = (decNum % 2) + binary;
    decNum = Math.floor(decNum / 2);
  }
  return binary;
}

  if (isBinary) {
    outputP.html(dec_bin(result));
  } else {
    outputP.html(result.toString());
  }
}

function toggleBinDec() {
  isBinary = !isBinary;

  performOperation("ADD"); // Refresh the value on toggle
}
```