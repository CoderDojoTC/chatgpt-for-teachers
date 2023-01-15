# Bar Chart
# Create a Python plotly program to draw a vertical bar chart showing the area of all the contanents



import plotly.graph_objects as go

# Data
labels = ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America']
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