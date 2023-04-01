import pandas as pd
from sklearn import datasets
from sklearn.datasets import load_boston

boston_dataset = load_boston()

# Convert the dataset to a dataframe
boston_df = pd.DataFrame(boston_dataset.data, columns=boston_dataset.feature_names)

# Add the target column
boston_df['MEDV'] = boston_dataset.target

print(boston_df.head(50))
