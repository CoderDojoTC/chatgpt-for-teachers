# Designing Robots
Not everyone is good at designing fun but low-cost robots.  But you have nothing to fear!  ChatGPT is here!

Here is a sample prompt and response and some analysis of the response from some subject-matter experts.

# Sample Prompt

```
Design a low-cost robot to teach STEM (science, technology, engineering, and math) concepts.  Use low-cost parts so all students could program their own robots with MicroPython.
```

## Response

```
The robot design should include: 

1. An affordable chassis made from lightweight material such as plastic or cardboard.

2. A motor controller that can be programmed with micropython to control the robot’s movements.

3. Two DC motors with encoders that provide feedback on the robot’s speed and direction.

4. Sensors such as an infrared distance sensor, light sensor, and touch sensor for the robot to interact with its environment.

5. An onboard battery to power the robot.

6. A USB port to connect the robot to a laptop or other device for programming with micropython.

7. A low-cost microcontroller with enough memory to run micropython code.

8. A set of instructions and sample programs to get students started with programming their robot.
```

We agree with everything but a small detail of #3.  We find that DC motors only cost about $1.50 each.  But motors with encoders usually run around $15.  This doubles the cost of the kits and we have also found that the algorithms to control
the robots from the encoder data is too complex for most students to understand.

Other than this minor point, we agree with all the items on this list.

Examples of robots with these designs are listed below:

1. [Raspberry Pi Pico Robot](https://www.coderdojotc.org/micropython/robots/01-intro/)
2. [Medium Blog on the Raspberry Pi Pico Robot](https://dmccreary.medium.com/raspberry-pi-pico-robot-in-micropython-51f956486270)
3. [Cytron Robot](https://www.coderdojotc.org/micropython/kits/maker-pi-rp2040-robot/01-intro/)