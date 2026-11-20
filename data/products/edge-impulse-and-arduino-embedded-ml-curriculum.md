---
slug: edge-impulse-and-arduino-embedded-ml-curriculum
tagline: An advanced hands-on lab that trains an image model and runs it on an Arduino.
---

## Overview
This embedded ML lab comes from an AAAI-23 tutorial aimed at educators. Participants build an image classification system. They collect data with an Arduino, train a model in Edge Impulse, and run live inference on the Arduino. The schedule has ten parts from data collection to deployment and TinyML optimization. The materials say it is not designed for K-12 and that participants need some C/C++ or Arduino experience.

## Benefits for students
- Advanced high school students build a real embedded AI system.
- Students collect data, train a model, and deploy it to a small board.
- Students learn how AI runs on tiny devices.

## Benefits for teachers
- Slides and code are on GitHub.
- Presenters are Shawn Hymel and Brian Plancher.
- Teachers need C/C++ or Arduino experience.

## Benefits for schools
- The curriculum is free.
- An Arduino board with a camera is needed and the price is not stated.
- Data goes to Edge Impulse. IT should review the privacy terms.

## Getting started
- [ ] Find the tutorial repository on GitHub and read the instructions.
- [ ] Ask IT to review the Edge Impulse privacy terms.
- [ ] Create an Edge Impulse account.
- [ ] Buy an Arduino board with a camera.
- [ ] Install the Arduino tools on a teacher computer.
- [ ] Follow the repo steps for data collection.
- [ ] Train the model in Edge Impulse and deploy it to the board.
- [ ] Plan extra time because the repo was last updated in February 2025.

## Where is the AI?
The AI is an image classification model. Training runs in the Edge Impulse cloud and the finished model runs on the Arduino board. Students collect images, train the model, and test it live. They use the board to see how a small device can recognize a picture.

## Privacy and safety
An Edge Impulse account is needed, and sensor and image data are uploaded to Edge Impulse for training. Final inference runs on the Arduino board. The research did not read the Edge Impulse privacy policy. The materials say the lab is not designed for K-12. A teacher should read the vendor's privacy terms and age rules and use only images that students and families have agreed to share.

## Ideas by subject
### engineering
1. Wire the Arduino and camera and confirm that they capture an image.
2. Collect images of two objects and label them.
3. Deploy the trained model and test it live on the board.
4. Record how lighting changes the accuracy.
5. Compare the model's memory use with the board's limits.

### computer_science
1. Read the data collection code and explain what each part does.
2. Augment the images and compare accuracy before and after.
3. Train the model in Edge Impulse and note the settings you used.
4. Change one setting in the C/C++ code and observe the result.
5. Explain what TinyML means in your own words.
