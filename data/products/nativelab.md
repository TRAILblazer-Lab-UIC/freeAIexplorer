---
slug: nativelab
tagline: A local desktop app for running language models with chat, a pipeline builder, and a CLI.
---

## Overview
NativeLab is a local-first desktop app for running large language models on your own hardware. It has a graphical interface and a terminal command line. It runs local GGUF models through llama.cpp or connects to Ollama. It also has a visual pipeline builder. The project is young and community-run, and the research found no education-specific material.

## Benefits for students
- Advanced students can chat with a model that runs on their own computer.
- Students can build a pipeline with a visual builder that has more than 20 node types.
- Students can explore how a local model server works.

## Benefits for teachers
- The app offers document question answering over local files.
- A teacher can start a local model server for a class project.
- It suits a teacher or advanced student who is comfortable with Python.

## Benefits for schools
- The app is free and the code is open source.
- Model downloads are large, and the computer needs enough RAM or GPU.
- IT must help install Python 3.10 or newer, and Chromebook support is not documented.

## Getting started
- [ ] Find the NativeLab project page and read the install notes.
- [ ] Ask IT to approve Python 3.10 or newer on a test machine.
- [ ] Run pip install nativelab.
- [ ] Launch nativelab and open the Download tab.
- [ ] Download llama.cpp and a small GGUF model while online.
- [ ] Go offline and test a short chat.
- [ ] Leave the optional remote connectors, Discord, and WhatsApp turned off.

## Where is the AI?
The AI is a language model that answers chat prompts and questions about documents. It runs on the local computer through llama.cpp or Ollama. Students chat, chain steps in the pipeline builder, and compare how different models answer.

## Privacy and safety
No account is needed, and the internet is used for setup and for model and tool downloads from outside sources. Chats stay on the device when a local model is used. The app can connect to remote API endpoints, which would send prompts to those providers. The local server can bind to every network address and expose it to the local network. The README does not mention telemetry. A teacher should keep remote connections off and ask IT to check the server setting.

## Ideas by subject
### computer_science
1. Download a small model and record how much memory it uses.
2. Ask the same question of two models and compare the answers.
3. Build a two-step pipeline that summarizes text and then lists key words.
4. Use the command line to start the model and explain each step.
5. Write a report on what a local model can and cannot do on school hardware.
