---
slug: hello-stem-su-03t-offline-voice-recognition-module
tagline: An offline voice command module for Arduino and Mixly projects.
---

## Overview
This is an offline voice command module sold by openELAB for Arduino and Mixly projects. It is built on the SU-03T chip and supports up to 150 local commands. That figure is a capacity and not a preloaded set. The supplied teaching examples use Chinese commands, and English support for the shipped firmware is not confirmed.

## Benefits for students
- Students wire a voice module to an Arduino-class board.
- Students write sketches that read serial messages from the module.
- Students learn how firmware sets the words a device can hear.

## Benefits for teachers
- The module has a built-in microphone and speaker.
- It works with the Arduino IDE and Mixly.
- Custom words need matching firmware, which is a barrier for classrooms.

## Benefits for schools
- It is listed at 12.23 EUR including VAT, but it is currently sold out. Shipping from China takes 5 to 10 working days.
- Arduino boards and power supplies cost extra.
- Setup takes days and needs IT help.

## Getting started
- [ ] Find the module at openELAB and check whether it is back in stock.
- [ ] Gather an Arduino-class board and a regulated 5V supply.
- [ ] Plan level conversion for 5V hosts. The serial line runs at 3.3V.
- [ ] Prepare matching voice firmware through the SU-03T workflow.
- [ ] Download the firmware with a data-capable USB-C cable.
- [ ] Wire the four-pin connection for GND, VCC, TX, and RX.
- [ ] Match the host sketch to the serial message format and test.

## Where is the AI?
The AI is offline keyword and command recognition. It runs on the module and the host controller handles the rest of the project. Students write the host code that reads each recognized command and decides what the project does.

## Privacy and safety
The product page states no account requirement and no privacy policy for the module. Recognition is local and the commands are set in the firmware. Preparing custom firmware may need a computer and internet access to development services. The research did not confirm whether those tools need an account. A teacher should check the firmware tools for account needs and terms. A teacher should also keep the 3.3V and 5V wiring correct.

## Ideas by subject
### computer_science
1. Write a sketch that prints each serial message the module sends.
2. Map three voice commands to three different LED colors in code.
3. Test the module with five voices and record the results.
4. Explain why a new command word needs new firmware.
5. Write a flow of how a spoken word becomes a serial message.

### engineering
1. Wire the four-pin connection and check the power with a meter.
2. Add level conversion between a 5V host and the 3.3V serial line.
3. Build a voice-controlled lamp or fan model.
4. Test where the module's microphone works best on a project box.
5. Write a wiring diagram for another team.
