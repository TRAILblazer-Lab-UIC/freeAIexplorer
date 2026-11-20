---
slug: seeed-studio-grove-vision-ai-module-v2
tagline: A small board that runs vision AI models and sends results to a microcontroller.
---

## Overview
The Grove Vision AI Module V2 is a small board with a neural accelerator. It runs vision models such as MobileNet, EfficientNet-lite, YOLOv5, and YOLOv8 right on the board. Students send a model to the board without code through SenseCraft AI. They then read the results on a XIAO, Arduino, Raspberry Pi, or ESP32.

## Benefits for students
- Students deploy a real vision model without writing code first.
- Students read detection results in an Arduino sketch.
- Students see AI run on a tiny, low power board.

## Benefits for teachers
- The no-code step lets a teacher show AI before any programming.
- The wiki has Arduino demos that print bounding boxes over serial.
- The board links to hosts that students may already use.

## Benefits for schools
- The board costs 15.99 USD. The OV5647 camera is sold separately.
- Kits with a camera and a XIAO ESP32 start at 28.88 USD.
- The AI runs on the board. Student images stay on the device.

## Getting started
- [ ] Buy the Grove Vision AI Module V2 and an OV5647 camera from Seeed.
- [ ] Attach the camera to the board.
- [ ] Connect the board to a computer with a USB-C cable.
- [ ] Open SenseCraft AI and select Grove Vision AI (WE2).
- [ ] Choose a model and send it to the board. An account is optional.
- [ ] Install the Seeed_Arduino_SSCMA library for Arduino users.
- [ ] Test the board on a teacher computer before students use it.

## Where is the AI?
The AI is on the board itself. It runs object detection and image classification models using the on-board neural accelerator. Students choose a model, send it to the board, and then write code that reacts to the results.

## Privacy and safety
An account is optional, and the internet is used at setup. The board processes images on the device. Deploying models through SenseCraft AI uses a web service, and the research did not confirm its account and upload terms. The wiki lists no student data collection. A teacher should check what SenseCraft AI stores if students sign in, and should decide who may be in front of the camera.

## Ideas by subject
### computer_science
1. Deploy an object detection model through SenseCraft AI and list what it finds in the classroom.
2. Read the bounding box output in an Arduino sketch and explain each number.
3. Compare two models on the same objects and record which is more accurate.
4. Write code that turns on an LED when the board detects a chosen object.
5. Test the model in bright and dim light and describe what changes.

### engineering
1. Connect the board to a XIAO host over I2C or UART and test the link.
2. Mount the camera on a stand and pick the best angle for detection.
3. Build a sorting or counting prototype that uses detection results.
4. Measure how fast the board reports results and record it.
5. Document the wiring so another team can repeat the build.
