# Loading data into a dataframe and doing some basic analysis of the dataset
import plotly.express as px
import pandas as pd
df = px.data.gapminder()

print("Statistics About life expectancy")

print("\n\nmin")
print(df.min('lifeExp'))

# print("\n\nmax")
# print(df.max('lifeExp'))

# print("\n\nmean")
# print(df.mean('lifeExp'))

# print("\n\nmedian")
# print(df.median('lifeExp'))