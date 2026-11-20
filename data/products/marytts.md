---
slug: marytts
tagline: An open source Java text-to-speech server that runs on a local computer.
---

## Overview
MaryTTS is an open source, multilingual text-to-speech system written in Java. It runs as a client and server system. The local server is reached in a browser at localhost port 59125. A voice building tool lets users create new voices.

## Benefits for students
- Students hear text turned into speech by a program they run themselves.
- Students can try different installed voices.
- Advanced students can study how a voice is built.

## Benefits for teachers
- The server has a simple browser page.
- Voices install through an installer window.
- Teachers need technical skill. The project is aimed at developers.

## Benefits for schools
- The software is free and open source.
- It runs on Windows, Mac, and Linux with a Java runtime.
- IT must install it, and the setup may take days.

## Getting started
- [ ] Find the MaryTTS repository and read the README.
- [ ] Ask IT to install a Java runtime.
- [ ] Download the project and run ./gradlew run.
- [ ] Open localhost port 59125 in a browser.
- [ ] Run ./gradlew runInstallerGui to install extra voices.
- [ ] Keep the server limited to the local computer.
- [ ] Test a short sentence in each installed voice.

## Where is the AI?
The AI is a speech synthesis system that turns text into audio. It runs on the local computer or a school server. Students type text, listen to the voice, and then change the words or the voice to improve the sound. The materials do not describe a classroom use.

## Privacy and safety
No account is needed, and the internet is used at setup. The server runs locally by default. The README does not discuss privacy, and the research did not confirm whether text ever leaves the machine. Nothing in the README involves a remote service. The research found no privacy policy. A teacher should check that the server is not open to other computers on the school network.

## Ideas by subject
### computer_science
1. Start the local server and describe how a browser talks to it.
2. Type a sentence and listen to it in two voices.
3. Write a short program that sends text to the server and saves the audio.
4. Compare how the voice reads numbers and dates.
5. Explain what a client and a server do in this system.
