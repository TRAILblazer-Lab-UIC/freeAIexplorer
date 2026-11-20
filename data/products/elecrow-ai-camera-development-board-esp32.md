---
slug: elecrow-ai-camera-development-board-esp32
tagline: A low-cost ESP32-S3 board with a camera and touch screen that recognizes faces and objects.
---

## Overview
The Elecrow AI Camera Development Board is an ESP32-S3 board with a 2 MP camera and a 1.83 inch touch screen. It recognizes faces, objects, motion, colors, and labels. It also has a microphone, speaker, Wi-Fi, and Bluetooth 5. Students program it with Arduino, ESP-IDF, or MicroPython.

## Benefits for students
- Students use the touch screen to switch between recognition functions.
- Students write real code in Arduino or MicroPython.
- Students can test both local recognition and cloud inference.

## Benefits for teachers
- An Arduino course PDF is available.
- The board suits teachers who already use Arduino in class.
- The GitHub repository has public schematics and source code.

## Benefits for schools
- A search snippet lists the price at $24.90, and the battery is not included.
- IT should plan on installing the Arduino IDE and serial drivers.
- The GitHub repository lists no license. Check usage terms with the vendor.

## Getting started
- [ ] Find the board on the Elecrow store under SAD00006D.
- [ ] Install the Arduino IDE on a Windows or Mac computer.
- [ ] Install the ESP32 board package version 3.2.0.
- [ ] Install serial drivers if the computer does not see the board.
- [ ] Connect the board with a USB-C cable.
- [ ] Follow the Elecrow wiki and the Arduino course PDF.
- [ ] Try one recognition example from the touch screen.

## Where is the AI?
The AI recognizes faces, objects, motion trajectories, colors, and labels. The vendor says it supports both local recognition and cloud inference. Students write code, pick the recognition function, and use the result in their own projects.

## Privacy and safety
No account is needed. The board supports local AI recognition and cloud inference, and it has Wi-Fi. Data handling depends on the sketch. The materials do not state which cloud service the cloud inference uses or whether camera images are sent to a third party. No privacy policy was found. A teacher should check that students use the local recognition mode first and review the Wi-Fi settings before connecting the board.

## Ideas by subject
### computer_science
1. Run the face recognition example and describe the steps the code takes.
2. Change a color recognition threshold in Arduino code and record the new results.
3. Write a program that shows a message when the camera sees a certain color.
4. Compare local recognition with cloud inference and list one strength of each.
5. Follow the Arduino course PDF and explain the first lesson to a classmate.

### engineering
1. Wire the board to a small motor and make it react to a recognized object.
2. Design a case that holds the board and a battery.
3. Test how recognition changes at different distances.
4. Use the microphone and speaker to add a voice alert to a project.
5. Record the board's power draw with a battery and estimate how long it runs.
