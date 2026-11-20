---
slug: via-pixetto
tagline: A small smart camera board with built-in vision for teaching AI to students.
---

## Overview
VIA Pixetto is a small smart camera board sold for teaching AI and machine learning to students aged 12 and up. It has built-in recognition for objects, shapes, colors, faces, handwriting, AprilTags, and lanes. Students program it with Scratch-based blocks. Advanced students use Python and TensorFlow Lite.

## Benefits for students
- Students use ready-made vision models without training first.
- Students move from blocks to Python as they grow.
- Students link the camera to Arduino, micro:bit, or Raspberry Pi.

## Benefits for teachers
- The camera works with boards that many classes already own.
- Pixetto Launcher offers online model training.
- Launch coverage dates from 2020. Teachers should check what is current.

## Benefits for schools
- The board cost 85 USD plus shipping at the 2020 launch. Current price and availability are not confirmed.
- Pixetto Studio was described for Windows 7 to 10 only. It is not a Chromebook tool as described in 2020.
- IT should test current software support before adopting.

## Getting started
- [ ] Find the Pixetto board on the VIA site and confirm it is still sold.
- [ ] Check the price and the current software version.
- [ ] Install Pixetto Studio on a Windows PC.
- [ ] Connect the board by Micro USB power.
- [ ] Run a built-in vision model such as color detection.
- [ ] Program a short Scratch-based block project.
- [ ] Ask VIA whether the online training needs an account.

## Where is the AI?
The AI is a set of built-in vision models for objects, faces, colors, shapes, handwriting, and lanes. The vendor lists custom model training through Pixetto Launcher. The materials do not say clearly where each part runs. Students use the camera's results in their code.

## Privacy and safety
The materials do not state which accounts students need, whether the internet is needed, or where data goes. Detection runs on the board. The software list also includes cloud computing detection and an online training tool called Pixetto Launcher, and the research did not read how their data flows. The camera sees faces and handwriting. A teacher should ask VIA whether online training or cloud detection uploads images and should decide who may be in front of the camera.

## Ideas by subject
### computer_science
1. Use the color detection model to make a block program react to a red card.
2. Test face detection and record how it handles different angles.
3. Train a custom model on three classroom objects and test it.
4. Move a block project into Python and compare the code.
5. Write a rule that sends a result from the camera to an Arduino.

### engineering
1. Connect the camera to an Arduino or micro:bit and test the link.
2. Mount the camera on a small cart and test lane detection on a taped track.
3. Measure how detection changes with distance.
4. Build a sorting prototype that uses color detection.
5. Document the wiring so another team can repeat it.
