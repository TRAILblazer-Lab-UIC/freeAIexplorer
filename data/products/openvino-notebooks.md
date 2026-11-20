---
slug: openvino-notebooks
tagline: Intel Jupyter notebooks for running deep learning models, including live object detection.
---

## Overview
This is a collection of ready to run Jupyter notebooks from Intel for learning the OpenVINO toolkit. The notebooks run deep learning inference. One notebook does live object detection from a webcam or a video file. It is developer training and not a K-12 curriculum. It suits advanced high school coding students.

## Benefits for students
- Students run real object detection on their own webcam.
- Students read and change Python code that loads a model.
- Students see how a trained model makes predictions.

## Benefits for teachers
- The notebooks are ready to run and need little preparation.
- Install guides exist for Windows, macOS, Ubuntu, and Docker.
- Some notebooks run in Binder or Colab.

## Benefits for schools
- The content is free under the Apache 2.0 license.
- Models run on the device, but the project collects anonymous telemetry.
- IT must install Python 3.11 to 3.13 and help with the setup.

## Getting started
- [ ] Find the OpenVINO notebooks repository from Intel on GitHub.
- [ ] Ask IT to approve the install and to review the telemetry setting.
- [ ] Install Python and Git.
- [ ] Follow the guide for your operating system to make a virtual environment.
- [ ] Install the requirements.
- [ ] Run jupyter lab.
- [ ] Stay online for the first run. Models download then.
- [ ] Open the live object detection notebook and test a webcam.

## Where is the AI?
The AI is a deep learning model that finds and labels objects in video. It runs on the local computer. Students run each notebook cell, watch the detections, and then change the code to test their own ideas.

## Privacy and safety
No account is needed, and the internet is used at setup to download models. Inference and webcam frames run locally. Notebook cells can send anonymous telemetry to a third party named Scarf. The README says the data holds no personal information and gives opt-out steps. The Colab and Binder versions run on remote servers. A teacher should ask IT to turn off telemetry and plan for camera use. The live demo points a webcam at students.

## Ideas by subject
### computer_science
1. Run the live object detection notebook and list which objects the model finds.
2. Test the model with objects that are partly hidden and record where it fails.
3. Change one setting in the notebook and describe the effect on the results.
4. Run the model on a video file and count the detections of one object.
5. Write a short explanation of what inference means, using the notebook as an example.
