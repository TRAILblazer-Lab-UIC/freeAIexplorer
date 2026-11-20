---
slug: sipeed-maixcam-and-maixcam-pro
tagline: Camera boards with a built-in AI chip that students program in Python.
---

## Overview
MaixCAM and MaixCAM-Pro are camera boards from Sipeed. They have an NPU rated at 1 TOPS and 256 MB of memory. The MaixCAM has a 2.3 inch touchscreen, WiFi 6, and GPIO headers. Older students program them in MaixPy, which is Python, or in MaixCDK, which is C and C++.

## Benefits for students
- Students run image classification and object detection on a small board.
- Students try face and hand tracking, OCR, and speech features.
- Students write Python code and see results on the touchscreen.

## Benefits for teachers
- The MaixPy page names teachers and students as target audiences.
- MaixVision gives teachers an editor to write and run code.
- The setup takes real effort. Teachers may want IT help.

## Benefits for schools
- The wiki pages list no price. They link to Chinese marketplaces and AliExpress.
- The code is open source, and the MaixPy docs show an Apache-2.0 badge.
- The board runs the AI locally, but IT will need to flash images and set up computers.

## Getting started
- [ ] Find the MaixCAM board and its wiki on the Sipeed site.
- [ ] Ask IT to help with buying. The listed stores are mostly outside the US.
- [ ] Install MaixVision on a Windows, Mac, or Linux computer.
- [ ] Flash the system image to the TF card or SD NAND.
- [ ] Connect the board with a USB-C cable.
- [ ] Run a sample MaixPy script for classification.
- [ ] Check what MaixHub collects before any student signs in.

## Where is the AI?
The AI runs on the board using its NPU. It covers classification, detection, face and hand keypoints, tracking, OCR, speech recognition, and text to speech. Students write MaixPy scripts that use these features. They can also train models online with MaixHub, which is optional.

## Privacy and safety
An account is optional and the internet is used at setup. The AI runs on the board, and the camera sees whatever is in front of it. MaixHub online training would upload data to Sipeed servers. The research did not read its terms or any privacy policy. A teacher should check MaixHub terms before students sign in or upload images.

## Ideas by subject
### computer_science
1. Write a MaixPy script that classifies objects held up to the camera.
2. Run the object detector and record how often it finds a chosen item.
3. Try face detection and discuss what the board should do with the faces it sees.
4. Combine detection with the screen so the board shows a label for each object.
5. Use OCR to read a printed sign and print the text.

### engineering
1. Connect the GPIO header to an LED or buzzer and trigger it from a detection.
2. Mount the board on a small project and test how steady the camera stays.
3. Measure how long the board takes to boot and run a model.
4. Plan a sorting project that uses object detection and a motor.
5. Document the flashing and setup steps for another class.
