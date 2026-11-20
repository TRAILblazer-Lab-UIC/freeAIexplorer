---
slug: ace-step
tagline: A free music model that turns text prompts and lyrics into songs.
---

## Overview
ACE-Step is an open source music generation model from ACE Studio and StepFun. A user types a text prompt and optional lyrics, and the model makes a song. It suits a teacher or a lab machine with a strong graphics card. Students describe the music they want, listen, and refine the prompt.

## Benefits for students
- Students hear their written ideas turn into finished music within minutes.
- Students can add their own lyrics and test how wording changes the vocals.
- Students practice describing style, mood, and genre in precise words.

## Benefits for teachers
- The tool is free to download and the code uses an Apache 2.0 license.
- The web interface is a simple prompt box that teachers can demonstrate quickly.
- Teachers can show students how an AI music tool is built and run locally.

## Benefits for schools
- The software costs nothing. A capable GPU is the real cost.
- The program runs on the school's own machine after the first download.
- The README implies offline use after download. IT will likely need to approve and help with the command line install.

## Getting started
- [ ] Find the ACE-Step repository from ACE Studio and StepFun and read its README.
- [ ] Ask IT to approve a command line install on one lab or teacher machine.
- [ ] Install Python 3.10 or newer and create a fresh environment.
- [ ] On an NVIDIA computer, install the CUDA version of PyTorch.
- [ ] Clone the repository and run pip install -e . inside it.
- [ ] Start the interface with the acestep command and the port 7865.
- [ ] Stay online for the first run. The model weights download once.
- [ ] Go offline after the download and test a short prompt with and without lyrics.

## Where is the AI?
The AI is a music generation model that combines a diffusion approach with a compression autoencoder and a lightweight linear transformer. It runs on the local device, using the computer's GPU. Students write prompts and lyrics, listen to the result, and then change their words to steer the music. The model can also adapt to a style through LoRA files.

## Privacy and safety
No account is needed and the internet is used at setup to download the model files. The README implies that the program works offline after download. It does not say so outright. The project has no privacy policy. Generated music has no stated ownership terms beyond a disclaimer that asks users to disclose AI involvement. A teacher should review student prompts and lyrics and check school policy before students publish songs.

## Ideas by subject
### music
1. Write a text prompt that describes a genre, a tempo, and a mood, and listen to the song the model makes.
2. Compare two prompts that differ by one word and describe how the music changed.
3. Write original lyrics about a school topic and generate a vocal track in one of the listed languages.
4. Pick a favorite song style, describe it in words, and judge how close the model gets.
5. Build a class playlist of generated songs and write a short review of each one.

### theater_media
1. Create a soundtrack for a short class film by describing the mood of each scene in a prompt.
2. Write a theme song for a student podcast and generate a version with lyrics.
3. Generate three different opening tracks and vote on the best fit for a school play.
4. Match a generated track to a storyboard and note where the music should rise or fall.
5. Make a short credits song and discuss how a creator should label AI generated audio.
