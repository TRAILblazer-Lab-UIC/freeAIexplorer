---
slug: kokoro-tts
tagline: A small open-weight text-to-speech model with 54 voices that runs on a CPU.
---

## Overview
Kokoro is an open-weight text-to-speech model with 82 million parameters. Version 1.0 supports 8 languages and 54 voices. It is released under Apache 2.0. Users run it through a Python package or a community container that offers an OpenAI-compatible speech API.

## Benefits for students
- Advanced students turn text into spoken audio with code.
- Students can choose among many voices.
- Students can hear text in several languages.

## Benefits for teachers
- The model runs on a CPU.
- A Python package makes a short demo script.
- A third party article measured a short paragraph in 1.5 to 4.7 seconds on CPUs.

## Benefits for schools
- The weights are free under Apache 2.0.
- The container image is about 5 GB.
- It is a developer tool and needs a teacher or IT person who is comfortable with Python or containers.

## Getting started
- [ ] Find the Kokoro model page and read the license.
- [ ] Ask IT for a server admin to help with setup.
- [ ] Install the kokoro Python package with soundfile and espeak-ng.
- [ ] Or run the Kokoro-FastAPI container with Docker or Podman.
- [ ] Download the weights while online.
- [ ] Go offline and make a short audio clip.
- [ ] Listen to several voices and pick a few for class.

## Where is the AI?
The AI is a text-to-speech model that uses a StyleTTS 2 and ISTFTNet design. It runs on the local computer or a school server. Students write text, run the code, and listen to the speech. They then change the text or voice to improve the result.

## Privacy and safety
No account is needed, and the model runs locally. Downloading the package, container image, and weights needs network access at first. Fully offline use after download is not stated outright. The model card warns that sites with kokoro in the domain are not affiliated and are likely scams. A teacher should review the text that students convert to speech. A teacher should also tell students not to copy a real person's voice style without permission.

## Ideas by subject
### computer_science
1. Write a Python script that turns a sentence into audio.
2. Compare two voices on the same text and describe the differences.
3. Time how long a paragraph takes on your computer.
4. Test how the model reads numbers and abbreviations.
5. Explain how text becomes sound in a few steps.
