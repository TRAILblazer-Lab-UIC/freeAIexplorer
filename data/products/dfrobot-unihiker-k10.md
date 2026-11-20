---
slug: dfrobot-unihiker-k10
tagline: A small board with a camera and screen that runs vision and voice models offline.
---

## Overview
UNIHIKER K10 is an ESP32-S3 board with a 2.8 inch screen, a 2 MP camera, a microphone, and onboard sensors. A press release lists four preinstalled vision models. They are face detection, cat and dog detection, QR code recognition, and motion detection. Students program it with Mind+ blocks or MicroPython.

## Benefits for students
- Students can use face, cat and dog, QR, and motion detection with no setup.
- Students can try offline voice recognition.
- Students can train a custom image or sensor model with TinyML.

## Benefits for teachers
- Both blocks and MicroPython are supported.
- The wiki offers schematics and downloadable files.
- Both sources are from the vendor. Teachers should test the board first.

## Benefits for schools
- The press release gives a price of 28.90 USD.
- The board needs no account. Some examples need the internet.
- A teacher can usually install the tools without IT help.

## Getting started
- [ ] Buy a K10 board and check the current price.
- [ ] Install Mind+ on a test computer.
- [ ] Connect the board with a USB Type-C cable.
- [ ] Run a preinstalled face detection example.
- [ ] Try a short MicroPython program.
- [ ] Test the offline voice recognition.
- [ ] Plan a lesson from the wiki files.

## Where is the AI?
The board has four preinstalled vision models, offline speech recognition, and TinyML training for custom models. All of it runs on the device. Students use the models in their projects and train their own to recognize new things.

## Privacy and safety
No account is needed. The press release says voice models work without internet. The wiki shows a DeepSeek voice assistant example that relies on cloud language models. Projects can send data off the board when the teacher chooses. The research did not confirm which features run fully offline. The camera and microphone are on the board. A teacher should set rules for using them in class and check any cloud example before students use it.

## Ideas by subject
### computer_science
1. Run the face detection example and change what the board shows.
2. Make the board scan a QR code and show a message.
3. Write a MicroPython program that reacts to a detected motion.
4. Use Mind+ blocks to build a simple voice command.
5. Train a custom image model on two objects and test it.

### engineering
1. Mount the board in a case and test the camera angle.
2. Build a motion alarm that lights up when the camera sees movement.
3. Compare face detection in bright light and in dim light.
4. Use the sensors to log light and temperature.
5. Design a small robot head that uses the K10 screen and camera.
