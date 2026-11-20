---
slug: seeed-xiao-esp32s3-sense
tagline: A tiny board with a camera and microphone for voice and vision TinyML.
---

## Overview
The XIAO ESP32S3 Sense is a thumb-sized board, 21 by 17.8 mm. It has a dual-core ESP32-S3, 8 MB of PSRAM, and 8 MB of flash. The Sense variant adds a camera, one digital microphone, and a microSD slot. Students program it with the Arduino IDE or MicroPython.

## Benefits for students
- Students work with a real camera and microphone on a tiny board.
- Students run small trained models on the device.
- Students learn embedded programming.

## Benefits for teachers
- The vendor wiki links to Edge Impulse content.
- A free ebook by Marcelo Rovai is listed on the wiki.
- A Harvard course uses the board.

## Benefits for schools
- The Seeed store lists the Sense board at 18.90 dollars.
- Work stays on the device.
- The hardware license is not confirmed.

## Getting started
- [ ] Buy the XIAO ESP32S3 Sense from the Seeed store.
- [ ] Get a USB-C cable and a computer.
- [ ] Install the Arduino IDE with the esp32 board package 2.0.8 or later.
- [ ] Connect the board and upload a sketch.
- [ ] Try MicroPython if you prefer.
- [ ] Note that the UF2 bootloader flashing is Windows only.
- [ ] Follow a voice or vision example from the wiki.

## Where is the AI?
The AI is optional TinyML for image and audio projects, often built with Edge Impulse. The model runs on the board. Students capture images or sounds, train a small model, and run it on the device. They can then check the results.

## Privacy and safety
No account is needed for the board, and the internet is used at setup. The board has no vendor cloud requirement. The factory firmware creates a Wi-Fi access point, and code that adds Wi-Fi can send camera or audio data anywhere. Edge Impulse has its own account and policy, which the research did not review. A teacher should check how students store camera images on the microSD card.

## Ideas by subject
### computer_science
1. Upload a sketch that takes a photo and saves it to the SD card.
2. Record a short sound and print its level.
3. Train a model to tell two objects apart with the camera.
4. Test the model in different light and record the results.
5. Explain what a model does with a camera image on a tiny board.

### engineering
1. Read the specs and list what each part does.
2. Power the board from a battery and test how long it runs.
3. Mount the board in a small case with a hole for the camera.
4. Compare the board with a larger computer for one task.
5. Design a device that uses the camera or microphone.
