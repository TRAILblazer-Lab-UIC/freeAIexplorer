---
slug: birdnet-pi
tagline: A Raspberry Pi and a microphone become an all-day bird sound listening station.
---

## Overview
BirdNET-Pi turns a Raspberry Pi and a USB microphone into a bird sound listening station that runs all day. It records audio, classifies it with the BirdNET model on the device, and stores detections, clips, and logs in a local database. Results appear in a web interface on the local network. Schools can use it to monitor a schoolyard.

## Benefits for students
- Students hear and review real bird clips from their own schoolyard.
- Students see which species visit and when.
- Students can build a birdhouse recording station, as in the Schlaumeise SmartFinch project.

## Benefits for teachers
- A local web page shows detections and recordings.
- Cornell offers BirdNET K-12 resources.
- Several forks exist. Teachers should pick one and keep it updated.

## Benefits for schools
- The software is free and open source.
- The Pi, SD card, microphone, and a weatherproof housing cost extra. The materials give no prices.
- Setup takes days and a teacher will likely need to install it.

## Getting started
- [ ] Choose a BirdNET-Pi fork and read its notes.
- [ ] Get a Raspberry Pi 4B or 5, a fast SD card, and a USB microphone.
- [ ] Flash 64-bit Raspberry Pi OS.
- [ ] Run the installer script while the Pi is online.
- [ ] Open the web page on the local network and set a password.
- [ ] Add a BirdWeather ID only if public sharing is wanted.
- [ ] Place the microphone outside and check the first detections.
- [ ] Plan to update the fork on a schedule.

## Where is the AI?
The AI is the BirdNET model. It listens to the audio and names the species it hears. It runs on the Raspberry Pi itself. Students review the detections and use them in their own bird studies.

## Privacy and safety
No account is needed and the internet is used at setup. Audio clips and detections are stored on the Pi. The web interface defaults to the username birdnet and an empty password. Sharing to BirdWeather is optional and publishes detections to a public map. A microphone can record voices. The research found no formal privacy policy. A teacher should set a password, place the microphone away from where people talk, and share to BirdWeather only after school approval.

## Ideas by subject
### science
1. Follow the SmartFinch idea and set up a recording station near a birdhouse.
2. Make a list of the species heard in a week and sort them by how often they appear.
3. Compare morning and afternoon detections and suggest why they differ.
4. Listen to ten saved clips and check whether the species name seems right.
5. Draw a chart of the busiest hours for bird calls.
