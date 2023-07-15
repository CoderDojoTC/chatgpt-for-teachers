# Processing Examples

All of these [p5.js](https://p5js.org/) examples were inspired by the wonderful [Val Lockhart](https://www.linkedin.com/in/valockhart/) and [Troy Peterson](https://www.linkedin.com/in/troyapeterson/).  They were the
first to get the idea to generate p5.js code using ChatGPT.

If you are not familiar with p5.js, it is a high-quality JavaScript library for building interactive animations.  It has been around since 2014 and it is supported by a large community of educators and creative people that combine programming with art.  Because there is a strong ethos of sharing open-source p5.js scripts there is ample material for ChatGPT to be trained on.  There are currently over [21,000 p5.js sketches](https://github.com/search?q=p5.js&type=repositories) found on GitHub!

Our goal here is to teach you how to write precise ChatGPT prompts that will generate a working p5.js simulation without having to understand how to write JavaScript.

## Basic Examples

We are going to start with some basic examples that ChatGPT can easily handle.
To test these examples we ask ChatGPT to generate a single p5.js sketch file
that we can easily test and debug using the [p5 Editor](https://editor.p5js.org/).
You simply copy and paste the code into the editor overwriting the default setup and
draw functions.

!!! Warning
    When you press the ```play``` button, the sketch runs **continually**
    which can quickly drain your battery if you are using a portable device.  
    It does this even if there is no visible motion on the canvas.  p5.js
    continually runs the draw function until you press stop or the battery runs out.

My suggestion is to quickly press the ```stop``` button if you are on a battery-powered device.


## TODO


[Supply and Demand](./supply-and-demand.html)

### Virus Simulation

A classic simulation of the rate that a virus spreads in a network.<br/>
[Virus Simulation](./virus-sim.html)
TODO - use a force-directed graph to rearrange the network.

### Sierpinski Fractal Triangle

[Sierpinski Fractal Triangle](./sierpinski.html)

### Koch Fractal Curve

[Koch Fractal Curve](./koch-fractal-curve.html)

### Rabbit and Foxes

Simulate foxes eating rabbits. <br/>

[Rabbit and Foxes](./rabbit-and-foxes.html)

### Projectile Motion

[Canon Simulator](./canon.html)

### Mass on A Spring

This is a simulator of a mass on the end of a coiled spring.

The user can change:

1. The mass amount (M)
2. The spring constant (K)
3. The damping factor (D)

[Spring Simulator](./spring.html)

The simulation still needs some UX work.  The drag-down operation is not clean and the spring could
be compressed more.

### Simple Maze Runner

A simple grid layout of a maze and a mouse that can only move right or down.

[Simple Maze Runner](./simple-maze.html)

### Maze Generator

This sample program was not created by ChatGPT but it demonstrates an algorithm for generating maze diagrams.

Videos
1. [Coding Challenge #10.1: Maze Generator with p5.js - Part 1](https://youtu.be/HyK_Q5rrcr4)
2. [Coding Challenge #10.2: Maze Generator with p5.js - Part 2](https://youtu.be/D8UgRyRnvXU)
3. [Coding Challenge #10.3: Maze Generator with p5.js - Part 3](https://youtu.be/8Ju_uxJ9v44)
4. [Coding Challenge #10.4: Maze Generator with p5.js - Part 4](https://youtu.be/_p5IH0L63wo)

[Depth-first search Recursive backtracker Wikipedia Page](https://en.wikipedia.org/wiki/Maze_generation_algorithm)


[Maze Generator](./maze-gen/maze-gen.html)

## To Dos

Here is a list of small animations that I have yet to do:

1. EE - Simple circuits - battery, switch and light
2. EE - Current measurement - measure the current in an LED circuit
3. EE - H-Bridge - how to make a motor turn both forward and reverse using switches
4. EE - Pulse-Width Modulation - how to send information from a microcontroller to a motor driver indicating the speed of a motor and the direction of a motor.
5. EE - RGB LEDs - make any color by combining red, green a blue LEDs
6. EE - LED Circuit
7. EE - Distance sensor
8. Robotics - Collision avoidance
9. Robotics - Maze solving
10. Robotics - Digital compass
11. EE - Seven-segment display
12. EE - Alphanumeric display
13. EE - Character display (2 rows by 40 characters)
14. EE - LED bar display
15. EE - Addressable LED strip simulator
16. EE - Physical computing - Microcontrollers, sensors, actuators, displays
17. Robotics - Swarm robots
18. EE - Color displays from red, green and blue LEDs
19. Network science - vertices and edge counts - network complexity
20. Network science - average degree
21. Network science - in-degree and out-degree
22. Network science - directed and undirected graphs
23. Network science - acyclic graphs
24. Network science - local communities
25. Network science - traveling salesperson
26. Machine learning - self-driving car
27. Robot arms - degrees of freedom
28. Simple gears
29. AI - perceptron
30. AI - bias and weights
31. AI - activation functions
32. AI - neural network
33. AI - deep neural network
34. AI - network complexity - parameter counting
35. CS - bits, bytes and words
36. CS - data types: strings, bytes, decimals and floats
37. CS - data structures - lists, sets, arrays
38. CS - sorting
39. CS - recursion

## Tutorials

* [p5.js Learn](https://p5js.org/learn/)

* [p5.js wiki](https://github.com/processing/p5.js/wiki)

* [Tool on Codecademy.com](https://www.codecademy.com/learn/learn-p5js/modules/p5js-introduction-to-creative-coding/cheatsheet)

## Other Examples

[oscillation sandbox](https://ffd8.github.io/oscillation-sandbox/)