# Generating Lessons

Lessons are individual units of learning within a course.  In order to generate detailed lesson plans we need to give ChatGPT some context about:

1. The audience (grade level)
2. The subject or topic
3. The background
4. The output format (markdown)

## Sample Prompt

```
Create a detailed lesson plan for teaching loops in Python for a junior high-school student about 12 years old.  Assume the student has already had a basic introduction to Python and has had lessons on:

1. Syntax
2. Conditionals

Generate sample Python code within markdown that will include an input list of colors (red, green blue etc.) and show how to loop through the list of colors to print them each out.
```

## Sample Response

Below is the sample response.  Because the response includes markdown and sample code, we don't make it a simple text object.

# Lesson Plan: Loops in Python

## Objectives

- Understand the concept of loops in Python
- Learn how to use loops to iterate through a list of items
- Create a program that uses a loop to print out a list of colors

## Materials

- Computer with Python installed
- Sample code

## Introduction

Welcome to our lesson on loops in Python! In this lesson, we will learn how to use loops to iterate through a list of items. We will also create a program that uses a loop to print out a list of colors.

## What is a Loop?

A loop is a programming construct that allows us to repeat a set of instructions multiple times. This is useful when we want to perform the same task on multiple items. For example, if we have a list of colors, we can use a loop to print out each color in the list.

## Types of Loops

There are two types of loops in Python: `for` loops and `while` loops. 

A `for` loop is used when we know how many times we want to repeat the instructions. For example, if we have a list of 10 colors, we can use a `for` loop to print out each color in the list.

A `while` loop is used when we don't know how many times we want to repeat the instructions. For example, if we want to keep asking the user for input until they enter a certain value, we can use a `while` loop.

## Sample Code

Let's look at some sample code that uses a `for` loop to print out a list of colors.

```python
# Create a list of colors
colors = ["red", "green", "blue"]

# Loop through the list of colors
for color in colors:
    # Print out each color
    print(color)
```

The output of this code will be:

```
red
green
blue
```

## Practice

Now it's time to practice writing a program that uses a loop to print out a list of colors.

Create a list of colors and use a `for` loop to print out each color in the list.

```python
# Create a list of colors
colors = ["red", "green", "blue", "yellow", "orange", "purple"]

# Loop through the list of colors
for color in colors:
    # Print out each color
    print(color)
```

The output of this code will be:

```
red
green
blue
yellow
orange
purple
```

## Conclusion

Congratulations! You have now learned how to use loops to iterate through a list of items. You have also created a program that uses a loop to print out a list of colors.
   