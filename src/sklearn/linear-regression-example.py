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