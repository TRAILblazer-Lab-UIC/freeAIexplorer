---
slug: nvidia-jetbot
tagline: An open-source Jetson Nano robot that students program from a web browser.
---

## Overview
JetBot is an open-source robot platform built on the NVIDIA Jetson Nano with a camera. Users program it from a web browser with Jupyter notebooks. Lessons run from motor control to training a custom collision avoidance model. The vendor does not state a grade range, and the build suits advanced high school students.

## Benefits for students
- Students build a robot and teach it to avoid collisions.
- Students train a real image model with their own photos.
- Students program in Jupyter notebooks from a browser.

## Benefits for teachers
- The documentation and notebooks guide each lesson.
- CMU Robotics Academy runs an online educator course that covers JetBot vision. Participants must be 18 or older.
- Third-party kits from SparkFun and Waveshare exist.

## Benefits for schools
- The docs say the build costs under 250 USD in parts including the Jetson Nano.
- The robot needs a Wi-Fi network.
- Software images are large downloads during setup.

## Getting started
- [ ] Find the JetBot documentation and read the parts list.
- [ ] Buy the parts or a third-party kit.
- [ ] Build the chassis.
- [ ] Flash the software to the Jetson Nano.
- [ ] Connect the robot to Wi-Fi.
- [ ] Start the Docker container.
- [ ] Open the robot's IP address in a browser.

## Where is the AI?
The AI handles image classification, collision avoidance, and object detection. It runs on the Jetson Nano on the robot. Students collect photos, train a model, and test how the robot reacts. They can then improve the model with more examples.

## Privacy and safety
No account is needed, and the docs describe collecting photos and training on the robot itself. The internet is used at setup, and the robot needs a Wi-Fi network for the browser based Jupyter notebooks. The research found no privacy policy for the project. The camera sees whatever is in front of it. A teacher should decide where the robot runs and what photos are saved.

## Ideas by subject
### computer_science
1. Work through the motor control notebook and drive the robot with code.
2. Collect photos for a collision avoidance model.
3. Train the model and test it on a course.
4. Add photos of cases where the robot failed and retrain.
5. Explain how the model decides to turn.

### engineering
1. Build the chassis and check each motor.
2. Mount the camera at a good height and angle.
3. Build an obstacle course for the robot.
4. Measure battery life during a run.
5. Compare the robot's performance after each design change.
