---
slug: hiwonder-landerpi-and-turbopi-llm-enabled
tagline: Raspberry Pi robots that take natural language commands through large AI models.
---

## Overview
LanderPi is a Raspberry Pi 5 robot with a 3D depth camera, a 6-DOF arm, LiDAR, and AI voice input, built on ROS 2. TurboPi is a Raspberry Pi robot car whose upgraded model works with multimodal models such as ChatGPT through an AI voice module. The vendor says users give natural language commands and the robot perceives the scene and acts. Local features such as MediaPipe face tracking are also listed.

## Benefits for students
- Students speak to a robot and watch it act.
- Students work with ROS 2, a depth camera, and LiDAR on LanderPi.
- Students try local features such as face tracking.

## Benefits for teachers
- The vendor describes both a voice and a vision path for projects.
- The code is open source.
- The setup needs strong skills. Plan extra prep time.

## Benefits for schools
- Prices were not retrieved.
- The language model features likely need a network connection and an AI provider key. This is unconfirmed.
- Setup takes days and needs IT. Treat the data flow as a possible third-party AI service until the setup docs confirm a local option.

## Getting started
- [ ] Find the robots on the Hiwonder site and ask the vendor for prices.
- [ ] Ask IT to review the network and AI provider needs.
- [ ] Assemble the robot.
- [ ] Set up the Raspberry Pi image.
- [ ] Configure the AI voice module.
- [ ] Test a local feature such as face tracking first.
- [ ] Add the language model features after IT approves the provider key.

## Where is the AI?
The AI includes scene understanding with vision and language, voice interaction, face tracking, and SLAM navigation. Some features run on the Raspberry Pi robot. The language model features likely call a third-party cloud service. Students give commands, watch the robot respond, and adjust the setup.

## Privacy and safety
An account is not confirmed and the internet is likely needed at all times for the language features. Vendor text says the robot sends environmental data to a vision-language model. A related Hiwonder model lists online deployment through OpenAI's API. The research did not confirm whether these robots send student speech or images to an outside provider. Local features such as face tracking run without the cloud. No privacy policy was reviewed. A teacher should check the provider's terms and keep the robot away from student faces until IT confirms the data flow.

## Ideas by subject
### computer_science
1. Give the robot a spoken command and describe how it understood the words.
2. Try three ways to phrase the same command and compare the results.
3. Run MediaPipe face tracking and note how the robot follows a face.
4. Compare a local feature with a cloud language feature and list one strength of each.
5. Write a short note on what data the robot may send to an AI provider.

### engineering
1. Assemble the robot and test the camera and arm.
2. Use LiDAR to map a classroom corner and view the map.
3. Program the arm to pick up a light object.
4. Compare the depth camera and LiDAR readings of the same wall.
5. Document the ROS 2 setup in a guide for the next team.
