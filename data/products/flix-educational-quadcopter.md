---
slug: flix-educational-quadcopter
tagline: An open source ESP32 quadcopter with simple Arduino code and a simulator.
---

## Overview
Flix is an open source quadcopter built on an ESP32 board. The README says it is dedicated to education and research. The firmware is simple Arduino code of about 2,000 lines, and it runs in a Gazebo simulator. The hardware uses an ESP32 Mini, an IMU, four brushed motors, a 3D-printed frame and a LiPo battery. It suits older students with strong builder skills.

## Benefits for students
- Students read short flight firmware that fits in one project.
- Students can test the code in a Gazebo simulator.
- Students build a drone from a 3D-printed frame.

## Benefits for teachers
- The repository has assembly, usage and troubleshooting documents.
- A Python library named pyflix helps with simulation.
- The README says Flix was used in RoboCamp 2025.

## Benefits for schools
- The parts cost was not stated in the README.
- This is a DIY build with no warranty.
- The project needs a 3D printer and IT support.

## Getting started
- [ ] Find the Flix repository on GitHub and read the README.
- [ ] Source the parts listed in the documents.
- [ ] 3D print the frame.
- [ ] Assemble the drone.
- [ ] Flash the Arduino firmware.
- [ ] Test in the Gazebo simulator before the first flight.
- [ ] Fly in a safe, open room with a teacher present.

## Where is the AI?
Flix has no AI. It runs flight control code on the ESP32. Students build skills in sensors, feedback and logic by reading how the code uses the IMU to keep the drone level.

## Privacy and safety
No account is needed and the README names no cloud service. The quadcopter flies on the ESP32 and is controlled by an RC transmitter, a USB gamepad over Wi-Fi, or MAVLink. No privacy policy exists for the project. The main guide is the author's own Russian language textbook site, and it is not independent. A teacher should treat the quadcopter as a safety risk. Spinning propellers and LiPo batteries need adult supervision and a clear flying space.

## Ideas by subject
### engineering
1. Build the frame and list each part of the drone.
2. Weigh the drone and discuss how weight affects flight.
3. Follow the troubleshooting guide to fix a build problem.
4. Compare the simulated flight with a real flight.
5. Write a safety plan for the flying space.

### computer_science
1. Read the Arduino firmware and describe the main loop.
2. Use the pyflix library to run a simple flight in the simulator.
3. Change one setting in the code and predict the result.
4. Trace how IMU data flows to the motors.
5. Add comments that explain one section of the firmware.
