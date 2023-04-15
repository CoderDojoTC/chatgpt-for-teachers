# System Thinking

Systems thinking is an analytical skill for understanding how systems interact.

The core diagram in systems thinking is a causal look diagram.  ChatGPT
can create simple causal loop diagrams using Mermaid format but
the diagrams lack details such as "B" and "R" for balancing and
reinforcing loops.

## Prompt

```linenums="0"
Create a causal loop diagram to illustrate the population of rabbits 
and wolves in mermaid dependency graph format.
```

## Response

```
graph LR
A((Rabbits)) -->|increase| B((Food))
B -->|increase| C((Wolves))
C -->|decrease| A
C -->|decrease| B
```

## Render on Mermaid.live

Copy this code into the following site: [Mermaid.live](http://mermaid.live).

You should see the following diagram:

![](../img/rabbits-wolves.png)

## Thermostat

```linenums="0"
Create a balancing causal loop diagram for a thermostat using mermaid causal 
diagram markup format.
```

```
graph LR
A((Temperature)) -->|Deviation from Setpoint| B((Thermostat))
B -->|Control Signal| C((Heater/Cooler))
C -->|Heat/Cooling| A
B -->|Feedback| D((Error))
D -->|Opposes Change| B
```

![](../img/thermostat.png)
