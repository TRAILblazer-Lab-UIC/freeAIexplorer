---
slug: espressif-esp32-s3-eye-and-esp-who
tagline: A camera development board with face detection examples for advanced students.
---

## Overview
ESP-WHO is Espressif's image processing platform. It provides examples for face detection and recognition, pedestrian detection, and QR code recognition. The ESP32-S3-EYE board has a camera, an LCD, a microphone, a motion sensor, and a microSD slot. The materials target developers who know embedded C++. It suits advanced high school students or a teacher-led engineering club.

## Benefits for students
- Students run face detection on a small board with its own camera.
- Students learn how AI can run on a tiny chip with no cloud.
- Students can follow an eight part Edge AI workshop.

## Benefits for teachers
- The examples are open code that teachers can read and adapt.
- The workshop gives a long path for a motivated club.
- The technical barrier is high. A teacher needs strong coding skills.

## Benefits for schools
- The board price was not verified.
- The AI runs on the board and no data collection is documented.
- IT will likely need to help install ESP-IDF on school computers.

## Getting started
- [ ] Find ESP-WHO and the Edge AI workshop on Espressif's site.
- [ ] Ask IT to approve installing ESP-IDF on a computer.
- [ ] Get an ESP32-S3-EYE board and a USB cable.
- [ ] Install ESP-IDF and ESP-WHO as in workshop Assignment 1.
- [ ] Build one example.
- [ ] Flash the example to the board.
- [ ] Stay online for setup and for each build. Dependencies download at build time.

## Where is the AI?
The AI detects and recognizes faces and pedestrians in camera images. It runs on the board itself. Students build the examples, flash them, and then change the code. Advanced students can follow the custom model path through ONNX and INT8 quantization.

## Privacy and safety
No account is needed. The workshop pulls build dependencies from the ESP Component Registry at build time. The internet is needed whenever code is built. Inference runs on the board, and no data collection is documented on the pages read. The research did not read a privacy policy. A face detection project points a camera at people. A teacher should get permission before students test it on others and should decide what is saved.

## Ideas by subject
### computer_science
1. Run the face detection example and describe what the board reports.
2. Read the example code and mark where the model is called.
3. Build the QR code example and scan codes that students make.
4. Work through the first parts of the Edge AI workshop as a club.
5. Compare how the board performs in bright and dim light.

### engineering
1. Flash an example to the board and test the camera view.
2. Design a small case or mount for the board.
3. Use the LCD to show a result from the camera.
4. Test how far away a face can be and still be detected.
5. Write a short build log that another student could follow.
