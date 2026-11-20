---
slug: obs-background-removal-plugin
tagline: An OBS Studio plugin that removes or replaces webcam backgrounds with on-device AI.
---

## Overview
This open source plugin for OBS Studio removes or replaces the background behind a person in webcam video. It also offers low-light enhancement. The models run through ONNX Runtime on the CPU or GPU. Students can use it when they record or stream video.

## Benefits for students
- Students can put a new background behind them without a green screen.
- Students can brighten a dim webcam image.
- Students practice video production skills on a free tool.

## Benefits for teachers
- The plugin adds a filter to a video source in OBS Studio.
- Release 1.4.1 has packages for Windows, Mac, and Linux.
- Teachers can control CPU threads and acceleration options.

## Benefits for schools
- The plugin is free and open source.
- It runs on the device and a GPU helps.
- IT must install OBS Studio and the plugin, which takes about an hour.

## Getting started
- [ ] Find the plugin on the project site or GitHub releases page.
- [ ] Ask IT to approve OBS Studio and the plugin.
- [ ] Install OBS Studio first.
- [ ] Install the plugin package for your system.
- [ ] Add a webcam source and turn on the background removal filter.
- [ ] Choose a model and test CPU and GPU speed.
- [ ] Check the plugin's update check against school network rules.

## Where is the AI?
The AI is a portrait segmentation model that finds the person in the picture and a model that brightens low light. They run on the local computer through ONNX Runtime. Students record or stream video, pick a background, and adjust the settings to get a clean edge.

## Privacy and safety
No account is needed, and the internet is used at setup. The source contains an update check that uses libcurl. Network use is not zero. Webcam video stays on the device. A teacher should get permission before students record themselves and check where recordings are saved.

## Ideas by subject
### theater_media
1. Record a short news report with a custom background behind the anchor.
2. Compare a clean background with a messy one and describe the effect on the viewer.
3. Try the low-light filter and explain when it helps.
4. Make a video for a school play that places actors in an imaginary set.
5. Test different models for edge quality and pick the best for a project.
