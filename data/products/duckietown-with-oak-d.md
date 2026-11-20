---
slug: duckietown-with-oak-d
tagline: A student project that adds an OAK-D camera and tutorial notebooks to Duckietown robots.
---

## Overview
DuckVision is a student project by two ETH Zurich master's students. It adds the OAK-D camera from the OpenCV AI Kit to Duckietown. The project includes documentation, tutorials, a demo, and a 3D-printed camera mount. It is a research and teaching add-on, and it is not a full classroom curriculum.

## Benefits for students
- Students read Jupyter notebooks on camera reading, stereo vision, and machine learning inference.
- Students see a segmentation model run on a robot.
- Students can print the camera mount and attach it themselves.

## Benefits for teachers
- The notebooks give a guided path through the camera features.
- The project shows a real research example that students can study.
- The page gives no step-by-step guide. Teachers need strong technical skill.

## Benefits for schools
- The project needs a Duckiebot, an OAK-D camera, and a 3D printer. Prices were not found.
- Inference runs on the camera at about 1 Hz.
- The project is a 2021 competition entry. IT needs several days for setup.

## Getting started
- [ ] Find the DuckVision project through the Duckietown site.
- [ ] Confirm that the school has a Duckiebot and an OAK-D camera.
- [ ] Print the camera mount.
- [ ] Install the Duckietown shell on the daffy-oakd branch.
- [ ] Build the Docker containers.
- [ ] Attach the camera to the Duckiebot.
- [ ] Open the tutorial notebooks and run the camera reading notebook first.

## Where is the AI?
The AI includes semantic segmentation, stereo depth, and neural network inference. The model runs on the OAK-D camera. The segmentation model was trained on simulated Duckietown images. Students read the notebooks, run each step, and change the code to test their own ideas.

## Privacy and safety
The project page does not discuss accounts or data. The materials do not state whether any data leaves the robot or whether the internet is needed. Code comes from GitHub and Docker. The OAK-D camera runs the model itself. A teacher should check the network and data settings of the Duckietown setup before students use it.

## Ideas by subject
### computer_science
1. Open the camera reading notebook and describe what each cell does.
2. Run the stereo vision notebook and explain how two views give depth.
3. Run the inference notebook and record how fast the model updates.
4. Compare the segmentation output with a real photo of the track.
5. Write a short note on why a model trained on simulated images may miss real objects.

### engineering
1. Print the camera mount and test how it fits the Duckiebot.
2. Adjust the mount angle and compare what the camera sees.
3. Document the wiring and connection steps for the camera.
4. Measure how far away an object must be for stereo depth to work well.
5. Compare the project's setup steps with a plain Duckietown build and list what is new.
