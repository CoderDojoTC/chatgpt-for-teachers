# Prompt: Create a python program using the plotly library 
# that will draw a vertical bar chart that shows the area of all the continents.
import plotly.graph_objects as go

# The names of continents
continents = ['Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia']

# The area of continents in million square kilometers
# These values are approximate
areas = [44.58, 30.37, 24.71, 17.84, 14.0, 10.18, 7.68]

# Create a bar chart
fig = go.Figure(data=[
    go.Bar(name='Area', x=continents, y=areas)
])

# Customize the layout
fig.update_layout(
    title="Area of Continents",
    xaxis_title="Continents",
    yaxis_title="Area (million sq km)",
    legend_title="Legend",
    font=dict(
        size=14,
    ),
    autosize=False,
    width=800,
    height=500,
)

# Display the figure
fig.show()
