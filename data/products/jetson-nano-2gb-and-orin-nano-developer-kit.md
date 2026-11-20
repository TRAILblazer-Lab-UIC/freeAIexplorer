---
slug: jetson-nano-2gb-and-orin-nano-developer-kit
tagline: Small NVIDIA edge AI computers that run vision models locally.
---

## Overview
These are small edge AI computers from NVIDIA used in robot kits and courses. The Jetson Nano 2GB Developer Kit has reached end of life and is no longer sold. The Orin Nano Super Developer Kit is its current low cost successor. Students typically run image classification, detection, and robot vision models. The vendor does not state a grade range.

## Benefits for students
- Students run real vision models on a small computer.
- Students see AI work with no cloud.
- Students can build robot vision projects.

## Benefits for teachers
- The boards run Linux, which suits advanced courses.
- Many robot kits and courses use them.
- A teacher needs comfort with Linux.

## Benefits for schools
- The Orin Nano Super kit lists at 249 USD per NVIDIA.
- The Nano 2GB is discontinued and should not be bought.
- Monitor, keyboard, mouse, storage, and a camera are extra.

## Getting started
- [ ] Find the Orin Nano Super Developer Kit on the NVIDIA site.
- [ ] Gather a monitor, keyboard, mouse, storage, power supply, and a USB camera.
- [ ] Ask IT to help flash JetPack from a host computer.
- [ ] Flash JetPack to the storage.
- [ ] Boot the board.
- [ ] Install the frameworks.
- [ ] Run an image classification example.

## Where is the AI?
The AI runs on the board's GPU. It handles image classification and object detection. Students run models on camera images and see results at once. They can use the board to add vision to a robot.

## Privacy and safety
No account is needed for the board, and it runs Linux locally. Data stays on the device unless the student's own code sends it elsewhere. Downloading JetPack and models needs the internet. The research did not review whether NVIDIA's developer site requires an account for downloads. A teacher should decide what a camera may point at and keep any saved images off shared drives.

## Ideas by subject
### computer_science
1. Run an image classification example and record what the board predicts.
2. Test how well the model handles objects it has not seen.
3. Run an object detection example and count the objects in a photo.
4. Compare the speed of two models on the same image.
5. Explain in your own words why local AI keeps images on the device.

### engineering
1. Set up the board with its monitor, keyboard, and camera.
2. Mount the board and camera on a robot platform.
3. Measure the board's power use during a task.
4. Design a case that keeps the board cool.
5. Plan a robot vision project and list the parts needed.
