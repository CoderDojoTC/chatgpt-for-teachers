# Generating SVG

## Simple Drawing

### Prompt

Generate the SVG code for a red circle within a blue square.

## Result
```
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <rect width="100" height="100" style="fill:blue;" />
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <rect width="100" height="100" style="fill:blue;" />
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

### Row Of Colored Circles

```
Create an SVG drawing.
First draw a black rectangle background 400px wide.
Then draw seven circles in a horizontal row with the colors
red, orange, yellow, green, blue, indigo and violet
```

```
<svg width="400" height="100">
  <rect x="0" y="0" width="400" height="100" fill="black" />
  <circle cx="50" cy="50" r="20" fill="red" />
  <circle cx="100" cy="50" r="20" fill="orange" />
  <circle cx="150" cy="50" r="20" fill="yellow" />
  <circle cx="200" cy="50" r="20" fill="green" />
  <circle cx="250" cy="50" r="20" fill="blue" />
  <circle cx="300" cy="50" r="20" fill="indigo" />
  <circle cx="350" cy="50" r="20" fill="violet" />
</svg>
```

<svg width="400" height="100">
  <rect x="0" y="0" width="400" height="100" fill="black" />
  <circle cx="50" cy="50" r="20" fill="red" />
  <circle cx="100" cy="50" r="20" fill="orange" />
  <circle cx="150" cy="50" r="20" fill="yellow" />
  <circle cx="200" cy="50" r="20" fill="green" />
  <circle cx="250" cy="50" r="20" fill="blue" />
  <circle cx="300" cy="50" r="20" fill="indigo" />
  <circle cx="350" cy="50" r="20" fill="violet" />
</svg>

### Blink Circles

```
Write Javascript to make the colors in the SVG circles blink black and white every second.

<svg width="400" height="100">
  <rect x="0" y="0" width="400" height="100" fill="black" />
  <circle cx="50" cy="50" r="20" fill="red" />
  <circle cx="100" cy="50" r="20" fill="orange" />
  <circle cx="150" cy="50" r="20" fill="yellow" />
  <circle cx="200" cy="50" r="20" fill="green" />
  <circle cx="250" cy="50" r="20" fill="blue" />
  <circle cx="300" cy="50" r="20" fill="indigo" />
  <circle cx="350" cy="50" r="20" fill="violet" />
</svg>
```

### Response

```
let svgCircles = document.querySelectorAll("circle");

setInterval(() => {
  svgCircles.forEach(circle => {
    if (circle.getAttribute('fill') === 'white') {
      circle.setAttribute('fill', 'black');
    } else {
      circle.setAttribute('fill', 'white');
    }
  });
}, 1000);
```