# Wire Animate

### Wire Animation

![](./../../img/animate-circuit.gif)

When animating circuits, we need an animation of electrons moving down a wire.  In
this lesson, we use ChatGPT to generate a function to help us
draw a wire that has an animation of small circles (think electrons) going through the wire
when the wire is carrying a current.

Requesting ChatGPT to generate an explicit function is a great way to break larger
problems into smaller tasks that ChatGPT can be successful at.

[Run the Wire Animation Demo](./wire-animate.html)

## Sample drawAnimatedWire() Function

```javascript
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
```