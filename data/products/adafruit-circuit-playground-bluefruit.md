---
slug: adafruit-circuit-playground-bluefruit
tagline: A round sensor board with lights, Bluetooth, and optional on-device machine learning.
---

## Overview
The Circuit Playground Bluefruit is a round microcontroller board from Adafruit. It has 10 NeoPixel lights, an accelerometer, a thermistor, a light sensor, a microphone, a speaker, two buttons, and a slide switch. Students program it in CircuitPython or Arduino over USB. It suits middle and high school students who are ready for text code.

## Benefits for students
- Students get many sensors on one board. They can start a project with no extra wiring.
- Alligator-clip pins let students connect outside parts without soldering.
- Students can run a small machine learning model on the board itself.

## Benefits for teachers
- The board needs only a USB cable and a computer.
- Adafruit publishes a guide for running TensorFlow Lite on the board.
- The product page lists Arduino and CircuitPython. It says MakeCode is not supported.

## Benefits for schools
- A single board costs 24.95 USD, and the price drops to 19.96 USD for 100 or more.
- No student accounts are needed and the dossier lists no data collection.
- Windows, Mac, and Linux computers all work. A teacher can usually do the setup without IT.

## Getting started
- [ ] Buy boards from Adafruit and check the price tiers for class sets.
- [ ] Plug one board into a computer with a microUSB cable.
- [ ] Install the CircuitPython firmware or the Arduino board package.
- [ ] Load a short light show program and test the NeoPixels.
- [ ] Try a sensor example that reads light or temperature.
- [ ] Read the Adafruit TensorFlow Lite quickstart guide before planning a machine learning lesson.
- [ ] Plan extra time for the compile setup that the TensorFlow Lite examples need.

## Where is the AI?
The AI is optional. An Adafruit guide shows how to run TensorFlow Lite models on the board. The model runs on the board itself and uses the built-in sensors as input. Students collect sensor readings, train a model on a computer, and load it onto the board to test their own idea.

## Privacy and safety
The board processes sensor data on the device and needs no account. Bluetooth LE can send data to a nearby device if students program that. Setup downloads software from the web. The research found no privacy policy for the board. A teacher should keep wireless features off unless a lesson needs them. A teacher should also check that school computers allow USB drives and driver installs.

## Ideas by subject
### engineering
1. Build a nightlight that turns on the NeoPixels as the light sensor reads darker.
2. Use the thermistor to build a temperature alarm and test it with warm and cool objects.
3. Connect an outside part with alligator clips and make the board react to it.
4. Use the accelerometer to make a step counter and test how accurate it is.
5. Design a wearable badge that shows a pattern when the slide switch changes.

### computer_science
1. Write a CircuitPython program that lights each NeoPixel in turn and change the loop timing.
2. Add a button input so a press changes the light color.
3. Read the microphone level and write code that reacts to loud sounds.
4. Compare an Arduino sketch with a CircuitPython program for the same task.
5. Follow the TensorFlow Lite guide and describe how the board uses a trained model.
