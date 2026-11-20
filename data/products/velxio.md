---
slug: velxio
tagline: An open source browser simulator for Arduino, ESP32, and Raspberry Pi circuits.
---

## Overview
Velxio is an open source circuit and microcontroller simulator that runs in a web browser. It simulates about 35 boards, including Arduino Uno, Raspberry Pi Pico, ESP32, STM32, and Raspberry Pi. Students write Arduino code, wire virtual parts, and watch the circuit run. No physical hardware is needed.

## Benefits for students
- Students test circuits without risk of damaging parts.
- Students write real Arduino code and see it run.
- Students can try several board families.

## Benefits for teachers
- Teachers can demonstrate a circuit on the projector.
- The hosted version needs no install.
- Optional AI chat and tutor features exist on paid and free-credit tiers.

## Benefits for schools
- A free tier exists. Paid individual plans run from 3 to 15.75 USD per month.
- Schools can self-host with Docker for more control.
- The self-hosted image covers AVR, RP2040, and ESP32 boards only.

## Getting started
- [ ] Open velxio.dev in a browser and start a project.
- [ ] Check whether the free tier needs an account.
- [ ] Build a simple blinking light circuit.
- [ ] Decide whether to use the hosted site or to self-host.
- [ ] Ask IT to run the Docker image and set VELXIO_NEWS=off if the school wants no outside connections.
- [ ] Review the AI chat settings and turn the feature off if needed.
- [ ] Ask about the classroom plan price.

## Where is the AI?
Velxio has an optional AI chat assistant and tutor modes. The vendor does not say where the AI runs. Students can ask it questions about their circuit or code and then decide what to change. The simulator itself is not AI.

## Privacy and safety
The hosted version needs the internet. No privacy policy was found on the site, and the materials do not state what data is collected or whether an account is needed. AVR and RP2040 boards run in the browser. ESP32, STM32, and Raspberry Pi boards run on a backend server, and Arduino code is compiled on a server. Code for those paths leaves the browser, and the research did not confirm where the AI chat sends code. A teacher should ask IT about the Docker self-hosted version, which has an on-by-default news check to velxio.dev that VELXIO_NEWS=off turns off.

## Ideas by subject
### engineering
1. Wire a virtual LED to an Arduino board and make it light.
2. Add a resistor and observe how the circuit changes.
3. Compare two boards on the same circuit and list the differences.
4. Use the analog simulation to study a voltage divider.
5. Design a small circuit for a class project and test it virtually.

### computer_science
1. Write an Arduino sketch that blinks a light and change the timing.
2. Add a button to the circuit and write code that reads it.
3. Debug a sketch that has an error and describe the fix.
4. Port the same program to a different board.
5. Use the AI chat to explain a line of code and then check it yourself.
