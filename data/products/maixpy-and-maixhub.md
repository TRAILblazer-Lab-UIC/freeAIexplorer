---
slug: maixpy-and-maixhub
tagline: A Python framework for AI vision and audio on Sipeed MaixCAM boards.
---

## Overview
MaixPy v4 is a Python framework for AI vision and audio applications on Sipeed MaixCAM, MaixCAM-Pro, and MaixCAM2 boards. It includes object detection, face recognition, OCR, QR and AprilTag recognition, line following, and voice features. MaixHub is an online service that trains custom models in the cloud. Students write Python in the MaixVision workstation. The vendor does not state a grade range, and the tools suit advanced high school students.

## Benefits for students
- Students run real vision models on a small board.
- Students can train their own model on MaixHub.
- Students control hardware over UART and I2C.

## Benefits for teachers
- The software and MaixHub are free.
- Many vision features come ready to use.
- A teacher needs strong Python and board skills.

## Benefits for schools
- The MaixCAM hardware must be bought separately. The wiki gives no prices.
- Recognition runs on the board.
- IT will likely need to help install MaixVision.

## Getting started
- [ ] Find the MaixPy wiki and read the supported board list.
- [ ] Buy a MaixCAM, MaixCAM-Pro, or MaixCAM2 board. The older Maix-I and Maix-II boards do not work with v4.
- [ ] Ask IT to install MaixVision on a PC.
- [ ] Flash the system image to the board.
- [ ] Connect the board to MaixVision.
- [ ] Run a first example such as object detection.
- [ ] Decide whether students need a MaixHub account. The account is optional.

## Where is the AI?
The AI covers image classification, object detection, face recognition, keypoint detection, OCR, speech recognition, and text to speech. Recognition runs on the board. MaixHub trains custom models in the cloud and then deploys them to the board. Students write Python that uses what the board sees.

## Privacy and safety
Accounts are optional and the internet is needed at setup. MaixPy inference runs on the board. MaixHub training uploads images to Sipeed's online service. The research found no privacy policy for MaixHub, and the privacy page returned only a title. The wiki does not say what data is uploaded or how it is handled. LLM and VLM features run fully offline on MaixCAM2 only. A teacher should check MaixHub terms before students upload any pictures.

## Ideas by subject
### computer_science
1. Run the object detection example and list what the board finds.
2. Write Python that prints a message when a face is detected.
3. Train a model on MaixHub with pictures of classroom items.
4. Compare the trained model with the built-in one.
5. Use QR codes to give the board different commands.

### engineering
1. Flash the board and connect it to MaixVision.
2. Send a signal from the board to a motor over UART.
3. Mount the board on a small robot and test line following.
4. Test how lighting changes recognition.
5. Write a wiring guide for the project.
