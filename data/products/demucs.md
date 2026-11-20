---
slug: demucs
tagline: A free model that splits a song into drums, bass, vocals, and other.
---

## Overview
Demucs is a music source separation model. It splits a track into drums, bass, vocals, and other. Version 4 uses a Hybrid Transformer design. It runs from the command line with Python 3.10 or newer on a CPU or a GPU. Intel also offers an Audacity plugin that runs Demucs v4 locally.

## Benefits for students
- Students hear the parts of a song one at a time.
- Students can practice along with a track that has the vocals removed.
- Students see a Transformer model in action from the command line.

## Benefits for teachers
- The software is free and the code is open.
- The Audacity plugin gives a friendlier route than the command line.
- Teachers need programming skills for the command line setup.

## Benefits for schools
- The model runs on the local computer.
- Student audio is processed on the device. Model weights come from Hugging Face.
- IT must install it. The model weights have an unclear license because some training data was research only.

## Getting started
- [ ] Find the Demucs repository and read its README.
- [ ] Ask IT to approve the install on a lab or teacher computer.
- [ ] Install Python 3.10 or newer and uv or pip.
- [ ] Optionally install ffmpeg.
- [ ] Download the model weights while online.
- [ ] Run Demucs on a short audio file that you have the right to use.
- [ ] Try the Intel OpenVINO plugin for Audacity on Windows for a graphical route.

## Where is the AI?
The AI is a model that learns to separate the sounds in a mix. It runs on the local device, using the CPU or a GPU. A GPU needs about 3 GB of memory at minimum, and CPU mode takes roughly 1.5 times the track length. Students load a song, run the model, and then listen to or remix each stem.

## Privacy and safety
No account is needed, and the research found no student data collected. The tool runs on the local computer, and the Audacity plugin states its AI features run locally with no internet. Pretrained models are hosted on Hugging Face, and the README does not say when they download. No privacy policy was reviewed. A teacher should check copyright before students separate commercial songs. A teacher should also review the unclear weights license and test whether models download at first use.

## Ideas by subject
### music
1. Split a short song and listen to the drums alone to study the beat.
2. Mute the vocals and sing along with the backing track.
3. Compare the bass part of two songs and describe the difference.
4. Remix the stems with new volume levels and explain your choices.
5. Notate the bass line you hear and play it on an instrument.

### computer_science
1. Run Demucs from the command line and record the time it takes.
2. Compare CPU mode and GPU mode on the same file.
3. Read the README and list the four stems the model outputs.
4. Write a short script that separates every file in a folder.
5. Explain in a paragraph how a model might learn to tell a drum from a voice.
