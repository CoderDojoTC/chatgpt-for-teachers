# Classification

ChatGPT can be given a list of classifications and then a text item.  You can then ask ChatGPT to indicate what classification to give the item.

For example, you could have a student feedback form where students fill in a large block of narrative text.  You can then create a three-state classification system:

1. Positive
2. Neutral
3. Negative

You can then write a program to automatically chart your class sentiment over time.

## Engine Settings

### Consistency
We want consistent results over time.  So we don't want any creativity.
Make sure to set Temperature = 0

## Difficulty Classification

In our CoderDojo classrooms, we have a set of "Concept Cards" that are marked as Green, Blue or Black for successive levels of difficulty.  We encourage new students to first do the easy green exercises.  For each programming exercise, you can classify the lab as beginner, intermediate or advanced.

### Prompt

```
Here is a description of a programming task.  Classify this task as beginner, intermediate, or adanced.

In this lab you will write python code to monitor the voltage on a potentiometer using an ADC pin.  The output will be printed to the screen.
```

### Response

```
Intermediate
```

### Prompt
```
In this lab you will use Python to create a list of colors and then print them out.
```

### Response
```
Beginner
```

## Feedback Classification

Decide whether a Tweet's sentiment is positive, neutral, or negative.

[Default Classification](https://beta.openai.com/examples/default-classification) - works on a single tweet
[Tweet Feedback Classification](https://beta.openai.com/examples/default-tweet-classifier/)
[Advanced Tweet Classification](https://beta.openai.com/examples/default-adv-tweet-classifier) - works on a large number of tweets in a single file

## Taxonomy Classification

You can give ChatGPT a named taxonomy such as Dewey Decimal system.

### Prompt
What dewey decimal number and classification label would you assign this text:

### Response
The history of computers goes back over 200 years. At first theorized by mathematicians and entrepreneurs, during the 19th century mechanical calculating machines were designed and built to solve the increasingly complex number-crunching challenges. The advancement of technology enabled ever more-complex computers by the early 20th century, and computers became larger and more powerful.

 004.093/Technology: History of Computers

 You can use this
