---
slug: speech-note
tagline: A free Linux app that turns speech into text, reads text aloud, and translates offline.
---

## Overview
Speech Note is an open source app for Linux desktops. It does speech to text, text to speech, and machine translation, and all of it runs on the computer. It suits teachers and students in grades 6 to 12 who need dictation, read aloud, or translation. Students speak or type notes and the app transcribes, reads, or translates them.

## Benefits for students
- Students can dictate notes and see the words appear as text.
- Students can hear any text read aloud in a chosen voice.
- Students can translate short passages between many languages.

## Benefits for teachers
- One app covers dictation, read aloud, and translation.
- Teachers choose the speech engine and language model that fits each class.
- The app can transcribe audio files, such as a recorded interview.

## Benefits for schools
- The app is free and open source.
- All processing happens on the school computer after the models download.
- It runs on Linux only. It does not run on Chromebooks, Windows, or macOS, and IT will likely need to install it.

## Getting started
- [ ] Find Speech Note on Flathub, or use the AUR or openSUSE Packman packages.
- [ ] Ask IT to approve the install on a managed Linux machine.
- [ ] Install the app with Flatpak.
- [ ] Open the app and choose a language.
- [ ] Download the language models while the computer is online. A magazine article suggests English Whisper Small for transcription and a Piper voice for reading aloud.
- [ ] Disconnect from the network and test dictation, read aloud, and translation.
- [ ] Add a GPU add-on only if the computer has an NVIDIA or AMD card.

## Where is the AI?
The AI is a set of speech and language models. Engines include Whisper.cpp, Faster Whisper, Vosk, Coqui, Piper, Kokoro, and the Bergamot translator. They run on the device, and the models download inside the app. Students use them to turn speech into drafts, listen to their writing, and check translations.

## Privacy and safety
No account is needed. The internet is used to download language models from inside the app. The README states that no data is sent to the Internet, and a magazine article says it runs entirely locally. The research found no privacy policy. A teacher should check which engines the machine supports. Some engines run only on x86-64 processors.

## Ideas by subject
### special_ed
1. Dictate a short paragraph and fix any words the app got wrong.
2. Paste a reading passage into the app and listen to it with a chosen voice.
3. Compare two voices and pick the one that is easiest to follow.
4. Transcribe a recorded class discussion and highlight the main points.
5. Make a short how-to card that shows a classmate how to start dictation.

### world_languages
1. Translate a short English paragraph into a language you study and read the result aloud.
2. Write a sentence in the target language and translate it back to English to check meaning.
3. Listen to the app read target language text and repeat the phrases out loud.
4. Compare the app's translation with a classmate's own translation and list the differences.
5. Download a second language model and compare how two languages handle the same sentence.

### ela
1. Dictate the first draft of a short story and then edit the text by hand.
2. Listen to your essay read aloud and mark spots that sound awkward.
3. Record a classmate's book talk and transcribe it into notes.
4. Read a poem aloud with one voice and write how the voice changes its feel.
5. Take dictated notes during a class reading and turn them into a summary.
