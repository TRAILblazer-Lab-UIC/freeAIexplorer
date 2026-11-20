---
slug: whisper-local
tagline: A free dictation app that types what you say, running offline on your own computer.
---

## Overview
Whisper Local is a free, open source dictation app for Windows and macOS. It is built on OpenAI's Whisper through faster-whisper. The user presses a hotkey, speaks, and text appears at the cursor. The README calls it 100% offline with no telemetry. It suits high school students and teachers.

## Benefits for students
- Students can speak a draft and skip the typing.
- Students who struggle to type can write in any app.
- Students can use voice commands and text transforms.

## Benefits for teachers
- The push to talk hotkey is quick to learn.
- It works in any program that accepts typing.
- A local API on port 7777 is available for advanced use.

## Benefits for schools
- The app is free, with no account, API key, or subscription.
- The README says speech stays on the school computer.
- The Windows exe is not code signed. IT approval is likely.

## Getting started
- [ ] Find Whisper Local on GitHub.
- [ ] Ask IT to approve the install. SmartScreen warns on first run.
- [ ] Install the Windows exe, or use pipx or pip with Python 3.11 to 3.13.
- [ ] Choose CPU, NVIDIA CUDA, or AMD ROCm.
- [ ] Allow the model download during setup.
- [ ] Set the hotkey and try a short dictation.
- [ ] Go offline and test again.

## Where is the AI?
The AI is the Whisper speech recognition model. It runs on the device. Students press the hotkey, speak, and see the text appear. They then edit the draft in their own words.

## Privacy and safety
No account is needed. The first launch downloads the model from huggingface.co. The README says there is no telemetry and no network traffic during dictation. The GPU runtime install, the update check, and Ollama are opt-in and off by default. The last recording is kept in memory only, and transcript history can be limited. These claims are self reported by a single developer. A teacher should have IT check the network behavior.

## Ideas by subject
### special_ed
1. Dictate a short paragraph and fix the errors by hand.
2. Compare the time it takes to speak a draft and to type one.
3. Practice a voice command to start a new line.
4. Dictate a response to a reading question.
5. Test the app in a quiet and a noisy room and report the difference.

### ela
1. Speak the first draft of a story and revise it.
2. Dictate a journal entry and read it back.
3. Outline an essay by voice and then write it in full.
4. Compare your spoken draft with your written draft and note style differences.
5. Read a dictated paragraph aloud and mark places that need punctuation.
