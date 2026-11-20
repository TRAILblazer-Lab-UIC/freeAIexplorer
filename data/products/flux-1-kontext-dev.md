---
slug: flux-1-kontext-dev
tagline: An open-weight model that edits images from plain text instructions.
---

## Overview
FLUX.1 Kontext dev is a 12 billion parameter image editing model. A user gives it a picture and a written instruction, and it edits the image. It can follow character, style, and object references without extra training. It is a tool for teachers or advanced high school students who can run Python code.

## Benefits for students
- Students see an AI model edit a picture from a written instruction.
- Advanced students learn to run an open-weight model with Python.
- Students practice writing precise instructions for visual changes.

## Benefits for teachers
- The weights are free to download from Hugging Face.
- The examples work with a UI such as ComfyUI.
- The model makes a clear demonstration of how image editing AI works.

## Benefits for schools
- The model is free for non-commercial use under the FLUX.1 dev Non-Commercial License.
- The model runs on school hardware after setup, which keeps student images on the device.
- It needs a capable GPU, and IT will need to help with the install.

## Getting started
- [ ] Open the FLUX.1 Kontext dev page on Hugging Face.
- [ ] Create a Hugging Face account and accept the license.
- [ ] Ask IT to approve the install on a machine with a capable GPU.
- [ ] Install Diffusers and PyTorch.
- [ ] Download the weights while online.
- [ ] Run a Python script or a UI such as ComfyUI.
- [ ] Turn on the optional content filter before students use it.
- [ ] Test an edit with a school appropriate image.

## Where is the AI?
The AI is a rectified flow transformer that edits images from text. It runs on the local computer, using a CUDA GPU or an mps option on Apple devices. Students write an instruction, review the edited image, and refine the wording. The vendor describes filtered training data and an optional content filter.

## Privacy and safety
Downloading the weights needs a free Hugging Face account. The account must agree to share Hugging Face information with Black Forest Labs and accept the license and Acceptable Use Policy. The internet is used only for setup. Run locally, images stay on the machine. The license requires output filtering or review for unlawful content. It has no age rule and the model card does not address minors. Hosted versions of the model are separate and not covered. A teacher should add school content filtering and review results before students share them.

## Ideas by subject
### visual_arts
1. Edit a photograph by writing an instruction, and describe how the image changed.
2. Change a drawing into a new style and compare it with the original.
3. Add an object to a scene with a written instruction and judge how well it fits.
4. Try the same instruction on two images and write about the differences.
5. Discuss when an edited image should be labeled as AI made.

### computer_science
1. Run the model with a short Python script and record the settings you used.
2. Compare the speed of one edit on two different settings.
3. Read the model card and list three facts about how the model was built.
4. Test how the optional content filter responds to a safe image.
5. Write a guide that explains each step of the setup for another student.
