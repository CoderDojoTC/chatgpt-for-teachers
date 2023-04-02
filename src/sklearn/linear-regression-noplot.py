import numpy as np
from sklearn.linear_model import LinearRegression

# Create synthetic dataset
np.random.seed(42)
sqft = np.random.randint(low=1000, high=5000, size=20)
price = sqft * 300 + np.random.randint(low=-50000, high=50000, size=20)

print(sqft, price)

# Fit linear regression model
model = LinearRegression()
model.fit(sqft.reshape(-1, 1), price)

# Generate predictions
x_pred = np.linspace(start=0, stop=5000, num=100)
y_pred = model.predict(x_pred.reshape(-1, 1))

# print(x_pred, y_pred)