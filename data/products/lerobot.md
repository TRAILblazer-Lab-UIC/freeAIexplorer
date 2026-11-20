---
slug: lerobot
tagline: A free Hugging Face library for recording robot data and training robot policies.
---

## Overview
LeRobot is a Hugging Face open-source library with models, datasets, and tools for real-world robotics in PyTorch. It supports low-cost arms such as SO-101, plus LeKiwi, Koch, Unitree G1, and others. Users teleoperate a leader arm, record datasets in the LeRobotDataset format, and train policies. It is aimed at developers and advanced high school students.

## Benefits for students
- Students record demonstrations and train a robot policy.
- Students use PyTorch tools that professionals use.
- Students can try low-cost arms such as the SO-101.

## Benefits for teachers
- The software is free and installs with pip.
- The docs include an SO-100 assembly and setup guide.
- The docs change fast. Teachers should check the latest steps.

## Benefits for schools
- The software costs nothing. Supported arms are bought or 3D printed separately.
- A GPU is practical for training, although the fetched pages do not state the need.
- IT should plan on several days. Commands assume a terminal, and the first arm takes about an hour to assemble per the docs.

## Getting started
- [ ] Find the LeRobot project on Hugging Face and read the docs.
- [ ] Ask IT to approve a Python environment on a lab computer.
- [ ] Install LeRobot with pip and the extras for the robot.
- [ ] Find the USB ports for the arms.
- [ ] Set the motor IDs.
- [ ] Calibrate the leader and follower arms.
- [ ] Record a small dataset and train a policy.

## Where is the AI?
The AI is imitation learning and robot policy training. It runs on the local computer. Students teleoperate a leader arm, record data, and train a policy that tries to repeat the task. Sharing data and models on the Hugging Face Hub is optional.

## Privacy and safety
A Hugging Face account is needed only for Hub upload, and the internet is needed for setup. Recordings hold camera images and joint data that are stored locally. The example scripts upload to the Hugging Face Hub with a write token, and Hub content can be public. Hugging Face says its services are not directed to children under 13 and that it does not knowingly collect their data. The research did not confirm whether upload can be skipped in every script. A teacher should keep faces out of the camera view and check that students do not upload recordings by accident.

## Ideas by subject
### computer_science
1. Install LeRobot and run the calibration command line tools.
2. Record a dataset of a simple task and open it to see the data fields.
3. Train a policy on the dataset and compare it with the demonstrations.
4. Record more examples and note how the policy changes.
5. Explain in a short note what imitation learning is.

### engineering
1. Assemble the SO-101 arm from the guide and track the time.
2. Set the motor IDs and test each joint.
3. Calibrate the leader and follower arms and check how well they match.
4. Design a simple task space with objects for the arm to move.
5. Document common mistakes in a troubleshooting list.
