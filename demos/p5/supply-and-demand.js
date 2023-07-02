// Price variable
var price = 0;

// Function to draw the chart
function draw() {
  // Get the current value of the slider
  price = parseInt(document.getElementById('slider').value);

  // Clear previous chart
  var chart = document.getElementById('chart');
  while (chart.firstChild) {
    chart.removeChild(chart.firstChild);
  }

  // Create the axes
  var xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  xAxis.setAttribute('x1', '50');
  xAxis.setAttribute('y1', '350');
  xAxis.setAttribute('x2', '450');
  xAxis.setAttribute('y2', '350');
  xAxis.setAttribute('stroke', 'black');
  xAxis.setAttribute('stroke-width', '2');
  chart.appendChild(xAxis);

  var yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  yAxis.setAttribute('x1', '50');
  yAxis.setAttribute('y1', '50');
  yAxis.setAttribute('x2', '50');
  yAxis.setAttribute('y2', '350');
  yAxis.setAttribute('stroke', 'black');
  yAxis.setAttribute('stroke-width', '2');
  chart.appendChild(yAxis);

  // Create the demand curve
  var demandCurve = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  var demandPath = 'M50,350 L' + price + ',50 L450,350';
  demandCurve.setAttribute('d', demandPath);
  demandCurve.setAttribute('fill', 'none');
  demandCurve.setAttribute('stroke', 'blue');
  demandCurve.setAttribute('stroke-width', '2');
  chart.appendChild(demandCurve);

  // Create the supply curve
  var supplyCurve = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  var supplyPath = 'M50,50 L' + price + ',350 L450,50';
  supplyCurve.setAttribute('d', supplyPath);
  supplyCurve.setAttribute('fill', 'none');
  supplyCurve.setAttribute('stroke', 'red');
  supplyCurve.setAttribute('stroke-width', '2');
  chart.appendChild(supplyCurve);
}

// Attach the draw function to the slider's onchange event
document.getElementById('slider').onchange = draw;

// Initial chart draw
draw();
