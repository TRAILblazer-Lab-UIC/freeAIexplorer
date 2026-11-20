---
slug: fooocus
tagline: A free image generator that runs on your own computer with a simple prompt box.
---

## Overview
Fooocus is a free, open source image generator built on Stable Diffusion XL. It runs on the user's own computer and opens a local browser page. A student types a prompt and receives images. It needs little prompt engineering or setting tuning.

## Benefits for students
- Students turn written ideas into images in a simple window.
- Students can switch between General, Realistic, and Anime presets.
- Students can edit parts of an image with inpainting.

## Benefits for teachers
- The interface is a plain prompt box that is easy to demonstrate.
- Presets give a quick start without many settings.
- It works offline after the models download.

## Benefits for schools
- The software is free and uses open source code.
- No accounts are needed, and images stay on the device.
- It needs a computer with an Nvidia GPU of at least 4 GB VRAM and 8 GB RAM. It suits a lab or teacher machine.

## Getting started
- [ ] Download Fooocus from the official GitHub page only. Fake sites copy the project.
- [ ] Ask IT to approve the install on a managed machine.
- [ ] Run the launcher for the preset that you chose.
- [ ] Wait for the default models to download on the first launch.
- [ ] Open the local browser tab that appears.
- [ ] Check the Gradio analytics setting and turn it off if it is on.
- [ ] Turn on the optional black-out for unsafe images in the config file.
- [ ] Test a few classroom prompts before students use it.

## Where is the AI?
The AI is a text to image model based on Stable Diffusion XL. It runs on the local computer and also supports inpainting. Students write a prompt, review the images, and change the words to steer the result. The project is in Limited Long-Term Support status, with bug fixes only.

## Privacy and safety
No account is needed and the internet is used for setup. The first launch downloads default models, and inpainting triggers a further download of about 1.28 GB. Generation then runs locally and images and prompts stay on the device. The Gradio framework may send usage analytics unless the disable flag is used, and the research did not read what it sends. The listen flag exposes the interface to the local network and the share flag creates a public link, both without a password by default. The unsafe image black-out is off by default and was not tested. The model can still produce unwanted images, which is a concern for minors. A teacher should turn the black-out on, use the disable analytics flag, and review prompts.

## Ideas by subject
### visual_arts
1. Write a prompt for a poster and compare the General and Realistic presets.
2. Describe a scene in rich detail and judge how close the image comes.
3. Use inpainting to change one part of an image and explain the choice.
4. Create a series of images in one style and write an artist statement.
5. Discuss how AI images differ from hand made art and what credit a creator should give.
