# Table Summarization

If you have some narrative text with facts in that text, you can use ChatGPT 
to create a table out of facts in the narrative text.

Note that the first line of the Markdown table format is included in the prompt.

## Sample Prompt
```
Create a markdown table summarizing the fruits from Goocrux:

There are many fruits that were found on the recently discovered planet Goocrux. 
There are neoskizzles that grow there, which are purple and taste like candy. 
There are also loheckles, which are a grayish blue fruit and are very tart, 
a little bit like a lemon. Pounits are a bright green color and are more 
savory than sweet. There are also plenty of loopnovas which are a neon pink 
flavor and taste like cotton candy. Finally, there are fruits called glowls, 
which have a very sour and bitter taste which is acidic and caustic, 
and a pale orange tinge to them.

| Fruit | Color | Flavor |
```

## Sample response

```
| Neoskizzles | Purple | Candy |
| Loheckles | Grayish Blue | Tart, like a lemon |
| Pounits | Bright Green | Savory |
| Loopnovas | Neon Pink | Cotton Candy |
| Glowls | Pale Orange | Sour and Bitter, Acidic and Caustic |
```

Here is that sample format rendered in HTML tables using the mkdocs converter:

| Fruit | Color | Flavor |
|-------|-------|--------|
| Neoskizzles | Purple | Candy |
| Loheckles | Grayish Blue | Tart, like a lemon |
| Pounits | Bright Green | Savory |
| Loopnovas | Neon Pink | Cotton Candy |
| Glowls | Pale Orange | Sour and Bitter, Acidic and Caustic |

## Tables with Data
You can also ask ChatGPT to create tables with data in them.

## Prompt

```
Create a markdown table with three columns.
In the first column, put the name of the countries in north and south america.
In the second column, put the average life expectancy.
In the third column, put the average annual cost of healthcare.
```

## Response

| Country | Average Life Expectancy | Average Annual Cost of Healthcare |
|--------|------------------------|----------------------------------|
| USA   | 78.9 years              | $10,348                         |
| Canada | 82.2 years              | $4,826                         |
| Mexico | 75.9 years              | $1,845                         |
| Brazil | 75.2 years              | $1,845                         |
| Chile  | 79.7 years              | $2,845                         |
| Peru   | 74.9 years              | $1,845                         |
| Argentina | 76.7 years            | $2,845                         |
| Colombia | 73.7 years             | $1,845                         |
| Venezuela | 73.7 years            | $1,845                         |
|Costa Rica| 79.2 years             | $2,845                         |

## Data Conversion

**Prompt:** Convert the following into a Pandas dataframe

```python
import pandas as pd

# Create a dictionary containing the data
data = {'Country': ['USA', 'Canada', 'Mexico', 'Brazil', 'Chile', 'Peru', 'Argentina', 'Colombia', 'Venezuela', 'Costa Rica'],
        'Life Expectancy': [78.9, 82.2, 75.9, 75.2, 79.7, 74.9, 76.7, 73.7, 73.7, 79.2],
        'Healthcare Cost': [10348, 4826, 1845, 1845, 2845, 1845, 2845, 1845, 1845, 2845]}

# Create a DataFrame from the dictionary
df = pd.DataFrame(data)

# Print the DataFrame
print(df)
```
