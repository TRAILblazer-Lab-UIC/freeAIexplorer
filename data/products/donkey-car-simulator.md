---
slug: donkey-car-simulator
tagline: A free Unity simulator for training and testing self-driving Donkey car models.
---

## Overview
The Donkey Simulator is a virtual version of the Donkey car built on the Unity game platform. A Donkey Python process connects to it so a trained model can drive the simulated car. The Donkey Gym project wraps it as a Gymnasium environment. Students use the normal drive, train, and test commands with the simulator acting as virtual hardware.

## Benefits for students
- Students train a driving model without a physical car.
- Students use the same commands as the real platform.
- Students can test many laps quickly.

## Benefits for teachers
- A Stanford fellow wrote a high school lesson plan with a simulator per a search snippet.
- The simulator removes build and calibration time.
- Gymnasium environments give camera images, rewards, and lap data.

## Benefits for schools
- The download is free.
- It runs on Linux, Windows, and macOS, and not on Chromebooks.
- IT will need to install the software.

## Getting started
- [ ] Find the Donkey Gym releases page and download the simulator for your OS.
- [ ] Ask IT to install the standard Donkey software.
- [ ] Install gym-donkeycar with conda and pip.
- [ ] Create a car app with the donkey createcar command.
- [ ] Set DONKEY_GYM and the simulator path in myconfig.py.
- [ ] Stay online for the installs.
- [ ] Drive a lap, then train and test a model.

## Where is the AI?
The AI is a neural network that learns to drive from simulated camera images. It trains and runs on the local computer. Students drive the virtual car, train a model, and watch it drive. The Gymnasium setup also supports reinforcement learning.

## Privacy and safety
No account is needed, and the docs describe no cloud service or login. The Python client talks to the simulator over a local connection, and the web control page is served locally. Sample driving data is a separate Google Drive download. No privacy policy was found. A teacher should check that every student computer can run Unity. Joystick control works on Ubuntu only.

## Ideas by subject
### computer_science
1. Drive a few laps in the simulator and record the data.
2. Train a model on the laps and watch it drive.
3. Compare models trained on different amounts of data.
4. Read the myconfig.py file and change one setting.
5. Describe how a reward could teach the car to stay on the track.
