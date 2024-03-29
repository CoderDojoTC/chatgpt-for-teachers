# Minimizing Part Costs

We can use generative AI to help suggest what parts to purchase for science kits.  One kit that is both really fun and has a high ability to teach computational thinking is a collision avoidance robot.  Here is how we used ChatGPT to guide our purchasing.

## Sample Prompt

```linenums="0"
Generate a list of low-cost parts that can be used
to build a STEM Robot.  Include two DC hobby motors,
and a Raspberry Pi Pico.  Return the results in
a table that has three columns:

1. Part Name
2. Part Description
3. Part Cost

Then suggestion some lesson plans that teach computational thinking.

Return the entire result in pure raw markdown.  Double check to make
sure you only return pure raw markdown.
```

## Response

ChatGPT did return a table, but it put it in a pretty table within the ChatGPT GUI.  So I had to ask it to "regenerate the prior response again only pure raw markdown" before I could copy and paste the results into this page.


### Low-Cost Parts for a STEM Robot

| Part Name | Part Description | Part Cost |
|-------------------------|-------------------------------------------------------------------------------|----------------|
| Raspberry Pi Pico       | A microcontroller board with RP2040 chip, widely used in hobby projects      | $4             |
| DC Hobby Motor (x2)     | Small motors suitable for driving robot wheels or other moving parts          | $3 each ($6 total) |
| L298N Motor Driver      | Allows control of DC motors using the Raspberry Pi Pico                       | $5             |
| 2-Wheel Robot Chassis   | A basic frame with holders for motors and wheels                              | $7             |
| Small Breadboard        | For prototyping and connecting components without soldering                   | $2             |
| Jumper Wires (M/F & M/M)| Wires to connect components on breadboard and Raspberry Pi Pico               | $3             |
| AA Battery Holder (x2)  | Holds batteries for powering the motors                                       | $1 each ($2 total)|
| AA Batteries (x4)       | Standard AA batteries to power the motors                                     | $2 (for 4)     |
| USB Micro Cable         | To power and program the Raspberry Pi Pico                                    | $2             |
| IR Sensor Pair          | For basic obstacle detection                                                  | $3             |
| Push Button             | For triggering specific functions or for starting/stopping the robot          | $0.50          |

**Total Cost: ~$36.50** *(Prices may vary depending on the vendor and location.)*

## Lesson Plans for Computational Thinking:

1. **Algorithm Design with Motor Movements:**
    - **Objective:** Students will learn how to write a sequence of instructions to make the robot move in specific patterns.
    - **Activity:** Provide students with a maze or track. Ask them to write instructions to navigate through it.

2. **Looping with Obstacle Avoidance:**
    - **Objective:** Introduce the concept of loops in programming.
    - **Activity:** Program the robot to move in a square pattern until it detects an obstacle, then stop.

3. **Conditional Statements with Sensors:**
    - **Objective:** Understand how to make decisions based on sensor input.
    - **Activity:** Program the robot to move forward until it detects an obstacle. If an obstacle is detected on the left, turn right, and vice versa.

4. **Variables and Data:**
    - **Objective:** Learn how to use variables to store and manipulate data.
    - **Activity:** Measure the distance the robot travels in a straight line for 5 seconds. Calculate and display the speed of the robot.

5. **Functions and Modularity:**
    - **Objective:** Introduce the concept of functions to break down a problem into smaller parts.
    - **Activity:** Create functions for common movements like `turnLeft()`, `moveForward()`, etc., and use them to simplify the robot's control code.

6. **Debugging and Problem Solving:**
    - **Objective:** Understand the importance of troubleshooting and refining code.
    - **Activity:** Introduce intentional errors in a given code. Students should identify and correct them to make the robot function properly.

## Analysis

The result was pretty good.  But by doing high-quality sourcing and bundling we can get the costs under $19 by using a ["Smart Car Chassis 2WD"](https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2047675.m570.l1313&_nkw=Chassis+Robotic+2WD+Smartcar&_sacat=0) and a [Cytron Maker Pi RP2040](https://www.cytron.io/p-maker-pi-rp2040-simplifying-robotics-with-raspberry-pi-rp2040) board.

The dataset used to train ChatGPT-4 is "frozen in time" back in September of 2021.  Since then the low-cost $3 [VL53L0X IIC I2C To Time-of-flight Infrared measurement Distance Sensor](https://www.ebay.com/itm/314750102477) have become very popular and have replace the IR sensors.  Because the Cytron boards support IIC interfaces these are a perfect choice for low-cost robots.

!!! Note
    Most Smart Car Chassis kits include two DC motors and the battery holder.

Note that although ChatGPT knew that we could build a robot for under $40, it didn't really understand the consequence that the Raspberry Pi Pico supports IIC and that both motor controllers and sensors that use these standards make it easier for students to learn robotics using low-cost parts.

## References

1. [Cytron Maker Pi RP2040](https://www.cytron.io/p-maker-pi-rp2040-simplifying-robotics-with-raspberry-pi-rp2040)
2. [Raspberry Pi Pico Robot in Micropython](https://dmccreary.medium.com/raspberry-pi-pico-robot-in-micropython-51f956486270) - note this is an older design that didn't leverage the IIC and Cytron boards.
3. [Our 2023 STEM Robot Update](https://medium.com/better-programming/our-2023-stem-robot-update-7bcf8a2fad2e)