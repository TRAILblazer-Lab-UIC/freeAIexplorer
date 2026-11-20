---
slug: tryengineering-smart-sorter-lesson
tagline: A lesson where students train an image model to sort cereal with an Arduino.
---

## Overview
In the Smart Sorter lesson, students act as computer engineers. They train a Google Teachable Machine image model to tell two cereals apart. An Arduino Leonardo and a micro servo then sort the pieces. The lesson targets grades 6 to 12, and pairs share a computer with a webcam.

## Benefits for students
- Students train a real image model and see it work.
- Students link a browser to an Arduino and a servo.
- Students build a cardboard and servo sorter.

## Benefits for teachers
- The lesson plan lists NGSS HS-ETS1-2 and other standards.
- Pairs share one computer, which keeps equipment needs low.
- The lesson relates to Google's Tiny Sorter project.

## Benefits for schools
- The lesson is free.
- It needs an Arduino Leonardo, an SG90 servo, a cable, and cereal. Prices were not checked.
- The browser needs internet during use, and IT should install Arduino IDE 2.

## Getting started
- [ ] Find the Smart Sorter lesson plan on TryEngineering.
- [ ] Gather the Arduino Leonardo, servo, cable, and two kinds of cereal.
- [ ] Ask IT to install Arduino IDE 2.
- [ ] Load the provided sketch onto the Arduino.
- [ ] Set up a computer with a webcam for each pair.
- [ ] Open Teachable Machine and test the webcam.
- [ ] Run the sorter with a few pieces of cereal.

## Where is the AI?
The AI is an image classifier trained in Teachable Machine. It runs in the web browser on the computer. Students collect webcam images, train the model, and then use its answers to drive the servo. A p5.js sketch and WebUSB link the browser to the Arduino.

## Privacy and safety
No account is needed for the tools and the internet is used throughout. Teachable Machine and the p5.js sketch run in the browser, and webcam images are used for training. The research did not check the Teachable Machine data terms. The lesson PDF download asks for a name, email, and role. Check the Teachable Machine terms and that students point the camera only at the cereal. Confirm that the school allows WebUSB in the browser.

## Ideas by subject
### engineering
1. Build a cardboard chute that guides each piece toward the servo.
2. Test how well the sorter works and list what causes mistakes.
3. Adjust the servo angle and record the effect.
4. Redesign the sorter to handle a third item.
5. Explain how an engineer would test a sorter before using it in a factory.

### computer_science
1. Collect photos of each cereal and train a Teachable Machine model.
2. Test the model with new pieces and record its accuracy.
3. Add more training images and see how the results change.
4. Read the sketch and explain how the model's answer reaches the servo.
5. Describe what could go wrong if the training images are poor.
