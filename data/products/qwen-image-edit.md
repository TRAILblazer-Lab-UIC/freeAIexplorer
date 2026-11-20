---
slug: qwen-image-edit
tagline: An open image editing model that changes a picture from a text instruction.
---

## Overview
Qwen-Image-Edit is an image editing model in the Qwen-Image family. It takes an input image and a text instruction and returns an edited image. The original came out in August 2025, with later versions 2509 and 2511 that add multi-image input. It runs through the diffusers library in Python on a CUDA GPU. It suits advanced high school students.

## Benefits for students
- Students edit a picture by describing the change in words.
- Students test how wording changes the result.
- Students learn how a generative image model is run with code.

## Benefits for teachers
- A Decrypt review calls it a beginner-friendly local option.
- The weights are open under Apache 2.0.
- Teachers can demonstrate image editing with no online service.

## Benefits for schools
- The weights are free to download.
- A CUDA GPU with substantial VRAM is needed. The README lists no exact figures.
- Images stay on the device. IT must help with the Python setup. Chromebooks are not suited.

## Getting started
- [ ] Find the Qwen-Image-Edit page on Hugging Face or GitHub.
- [ ] Ask IT to approve a Windows or Linux machine with a CUDA GPU.
- [ ] Install transformers 4.51.3 or later.
- [ ] Install diffusers from GitHub.
- [ ] Stay online for the first run to download the weights.
- [ ] Load QwenImageEditPipeline from the Qwen/Qwen-Image-Edit weights in Python.
- [ ] Go offline and test one image with one short instruction.

## Where is the AI?
The AI is an image editing model that follows text instructions. It runs on the local computer using the GPU. Students write an instruction, view the edited image, and refine the words to guide the result as part of their own project.

## Privacy and safety
No account is needed. The internet is used to download the weights. With local weights, images and instructions stay on the machine. The repository mentions an optional prompt rewriting tool that appears to use a hosted Qwen service, and using it would send prompts off the device. The research did not review hosted Qwen services. The vendor materials do not address output safety. A teacher should review instructions and results.

## Ideas by subject
### visual_arts
1. Edit a photo of a landscape by describing a change in the weather.
2. Change the color of one object and compare the result with a hand edit.
3. Try three instructions that differ by one word and describe the changes.
4. Use a multi-image version to combine two images and critique the result.
5. Create a series of edits of one drawing and arrange them in order.

### theater_media
1. Edit a set photo to show a different time of day.
2. Change a costume color in a photo and judge the realism.
3. Make three variations of a poster and vote on the best one.
4. Edit a storyboard frame by instruction and note what works.
5. Write a short note that labels which images were AI edited.
