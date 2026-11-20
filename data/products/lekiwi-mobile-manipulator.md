---
slug: lekiwi-mobile-manipulator
tagline: An open-source 3D printed robot with a wheeled base and arm that learns by imitation.
---

## Overview
LeKiwi is an open-source low-cost mobile manipulator with a three-wheel holonomic base, a Raspberry Pi 5, workspace and wrist cameras, and an SO-ARM101 arm. Builders 3D print parts and follow a bill of materials and an assembly guide. It is natively supported by Hugging Face LeRobot for teleoperation, dataset recording, and policy training. It suits experienced builders in high school.

## Benefits for students
- Students print, assemble, and calibrate a real robot.
- Students record demonstrations with a leader arm.
- Students train a policy from their own data.

## Benefits for teachers
- The project is open source with URDF and Fusion 360 CAD files.
- Versions exist for 5V, 12V, and wired power.
- A third-party tutorial warns that LeRobot changes quickly. Teachers should expect updates.

## Benefits for schools
- Parts cost was not on the fetched pages. A buyer guide rates the hardware cost as low to medium.
- A 3D printer, servos, cameras, a battery, and a laptop are needed.
- The project needs 3D printing, servo setup, SSH, and the command line. IT should plan on days.

## Getting started
- [ ] Find the LeKiwi project repository and read the bill of materials.
- [ ] Source the parts and print the 3D parts.
- [ ] Assemble the two arms and the base.
- [ ] Install LeRobot on the Pi and on a laptop.
- [ ] Set the motor IDs.
- [ ] Calibrate the arms.
- [ ] Teleoperate the robot with the leader arm.

## Where is the AI?
The AI is imitation learning and robot policy training. Training and recording run on a laptop and the Raspberry Pi, which may be on the school's own computers. Sharing on the Hugging Face Hub is optional. Students record demonstrations and train a policy that repeats the task.

## Privacy and safety
A Hugging Face account is needed only to upload datasets or models, and the internet is needed for setup. Recorded episodes store camera images and joint data locally. The example script uploads them to the Hugging Face Hub with a write token, and Hub content can be public. Hugging Face says its services are not directed to children under 13, which is a data rule. Local only use was not checked in the docs, and the robot link between the Pi and laptop uses SSH over the local network. A teacher should keep faces out of the camera view and check settings before anyone uploads data.

## Ideas by subject
### engineering
1. Print the base parts and record how long the print takes.
2. Assemble the arm and check that each joint moves freely.
3. Calibrate the arm and measure how closely it repeats a position.
4. Compare the 5V, 12V, and wired versions and list one tradeoff.
5. Design a small gripper tool for a lightweight object.

### computer_science
1. Record ten demonstrations of a simple pick up task.
2. Train a policy and compare its attempts with the demonstrations.
3. Record more demonstrations and see whether the policy improves.
4. Explain imitation learning in a short note.
5. Inspect the recorded data and describe what the camera and joints log.
