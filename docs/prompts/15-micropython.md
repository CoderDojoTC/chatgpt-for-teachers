# MicroPython

## Prompt
create a micropython program to blink an LED every half second.  

## Response

```python
import time
from machine import Pin

led = Pin(2, Pin.OUT)

while True:
  led.value(not led.value())
  time.sleep(0.5)
````