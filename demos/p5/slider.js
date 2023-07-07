// p5.js sketch to draw a blue circle with a slider to change the radius
// Generate by ChatGPT
let radiusSlider;
let circleRadius = 100; // default value

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('canvas-container');
    radiusSlider = createSlider(0, 200, circleRadius);
    radiusSlider.position(20, 370);
}

function draw() {
    background(220);

    // Update the circle radius based on slider value
    circleRadius = radiusSlider.value();

    // Draw the circle
    fill(0, 0, 255); // blue color
    ellipse(width / 2, height / 2, circleRadius * 2, circleRadius * 2);

    // Draw the label and the current radius value
    fill(0); // black color for the text
    text("Radius: " + circleRadius, radiusSlider.x + radiusSlider.width + 10, 385);
}