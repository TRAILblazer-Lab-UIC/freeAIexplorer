---
slug: yue
tagline: An open music model that turns lyrics and a style prompt into a full song.
---

## Overview
YuE is an open music generation system from M-A-P and collaborators. The current README describes YuE2, which takes lyrics and a style prompt. It writes an editable melody and chord plan and renders a full song with vocals and accompaniment. It needs Linux, Python 3.12, and an NVIDIA GPU with 24 GB of VRAM. It suits a lab machine and not a typical classroom computer.

## Benefits for students
- Students hear their own lyrics sung as a full song.
- Students can edit the melody and chord plan before the song is made.
- Students can try a cover of a transcribed recording.

## Benefits for teachers
- Teachers can show how a music model plans before it renders.
- A Python API has staged calls for each step.
- Setup is advanced and needs IT help.

## Benefits for schools
- The software is free.
- The 24 GB GPU is costly hardware.
- The weights use the CC BY-NC 4.0 license. Academic and education use is free for non commercial purposes.

## Getting started
- [ ] Find the YuE repository on GitHub.
- [ ] Ask IT to approve the install on a Linux lab machine with a 24 GB NVIDIA GPU.
- [ ] Clone the repository.
- [ ] Create a Python 3.12 virtual environment.
- [ ] Run python -m pip install .
- [ ] Allow the model files to download from Hugging Face on first use.
- [ ] Run python examples/generate.py with a short lyric.
- [ ] Go offline and test again.

## Where is the AI?
The AI is a music generation model that sings lyrics over a made accompaniment. It runs on the local GPU. Students write lyrics and a style prompt, listen, and then revise. The output is 48 kHz stereo.

## Privacy and safety
No account is needed. The internet is used at setup, and the model files download from Hugging Face on first use. Generation runs on the user's own GPU. Offline use after the download is supported by an article about the original YuE but was not tested for YuE2. A separate hosted demo at yue.noizai.net is a third party service that the research did not review. A teacher should use the local install and review lyrics before students generate songs. The weights are for non commercial use only.

## Ideas by subject
### music
1. Write four lines of lyrics and a style prompt and listen to the song.
2. Change the style prompt and compare the two songs.
3. Edit the chord plan and describe how the song changes.
4. Write a verse in a second language and test the vocals.
5. Review a generated song and note what a human musician would change.

### theater_media
1. Create a theme song for a school play from the story's lyrics.
2. Generate a short track for a student film scene.
3. Make two moods of the same scene and pick the best fit.
4. Write a credit line that labels the music as made with AI.
5. Discuss how to credit the model's creators and the license limits.
