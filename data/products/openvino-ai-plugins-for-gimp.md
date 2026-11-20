---
slug: openvino-ai-plugins-for-gimp
tagline: Intel plugins that add local AI image tools to the GIMP editor.
---

## Overview
These are Intel OpenVINO plugins for GIMP 3 that run AI image tools on the computer. They include super-resolution, semantic segmentation, Stable Diffusion, and FastSD. Stable Diffusion supports text-to-image, image-to-image, inpainting, and ControlNet. It suits high school students who already use GIMP.

## Benefits for students
- Students make images from text prompts inside a real photo editor.
- Students can sharpen small images with super-resolution.
- Students can fill or change part of a picture with inpainting.

## Benefits for teachers
- The tools sit inside GIMP, which many art classes already use.
- Teachers can show how one image changes with each prompt.
- The plugins are free.

## Benefits for schools
- The software is free. An Intel computer with a CPU, GPU, or NPU is needed.
- Everything runs on the device after setup. Images stay on the computer.
- IT must install it. Chromebooks are not supported and the README gives no minimum specs.

## Getting started
- [ ] Find the OpenVINO AI plugins for GIMP repository on GitHub.
- [ ] Ask IT to install GIMP 3 on an Intel computer.
- [ ] Run the install script for the operating system.
- [ ] On Linux, follow the guide to build GIMP from source. Flatpak is not supported.
- [ ] Wait while the models download and convert.
- [ ] Load the models in GIMP with Load Models.
- [ ] Expect the first model load to take a few minutes.
- [ ] Test one text prompt and one inpainting edit.

## Where is the AI?
The AI is a set of image models for super-resolution, segmentation, and Stable Diffusion image generation. They run on the local Intel CPU, GPU, or NPU. Students write prompts or select a region, review the result, and keep editing it in GIMP as their own work.

## Privacy and safety
No account is needed, and images stay on the device. The internet is used at setup and on first use to download models. The README has no privacy statement, and the materials do not state what student data is collected. A teacher should review prompts and results. Image models can make unwanted pictures.

## Ideas by subject
### visual_arts
1. Write a text prompt for a landscape, generate it, and repaint one area by hand.
2. Use super-resolution on a small scanned drawing and compare it with the original.
3. Use inpainting to replace one object in a photo with something else.
4. Try three prompts that differ by one word and describe the changes.
5. Combine a generated background with a hand-drawn figure in a layered file.

### theater_media
1. Generate a poster background for a school play from a text prompt.
2. Create three concept images for a film scene and pick the best one.
3. Use inpainting to remove a distracting object from a set photo.
4. Make a storyboard frame with Stable Diffusion and edit it in GIMP.
5. Write a short note that labels which parts of a poster were AI generated.
