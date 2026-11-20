---
slug: cytron-maker-pi-rp2040
tagline: A low-cost robot controller board with motor drivers, servo ports and CircuitPython.
---

## Overview
The Cytron Maker Pi RP2040 is a robot controller board with a dual-core Arm Cortex-M0+ RP2040 chip. It has motor drivers for two DC motors, four servo ports, 7 Grove ports, 13 status LEDs, 22 RGB Neopixel LEDs, a buzzer and two buttons. CircuitPython comes preloaded. Students program it from a computer over USB.

## Benefits for students
- Students build a robot controller with real motor and servo ports.
- Students move from LEDs and buttons to motor control.
- Students can try CircuitPython, MicroPython or C/C++.

## Benefits for teachers
- A MicroPython learning guide offers labs that build in steps.
- A lab guide pairs the board with a 2WD chassis and a distance sensor for a collision-avoidance robot.
- Test buttons and LEDs on the motor drivers help with debugging.

## Benefits for schools
- A teacher lab guide calls it a 9.90 USD kit from Cytron.
- Motors, chassis and batteries cost extra.
- No account is needed and no internet is needed.

## Getting started
- [ ] Buy the board from Cytron or Adafruit.
- [ ] Plug the board into a computer by USB.
- [ ] Open the CIRCUITPY drive and edit the code file.
- [ ] Add motors, servos and sensors.
- [ ] Use motor power between 3.6 and 6 V.
- [ ] Flash flash_nuke.uf2 first to use MicroPython.
- [ ] Follow the Learning MicroPython labs in order.

## Where is the AI?
The board has no AI. It runs the program that students write and load. Students build skills in sensors, motor control and logic.

## Privacy and safety
No account or cloud service is part of the board, and it is programmed over USB from a local computer. The research found no student data collected, but no privacy policy was reviewed. A teacher should read the guide author's warning that the board does not ship with MicroPython, and that most MicroPython programs are incompatible with CircuitPython.

## Ideas by subject
### computer_science
1. Write code that blinks the status LEDs in order.
2. Use a button to start and stop a motor.
3. Write functions that drive forward and turn.
4. Compare a CircuitPython program with a MicroPython program.
5. Debug a program that never reads the button.

### engineering
1. Mount the board on a 2WD chassis and test each motor.
2. Add a distance sensor and read its values.
3. Build a collision-avoidance robot and test it near a wall.
4. Use a servo to add a moving arm.
5. Test the robot with different battery levels and record the effect.
