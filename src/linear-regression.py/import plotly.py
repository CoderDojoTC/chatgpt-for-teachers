import plotly.graph_objects as go
import numpy as np

# create data
sq_ft = np.array([1200, 1500, 1800, 2200, 2600, 3000])
price = np.array([150000, 175000, 200000, 250000, 300000, 350000])

# calculate line of best fit
m, b = np.polyfit(sq_ft, price, 1)
line = m * sq_ft + b

# create plotly chart
fig = go.Figure()

# add data points
fig.add_trace(go.Scatter(x=sq_ft, y=price, mode='markers', marker=dict(color='blue')))

# add line of best fit
fig.add_trace(go.Scatter(x=sq_ft, y=line, mode='lines', line=dict(color='red')))

# set axis labels and title
fig.update_layout(title='Relationship Between House Price and Square Footage',
                   xaxis_title='Square Footage (sq. ft.)',
                   yaxis_title='Price of House ($)')

fig.show()