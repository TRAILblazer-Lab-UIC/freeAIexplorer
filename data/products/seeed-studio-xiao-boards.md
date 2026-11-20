---
slug: seeed-studio-xiao-boards
tagline: A family of thumb-sized microcontroller boards with TinyML options.
---

## Overview
XIAO is a family of thumb-sized microcontroller boards from Seeed Studio. The wiki lists chips such as SAMD21, RP2040, ESP32C3, and ESP32S3. The XIAO ESP32S3 Sense adds a camera and a digital microphone. The XIAO nRF52840 Sense has an IMU and a PDM microphone. Seeed publishes a five chapter ebook on programming and TinyML.

## Benefits for students
- Students program tiny boards with Arduino IDE.
- Students try image, motion, and sound classification with Edge Impulse.
- Students use a free ebook as a guide.

## Benefits for teachers
- The ebook covers programming basics, IoT projects, and TinyML.
- The XIAOML Kit comes with a free machine learning systems textbook.
- The setup is advanced and needs teacher time.

## Benefits for schools
- Board prices were not confirmed. A search result put the XIAOML Kit near 40 dollars.
- Work stays on the device.
- The Seeed store policy says its services are not intended for children under 16.

## Getting started
- [ ] Choose a board from the XIAO wiki.
- [ ] Read the Seeed store policy statement about children under 16.
- [ ] Get a USB cable and a computer.
- [ ] Install the Arduino IDE and the board package.
- [ ] Upload a simple blink sketch.
- [ ] Create an Edge Impulse account only if you use TinyML.
- [ ] Read the ebook XIAO: Big Power, Small Board.

## Where is the AI?
The AI is optional TinyML. It covers image, motion, and sound classification, anomaly detection, and keyword spotting. It runs on the board. Students collect sensor data, train a small model, and load it onto the board to test it.

## Privacy and safety
No account is needed for the board, and the internet is used at setup. The boards run code locally. Cloud training in Edge Impulse Studio sends sensor data to that service, which has separate terms the research did not review. The Seeed store policy says its services are not intended for children under 16. That is a data rule and not a stated class limit. A teacher should check the Edge Impulse terms before students create accounts.

## Ideas by subject
### computer_science
1. Upload a blink sketch and change the speed.
2. Read a sensor value and print it on a computer.
3. Collect motion data with a Sense board and train a classifier.
4. Test keyword spotting with a few spoken words.
5. Explain how a tiny board runs a trained model.

### engineering
1. Compare two XIAO boards and list their sensors.
2. Wire a small circuit to a board.
3. Build a wearable that detects a movement.
4. Fit the board into a small case.
5. Test the device and write a short report.
