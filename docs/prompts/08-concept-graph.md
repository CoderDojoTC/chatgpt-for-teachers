# Concept Graph

Teachers frequently have a list of topics that they would like to cover, but they are not expert enough in the topic to know what order to teach the concepts. ChatGPT can help!  ChatGPT can return a textual representation of how concepts depend on other concepts.

A concept graph is a document that suggests the order that concepts should be taught in a course.  The format of the document is usually a dependency structure with each concept being a node on the graph that indicates what other concepts must be mastered before this concept is introduced.

## Prompt

You are an AI that helps teachers figure out what order to teach topics in the classroom.  Create an ordered dependency list for the following topics in a Python Course:

1. Introduction
2. Getting Started
3. Variables
4. Conditionals
5. Loops
6. Lists
7. Data Structures
8. Functions
9. Function Parameters
10. Random Numbers
11. Recursion

Return the results in Mermaid dependency format like this:

graph LR
    A(Intro) --> B(Getting Started)
    B --> C(Variables)
    C --> D(Loops)
    C --> E(Conditionals)
    C --> F(Lists)

## Response

To see if ChatGPT understands the idea of concept order we want to get a response that shows that you need to understand functions before you use function parameters or recursion.

here is the response:

```
    D --> G(Data Structures)
    F --> G
    G --> H(Functions)
    H --> I(Function Parameters)
    H --> J(Random Numbers)
    H --> K(Recursion)
```

Yes indeed! ChatGPT knew that concept H(Functions) needs to be taught before Function Parameters and Recursion.

Here is the entire list

```
graph LR
    A(Intro) --> B(Getting Started)
    B --> C(Variables)
    C --> D(Loops)
    C --> E(Conditionals)
    C --> F(Lists)
    D --> G(Data Structures)
    F --> G
    G --> H(Functions)
    H --> I(Function Parameters)
    H --> J(Random Numbers)
    H --> K(Recursion)
```

## Concept Graph

[Link to Mermaid Live](https://mermaid.live/edit#pako:eNpdkMFqwzAMhl_F6ORA-wI5DNZkSbuFMVLYKRc11lqz2g6KfBil7z43WQuZT9b3f7ZsXaAPhiCHI-NwUk3beZXWs9554ZCp9fpJbXRNItYf1V6QhUw2S5spLfQnssXDmcY_Xky81E0Iw5K96CJ4Y8UGj-dlVOnGjnJn5cRqXaJg6sqxl8iPBtWczkU9FVtdRd_fLr5L24nvHlx9IKMjIV4ar7pFb4JT79Ed_odvuqU-8pjOZ7ACR-zQmjSuy83qQE7kqIM8bQ3ydwedvyYPo4T9j-8hT0-nFcTBoFBpMU3ZQf6VPk_XXzpjb_o)

![Image of Concept Graph](../img/concept-graph.png)