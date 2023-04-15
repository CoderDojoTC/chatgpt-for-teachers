# DataFrames

DataFrames are the standard Python data structure for holding tabular data.  Spreadsheets and CSV files are examples of tabular data. DataFrames are part of the Python pandas library.  There are hundreds of things that we can do with a DataFrame, but what are the key categories
of operations that we should learn?  Let's ask ChatGPT:

## What Are Dataframes Used For?

The first thing we want to do is to get a handle on what things people do with DataFrames.  ChatGPT can give us a list with the most common functions listed first.

### Sample Prompt

```linenums="0"
What are the most common operations on a Python Pandas DataFrame?  Return the list in markdown with the name of the operations in bold:
```

### Result

1. **Selection**: Selecting rows, columns, or both rows and columns from a Dataframe.
2. **Filtering**: Creating a new DataFrame with rows that meet certain criteria.
3. **Sorting**: Sorting the rows of a DataFrame by one or more columns.
4. **Grouping**: Grouping rows of a DataFrame by one or more columns.
5. **Aggregation**: Computing summary statistics for each group.
6. **Joining**: Joining two DataFrames together.
7. **Reshaping**: Reshaping a DataFrame by pivoting, stacking, or melting.
8. **Cleaning**: Cleaning up messy data.
9. **Visualization**: Creating charts and graphs from a DataFrame.

For the rest of this lab, we will get a simple dataset and go through the first three areas.

