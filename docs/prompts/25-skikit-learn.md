# Scikit Learn

Scikit Learn is a Python library for predictive data analysis.  Given a dataset of numbers, it can build a predictive model that can be used to predict new values for similar inputs.

Scikit Learn is built on NumPy, SciPy, and matplotlib.

## Installation
We can use the ```pip``` program to install the Scikit-learn Python libraries.

```sh
pip install -U scikit-learn
```

This will typically take a few minutes to run.  At the end of the installation, you should see the text ```Successfully installed scikit-learn```.

```
Collecting scikit-learn
  Downloading scikit_learn-0.24.2-cp36-cp36m-macosx_10_13_x86_64.whl (7.2 MB)
     |████████████████████████████████| 7.2 MB 2.5 MB/s 
Requirement already satisfied: numpy>=1.13.3 in /Users/dan/opt/miniconda3/envs/mkdocs/lib/python3.6/site-packages (from scikit-learn) (1.19.5)
Requirement already satisfied: joblib>=0.11 in /Users/dan/opt/miniconda3/envs/mkdocs/lib/python3.6/site-packages (from scikit-learn) (1.0.0)
Collecting scipy>=0.19.1
  Downloading scipy-1.5.4-cp36-cp36m-macosx_10_9_x86_64.whl (28.8 MB)
     |████████████████████████████████| 28.8 MB 7.0 MB/s 
Collecting threadpoolctl>=2.0.0
  Using cached threadpoolctl-3.1.0-py3-none-any.whl (14 kB)
Installing collected packages: threadpoolctl, scipy, scikit-learn
Successfully installed scikit-learn-0.24.2 scipy-1.5.4 threadpoolctl-3.1.0
```

!!! Note
    Some users might need to use the following user install:
    ```
    pip install --user --install-option="--prefix=" -U scikit-learn
    ```

## Testing Scikit Learn

```py
import sklearn
print('The scikit-learn version is {}.'.format(sklearn.__version__))
```

```
The scikit-learn version is 0.24.2.
```

## Simple Linear Regression

Linear regression attempts to draw a straight line on a chart that will best fit some data points.  From this line, we can derive a simple model of the form ```y = mx + b``` where m is the slope and b is the intercept.

## Sample Table of Home Prices

We can use ChatGPT to generate some sample data for us.

Prompt:

```
Generate a list of 20 home sales in two columns using pipe delimited format.  Put a pipe before and at the end of each line.  Make the square footage range from 1,000 to 3,000 square feet and the home prices range from $130,000 to $300,000.
```

|Square Feet|Home Sale Price|
|--------------|------------|
| 1000          | $130,000   |
| 1200          | $146,000   |
| 1400          | $162,000   |
| 1600          | $178,000   |
| 1800          | $194,000   |
| 2000          | $210,000   |
| 2200          | $226,000   |
| 2400          | $242,000   |
| 2600          | $258,000   |
| 2800          | $274,000   |
| 3000          | $290,000   |
| 1100          | $136,000   |
| 1300          | $152,000   |
| 1500          | $168,000   |
| 1700          | $184,000   |
| 1900          | $200,000   |
| 2100          | $216,000   |
| 2300          | $232,000   |
| 2500          | $248,000   |
| 2700          | $264,000   |


Regenerated response:

```py
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Create synthetic dataset
np.random.seed(42)
sqft = np.random.randint(low=1000, high=5000, size=20)
price = sqft * 300 + np.random.randint(low=-50000, high=50000, size=20)

# Fit linear regression model
model = LinearRegression()
model.fit(sqft.reshape(-1, 1), price)

# Generate predictions
x_pred = np.linspace(start=0, stop=5000, num=100)
y_pred = model.predict(x_pred.reshape(-1, 1))

# Plot data and linear regression line
plt.scatter(sqft, price)
plt.plot(x_pred, y_pred, color='red')
plt.xlabel('Square Footage')
plt.ylabel('Sale Price')
plt.title('Linear Regression Plot of Home Prices')
plt.show()
```


## References

* [Scikit Learn Website](https://scikit-learn.org)
* [Scikit Learn Linear Regression Tutorial](https://scikit-learn.org/stable/tutorial/statistical_inference/supervised_learning.html#linear-regression)
* [Linear Regression Model](https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html#sphx-glr-auto-examples-linear-model-plot-ols-py)