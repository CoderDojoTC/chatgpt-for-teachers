import plotly.express as px
import pandas as pd

# Create a dictionary containing the data
data = {'Country': ['USA', 'Canada', 'Mexico', 'Brazil', 'Chile', 'Peru', 'Argentina', 'Colombia', 'Venezuela', 'Costa Rica'],
        'Life Expectancy': [78.9, 82.2, 75.9, 75.2, 79.7, 74.9, 76.7, 73.7, 73.7, 79.2],
        'Healthcare Cost': [10348, 4826, 1845, 1845, 2845, 1845, 2845, 1845, 1845, 2845]}

# Create a DataFrame from the dictionary
df = pd.DataFrame(data)

# Create the scatter plot
fig = px.scatter(df, x='Life Expectancy', y='Healthcare Cost', text='Country')
fig.show()
