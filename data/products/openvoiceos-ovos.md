---
slug: openvoiceos-ovos
tagline: An open source voice assistant platform that runs on a Raspberry Pi.
---

## Overview
OpenVoiceOS is a community voice assistant platform under the Apache 2.0 license. It began as MycroftOS and took over the Mycroft code after that company closed in 2023. It runs on Raspberry Pi models, Linux desktops, and Docker. It suits advanced high school students and a teacher with IT help.

## Benefits for students
- Students see how a voice assistant is built from separate parts.
- Students can swap plugins for wake word, speech to text, and text to speech.
- Students build a real assistant on their own hardware.

## Benefits for teachers
- The software is free.
- A browser installer helps pick a device and voice options.
- The setup is technical and needs extra time.

## Benefits for schools
- The software costs nothing. A Raspberry Pi with a microphone and speaker is needed for a physical device.
- Processing can stay local with careful plugin choices.
- IT should install it. Setup can take days.

## Getting started
- [ ] Open the OpenVoiceOS browser installer.
- [ ] Ask IT to approve the project and the hardware.
- [ ] Pick a device and voice options in the installer.
- [ ] Flash the Raspberry Pi image or run the Docker container.
- [ ] Attach a microphone and a speaker.
- [ ] Review each plugin to keep speech processing local.
- [ ] Test the wake word with a short phrase.

## Where is the AI?
The AI handles wake word detection, speech recognition, and text to speech. These parts are plugins. They can run on the device or on a school server, depending on the plugins chosen. Students can switch plugins and compare how each one performs.

## Privacy and safety
No account is needed. The default speech to text engine needs the internet, and some skills and plugins may too. Plugins decide whether audio goes to services such as Google or Amazon. Offline options such as Vosk exist. The site gives no data handling statement. A teacher or IT staff should check every plugin and choose offline ones before students speak to it.

## Ideas by subject
### computer_science
1. Install the assistant and test its wake word with several different voices.
2. Swap one speech to text plugin for another and compare the accuracy.
3. Write a simple skill that answers a question about the school schedule.
4. Draw a diagram that shows how a spoken sentence travels through the plugins.
5. Discuss which plugin settings keep student voices on the local device.
