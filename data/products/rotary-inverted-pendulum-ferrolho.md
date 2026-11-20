---
slug: rotary-inverted-pendulum-ferrolho
tagline: A build-it-yourself Furuta pendulum that balances itself with a learned control policy.
---

## Overview
This is a do-it-yourself rotary inverted pendulum, also called a Furuta pendulum. A reinforcement learning policy is trained in simulation, fine-tuned on the real rig, and then shrunk to run on an Arduino Nano. It suits advanced high school students and a teacher with electronics and Python skills. Students print, wire, and train the balancing arm.

## Benefits for students
- Students build a real machine from printed parts, a motor, and sensors.
- Students see a trained policy move from a simulation to physical hardware.
- Students watch a small Arduino keep a pendulum upright on its own.

## Benefits for teachers
- The repo holds a bill of materials and guides for printing, wiring, and first power-on.
- A training guide and an in-browser MuJoCo demo help a teacher preview the idea.
- The code and hardware files are open source.

## Benefits for schools
- The repo states about 20 GBP in parts.
- The finished pendulum runs on an Arduino Nano with no internet connection.
- IT will likely need to help install the software for training.

## Getting started
- [ ] Find the Rotary Inverted Pendulum repository by Ferrolho and read the README.
- [ ] Open the in-browser MuJoCo demo to preview the balancing behavior.
- [ ] Order the parts on the bill of materials and arrange access to a 3D printer.
- [ ] Print the parts and wire the electronics using the wiring guide.
- [ ] Follow the first power-on guide before running any motor.
- [ ] Ask IT to approve a Python install on a computer for training.
- [ ] Follow the training guide only to retrain the policy.

## Where is the AI?
The AI is a reinforcement learning policy that controls the motor. It is trained in a MuJoCo simulation with the SAC method, fine-tuned on the real rig, and then distilled to run on the Arduino Nano. After training, the AI runs on the device itself. Students can retrain the policy and compare how it balances.

## Privacy and safety
The project describes no accounts and collects no student data. Training and running the pendulum happen on the computer and the Arduino. Downloading the repository needs the internet once. The repo does not describe safety steps for moving parts. A teacher should check the motor and arm before each class and supervise 3D printer use.

## Ideas by subject
### engineering
1. Print the pendulum parts and assemble the arm following the build guide.
2. Wire the motor and sensors and test the first power-on with a teacher.
3. Tune the mounting so the pendulum swings freely and compare balance times.
4. Draw a diagram of how the sensor, the Arduino, and the motor work together.
5. Measure how long the pendulum stays upright after a small push.

### computer_science
1. Open the MuJoCo demo in a browser and describe what the simulated pendulum does.
2. Run the training guide and watch the reward improve over time.
3. Compare the simulated policy with the policy fine-tuned on the real rig.
4. Read the Arduino firmware and list the steps it repeats in each loop.
5. Explain in a short report why a policy trained in simulation needs fine-tuning on real hardware.
