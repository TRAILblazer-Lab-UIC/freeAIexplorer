---
slug: nvidia-jetson-orin-nano-super-developer-kit
tagline: A small Linux computer that runs vision and language models locally for advanced projects.
---

## Overview
The Jetson Orin Nano Super Developer Kit is a small Linux computer with an Ampere GPU for running AI at the edge. NVIDIA's launch post lists a 6-core Arm CPU, 8GB of memory, and 67 sparse INT8 TOPS. It runs language models, vision language models, and vision transformers up to about 8B parameters with tools like Ollama and llama.cpp. NVIDIA says the price dropped to $249 from $499.

## Benefits for students
- Students run AI models on their own hardware.
- Students can try language and vision models in one project.
- Students learn Linux skills.

## Benefits for teachers
- Jetson AI Lab tutorials are mentioned in the launch post.
- The kit supports Ollama, llama.cpp, Hugging Face Transformers, and vLLM.
- NVIDIA says Jetson kits target professionals, students, and enthusiasts.

## Benefits for schools
- The launch price was $249. Current retail price and stock were not checked.
- Models run on the device with no account. The internet is needed only at setup.
- IT needs a microSD card or SSD, a power supply, a display, a keyboard, and a mouse. Plan on days.

## Getting started
- [ ] Buy the Jetson Orin Nano Super Developer Kit.
- [ ] Gather a microSD card or SSD, a power supply, a display, a keyboard, and a mouse.
- [ ] Write the JetPack 6.1 image to the card or use SDK Manager.
- [ ] Enable MAXN mode with nvpmodel.
- [ ] Follow the Getting Started Guide.
- [ ] Install a tool such as Ollama.
- [ ] Run a small model and test a Jetson AI Lab tutorial.

## Where is the AI?
The AI includes vision inference, small language models, and robotics perception. It runs on the Jetson computer on the school's own desk. Students download a model, run it locally, and build their own projects on top.

## Privacy and safety
No account is needed, and the internet is used at setup to download software and models. Inference runs on the board. Data leaves the device only when a user adds networking or cloud services. The research fetched no privacy policy. A teacher should check which models students download and review what those models can say.

## Ideas by subject
### computer_science
1. Run a small language model with Ollama and list its strengths and weak spots.
2. Compare two model sizes for speed and answer quality.
3. Run a vision model on classroom photos and record the labels.
4. Write a script that sends a question to the local model and prints the answer.
5. Compare the 7W, 15W, and 25W power modes and chart the speed.

### engineering
1. Set up the kit and note each step in a guide.
2. Add a camera and run a live vision demo.
3. Measure the board's temperature under a heavy task.
4. Mount the kit on a robot and plan how it gets power.
5. Compare the kit's size and power use with a laptop.
