---
slug: so-arm100-so-101-robot-arm
tagline: Open source 3D-printed leader and follower robot arms that learn from demonstrations.
---

## Overview
The SO-100 and SO-101 are open source 3D-printed robot arms. The SO-101 was designed by RobotStudio with Hugging Face and works with the LeRobot library. A person moves the leader arm, and the follower arm copies it. Advanced high school students record these moves and train a policy from them.

## Benefits for students
- Students print, assemble, and calibrate a real robot arm.
- Students record their own demonstrations for imitation learning.
- Students train a policy and watch the arm repeat a task.

## Benefits for teachers
- The bill of materials and print files are open.
- Hugging Face publishes an assembly guide for the SO-101.
- A related Seeed course gives a longer path through the same arms.

## Benefits for schools
- Parts cost about 122 dollars for one follower arm and about 230 dollars for a pair.
- The software is open source, and the internet is needed only for setup.
- IT will likely need to help, and a GPU helps with training.

## Getting started
- [ ] Find the SO-101 documentation from Hugging Face LeRobot and read the assembly guide.
- [ ] Use the SO-101 files. The SO-100 docs are deprecated.
- [ ] Order the parts or a vendor kit and arrange 3D printing.
- [ ] Ask IT to install LeRobot and the Feetech SDK on a computer.
- [ ] Assemble the arms and set the motor IDs.
- [ ] Calibrate the leader and follower arms.
- [ ] Record a short demonstration and test the policy.

## Where is the AI?
The AI is an imitation learning policy trained with LeRobot. Students move the leader arm to show a task and record the data. They then train a policy that runs on the local computer and drives the follower arm. A GPU speeds up training.

## Privacy and safety
No account is needed, and the internet is used at setup. The arms connect to a computer over USB. Training can use cloud GPUs and the Hugging Face hub for datasets, and the docs read here did not cover this. Camera recordings of the workspace may be created. The materials do not say what student data is collected. A teacher should check where any camera points and where datasets are stored. A teacher should also supervise 3D printers and keep fingers clear of moving servos.

## Ideas by subject
### engineering
1. Print the arm parts and sort them by joint before assembly.
2. Assemble the follower arm and test each servo.
3. Calibrate the arms and measure how closely the follower copies the leader.
4. Design a simple gripper tip for a chosen object.
5. Time a pick and place task and look for ways to speed it up.

### computer_science
1. Record ten demonstrations of a simple task with the leader arm.
2. Train a policy and compare it with the original demonstrations.
3. Change the number of demonstrations and record how results change.
4. Read a LeRobot command and explain what it does in plain words.
5. Write a report on why more varied demonstrations help a policy.
