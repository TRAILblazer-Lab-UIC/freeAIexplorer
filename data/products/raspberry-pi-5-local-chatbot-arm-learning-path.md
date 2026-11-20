---
slug: raspberry-pi-5-local-chatbot-arm-learning-path
tagline: An Arm Learning Path for running a small chatbot offline on a Raspberry Pi 5.
---

## Overview
This introductory Arm Learning Path takes about 30 minutes to read. Students install llama-cpp-python on a Raspberry Pi 5 and download a quantized 3B Orca Mini model. They then run a chatbot script. The path also measures memory use, which peaked near 2124 MiB in the example.

## Benefits for students
- Students run a real language model on a small computer.
- Students measure memory use.
- Students learn what quantization does to model size.

## Benefits for teachers
- The path gives clear steps to follow.
- The chatbot works offline after setup.
- The setup is technical and needs a teacher with Linux skills.

## Benefits for schools
- The path is free.
- It needs a Raspberry Pi 5. An 8 GB model is preferred.
- A separate computer with an SD card slot is needed. Prices were not checked.

## Getting started
- [ ] Find the Run a local LLM chatbot on a Raspberry Pi 5 path.
- [ ] Gather a Raspberry Pi 5 and a computer with an SD card slot.
- [ ] Flash 64-bit Raspberry Pi OS.
- [ ] Create a Python virtual environment.
- [ ] Install llama-cpp-python.
- [ ] Download the quantized Orca Mini model from Hugging Face.
- [ ] Run the chatbot script and then go offline.

## Where is the AI?
The AI is a quantized 3B language model that runs on the Pi through llama.cpp. It runs on the device and uses no cloud services. Students run the script, chat with the model, and read the memory report. They can then compare it with larger models.

## Privacy and safety
No account is needed. The internet is used at setup to download the installer, the model from Hugging Face, and pip packages. The page says the chatbot runs without cloud services, and the chat stays on the device. The research did not check the model's license or any privacy terms. A teacher should review the model's answers because small models can make mistakes.

## Ideas by subject
### computer_science
1. Run the chatbot script and ask five questions of different kinds.
2. Record the memory use while the model answers.
3. Compare answers to the same question across two runs.
4. Explain how a smaller model fits on a Pi.
5. Write a list of tasks that a small local model does well and badly.
