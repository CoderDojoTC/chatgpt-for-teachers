# Linear Regression

Linear regression is a way to find a line that goes through some points on a graph.

## Examples of Linear Regression

For example, let's say you wanted to see if there is a relationship between the amount of time you spend studying and the grade you get on a test. You could collect data on how long you study and what grade you get on each test, then plot that data on a graph. Linear regression would help you find a line that best fits the points on the graph, which would help you see if there's a pattern or trend in the data.

In everyday life, linear regression is used to make predictions about things. For example, if you're a farmer and you want to know how much corn you're likely to harvest based on how much fertilizer you use, you could use linear regression to find a line that best fits the data you collect on how much fertilizer you use and how much corn you harvest. Then, you could use that line to predict how much corn you're likely to harvest if you use a certain amount of fertilizer.

Another example could be if a company wants to predict how much money it will make in the future based on its current revenue, it could use linear regression to find a line that best fits its revenue data. Then, they could use that line to predict how much money they will make in the future based on their projected revenue.

ere's a sample dataset for linear regression that shows the price of houses based on their square footage:

|Square Footage|Price of House (in $)|
|--------------|---------------------|
|1,200	150,000|
|1,500	175,000|
|1,800	200,000|
|2,200	250,000|
|2,600	300,000|
|3,000	350,000|
To create a formula that predicts the price of a house based on its square footage, we can again use linear regression.

First, we need to plot the data points on a graph with the square footage on the x-axis and the price of the house on the y-axis. We can see from the data that there appears to be a positive correlation between the square footage and the price of the house.

Next, we can use a linear regression calculator or software to find the equation of the line of best fit for the data points. This line will have the form of y = mx + b, where y is the price of the house, x is the square footage, m is the slope of the line, and b is the y-intercept.

Using the sample dataset, the equation of the line of best fit would be: y = 83.33x - 10,000

This means that for every additional square footage of the house, the price of the house increases by $83.33, and the initial price of the house (when x=0) is -$10,000, which is not realistic, so we can ignore the y-intercept in this case.

So if you wanted to predict the price of a new house with a square footage of 2500 sq. ft., you could use the formula:

y = 83.33(2500) - 10,000

y = 208,325

This predicts that the price of the house with a square footage of 2500 sq. ft. would be $208,325. However, it's important to note that this is just a prediction based on the data we have, and there may be other factors that affect the price of a house beyond its square footage, such as location, age, number of bedrooms/bathrooms, and more.

```py
import plotly.graph_objects as go
import numpy as np

# create data
sq_ft = np.array([1200, 1500, 1800, 2200, 2600, 3000])
price = np.array([150000, 175000, 200000, 250000, 300000, 350000])

# calculate line of best fit
m, b = np.polyfit(sq_ft, price, 1)
line = m * sq_ft + b

# create plotly chart
fig = go.Figure()

# add data points
fig.add_trace(go.Scatter(x=sq_ft, y=price, mode='markers', marker=dict(color='blue')))

# add line of best fit
fig.add_trace(go.Scatter(x=sq_ft, y=line, mode='lines', line=dict(color='red')))

# set axis labels and title
fig.update_layout(title='Relationship Between House Price and Square Footage',
                   xaxis_title='Square Footage (sq. ft.)',
                   yaxis_title='Price of House ($)')

fig.show()
```

![](../img/linear-regression.png)



