import plotly.express as px
df = px.data.gapminder()
df = px.data.gapminder().query("continent == 'Americas'")
print(df.sort_values(by='lifeExp'))