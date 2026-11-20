---
slug: espressif-edge-ai-with-esp32-s3-workshop
tagline: An advanced workshop that runs face detection on an ESP32-S3-EYE board.
---

## Overview
This Espressif workshop has an introduction and seven assignments using the ESP32-S3-EYE board. Students install ESP-IDF and ESP-WHO, run face detection and recognition, and add features in C++. Later work builds custom inference pipelines with ESP-DL and quantizes models with ESP-PPQ. Assignment 2 has students light an LED when a face is detected. The workshop needs comfort with C++ and Python.

## Benefits for students
- Advanced students run face detection on a small board.
- Students write C++ that reacts to what the camera sees.
- Students learn how to shrink a model for a tiny device.

## Benefits for teachers
- The workshop is free and has seven assignments.
- Each assignment builds on the last.
- Teachers need strong skills in C++ and Python.

## Benefits for schools
- The workshop is free.
- Each board needs to be bought and the price was not checked.
- The workshop says inference runs on the board.

## Getting started
- [ ] Find the Espressif Edge AI workshop on the Espressif site.
- [ ] Buy an ESP32-S3-EYE board.
- [ ] Read the introduction.
- [ ] Follow assignment 1 to install ESP-IDF and ESP-WHO.
- [ ] Build and flash the first program from the command line.
- [ ] Try assignment 2 and light an LED when a face is detected.
- [ ] Plan time for the later assignments.

## Where is the AI?
The AI is a face detection and recognition model that runs on the ESP32-S3-EYE board. The board has its own camera. Students flash code, point the camera at a face, and watch what happens. They add features such as the LED and later build their own models.

## Privacy and safety
No account is needed. The internet is needed to fetch code and dependencies, which the research inferred from the instructions. Inference runs on the board, and camera frames are not described as leaving it. The materials do not describe student data collection or a privacy policy. A teacher should set rules for pointing the camera at people and avoid saving face images without consent.

## Ideas by subject
### engineering
1. Set up the board and run the sample face detection.
2. Light an LED when a face is detected, as in assignment 2.
3. Measure how far from the camera a face can be detected.
4. Test detection in bright and dim light and record the results.
5. Design a simple device that reacts to a face, such as a greeting sign.

### computer_science
1. Read the C++ code for face detection and label each part.
2. Add a feature in C++ and test it.
3. Compare detection with recognition and explain the difference.
4. Explain what quantizing a model means.
5. Write a short report on the limits of running AI on a tiny board.

### cte
1. List the skills needed for an embedded AI engineer.
2. Interview a worker who builds smart devices.
3. Document each assignment in a portfolio.
4. Compare the costs of an edge device with a cloud service.
5. Present a product idea that uses on-board face detection.
