---
slug: krita-ai-diffusion-plugin
tagline: A free plugin that adds AI image generation and editing to the Krita painting program.
---

## Overview
The Krita AI Diffusion plugin is an open source add-on for the Krita painting program. It adds inpainting, outpainting, live painting, upscaling, and regional prompts. It suits art teachers and older students who already paint digitally. Students sketch or select part of a canvas and let the AI fill or refine it.

## Benefits for students
- Students can paint a rough shape and watch the AI turn it into a finished image in live painting mode.
- Students can select one area of a picture and describe a change just for that area.
- Students practice writing precise prompts and judging which results fit their artistic goal.

## Benefits for teachers
- The plugin works inside a familiar painting program. Art lessons keep their usual workflow.
- Regions let a teacher show how separate prompts shape separate parts of one picture.
- The plugin is free and open source, with models such as Stable Diffusion 1.5 and SDXL available to try.

## Benefits for schools
- The plugin costs nothing. The cloud service is a separate paid option that the vendor materials do not price.
- A local setup keeps images on school hardware. It needs a capable graphics card, ideally NVIDIA with 6 GB of memory.
- Setup and large model downloads take days of IT time on a lab machine.

## Getting started
- [ ] Download Krita 5.2 or newer from the Krita project and install it on one test computer.
- [ ] Ask IT to approve the plugin and the large model downloads.
- [ ] Download the plugin ZIP from the project page.
- [ ] In Krita, open Tools, then Scripts, and import the ZIP file.
- [ ] Restart Krita and turn on the AI Image Generation docker.
- [ ] Click Configure and choose to install a local server on the computer.
- [ ] Pick the local option. The cloud option sends data off the device.
- [ ] Download a model and test a short prompt on a sample canvas.

## Where is the AI?
The AI is a set of image generation models such as Stable Diffusion 1.5, SDXL, Flux 2, and Z-Image. They run on a ComfyUI server. That server can be local on the school computer, a remote server, or a paid cloud service. Students paint, select areas, and write prompts, then use the results to extend their own artwork.

## Privacy and safety
No account is required for local use, and the internet is needed for setup and model downloads. Local mode keeps images on the device. The cloud service policy lists email, IP address, device and usage data. It says analytics cover generation parameters and not images or prompts. Data is stored in Germany, processing may occur in other European countries, Canada, or the US, and image and prompt retention is not stated. A teacher should choose local mode, check which backend is set before students begin, and review prompts and results.

## Ideas by subject
### visual_arts
1. Paint a rough landscape in Krita and use live painting to see how the AI reads shapes and colors.
2. Select a small part of a drawing and use inpainting to replace it with a new idea, then compare both versions.
3. Extend a finished painting past its edges with outpainting and describe what the AI added.
4. Split a canvas into regions with different prompts, such as sky, field, and village.
5. Upscale a small sketch and write a short critique of which details improved and which changed.
