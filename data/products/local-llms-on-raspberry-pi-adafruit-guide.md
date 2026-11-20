---
slug: local-llms-on-raspberry-pi-adafruit-guide
tagline: An Adafruit guide to running small language models on a Raspberry Pi.
---

## Overview
This Adafruit Learn guide shows how to run small language models on a Raspberry Pi 4 or 5 with 8 GB of RAM. Steps cover Raspberry Pi OS, Ollama, and models such as Gemma 3, Qwen3, and SmolLM3. Optional parts add Python chat scripts and a BitNet build. It is a maker guide and not a classroom lesson.

## Benefits for students
- Students run a real language model on a small, cheap computer.
- Students learn terminal skills along the way.
- Models are small, from about 300 MB to 1.9 GB.

## Benefits for teachers
- The guide gives clear steps from a blank card to a chat.
- Python scripts show streaming chat.
- A teacher needs comfort with the terminal.

## Benefits for schools
- The guide is free. A Pi with 8 GB, a cooler, and a power supply are bought separately.
- Everything runs on the device after setup.
- The Pi runs hot under load. Cooling is advised.

## Getting started
- [ ] Find the guide on Adafruit Learn.
- [ ] Buy or borrow a Raspberry Pi 4 or 5 with 8 GB of RAM, a cooler, and a power supply.
- [ ] Flash Raspberry Pi OS onto the card.
- [ ] Install Ollama with its script while online.
- [ ] Run a small model such as gemma3:270m.
- [ ] Try the Python chat script from the guide.
- [ ] Skip the BitNet build until the basics work.

## Where is the AI?
The AI is a small language model that runs on the Raspberry Pi through Ollama. Everything runs on the device. Students install the tools, ask the model questions, and write scripts that extend the chat for their own projects.

## Privacy and safety
No account is needed. The internet is used to install software and download models. The guide says the models can work without the internet once set up. The research found no privacy policy and no telemetry statement. The research found no student data collection. A teacher should check which tools the Pi downloads and watch the Pi's temperature during long runs.

## Ideas by subject
### computer_science
1. Install Ollama on the Pi and record each command in a setup log.
2. Run two small models and compare their answers to one question.
3. Write a short Python script that streams a chat reply.
4. Measure how long each model takes to answer.
5. Write a guide for classmates on running a local model.

### engineering
1. Assemble a Pi with a cooler and test its temperature before and after a model run.
2. Compare two cooling setups and graph the results.
3. Design a case with airflow for a Pi that runs a model.
4. Record the power use of the Pi during a chat and discuss the cost.
5. Plan a build of a small talking project and list its parts.
