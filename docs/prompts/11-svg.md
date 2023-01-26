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

### Plotting

```
Create a SVG drawing width=400 and height=400
Draw 10 points in the X-Y plot.
Make all the points fall within 10 random pixels of the line y = 4x + 20
Draw a blue least-squares fit line on the plot.
```

<svg width="400" height="400">
  <g>
    <rect x="0" y="0" width="400" height="400" fill="white" />
    <!-- Plot ten points -->
    <circle cx="20" cy="64" r="2" fill="black" />
    <circle cx="50" cy="92" r="2" fill="black" />
    <circle cx="120" cy="164" r="2" fill="black" />
    <circle cx="170" cy="212" r="2" fill="black" />
    <circle cx="210" cy="248" r="2" fill="black" />
    <circle cx="270" cy="316" r="2" fill="black" />
    <circle cx="320" cy="356" r="2" fill="black" />
    <circle cx="360" cy="384" r="2" fill="black" />
    <circle cx="90" cy="116" r="2" fill="black" />
    <circle cx="280" cy="308" r="2" fill="black" />
    <!-- Draw least-squares fit line -->
    <line x1="0" y1="20" x2="400" y2="380" stroke="blue" stroke-width="2" />
  </g>
</svg>