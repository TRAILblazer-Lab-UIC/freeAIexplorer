---
slug: esp32-s3-on-device-vision-training-system-bc-teacher-project
tagline: An open source C++ project that trains and runs an image classifier on a small board.
---

## Overview
This open source C++ project collects images, trains a small neural network, and runs live image recognition entirely on an ESP32-S3 board. The paper reports about 1,750 lines of C++ and three image classes. The reference hardware is the Seeed Studio XIAO ESP32-S3 Sense or the XIAO ML Kit. The paper and repository call it a research proof of concept and not a classroom product.

## Benefits for students
- Students see every step of training happen on a tiny board.
- Students capture their own images for each class.
- Students watch a model classify live camera frames.

## Benefits for teachers
- The source code and sample datasets use the MIT license.
- The project builds with the Arduino IDE or PlatformIO.
- Progress shows on an OLED screen or the serial monitor.

## Benefits for schools
- The code is free. The README lists the Sense board at about $14.90 and the ML Kit at about $22 to $38.90.
- A FAT32 microSD card is also needed.
- The paper says training and recognition run on the board, and IT is likely needed for setup.

## Getting started
- [ ] Find the project repository and read the README.
- [ ] Buy a XIAO ESP32-S3 Sense or XIAO ML Kit and a FAT32 microSD card.
- [ ] Ask IT to install the Arduino IDE and the U8g2 library.
- [ ] Select the XIAO ESP32-S3 board and set PSRAM to OPI.
- [ ] Insert the microSD card. A missing or corrupted card is the most common failure.
- [ ] Compile and upload the sketch, using bootloader mode if needed.
- [ ] Open the serial monitor at 115200 baud.
- [ ] Capture images for each class, train, and run inference.

## Where is the AI?
The AI is a small two layer convolutional network that classifies images. Both training and recognition run on the microcontroller itself. Students capture pictures of each class, train the model on the board, and then test it on live camera frames. The paper reports about 9 minutes per training run.

## Privacy and safety
No account is needed and the internet is used only at setup. Training and recognition run on the board, and images are stored on a microSD card in the board. The paper contrasts this with cloud workflows but does not discuss data privacy directly. The project is a research proof of concept, and no classroom use is documented. A teacher should make sure students do not capture photos of people without permission and should decide who keeps the SD card.

## Ideas by subject
### computer_science
1. Capture 20 images each of two objects and train the model.
2. Test the model on a third object and describe what it guesses.
3. Compare results for dim light and bright light.
4. Read the C++ training code and mark where the model learns.
5. Explain why a model trained on 64 by 64 pictures sees only small details.
