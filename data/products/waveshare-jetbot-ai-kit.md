---
slug: waveshare-jetbot-ai-kit
tagline: A small wheeled robot with a Jetson Nano that students train in Jupyter notebooks.
---

## Overview
The JetBot AI Kit is a small wheeled robot built around an NVIDIA Jetson Nano. It runs the NVIDIA JetBot software with Jupyter notebooks. Tutorials cover collision avoidance, object tracking, road following, and face recognition. Carnegie Mellon Robotics Academy uses this kit in its Applied AI and Robotics curriculum for high school and college.

## Benefits for students
- Students collect their own images and train a collision avoidance model.
- Students try object detection, road following, and face recognition.
- Students work in notebooks in a web browser.

## Benefits for teachers
- Carnegie Mellon uses the kit to teach classification and reinforcement learning.
- The wiki lists ready tutorials.
- Notebooks give a teacher a clear way to follow each step.

## Benefits for schools
- The wiki gives no price, and the batteries are sold separately.
- The internet is used only for setup.
- Setup uses Docker containers and scripts. IT will likely need to help.

## Getting started
- [ ] Find the JetBot AI Kit on the Waveshare site and read the wiki.
- [ ] Gather a Jetson Nano, a 64GB or larger SD card, and three 18650 batteries.
- [ ] Ask IT to flash the JetBot image onto the card.
- [ ] Charge the batteries.
- [ ] Connect the robot to school Wi-Fi.
- [ ] Open Jupyter in a browser on port 8888.
- [ ] Run the collision avoidance notebook first.

## Where is the AI?
The AI runs on the Jetson Nano on the robot. It includes collision avoidance trained on student images, object detection with SSD MobileNet v2, road following, and face recognition. Students collect examples, train a model, and then see the robot use it.

## Privacy and safety
No account is needed and the internet is used only for setup. The wiki describes training and inference on the robot through a local web interface, and it mentions no cloud service. Wi-Fi is used to reach the robot. A teacher should check that students photograph objects and not classmates. A teacher should also review the Wi-Fi settings.

## Ideas by subject
### computer_science
1. Collect images of blocked and free paths and train a collision avoidance model.
2. Run the object detection notebook and list what the robot finds.
3. Compare results when the training images are few and when they are many.
4. Read one notebook cell and explain it in plain words.
5. Follow the CMU style activity and describe how classification works.

### engineering
1. Assemble the robot and check the wheels and the battery pack.
2. Place the camera at a new angle and test how the robot sees.
3. Build a road with tape and test road following.
4. Measure how long a battery pack lasts under a steady task.
5. Document the setup steps so another team can repeat them.
