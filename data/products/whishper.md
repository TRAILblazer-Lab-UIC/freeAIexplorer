---
slug: whishper
tagline: A self hosted web app that turns audio and video into subtitles with Whisper.
---

## Overview
Whishper has been renamed Anysub. It is a self hosted web app that turns audio and video into subtitles using Whisper. Users upload a recording, and Whisper transcribes it with word level timings. They then edit the text and timing in a subtitle editor. It installs with Docker on a Linux x86-64 server.

## Benefits for students
- Students get subtitles and transcripts for audio and video.
- Students can edit the text and timing in a waveform editor.
- Students can export in SRT, WebVTT, LRC, text, or JSON.

## Benefits for teachers
- Teachers can caption class videos for accessibility.
- Edited transcripts can be saved for study notes.
- Teachers need IT to set it up and then use a simple web page.

## Benefits for schools
- The software is free and open source.
- Recordings stay on the school server unless IT turns on an outside provider.
- Whishper 3 is no longer maintained and Anysub cannot read its data.

## Getting started
- [ ] Find the Anysub project, which was Whishper, on GitHub.
- [ ] Ask IT to plan a Linux server with Docker.
- [ ] Have IT download compose.yaml and run docker compose up.
- [ ] Open the local page.
- [ ] Create an account with the code from the logs.
- [ ] Add an NVIDIA GPU if you want faster work.
- [ ] Test a short recording.

## Where is the AI?
The AI is the Whisper speech recognition model. It runs on a school server. Students and teachers upload a recording, get a transcript, and then fix mistakes in the editor. Word level timings help line up the text with the audio.

## Privacy and safety
An account is needed on the school server, and the internet is used only at setup. Uploaded recordings and transcripts are stored on the server that runs it. The project can also use outside services such as OpenAI or Groq for transcription. Media goes to that service if IT sets it up. The project has no formal privacy statement. A teacher should ask IT to keep outside providers off and to say who can see the account list and uploads.

## Ideas by subject
### special_ed
1. Upload a short class video and check the subtitles for errors.
2. Edit the timing so the captions match the speaker.
3. Export the captions in two formats and compare them.
4. Use a transcript to study a lesson you listened to.
5. Create a captioned version of a class presentation.

### ela
1. Record a short reading and edit its transcript.
2. Transcribe an interview and turn it into a profile.
3. Fix punctuation in a transcript and explain your changes.
4. Compare the spoken version of a story with the written text.
5. Make a list of words the model got wrong and look for a pattern.
