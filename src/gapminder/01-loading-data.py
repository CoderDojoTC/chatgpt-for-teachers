# Loading data into a dataframe and doing some basic analysis of the dataset
import plotly.express as px
import pandas as pd
df = px.data.gapminder()

print("head")
print(df.head())

print("\n\ntail")
print(df.tail())

print("\n\ndescribe")
print(df.describe())

print("\n\ninfo")
print(df.info())