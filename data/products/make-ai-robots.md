---
slug: make-ai-robots
tagline: A web tool that links a Teachable Machine model to a micro:bit robot.
---

## Overview
AI Robots is a web tool that links a micro:bit to a model trained in Google Teachable Machine. Students train an image or sound model, export it, and paste the link into the tool. The tool sends recognized class names to the micro:bit over USB serial. A MakeCode program on the micro:bit reacts to each class.

## Benefits for students
- Students train their own image or sound model.
- Students see the model control a real micro:bit.
- Students can adjust the prediction threshold.

## Benefits for teachers
- A MakeCode starter program is included.
- The tool builds on Teachable Machine, which many teachers know.
- A companion book, Make: AI Robots (2023), covers robot projects.

## Benefits for schools
- Make Magazine puts the whole example project at $18 to $20. The tool's own price is not stated.
- No account is needed for the tool.
- It needs a computer with a webcam and a micro:bit v2. Chromebook support was not checked.

## Getting started
- [ ] Open the AI Robots tool in a Chrome-compatible browser.
- [ ] Gather a micro:bit v2, a USB cable, and a computer with a webcam.
- [ ] Train an image or sound model in Teachable Machine.
- [ ] Export the model and copy the link.
- [ ] Paste the link into AI Robots.
- [ ] Connect the micro:bit by USB.
- [ ] Open the MakeCode starter program and test each class.

## Where is the AI?
The AI is image and sound classification. Students train the model in Teachable Machine, which runs in the browser. The model files are hosted online by Google. The tool then sends each recognized class to the micro:bit, which students program to react.

## Privacy and safety
No account is needed for the tool and the internet is needed at all times. Make Magazine says the model runs on the cloud side. Teachable Machine exported models are hosted by Google. The tool site could not be fetched because of a certificate error. Its data handling is unconfirmed. The research found no privacy policy. A teacher should check which Teachable Machine options students use and keep faces out of the training images.

## Ideas by subject
### computer_science
1. Train a model on two hand gestures and test it on new gestures.
2. Raise and lower the prediction threshold and describe what changes.
3. Train a sound model on two claps and test it in a noisy room.
4. Compare an image model with a sound model for the same task.
5. Write a MakeCode program that shows a different icon for each class.

### engineering
1. Connect a micro:bit robot and make it move when the model sees a class.
2. Mount a webcam so the model gets a steady view.
3. Test the robot's reaction time after a class is seen.
4. Design a simple robot that sorts items by the recognized class.
5. Write a wiring and setup guide for the next team.
