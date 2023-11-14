# Electrical Switch

## Background
Creating a simulation of a basic electrical circuit with an on/off switch, a battery, and a light bulb is a great way to teach students about electricity and circuits. We'll use p5.js to create this interactive simulation. In this simulation, students can toggle the switch to turn the light bulb on and off, visually seeing how closing and opening a circuit works.

Here's a basic outline of the p5.js code for this simulation:

Setup: Define the canvas and initial state of the switch (on or off).
Draw: Render the battery, switch, and light bulb. The light bulb's brightness changes based on the switch's state.
Mouse Interaction: Allow the switch to be toggled on and off with a mouse click.

## Classroom Use

**Basic Understanding:** Let students play with the switch to see how the circuit works.
**Question and Answer:** Ask questions like "What happens when the switch is open?" or "How does the battery affect the light bulb?"
E**xtended Learning:** Introduce concepts like voltage and resistance, and modify the simulation to include these elements.
Extensions to the Simulation:

**Variable Battery Voltage:** Add a slider to change the battery voltage and see its effect on the bulb's brightness.
**Multiple Bulbs:** Extend the circuit to include more bulbs in series or parallel.
**Faulty Bulb Simulation:** Introduce a 'faulty bulb' and let students figure out why the bulb isn’t lighting.
This code can be copied directly into the p5.js editor. Students can then modify it, for instance, by adding more components to the circuit or changing how the switch works. This hands-on experience enhances their understanding of basic electrical circuits.

## Prompt

```linenums="0"
Create a single file p5.js sketch on a 300x200 canvas.
Subject: simple electrical circiuts.
Create a simulation of an electrical circuit with a batter, an on/off switch, a light bulb and the connecting wires.
Make the default text size be 16.
Make the background be a very light gray (240)
Place the battery standing vertically on the left with the positive side up and the negative side down.
The top row of connection points are at y=50.
The bottom row of connection points are at y=150.
Make the wires toogle from black (circuit off) to red (circuit on).
Make the wire width 3.
Make the switch be a rectangle that is horizontal and 50px wide when on.
Make the swtich rectangle rotate up 45 degrees when the switch is off.
Complete the circuit with the light going to the negative battery terminal in a column at x=250.
Allow the user to click anywhere on the canvas to toggle the switch.
Add the title "Click Anywhere to Toggle The Switch" to the top of the canvas.
```

## Sample Response

```js
let switchOn = false; // Initial state of the switch

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  textSize(16)
  
  // display instructions
  fill(0);
  text('Click anywhere to toggle the switch', 10, 20)

  // Draw the battery
  drawBattery();

  // Draw the switch
  drawSwitch();

  // Draw the light bulb
  drawLightBulb();

  // Draw wires
  drawWires();
  strokeWeight(0);
  

}

function drawBattery() {
  stroke('black');
  fill('grey');
  rect(20, 100, 60, 20); // battery body
  rect(80, 105, 10, 10); // positive terminal
}

function drawSwitch() {
  fill('black');
  if (switchOn) {
    rect(110, 100, 50, 10); // switch is closed
  } else {
    push();
      translate(110,100);
      rotate(-.60)
      rect(0, 0, 50, 10); // switch is open
    pop();
  }
}

function drawLightBulb() {
  stroke('black');
  strokeWeight(1);
  if (switchOn) {
    fill('yellow');
  } else {
    fill('white');
  }
  circle(200, 110, 50); // light bulb
}

function drawWires() {
  // Change wire color based on switch state
  if (switchOn) {
    stroke('red');
  } else {
    stroke('black');
  }
  strokeWeight(3);

  // Horizontal wire from battery to switch
  line(90, 110, 110, 110);
  
  // Horizontal line from switch to battery
  line(159, 110, 175, 110);

  // Horizontal wire from the bulb to the battery
  line(200, 170, 20, 170);
  
  // Verticle wires from the bulb to the battery
  // Left Wire
  line(20, 110, 20, 170);
  // Right vertical wire
  line(200, 135, 200, 170);


}

function mousePressed() {
    switchOn = !switchOn; // Toggle the switch
}
```