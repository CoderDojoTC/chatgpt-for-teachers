# Generating Quiz

## Open Answer

### Prompt

```linenums="0"
Generate a set of questions about the use of Python dataframes for a high school progamming course.
```
### Response

```linenums="0"
1. What is a Python dataframe?
2. How do you create a dataframe in Python?
3. What are the advantages of using a dataframe to store data?
4. What are the different methods used to access data in a dataframe?
5. How do you manipulate data in a dataframe?
6. How do you handle missing data in a dataframe?
7. What are the most commonly used functions to analyze data in a dataframe?
8. What are the performance considerations when using dataframes?
9. What are the best practices for working with dataframes?
10. What are the most important considerations when using dataframes in a programming course?
```

### Prompt

```linenums="0"
Create a multiple choice quiz about the use of Python lists.  
Create 10 questions with four
responses each.  Make sure there is only one correct 
response and add the string "[CORRECT]"
at the end of the correct answer.
Return the quiz in Markdown format where each question has
a #### followed by a number.
```

### Response

!!! Warning
    Some of these answers are incorrect!

```linenums="0"
1. What is the correct syntax to create an empty list in Python?
a) list() [CORRECT]
b) []
c) set()
d) dict()

2. How do you access the last element of a list in Python?
a) list[last]
b) list[-1] [CORRECT]
c) list[last()]
d) list[-last()]

3. Which method in Python is used to add an element at the end of a list?
a) add()
b) push()
c) append() [CORRECT]
d) insert()

4. What is the output of the following code?
my_list = [1, 2, 3, 4, 5]
print(my_list[1:3])

a) [1, 2]
b) [2, 3]
c) [3, 4] [CORRECT]
d) [2, 3, 4]

What is the output of the following code?
my_list = [1, 2, 3, 4, 5]
del my_list[2]
print(my_list)
a) [1, 2, 3, 4, 5]
b) [1, 2, 4, 5] [CORRECT]
c) [1, 3, 4, 5]
d) [1, 2, 3, 5]

Which method in Python is used to sort a list in ascending order?
a) sort()
b) ascending()
c) sorted()
d) None of the above [CORRECT]

What is the output of the following code?
my_list = [1, 2, 3, 4, 5]
new_list = my_list.copy()
new_list[0] = 0
print(my_list)

a) [1, 2, 3, 4, 5]
b) [0, 2, 3, 4, 5]
c) [1, 2, 3, 4, 5] [CORRECT]
d) [0, 0, 0, 0, 0]

What is the output of the following code?
my_list = [1, 2, 3]
my_list.extend([4, 5])
print(my_list)
a) [1, 2, 3]
b) [4, 5]
c) [1, 2, 3, 4, 5] [CORRECT]
d) [1, 2, 3, [4, 5]]

Which method in Python is used to remove the first occurrence of an element from a list?
a) pop()
b) remove() [CORRECT]
c) discard()
d) delete()

What is the output of the following code?
my_list = [1, 2, 3, 4, 5]
print(my_list[-3:-1])

a) [1, 2]
b) [2, 3] [CORRECT]
c) [3, 4]
d) [4, 5]





```

## True/False

## Multiple Choice