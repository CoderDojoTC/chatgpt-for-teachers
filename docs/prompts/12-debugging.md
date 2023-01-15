# Debugging

You can give GPT a sample program and ask it to find the bugs or change the output.

## Prompt

```
Find the bug and fix it in this program:

# Create a Python program to draw a plot of the function y = 3 * x * x + 4 * x - 5

import matplotlib.pyplot as plt

x = range(-10, 11)
y = (21,)
for i in x:
    y = [3*i*i + 4*i - 5]

plt.plot(x, y)
plt.title('y = 3x^2 + 4x - 5')
plt.xlabel('x')
plt.ylabel('y')
plt.show()
```

# Response

```py
import matplotlib.pyplot as plt

x = range(-10, 11)
y = []
for i in x:
    y.append(3*i*i + 4*i - 5)

plt.plot(x, y)
plt.title('y = 3x^2 + 4x - 5')
plt.xlabel('x')
plt.ylabel('y')
plt.show()
```