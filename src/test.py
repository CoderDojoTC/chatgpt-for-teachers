import pandas as pd

# Read the Gapminder data into a dataframe
# df = pd.read_csv('http://bit.ly/gapminder-data')
df = pd.read_csv('https://raw.githubusercontent.com/carpentries-incubator/open-science-with-r/gh-pages/data/gapminder.csv')
# Print the head of the dataframe 
print(df.head())
