# Numpy

## Boston Housing Dataset

### Prompt

```
Create a python program using panda dataframes to get the boston housing dataset.
```

### Response

```py
import pandas as pd
from sklearn.datasets import load_boston

# Load the Boston housing dataset
boston_dataset = load_boston()

# Create a dataframe from the dataset
boston_df = pd.DataFrame(boston_dataset.data, columns=boston_dataset.feature_names)

# Add the target variable to the dataframe
boston_df['MEDV'] = boston_dataset.target

# Print the first 5 rows of the dataframe
print(boston_df.head())
```