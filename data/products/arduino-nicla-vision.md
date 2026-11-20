---
slug: arduino-nicla-vision
tagline: A tiny Arduino board with a camera that runs image models on the board.
---

## Overview
The Nicla Vision is a small Arduino board of 22.86 by 22.86 mm. It has a 2 MP color camera, a motion sensor, a microphone, and a distance sensor. Students program it in MicroPython and can train an image classifier with Edge Impulse. It suits high school students who are ready for text code.

## Benefits for students
- Students can build a small vision project that runs on a board the size of a stamp.
- Students can train an image classifier and see it work on their own board.
- The board also senses motion, sound, and distance for other projects.

## Benefits for teachers
- Arduino publishes a tutorial for training an image classifier with Edge Impulse.
- The board works with the Arduino IDE and the OpenMV IDE.
- Several Arduino tutorials target the Nicla Voice. Teachers should check the board name before using one.

## Benefits for schools
- The Arduino store showed 58.36 EUR with VAT. The USD price is not confirmed.
- The finished model runs on the board. Training in Edge Impulse needs the internet.
- A teacher project notes that locked-down lab computers make the Edge Impulse client hard to install. Plan IT time.

## Getting started
- [ ] Buy the board from the Arduino store and check the board name.
- [ ] Install the Arduino IDE or the OpenMV IDE on a test computer.
- [ ] Ask IT to allow the Edge Impulse client on lab computers.
- [ ] Connect the board by USB and flash the firmware.
- [ ] Run an example that shows the camera image.
- [ ] Create an Edge Impulse project and collect a small set of images.
- [ ] Train a model and deploy it to the board.

## Where is the AI?
The board runs small machine learning models on the device. It can classify images, detect objects, and classify motion and gestures. Training happens in Edge Impulse, and the finished model then runs on the board. Students collect images, train a model, and test whether it works on their own subject.

## Privacy and safety
The board processes camera and sensor data on the device and sends data only if a project adds Wi-Fi or Bluetooth. Training in Edge Impulse Studio uploads the training data to Edge Impulse, which is a separate vendor. The Edge Impulse tutorials need an Edge Impulse account and the research did not read its policy. Arduino policy offers Junior accounts under 14 with parental consent. A teacher should check the Edge Impulse terms before students upload images and keep faces out of the training photos.

## Ideas by subject
### engineering
1. Mount the board in a small case and test how the camera angle changes what it sees.
2. Use the distance sensor to build a simple object alert.
3. Power the board with a battery and record how long a project runs.
4. Compare two lighting setups and report how each changes the image quality.
5. Build a motion sensing project that reacts to a shake or a tilt.

### computer_science
1. Run the Edge Impulse tutorial and list each step from data to deployed model.
2. Collect 30 photos of two objects and train a classifier to tell them apart.
3. Test the model with a new object and describe what went wrong.
4. Write MicroPython code that lights an LED when the model sees one class.
5. Add more training images and compare the new accuracy with the old.
