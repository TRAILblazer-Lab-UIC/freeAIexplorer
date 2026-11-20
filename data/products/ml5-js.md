---
slug: ml5-js
tagline: A JavaScript library that brings machine learning to p5.js and creative coding.
---

## Overview
ml5.js is an open source JavaScript library that makes machine learning approachable for artists, creative coders, and students. It runs in the browser, builds on TensorFlow.js, and works well with p5.js. Pretrained models classify images, find body poses, and detect faces and hands. A neural network module lets users train their own models.

## Benefits for students
- Students add machine learning to a web sketch with a few lines of code.
- Students try image, pose, face, and hand models.
- Students discuss data bias through the examples.

## Benefits for teachers
- Code examples and materials about data bias are included.
- It pairs with p5.js, which many classes already use.
- A Year 12 lab compared a MobileNet classifier with a Teachable Machine model.

## Benefits for schools
- The library is free and open source.
- It runs in a browser and needs no install.
- Model files load from a public CDN and need the internet.

## Getting started
- [ ] Find the ml5.js website and read the getting started page.
- [ ] Create an HTML page with p5.js.
- [ ] Add the script tag for ml5 1.x.
- [ ] Load one pretrained model.
- [ ] Test the webcam on a school device.
- [ ] Run a first image classification example.
- [ ] Share a working starter page with students.

## Where is the AI?
The AI is a set of pretrained models and a neural network module. They run in the browser on the local device. Students write code that sends a camera image to a model and shows the result. They can also train their own model and compare it with a pretrained one.

## Privacy and safety
No account is needed, and the internet is needed at all times. The documented method loads the library from the unpkg CDN. The hand tracking model loads its files from the jsDelivr CDN by default. Those outside servers see the page requests. The research found no privacy policy and did not check the other models. A teacher should check which outside addresses the page loads and keep faces out of webcam tests when possible.

## Ideas by subject
### computer_science
1. Run an image classifier on a webcam and print the top label.
2. Compare the results of a pretrained model with a model you train.
3. Use pose detection to draw dots on a body.
4. Count how many hands appear in the camera.
5. Test the classifier on a surprising object and explain the result.

### visual_arts
1. Make a sketch that changes color when a pose is detected.
2. Draw shapes that follow the position of a hand.
3. Create a portrait filter that follows face landmarks.
4. Build an interactive artwork that reacts to what the camera sees.
5. Write a short artist note about how data bias shaped the result.
