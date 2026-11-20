---
slug: dfrobot-huskylens-2
tagline: A handheld AI camera with a touchscreen that recognizes faces, objects, lines, and poses.
---

## Overview
HuskyLens 2 is a handheld AI vision sensor from DFRobot with a 2.4 inch touchscreen and a 2 MP camera. It comes with more than 20 built-in models, including face recognition, object tracking, line tracking, text reading, and pose estimation. It suits middle and high school classes. Students point the camera at things, pick an algorithm on the screen, and watch the results.

## Benefits for students
- Students see recognition results on the screen within minutes of powering the unit.
- Students can train the sensor on new objects by using the touchscreen.
- Students can send the results to a micro:bit or Arduino and program a reaction.

## Benefits for teachers
- The sensor works on its own. A teacher can demo it without any coding.
- More than 20 ready models give a teacher many activities from one device.
- DFRobot community pages show projects with micro:bit, ESP32, UNIHIKER, and Mind+.

## Benefits for schools
- The base version costs about $89.90 and a kit with a Wi-Fi 6 module and wide-angle camera costs about $104.90.
- The AI runs on the device and needs no internet.
- The vendor lists no student accounts. A teacher or IT staff member can install it in minutes.

## Getting started
- [ ] Buy the HuskyLens 2 from DFRobot.
- [ ] Power the unit over USB-C.
- [ ] Pick a built-in algorithm such as face recognition on the touchscreen.
- [ ] Test the algorithm on a few classroom objects.
- [ ] Train the sensor on a new object using the touchscreen.
- [ ] Connect the sensor to a micro:bit, Arduino, Raspberry Pi, or UNIHIKER by UART or I2C.
- [ ] Program the host board to react to the results.

## Where is the AI?
The AI is a set of vision models that run directly on the sensor. DFRobot says the sensor has an on-device accelerator rated at 6 TOPS. Students choose a model, train it with the touchscreen, and use the results to drive their own projects. The unit also lists a built-in MCP service for LLM use, which is a vendor claim.

## Privacy and safety
No account is needed, and the algorithms run on the device without cloud computation per the product page. An optional Wi-Fi 6 module exists, and a community project pairs it with a cloud language model through MCP, which would send data to a third party. The DFRobot store privacy policy covers store accounts only and says the service is for people over 18. A teacher should check where the sensor points because it can recognize faces of people in the room. A teacher should also leave the Wi-Fi module off unless the school approves.

## Ideas by subject
### computer_science
1. Train the sensor to tell two classroom objects apart and test how often it gets them right.
2. Compare face recognition with object tracking and describe what each one is good at.
3. Send the recognized object name to a micro:bit and display it on the micro:bit screen.
4. Test the sensor in bright light and dim light and record how the results change.
5. Write a short guide that explains how a camera learns an object from examples.

### engineering
1. Mount the sensor on a robot car and use line tracking to follow a taped path.
2. Wire the sensor to an Arduino with the Gravity connector and print the results.
3. Design a mount that holds the sensor steady at the right angle for a task.
4. Build a sorting gate that reacts when the sensor sees a certain object.
5. Test the sensor at several distances and chart where recognition works best.
