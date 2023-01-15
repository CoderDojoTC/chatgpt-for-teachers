import plotly.graph_objects as go

x = list(range(0, 13))
y = []
for i in x:
    y.append(2*i*i - 20*i + 50)
print(y)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode='lines+markers'))
fig.update_layout(title='y = 2x^2 - 20x + 50', xaxis_title='x', yaxis_title='y')
fig.show()