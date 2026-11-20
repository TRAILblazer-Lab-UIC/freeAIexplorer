---
slug: dfrobot-huskylens-ai-vision-sensor
tagline: A small AI camera that learns faces, objects, and lines with one button.
---

## Overview
HuskyLens is a camera module from DFRobot with a 2.0 MP camera and a 2.0 inch screen. It has six built-in functions, which are face recognition, object tracking, object recognition, line tracking, color recognition, and tag recognition. Students teach it by pointing the camera and pressing a learning button. It can also connect to a micro:bit, Arduino, Raspberry Pi, or LattePanda.

## Benefits for students
- Students teach the camera by pressing one button. They see how recognition is trained.
- Students see the result on the built-in screen right away.
- Students can wire it to a controller and make a robot react.

## Benefits for teachers
- Setup takes minutes and needs only power at 3.3 to 5 V.
- The launch article calls the device friendly to younger students.
- It is listed as approved for FIRST Tech Challenge.

## Benefits for schools
- The price is about $34.90 on the DFRobot page, and $32.00 each for 10 or more.
- The AI runs on the device and needs no internet or account.
- The research found no cloud service or app. The IT load is a teacher install.

## Getting started
- [ ] Buy the HuskyLens from DFRobot.
- [ ] Power the unit at 3.3 to 5 V.
- [ ] Choose one of the six functions on the screen.
- [ ] Point the camera at an object and press the learn button.
- [ ] Test whether the unit recognizes the object again.
- [ ] Connect it to a micro:bit or Arduino over UART or I2C.
- [ ] Write code on the controller to act on the results.

## Where is the AI?
The AI is a set of vision functions that run on a Kendryte K210 chip inside the unit. Students show it an example and press the learning button. The unit then recognizes that example later. Acting on the results needs a separate controller and code, which students write themselves.

## Privacy and safety
No account is needed, and the device has wired connections only with no cloud service or app listed. Learning happens on the device. Face recognition can store faces on the unit. No privacy policy was found, and both sources are from the vendor. A teacher should check where the camera points and who can access saved faces.

## Ideas by subject
### computer_science
1. Teach the camera to recognize three classroom objects and record how often it is right.
2. Try to fool the camera with a similar object and explain why it was fooled.
3. Compare how many examples the camera needs to learn a face well.
4. Use color recognition to sort colored blocks and explain the rule the camera follows.
5. Write a short comparison of the six functions and what each one senses.

### engineering
1. Mount the camera on a micro:bit robot and use line tracking to follow a path.
2. Wire the camera to an Arduino and print the recognized ID on a display.
3. Build a robot that turns toward a tracked object.
4. Design a case or mount that holds the camera at a useful height.
5. Test the camera in different light and log which function is most reliable.
