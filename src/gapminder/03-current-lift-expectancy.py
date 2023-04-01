# Write a Python program that gets average population for 2020 from the gapminder using pandas dataframe.
  
import plotly.express as px
import pandas as pd
df = px.data.gapminder()

lifeExp_2007 = df['lifeExp'][df['year'] == 2007].mean()
print("Average life expectancy in 2007 was:", round(lifeExp_2007,2))

