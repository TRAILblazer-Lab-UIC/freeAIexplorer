---
slug: raspberry-pi-ai-hat-plus-13-and-26-tops
tagline: A Raspberry Pi 5 add-on board with a Hailo accelerator for vision AI.
---

## Overview
The AI HAT+ is an add-on board for the Raspberry Pi 5 with a Hailo neural network accelerator. It comes in 13 TOPS and 26 TOPS versions. It connects over PCIe and takes vision work such as object detection, segmentation, and pose estimation off the Pi. Raspberry Pi OS detects the accelerator automatically, but extra software and models must be installed. The vendor does not state a grade range.

## Benefits for students
- Students run faster vision models on a small computer.
- Students try object detection, segmentation, and pose estimation.
- Students learn how an accelerator adds speed.

## Benefits for teachers
- The HAT works with the rpicam-apps and Picamera2 camera software.
- The AI HAT+ documentation guides setup.
- Setup is coding-oriented, and a teacher needs advanced skills.

## Benefits for schools
- The official page says from 70 USD. The 110 USD figure for the 26 TOPS version was not on the pages read.
- A Raspberry Pi 5 is sold separately, which raises the total cost.
- The AI runs on the device and the internet is needed at setup only.

## Getting started
- [ ] Find the AI HAT+ on the Raspberry Pi site and choose a version.
- [ ] Gather a Raspberry Pi 5 and an optional Active Cooler.
- [ ] Power off the Pi 5.
- [ ] Fit the spacers, header, and PCIe ribbon cable.
- [ ] Mount the HAT.
- [ ] Install the AI software and models.
- [ ] Run a camera demo.

## Where is the AI?
The Hailo accelerator runs object detection, image segmentation, and pose estimation. It runs on the HAT on the device. Students run the demos with a camera and then change the code. The accelerator takes the load off the Pi.

## Privacy and safety
No account is needed and the internet is used at setup. The documentation says inference runs locally and not on a cloud server. How camera frames are handled depends on the software the teacher runs. A teacher should decide what the camera may see. A teacher should also check that students do not save images of people without permission.

## Ideas by subject
### computer_science
1. Run an object detection demo and list what it finds.
2. Run a pose estimation demo and describe the output.
3. Compare the segmentation view with the detection view.
4. Test how many objects the model can find at once.
5. Explain what the accelerator does in your own words.

### engineering
1. Fit the HAT and ribbon cable on the Pi 5 with care.
2. Add the Active Cooler and compare the temperature.
3. Mount the Pi and camera on a stand.
4. Test the demo in bright and dim light.
5. Write a build guide with photos.
