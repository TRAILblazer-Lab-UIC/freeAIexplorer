---
slug: llama-cpp
tagline: An open source engine that runs language models on your own computer.
---

## Overview
llama.cpp is an open source C and C++ engine for running large language models locally. It is built on the ggml library and runs quantized GGUF models on a CPU or GPU. It can start an OpenAI-compatible API server, and it shows a built-in chat app. It suits teachers and advanced students who are comfortable with a terminal.

## Benefits for students
- Advanced students can build and run a model engine from source.
- Students see how a model runs on their own hardware.
- Students can experiment with different model files.

## Benefits for teachers
- Teachers can run a model from Hugging Face with one command.
- The built-in chat app gives a simple way to demonstrate a model.
- The local server lets other tools connect to the model.

## Benefits for schools
- The software is free.
- Text stays on the device. Internet is needed only for setup and downloads.
- Setup is advanced. IT will likely need to install it.

## Getting started
- [ ] Find the llama.cpp repository and read its install section.
- [ ] Ask IT to approve an install on one teacher or lab machine.
- [ ] Choose an install method, such as the one-line script, Docker, a release binary, or a source build.
- [ ] Download a small GGUF model while online.
- [ ] Run the model with the command line tool.
- [ ] Try the built-in chat app.
- [ ] Start the server mode and test it with a simple client.

## Where is the AI?
The AI is whatever language model the user loads, run by the llama.cpp engine on the local device. It can handle text and multimodal models. Students load a model, ask it questions, and study how the engine produces each reply.

## Privacy and safety
No account is needed. Models can be fetched from Hugging Face on first run. The internet is needed for that download. The repository page does not address telemetry. The materials state no data collection. The research found no privacy policy. A teacher should check which model files students download and confirm that the tool makes no network calls after setup.

## Ideas by subject
### computer_science
1. Build llama.cpp from source and describe each step in a short log.
2. Run the same prompt on two different model files and compare the results.
3. Start the local server and send it a question from a small script.
4. Measure how model size changes speed on a school computer.
5. Explain in your own words what quantization does to a model file.
