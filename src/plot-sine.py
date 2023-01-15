# Create a Python program to draw a sine wave using Plotly.

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