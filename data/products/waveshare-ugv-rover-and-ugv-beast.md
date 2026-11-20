---
slug: waveshare-ugv-rover-and-ugv-beast
tagline: Wheeled and tracked robots with a camera for advanced vision and ROS2 projects.
---

## Overview
UGV Rover and UGV Beast are wheeled and tracked robots driven by a Raspberry Pi 4B or 5 or a Jetson Orin, with an ESP32 for motor control. The wiki lists color, object, gesture, and face recognition with OpenCV and MediaPipe. It also supports ROS2 Humble, lidar mapping, and Gazebo simulation. Some kits add a 4 DOF arm.

## Benefits for students
- Students code vision tasks in OpenCV and MediaPipe.
- Students try ROS2 and lidar mapping on a real robot.
- Students work in JupyterLab tutorials.

## Benefits for teachers
- The robot offers a web control page and JupyterLab tutorials.
- The wiki lists large language model control as an advanced option.
- The kit suits older students who already code.

## Benefits for schools
- Listings range from 244.99 to 1302.99 USD depending on model and options.
- The code is open source.
- The wiki states the robot is not waterproof. IT should plan for a dry space and a teacher install.

## Getting started
- [ ] Find the UGV Rover or UGV Beast and its wiki on the Waveshare site.
- [ ] Choose a model and confirm what the kit includes, such as 18650 batteries.
- [ ] Assemble the robot.
- [ ] Flash the preconfigured image.
- [ ] Join the robot's hotspot or Wi-Fi.
- [ ] Open the web control page or JupyterLab.
- [ ] Run a simple tutorial before trying vision or ROS2.

## Where is the AI?
The AI includes face, object, gesture, and color recognition run with OpenCV and MediaPipe on the robot's computer. The wiki also mentions large language model control. Students write code in JupyterLab that reacts to what the camera sees. The vendor lists a mix of local and other processing.

## Privacy and safety
No account is needed and the internet is used at setup. The wiki says the robot works without internet and makes its own hotspot. It mentions large language model control without naming a provider, and the research did not confirm whether those features send data to a cloud service. Remote control through third party tunnel services is optional. The materials do not state what student data is collected. A teacher should keep the LLM and remote features off until reviewed and secure the robot's hotspot with a new password.

## Ideas by subject
### computer_science
1. Run a color tracking tutorial and change the target color.
2. Test face recognition and write what it gets wrong.
3. Use MediaPipe gesture recognition to control a movement.
4. Edit a JupyterLab notebook to change how the robot responds.
5. Write the steps a robot follows to map a room with lidar.

### engineering
1. Assemble the robot and test its drive on different floors.
2. Compare the wheeled and tracked builds on a ramp.
3. Mount the pan-tilt camera and pick the best angle.
4. Test the lidar map against the real room.
5. Document the wiring and image setup for another team.
