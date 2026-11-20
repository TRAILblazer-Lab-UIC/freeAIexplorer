---
slug: openmv-cam-h7-and-rt1062
tagline: Small programmable cameras that run vision code in MicroPython on the board.
---

## Overview
OpenMV cameras are small microcontroller boards with an image sensor. Students program them in MicroPython. The docs list the H7, the H7 Plus, and the RT1062. Programs run on the camera and can load .tflite models through the ml library. Students write and debug code in the OpenMV IDE on a computer. The vendor does not state a grade range.

## Benefits for students
- Students run face and object detection on a tiny camera.
- Students write MicroPython and see results in the IDE.
- Students can load a trained model onto the board.

## Benefits for teachers
- Example scripts help a first lesson.
- Forums at forums.openmv.io offer help.
- A teacher needs comfort with code.

## Benefits for schools
- The storefront lists the RT1062 at 200 USD, with accessories from 5 to 80 USD.
- The camera runs on the board and the internet is needed at setup only.
- IT will likely need to install the IDE.

## Getting started
- [ ] Find the OpenMV site and choose a camera.
- [ ] Ask IT to install the OpenMV IDE.
- [ ] Connect the camera by USB.
- [ ] Run an example script.
- [ ] Update the firmware from the IDE if prompted.
- [ ] Load a .tflite model.
- [ ] Check which boards support your model.

## Where is the AI?
The AI handles image classification, face detection, and object detection. It runs on the camera board. Students load models as .tflite files and write code that reacts to the results. The docs do not say which boards run .tflite models, and real-time YOLO is described only for NPU boards.

## Privacy and safety
No account is needed, and the internet is used at setup. The docs say there is no host computer and no cloud at run time, and that face detection frames never leave the camera. The docs site has no formal privacy policy. The storefront has a login for purchases only. The RT1062 also has a microphone. A teacher should decide what the camera may see and whether any images are saved to the card.

## Ideas by subject
### computer_science
1. Run an example script and describe the camera feed.
2. Write MicroPython that prints a message when a face appears.
3. Load a classification model and test it on classroom objects.
4. Change a setting in the code and compare the results.
5. Explain how a model can run on a small board.

### engineering
1. Connect the camera and check the USB link.
2. Mount the camera on a small robot or stand.
3. Test the sensor in bright and dim light.
4. Use a detection result to turn on an LED.
5. Compare the H7 and the RT1062 using the docs.
