---
slug: donkey-car
tagline: An open source Python platform that turns an RC car into a self-driving car.
---

## Overview
Donkey is an open source self-driving car platform for remote control cars, written in Python. It targets hobbyists and students. A Raspberry Pi is the preferred on-board computer. Students drive the car to record camera images and steering data. They then train a neural network and let it drive the car on its own.

## Benefits for students
- Students teach a car to drive from their own driving.
- Students see how training data shapes a neural network.
- Students practice Python and Linux skills.

## Benefits for teachers
- The docs say it is used at the high school and university level.
- Community lesson plans exist per a search snippet.
- An optional simulator allows practice without hardware.

## Benefits for schools
- Building your own car costs about 250 to 300 USD per the docs.
- A Waveshare PiRacer Pro is listed at 262 USD with a Raspberry Pi 4.
- Setup takes several hours, and IT help is likely.

## Getting started
- [ ] Find the Donkeycar documentation and read the guides.
- [ ] Buy or build the car. Assembly takes about 2 hours per the docs.
- [ ] Install the Donkey software on the Raspberry Pi and a host computer.
- [ ] Stay online during the installs.
- [ ] Calibrate steering and throttle.
- [ ] Drive laps to record data.
- [ ] Train a model and run the autopilot.
- [ ] Go offline and test a lap.

## Where is the AI?
The AI is a neural network that learns to steer from images. It trains on a host computer and runs on the car. Students drive, collect data, and train a model. They then watch the car drive itself and improve the data.

## Privacy and safety
No account is needed, and the internet is used for setup. The software runs on the car and a local computer, and camera images and driving logs are stored on the car or a school computer. The docs did not say where model training runs, and the discovery notes mention optional cloud training that the research did not verify. No privacy policy was found. A teacher should decide where student driving data is stored and who can see it. A teacher should also confirm that training stays local and plan a clear track.

## Ideas by subject
### computer_science
1. Drive laps to record data and describe what the car records.
2. Train a model and test it on a track.
3. Compare a model trained on few laps with one trained on many.
4. Read the Python code that controls steering.
5. Explain why bad driving data leads to a bad model.

### engineering
1. Assemble the car chassis and list each part.
2. Calibrate steering and throttle and record the values.
3. Mount the camera and test a few angles.
4. Build a track and mark its corners.
5. Measure the lap time before and after a change.