In this lab, we will use a list of countries and their life expectancy data from the Plotly Express Library.  We will use the famous [Gapminder](https://www.gapminder.org/) data file that is used in many DataFrame tutorials.  Gapminder is an independent educational non-proﬁt ﬁghting global misconceptions.

## Viewing Sample Data

### How do I view sample data from Gapminder as a Pandas DataFrame?

In this lesson, we will explore how ChatGPT can help us quickly learn about an important Python library.

DataFrames are the standard Python data structure for holding tabular data.
Just like Microsoft Excel(TM) is used to manage tables of data, dataframes are one of the most commonly used data structures in Python.  So it is important for data scientists to be familiar with dataframe operations.

Note that in our case, we are only concerned with dataframes that are part of the very popular Python pandas library.
We should specify "Python Pandas DataFrame" when we ask ChatGPAT questions since there might be other
libraries that use the term "DataFrame".

Most data science classes begin with learning pandas first and then proceed to libraries like numpy that focus on
multi-dimentional arrays.

There are many functions that you can use with dataframes.  To start out, let's look at the most commonly used functions.

## Finding Popular Dataframe Functions

### Prompt

```linenums="0"
What are the most common functions used in Python pandas dataframes? Return a markdown table with two columns:

1. The name of the function with a header "Function Name"
2. A short description of what the function does with the header "Function Description"
```

### Response:

| Function Name | Function Description |
| ------------- | -------------------- |
| head()        | Returns the first n rows of a DataFrame |
| tail()        | Returns the last n rows of a DataFrame |
| describe()    | Generates descriptive statistics of the DataFrame |
| info()        | Returns information about the DataFrame |
| mean()        | Computes the mean of the DataFrame |
| sum()         | Computes the sum of the DataFrame |
| max()         | Computes the maximum value of the DataFrame |
| min()         | Computes the minimum value of the DataFrame |
| count()       | Counts the number of non-null values in the DataFrame |
| median()      | Computes the median of the DataFrame |
| std()         | Computes the standard deviation of the DataFrame |
| corr()        | Computes the correlation between columns in the DataFrame |

You can see from this table that the first four most common functions are used just to
understand what is in the table.  The remaining functions in the table are common statistical
functions that are used on a single column of numbers.  The exception is ```corr()``` that works
on two columns.

In this lab, we will use a list of countries and their life expectancy data from the Plotly Express library.

## Viewing Sample Data

We just need a short prompt to understand how to get the gapminder data into a data frame.

### Prompt

```linenums="0"
How do I view sample data from gapminder as a Python Pandas DataFrame?
```

### Response

```py
import plotly.express as px
df = px.data.gapminder()
print(df.head())
```

We can execute this in our IDE and we will get the following result:

```linenums="0"
       country continent  year  lifeExp       pop   gdpPercap iso_alpha  iso_num
0  Afghanistan      Asia  1952   28.801   8425333  779.445314       AFG        4
1  Afghanistan      Asia  1957   30.332   9240934  820.853030       AFG        4
2  Afghanistan      Asia  1962   31.997  10267083  853.100710       AFG        4
3  Afghanistan      Asia  1967   34.020  11537966  836.197138       AFG        4
4  Afghanistan      Asia  1972   36.088  13079460  739.981106       AFG        4
```

## Reading a CSV File

Using the plotly.express library is nice because loading gapminder is just a single line that will always
work in the future.  If we need to load a specific CSV file we can just use pandas and get the result
into a dataframe.

Because the Gapminer dataset is popular in many classes, the Plotly express library makes
it a built-in function that allows us to load it with a single consistent command.  Because
of this the tutorials will not break when external CSV files are moved around.  However, we can also read the same information from any CSV file stored on raw GitHub User Content area.

```py
import pandas as pd

# Read the Gapminder data into a dataframe
# df = pd.read_csv('http://bit.ly/gapminder-data')
df = pd.read_csv('https://raw.githubusercontent.com/carpentries-incubator/open-science-with-r/gh-pages/data/gapminder.csv')
# Print the head of the dataframe 
print(df.head())
```

As long as this CSV files is not moved around, this code will also work.

This returns the same results:

```linenums="0"
       country continent  year  lifeExp       pop   gdpPercap iso_alpha  iso_num
0  Afghanistan      Asia  1952   28.801   8425333  779.445314       AFG        4
1  Afghanistan      Asia  1957   30.332   9240934  820.853030       AFG        4
2  Afghanistan      Asia  1962   31.997  10267083  853.100710       AFG        4
3  Afghanistan      Asia  1967   34.020  11537966  836.197138       AFG        4
4  Afghanistan      Asia  1972   36.088  13079460  739.981106       AFG        4
```

## Enumerating Column Values

We can see from the head() output that one of the names of the continents is "Asia".  But how can we get a distinct list of all the continents?

### Prompt

```linenums="0"
How do I list all the distinct values in a column of a Pandas DataFrame?
```

!!! Challenge
       1. Use the tail(), describe() and info() functions on the gapminder dataframe
       2. Use the sum(), min(), max(), mean(), median() and std() on the data column: year, lifeExp, pop and gdpPercap.
       3. Use the corr() function on the leftExp and gdpPercap columns

### Prompt

```linenums="0"
How do I list all the distinct values in a column of a Pandas dataframe?
```

### Response

The responses have lots of text, but here is the key new line:

```py
types = df["column_name"].unique()
```

So our new code looks like this:

```py
import plotly.express as px
df = px.data.gapminder()
list_of_continents = df["continent"].unique()
print(list_of_continents)
```

And the result is the following list:

```py
['Asia' 'Europe' 'Africa' 'Americas' 'Oceania']
```

## Filtering 

Sometimes you don't need all the data in a large file.  We only want a subset of the entire data.  You can use one of the distinct values in the prior query to filter out only the values you want.  Let's ask ChatGPT how to only return rows that have the continent of 'Americas'.

**Prompt:** How do I filter out only the countries in the Americas from the Gapminder data?

**Response:** Use the .query("column_name == 'value'") function on the data.

```py
import plotly.express as px
# df = px.data.gapminder()
df = px.data.gapminder().query("continent == 'Americas'")
print(df.head())
```

### Response

```linenums="0"
48  Argentina  Americas  1952   62.485  17876956  5911.315053       ARG       32
49  Argentina  Americas  1957   64.399  19610538  6856.856212       ARG       32
50  Argentina  Americas  1962   65.142  21283783  7133.166023       ARG       32
51  Argentina  Americas  1967   65.634  22934225  8052.953021       ARG       32
52  Argentina  Americas  1972   67.065  24779799  9443.038526       ARG       32
```
Note that now only data from the Americas is returned.

## Sorting

### Prompt

```linenums="0"
How do I sort the values of a DataFrame?
```

### Response

To sort the values of a dataframe, you can use the sort_values() method.
This method takes in the column name you would like to sort the values
by as an argument. For example, to sort the values of a dataframe by
the 'Name' column, you could use the following code: 

```py
df.sort_values(by='Name')
```

```py
import plotly.express as px
df = px.data.gapminder()
df = px.data.gapminder().query("continent == 'Americas'")
print(df.sort_values(by='lifeExp'))

The result is the rows that had the shortest life expectancy in the Americas.
```

```linenums="0"
          country continent  year  lifeExp       pop     gdpPercap iso_alpha  iso_num
636         Haiti  Americas  1952   37.579   3201488   1840.366939       HTI      332
132       Bolivia  Americas  1952   40.414   2883315   2677.326347       BOL       68
637         Haiti  Americas  1957   40.696   3507701   1726.887882       HTI      332
133       Bolivia  Americas  1957   41.890   3211738   2127.686326       BOL       68
648      Honduras  Americas  1952   41.912   1517453   2194.926204       HND      340
```
