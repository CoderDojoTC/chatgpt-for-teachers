# Charts

You can give GPT a set of points and have it generate the Python code to plot the points.

## Vertical Bar Chart

### Vertical Bar Chart Prompt

```linenums="0"
Create a Python plotly program to draw a vertical bar chart 
showing the area of all the continents.
```

### Vertical Bar Chart Response

```python
import plotly.graph_objects as go
import numpy as np

# Data
labels = ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 
    'North America', 'South America']
values = [30.37, 14.2, 44.6, 8.5, 10.2, 24.2, 17.8]

# Create figure
fig = go.Figure(data=[go.Bar(
    x=labels,
    y=values,
    text=values,
    textposition='auto',
    marker_color='#FFA500'
)])

# Change the bar mode
fig.update_layout(barmode='stack')

# Add title
fig.update_layout(title_text='Area of Continents')

# Show figure
fig.show()
```

![](../img/bar-chart.png)

Note the area is millions of square kilometers.

!!! Challenge
    1. Add a sentence to your prompt indicating that the 
    data is in millions of square kilometers.

## Drawing a Sine Wave

### Drawing a Sine Wave Prompt

```linenums="0"
Create a Python program to draw a sine wave using Plotly.
```

### Drawing a Sine Wave Response

```python
import plotly.graph_objects as go
import numpy as np

# Generate data
x = np.linspace(0, 10, 1000)
y = np.sin(x)

# Create figure
fig = go.Figure()

# Add trace
fig.add_trace(go.Scatter(x=x, y=y, mode='lines', name='sin(x)'))

# Set title
fig.update_layout(title_text='Sine Wave')

# Show figure
fig.show()
```

![](../img/sine-wave.png)

!!! Challenge
    1. Modify the prompt to create a cosine
    2. Modify the prompt to create a sine wave with double the frequency
    2. Can you plot both a sine and cosine together?
    3. Can you plot the summation of sine functions with a different frequency?

## Plot a Polynomial

### Plot a Polynomial Prompt

We can also use ChatGPT to create plots of complex non-linear functions.  To do this we need to use
a notation for exponents that uses the up arrow character "^".

```linenums="0"
Create a Python program to draw a plot of the function y =2x^2 - 20x + 50 from x=0 to 13 using plotly
```

### Response

```py
import plotly.graph_objects as go

x = list(range(0, 13))
y = []
for i in x:
    y.append(2*i*i - 20*i + 50)
print(y)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode='lines+markers'))
fig.update_layout(title='y = 2x^2 - 20x + 50', xaxis_title='x', yaxis_title='y')
fig.show()
```

![](../img/polynomual.png)

!!! Challenge
    1. Change the function that you want to plot to another Polynomial.
    2. Add multiple polynomial functions.

## Least Squares Plot

One of the key charts we want to create is a scatter 
plot that shows a correlation between two variables.
We will explore this in a future lesson.

