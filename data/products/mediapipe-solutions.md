---
slug: mediapipe-solutions
tagline: Code libraries for on-device pose, hand, face, and object recognition.
---

## Overview
MediaPipe Solutions provides 22 machine learning tasks that run on the device. They work for web, Python, Android, iOS, and Flutter. Vision tasks include face, hand, and pose landmarks, gesture recognition, object detection, and image classification. Other tasks cover audio, text, and retrieval.

## Benefits for students
- Students build projects that track hands, faces, and bodies.
- Students run real vision models in their own code.
- Students can work with a webcam in a browser.

## Benefits for teachers
- Many school tools for pose and hand tracking build on it.
- Teachers can pick JavaScript or Python.
- Teachers need programming skill because it is a developer library.

## Benefits for schools
- The libraries are free and open source.
- The models run on the device and keep data local.
- Setup takes an hour and the internet is used only to load files.

## Getting started
- [ ] Find the MediaPipe Solutions page from Google.
- [ ] Choose JavaScript or Python for your class.
- [ ] Install with npm or pip, or load from a CDN in a web page.
- [ ] Download a model file for one task.
- [ ] Test the webcam on a school device.
- [ ] Run a hand or pose example.
- [ ] Share a working starter project with students.

## Where is the AI?
The AI is a set of trained models for vision, audio, and text. They run on the device. The web version loads a runtime from a CDN and then runs in the browser. Students write code that sends camera frames to a model and uses the results in their own programs.

## Privacy and safety
No account is needed, and the internet is used at setup. Inference runs on the device. The web examples load the WASM runtime from the jsDelivr CDN and model bundles from storage.googleapis.com. Those requests reach third parties. Self hosting both avoids this. The docs pages read stated no privacy policy, and the research did not read a policy for the hosted assets. A teacher should check which outside addresses a student page loads. A teacher should also check that students do not record classmates without permission.

## Ideas by subject
### computer_science
1. Run the hand landmark task and print the position of the index finger.
2. Draw lines on a webcam image to show body pose points.
3. Build a program that counts how many fingers are raised.
4. Use gesture recognition to control a small game.
5. Compare face detection in bright light and dim light.
