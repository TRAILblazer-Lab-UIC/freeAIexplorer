---
slug: webmcu-and-tinymljs-jeremy-ellis
tagline: Free browser pages that train small machine learning models for microcontrollers.
---

## Overview
webmcu-ai is a collection of open source work on TinyML and WebAI. TinyML means machine learning on small boards. WebAI means machine learning in the browser. Single-file pages use TensorFlow.js to train models in the browser and the WebSerial API to talk to boards over USB. The author calls them learning blueprints.

## Benefits for students
- Students train a model in the browser and send it to a board.
- Students try vision, sound, motion, and sensor projects.
- Students see how small devices can run machine learning.

## Benefits for teachers
- The pages are free and need no teacher account.
- Offline PWA versions and firmware flashing work without the Arduino IDE.
- The projects are blueprints. Teachers should test each one first.

## Benefits for schools
- The software is free and the code is open source.
- The site lists boards such as the XIAO ESP32-S3 at about 8.49 USD and the XIAO ML Kit at about 38.90 USD.
- WebSerial limits use to Chrome-type browsers.

## Getting started
- [ ] Find the webmcu-ai project collection from Jeremy Ellis.
- [ ] Buy a recommended board, such as the XIAO ML Kit.
- [ ] Flash the provided firmware using the download repo.
- [ ] Open the browser page in a Chrome-type browser.
- [ ] Connect the board over USB with WebSerial.
- [ ] Train a small model and send it to the board.
- [ ] Test the project before class and keep notes.

## Where is the AI?
The AI is machine learning that students train in the browser with TensorFlow.js. The trained model runs on the board. Projects cover image classification, object detection, regression, anomaly detection, and wake word detection. Students collect data, train, and test the result.

## Privacy and safety
No account is needed and the internet is used at setup. The site says models train in the browser and run on the board. No privacy policy was found. Some optional projects use local servers such as Node or Python and run Ollama locally. A teacher should check which project a class uses and grant browser permissions for USB and camera only to the pages in use.

## Ideas by subject
### computer_science
1. Train an image classifier on two classroom objects and test it on the board.
2. Collect motion data and train a model to tell two movements apart.
3. Add more training examples and record how accuracy changes.
4. Explain in plain words what the model learned from the data.
5. Try wake word detection and note what makes it fail.
