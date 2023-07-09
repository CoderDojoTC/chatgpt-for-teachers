let state = false;
let button;
let speedSlider;
let lineWidth = 10

function setup() {
    createCanvas(400, 400);
    frameRate(30);

    // Create the on/off button
    button = createButton('ON/OFF');
    button.position(300, 370);
    button.mousePressed(toggleState);

    // Create the speed slider
    speedSlider = createSlider(0.03, 1.5, 1, 0.1);
    speedSlider.position(90, 370);
    speedSlider.style('width', '200px')
}

function draw() {
    background(220);

    let currentSeed = speedSlider.value();

    // Draw the four wires in a square
    drawAnimatedWire(50, 50, 50, 350, currentSeed, state);
    drawAnimatedWire(50, 350, 350, 350, currentSeed, state);
    drawAnimatedWire(350, 350, 350, 50, currentSeed, state);
    drawAnimatedWire(350, 50, 50, 50, currentSeed, state);
    fill('black')
    noStroke()
    text('Speed:' + currentSeed, 10, 380)
}

// Function for drawing an animated wire
function drawAnimatedWire(x1, y1, x2, y2, speed1, state) {
    if (state) {
        let distance = dist(x1, y1, x2, y2);
        let circlePos = map((millis() * speed1) % distance, 0, distance, 0, 1);

        // lerp generates the percent between two values
        let x = lerp(x1, x2, circlePos);
        let y = lerp(y1, y2, circlePos);

        stroke(0);
        strokeWeight(lineWidth)
        line(x1, y1, x2, y2); // Draw the wire

        fill(255, 0, 0);
        noStroke();
        circle(x, y, 10); // Draw the moving circle (electron)
    } else {
        stroke(0);
        strokeWeight(lineWidth)
        line(x1, y1, x2, y2); // Draw the wire
    }
}

// Function to toggle state
function toggleState() {
    state = !state;
}