# Explaining Code.

We can also give ChatGPT a block of code and have it create an explanation of that code for a given grade level.

## Prompt
```
Explain this Python program to a 12-year old student:

Explain the following Python program to a 12-year old student:

import turtle

colorList = ['red', 'orange', 'green', 'blue', 'indigo', 'violet', 'brown']

def draw_branch(turtle, color, size, level):
  if level > 1:
    turtle.pendown()
    turtle.color(color)
    turtle.forward(size)
    turtle.right(20)
    # draw three branches at half length with a branch on the tip of each branch 
    for i in range(0, 3):
       turtle.forward(size/2)
       draw_branch(turtle, colorList[i], size/2, level - 1)
       turtle.backward(size/2)
       turtle.left(20)
    turtle.right(40)
    turtle.backward(size)

myTurtle = turtle.Turtle()
myTurtle.shape("turtle")
myTurtle.speed(50)

length = 150
numberPetals = 6
myTurtle.penup()
# move to the bottom center
myTurtle.goto(0, -200)
myTurtle.left(90)

draw_branch(myTurtle, colorList[0], length, 4)
```

## Response

This Python program uses the turtle library to draw a branching pattern with different colors. The draw_branch function takes four parameters: a turtle object, a color, a size, and a level. The turtle object is used to draw the pattern, the color is the color of the branch, the size is the length of the branch, and the level is how many levels of branches there are. The function will draw a branch and then draw three branches at half length with a branch at the tip of each branch. The turtle will then move back to the start and turn to the next branch. Finally, the turtle will move to the bottom center of the page and draw the branching pattern with four levels using the color red.