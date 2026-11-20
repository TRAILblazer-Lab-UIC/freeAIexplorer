---
slug: google-coral-usb-accelerator-and-dev-board
tagline: Edge TPU hardware for running TensorFlow Lite models on a device, now likely legacy.
---

## Overview
The Coral USB Accelerator and Dev Board are hardware built around Google's Edge TPU chip for running TensorFlow Lite models on a device. The USB Accelerator plugs into a computer such as a Raspberry Pi to speed up image recognition. The coral.ai product pages now point to a newer Coral NPU platform that does not list these boards. Retail and repository signs suggest the older boards are no longer actively developed.

## Benefits for students
- Students run compiled image models on small hardware.
- Students see how a special chip speeds up recognition.
- Students practice Python and Linux skills.

## Benefits for teachers
- The software libraries are on GitHub under an Apache 2.0 license.
- The boards suit teachers who want to show edge AI to advanced high school students.
- The work needs strong Linux and Python comfort.

## Benefits for schools
- The price was not confirmed. Retailers list the USB Accelerator as discontinued.
- The AI runs on the device and the internet is needed only at setup.
- IT should check stock and software support before planning a purchase.

## Getting started
- [ ] Check retailers for stock and confirm the boards are still supported.
- [ ] Choose a host computer such as a Raspberry Pi.
- [ ] Ask IT to help with the Linux setup.
- [ ] Install the Edge TPU runtime on the host.
- [ ] Install the PyCoral library.
- [ ] Run a compiled TensorFlow Lite example model.
- [ ] Test the model on a few classroom images.

## Where is the AI?
The AI is image classification and object detection. The models run on the Edge TPU chip in the accelerator or the Dev Board. Students run compiled models and look at the results. Advanced students can change the code to test their own ideas.

## Privacy and safety
No account is needed and the internet is used at setup only. The inference runs on the hardware. Images need not leave the device. The product pages do not describe data handling. This reflects how the device works and is not a vendor statement. A teacher who adds networking could send data off the device. A teacher should check that the software still works with current operating systems and that any added network code is reviewed.

## Ideas by subject
### computer_science
1. Run an example image classifier and list the labels it gives for ten photos.
2. Compare the speed of the model with and without the accelerator.
3. Run object detection on a short classroom video and count the objects found.
4. Write a Python script that prints a message when a certain object appears.
5. Explain what a compiled TensorFlow Lite model is in a short note.

### engineering
1. Mount the accelerator on a Raspberry Pi and test the USB connection.
2. Build a camera station that classifies items placed on a table.
3. Measure the power draw of the board during recognition.
4. Design a case that keeps the accelerator cool.
5. Document a setup guide for the next class.
