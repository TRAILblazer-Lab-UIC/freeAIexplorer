---
slug: musicgpt
tagline: A local app that makes short music clips from text prompts without Python.
---

## Overview
MusicGPT is an app that runs music generation models on the user's own computer. It needs no Python or machine learning frameworks. It supports only Meta's MusicGen. It has a chat-style web interface that keeps history and a command line mode that makes clips of 10 to 30 seconds.

## Benefits for students
- Students type a prompt and hear a short music clip.
- Students keep a chat history of their past prompts.
- Students practice describing mood and style in words.

## Benefits for teachers
- The web interface is easy to demonstrate.
- No Python setup is needed.
- Clips can score student media projects.

## Benefits for schools
- The app is free, with MIT code and CC-BY-NC 4.0 weights.
- The README warns that most models need powerful hardware.
- The smallest model is the default, and IT must install the app.

## Getting started
- [ ] Find the MusicGPT project page and read the README.
- [ ] Ask IT to approve the install on one computer.
- [ ] Install with brew, cargo, a downloaded binary, a Windows installer, or Docker.
- [ ] Stay online for the first run to download the model weights.
- [ ] Run musicgpt to open the web interface.
- [ ] Test a short prompt with the smallest model.
- [ ] Go offline and test a second prompt.

## Where is the AI?
The AI is Meta's MusicGen, a model that turns text into music. It runs on the local computer. Students write a prompt, listen to the clip, and change the words to steer the next one.

## Privacy and safety
No account is needed, and the README says the models run locally. Model weights download at startup from Hugging Face. The README describes no telemetry but does not address other network activity. Chat history is stored on the computer. A flag can expose the app interface to other devices. The research did not confirm offline use. A teacher should leave that flag off, review student prompts, and check school policy before clips are shared.

## Ideas by subject
### music
1. Write a prompt for a calm piano melody and a lively dance beat and compare them.
2. Change the tempo word in a prompt and describe the new clip.
3. Describe a favorite instrument in words and see how the model plays it.
4. Rank five clips by how well they match the prompt.
5. Write a short review of each clip in a class playlist.

### theater_media
1. Make a clip for the opening of a short student film.
2. Write a prompt for a tense scene and a calm scene and compare them.
3. Match a clip to a storyboard and note where the music should change.
4. Vote on the best clip for a school play.
5. Add a note to a project that says the music came from an AI tool.
