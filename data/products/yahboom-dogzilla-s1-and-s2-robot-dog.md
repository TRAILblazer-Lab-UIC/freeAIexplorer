---
slug: yahboom-dogzilla-s1-and-s2-robot-dog
tagline: A desktop robot dog with twelve joints that students program in Python.
---

## Overview
DOGZILLA S1 and S2 are 12 degree of freedom desktop quadruped robot dogs from Yahboom. They use a Raspberry Pi 5 as the main board. Students in high school program them in Python on ROS2 Humble and use camera vision functions such as face detection and line patrol. The S2 adds lidar and a voice module that the S1 lacks.

## Benefits for students
- Students program a walking four-legged robot.
- Students try face detection, target tracking, and line patrol.
- Students learn how a robot uses ROS2.

## Benefits for teachers
- Yahboom publishes code on GitHub.
- The vision functions work as ready examples.
- The S2 offers extra sensors for older students.

## Benefits for schools
- The Yahboom store lists the S1 at about 660 dollars, and the Pi board is sold separately in some listings.
- The internet is needed for setup and for downloading tutorials.
- IT will likely need to help, and no classroom reports were found.

## Getting started
- [ ] Find the DOGZILLA on the Yahboom store and check whether a Raspberry Pi 5 is included.
- [ ] Buy a Raspberry Pi 5 board for any listing that excludes it. The manual lists 4GB.
- [ ] Charge the 7.4V battery.
- [ ] Assemble the robot.
- [ ] Ask IT to flash or use the provided system image.
- [ ] Download the Yahboom tutorials and code.
- [ ] Try a first Python example for walking.

## Where is the AI?
The AI is a set of camera based vision functions such as label recognition, face detection, target tracking, and line patrol. The materials do not say where they run. Listings use large model wording, but no source describing an onboard language model was found. Students use the examples and extend them with their own programs.

## Privacy and safety
No account is needed and the internet is used for setup. The Yahboom store privacy policy covers website visitors and customers. It lists sharing with service suppliers and does not address children or data location. No page read documents whether the AI large model feature sends camera or voice data to a cloud service. A teacher should ask Yahboom about that feature and check where the camera points. A teacher should also keep fingers away from the leg joints.

## Ideas by subject
### computer_science
1. Run a Yahboom example that makes the robot walk forward.
2. Test face detection and record how often it finds a face.
3. Write a Python program that makes the dog follow a colored target.
4. Try line patrol on a taped line and adjust the settings.
5. Read the ROS2 code and name the parts the robot uses.

### engineering
1. Assemble the robot and test each of the twelve joints.
2. Measure how long the robot walks on one battery.
3. Compare walking on carpet and on a smooth floor.
4. Design a small obstacle course for the dog.
5. Adjust the camera mount and compare detections.
