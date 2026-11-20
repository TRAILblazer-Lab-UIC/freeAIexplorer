---
slug: personal-audio-classifier-mit-app-inventor
tagline: A browser tool for training a sound classifier and using it in App Inventor.
---

## Overview
The Personal Audio Classifier is a web tool from MIT that lets students record short sound clips, train an audio model, and test it. A companion App Inventor extension loads the trained model into student apps. It was introduced in a 2020 paper by Nikhil Bhatia and Natalie Lao. It suits middle and high school students.

## Benefits for students
- Students record 1 to 2 second clips and label each sound class.
- Students train and test their own audio model in the browser.
- Students use the model inside an App Inventor app.

## Benefits for teachers
- The workflow runs from recording to app in one project.
- An official student guide shows the classroom steps.
- The extension is still listed as Supported, version 20200904.

## Benefits for schools
- The tool is free.
- Training ran in the browser on a 2015 MacBook Pro according to the paper.
- No install is needed, but the internet is used throughout.

## Getting started
- [ ] Open the Personal Audio Classifier web tool.
- [ ] Check that the computer has a working microphone.
- [ ] Allow microphone access in the browser.
- [ ] Record several clips for each class, such as clapping and snapping.
- [ ] Train the model in the browser and test it.
- [ ] Export the model and import the extension into an App Inventor project.
- [ ] Confirm that the tool still works before class. The paper dates from 2020.

## Where is the AI?
The AI is an audio classifier that uses transfer learning on a pre-trained TensorFlow.js speech-commands model. Audio is turned into spectrograms in the browser. The model trains on the local device. Students supply the sounds and then use the model in their own apps.

## Privacy and safety
The tool needs the internet throughout. A 2020 paper says models are trained and run in the browser. The paper implies recordings stay on the computer. The research did not read the site's own privacy behavior, and no privacy policy was found. Building the app in App Inventor normally needs a Google sign-in. A teacher should check the microphone permission and test the site before class.

## Ideas by subject
### computer_science
1. Record two sounds, train a classifier, and test it with new clips.
2. Add a third sound class and see how the accuracy changes.
3. Test the model with a noisy room and describe what happens.
4. Import the extension into an App Inventor app that reacts to a sound.
5. Explain in your own words how a spectrogram helps a computer tell sounds apart.
