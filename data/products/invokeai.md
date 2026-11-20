---
slug: invokeai
tagline: A free image generation engine with a layer canvas that runs on your own GPU.
---

## Overview
InvokeAI is a free, open source, self-hosted engine for AI image generation. It offers a layer based canvas, node based workflows, a Model Manager, and ControlNet support. It runs models such as Flux, SDXL, and SD 1.5 on the user's own GPU. The site says the official hosted platform has shut down and that the open source version is community maintained.

## Benefits for students
- Students make images from text and edit them on a layered canvas.
- Students can connect nodes to build their own workflows.
- Students use ControlNet to guide an image.

## Benefits for teachers
- The Invoke Launcher handles the install.
- The Model Manager makes it simple to add or remove models.
- Teachers choose which models students can use.

## Benefits for schools
- The software is free and has no paid tiers.
- It runs on school hardware and needs no account.
- It needs GPU workstations, and IT should set content filtering and model choices.

## Getting started
- [ ] Get the Invoke Launcher from invoke.ai.
- [ ] Ask IT to approve the install.
- [ ] Check that the computer has an NVIDIA or AMD GPU, or an Apple Silicon Mac.
- [ ] Install through the launcher.
- [ ] Download models through the Model Manager while online.
- [ ] Turn on the optional NSFW checker and watermark features.
- [ ] Go offline and test a few prompts.

## Where is the AI?
The AI is a set of diffusion models that make images from text and from other images. The models run on the local computer. Students write a prompt, review the images, and refine them with the canvas, inpainting, and nodes. This is how they extend their own art.

## Privacy and safety
No account is needed, and the app generates images locally on school hardware. The internet is needed to install the app and to download models. The docs describe the NSFW checker as an optional feature, and its defaults were not verified. The research did not confirm telemetry behavior, and the vendor materials do not state what the app collects. A teacher should turn on the content filter, choose the models, and supervise students.

## Ideas by subject
### visual_arts
1. Generate a background and paint a figure over it on the layered canvas.
2. Use image-to-image to restyle a sketch and compare the two.
3. Use inpainting to change one part of a picture.
4. Build a short series of images with the same style and write a title for each.
5. Discuss how credit should work for AI assisted art.

### computer_science
1. Build a simple node workflow and describe what each node does.
2. Compare two models on the same prompt.
3. Change the model settings and record the effect on speed.
4. Explain how a diffusion model turns noise into an image.
5. Write a guide that tells classmates how to run InvokeAI.
