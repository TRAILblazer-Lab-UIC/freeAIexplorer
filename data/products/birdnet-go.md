---
slug: birdnet-go
tagline: A self-hosted listening station that identifies birds and other wildlife by sound.
---

## Overview
BirdNET-Go is a self-hosted, real-time sound analyser for birds, bats, and other wildlife. It runs all day on a Raspberry Pi 4 class computer, a PC, or Docker and listens through a sound card or an RTSP stream. Detections appear in a web dashboard with live spectrograms. Students can build a schoolyard listening station and review which species were heard.

## Benefits for students
- Students hear real wildlife data build up over days and weeks.
- Students read live spectrograms and learn to see sound as a picture.
- Students review detections and check them against what they know.

## Benefits for teachers
- A web dashboard shows detections, heatmaps, and spectrograms.
- The interface comes in 16 languages.
- The dashboard can be installed as a PWA on a phone or tablet.

## Benefits for schools
- The software is free and the code is open source.
- A Raspberry Pi and a USB microphone cost extra. The materials give no prices.
- Setup takes days and IT will likely need to help with the network.

## Getting started
- [ ] Find BirdNET-Go on GitHub and read the install notes.
- [ ] Get a Raspberry Pi 4 or a PC and a microphone.
- [ ] Run the install script on Debian, Ubuntu, or Raspberry Pi OS. Docker and prebuilt binaries are other options.
- [ ] Connect the microphone and open the web interface.
- [ ] Follow the onboarding wizard.
- [ ] Change the default network exposure and add authentication if the dashboard can be reached beyond the classroom.
- [ ] Leave optional alerts such as BirdWeather, MQTT, and Discord switched off until IT approves them.
- [ ] Place the microphone outside and check the first detections.

## Where is the AI?
The AI is a sound classifier. BirdNET v2.4 runs by default, and Google Perch v2 and bat classifiers are also available. The analysis runs on the device or school server. Students review the detections and use them for their own questions about local wildlife.

## Privacy and safety
No account is needed and the internet is used at setup. The README says the tool is local only by default. Detections stay on the host unless an outside integration such as BirdWeather, MQTT, or a notification service is turned on. Sentry telemetry is optional. The research found no formal privacy policy. A microphone can record voices. A teacher should place it away from places where people talk and review network exposure before others can reach the dashboard.

## Ideas by subject
### science
1. Set up a schoolyard listening station and list the species heard in one week.
2. Compare detections at dawn and at midday and explain the pattern.
3. Compare heatmaps from two weeks and link changes to the weather.
4. Check five detections against a field guide and report how many match.
5. Read a spectrogram and describe the shape of one bird call.
