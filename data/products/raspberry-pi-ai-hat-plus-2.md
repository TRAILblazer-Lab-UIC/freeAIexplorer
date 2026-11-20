---
slug: raspberry-pi-ai-hat-plus-2
tagline: A Raspberry Pi 5 add-on board that runs language and vision models locally.
---

## Overview
The AI HAT+ 2 is an add-on for the Raspberry Pi 5. It has a Hailo-10H accelerator rated at 40 TOPS and 8 GB of onboard RAM. It is designed to run language models and vision-language models locally. The documentation says it supports models up to about 6 billion parameters.

## Benefits for students
- Students mount a real accelerator board on a Pi.
- Students run language, vision, and speech models without the cloud.
- Students see how hardware speeds up AI.

## Benefits for teachers
- The documentation covers the board.
- Software for generative models is in Hailo's hailo-apps repository.
- The setup is advanced and needs teacher time.

## Benefits for schools
- The board is listed at $200. The Pi 5 is sold separately.
- That price is high for many classroom budgets.
- All AI runs on the device.

## Getting started
- [ ] Read the AI HAT+ documentation, which covers the AI HAT+ 2.
- [ ] Buy a Raspberry Pi 5 and the board.
- [ ] Mount the HAT with the PCIe ribbon cable.
- [ ] Add the heatsink. An Active Cooler is recommended.
- [ ] Install the AI software and chosen models.
- [ ] Stay online only for downloads.
- [ ] Test an object detection example first.

## Where is the AI?
The AI is a Hailo-10H accelerator that runs large language models, vision-language models, object detection, and speech-to-text. It runs on the device. Students install models, send prompts or images, and read the results. The plain AI HAT+ does not support language models.

## Privacy and safety
No account is needed and the internet is used at setup. Model downloads need the internet. The documentation says inference runs locally and not on a cloud server. What the chosen applications log is up to the teacher. The research did not review content safeguards for local language model output. A teacher should check which models are installed and review their outputs.

## Ideas by subject
### computer_science
1. Run an object detection example and list what the board finds.
2. Send a prompt to a local language model and record the reply.
3. Time how long each model takes to answer.
4. Compare vision results on clear and cluttered scenes.
5. Write a short guide for the next class on setting up the models.

### engineering
1. Mount the HAT on a Pi 5 and check the PCIe ribbon cable.
2. Attach the heatsink and Active Cooler and explain why cooling matters.
3. Measure how warm the board gets while a model runs.
4. Compare the AI HAT+ 2 with a Pi without any accelerator.
5. Design a case that holds the Pi and the HAT.
