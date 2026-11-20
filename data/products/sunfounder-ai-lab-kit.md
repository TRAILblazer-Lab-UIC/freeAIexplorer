---
slug: sunfounder-ai-lab-kit
tagline: A Raspberry Pi kit with a lesson that builds a local voice chatbot.
---

## Overview
The SunFounder AI Lab Kit is a Raspberry Pi based kit with online documentation. One lesson builds a voice chatbot on the Fusion HAT+. It suits advanced high school students who write Python. Students speak to the chatbot and hear it answer.

## Benefits for students
- Students build a working voice assistant from separate parts.
- Students see how speech recognition, a language model, and speech output fit together.
- Students practice reading and editing Python scripts.

## Benefits for teachers
- The documentation gives a clear lesson path for a local chatbot.
- Teachers can show how AI runs on a small device.
- The lesson uses ready scripts that students can change.

## Benefits for schools
- The chatbot runs locally. Student speech stays on school hardware.
- The kit price was not found in the pages read.
- A teacher or IT staff member needs to install the software and models.

## Getting started
- [ ] Find the SunFounder AI Lab Kit documentation and open the Python local chatbot lesson.
- [ ] Gather a Raspberry Pi, the Fusion HAT+, a microphone, and a speaker.
- [ ] Install Ollama on the Pi or on another computer on the school network.
- [ ] Download a model such as llama3.2:3b. Use moondream:1.8b when memory is limited.
- [ ] Download a Vosk language pack and a Piper voice.
- [ ] Stay online during these downloads. Go offline once they finish.
- [ ] Run the Python script and test the chatbot with a short question.

## Where is the AI?
The kit uses three AI parts. Vosk turns speech into text, Ollama runs a language model, and Piper turns the answer into speech. All three run on the Pi or on a computer on the local network. Students speak, read the script, and change it to shape how the chatbot behaves.

## Privacy and safety
No account is needed, and the internet is used at setup for downloads. The lesson describes the chatbot as fully offline once the models are downloaded. Ollama can run on another computer on the local network, and then the speech text goes to that machine. The SunFounder privacy policy covers the website and orders and does not mention kits or children. A teacher should check which computer runs Ollama. A teacher should also test the chatbot answers before students use it.

## Ideas by subject
### computer_science
1. Follow the Python local chatbot lesson and record how each script step works.
2. Change the model name in the script and compare the answers from two models.
3. Add a spoken greeting to the script and test it with classmates.
4. Draw a flow chart that shows how speech moves from microphone to speaker.
5. Write a short list of questions the chatbot answers well and poorly.

### engineering
1. Wire the Fusion HAT+ to the Pi and list each connected part.
2. Test the microphone and speaker and note which placement gives the clearest sound.
3. Measure how long the chatbot takes to answer on the Pi and on another computer.
4. Design a case that holds the Pi, microphone, and speaker together.
5. Compare the small model with the larger one and record the memory each uses.
