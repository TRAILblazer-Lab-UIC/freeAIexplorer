---
slug: seeed-grove-offline-voice-recognition-module
tagline: A small module that hears up to 150 spoken commands with no internet.
---

## Overview
The Grove Offline Voice Recognition module uses the VC-02 voice chip to recognize up to 150 pre-programmed spoken commands. It works without a network connection. On hearing a command, it sends a hex code to a microcontroller, which turns it into an action. It suits older students who can wire boards and write Arduino code.

## Benefits for students
- Students wire a sensor to a board and see it respond to their voice.
- Students read hex codes and connect them to actions.
- Students learn how a device can listen without any cloud service.

## Benefits for teachers
- Seeed's wiki has an Arduino demo that teachers can follow.
- A second demo uses ESPHome and Home Assistant.
- The commands are fixed. Students have no model to train.

## Benefits for schools
- The module works with no internet, which limits network concerns.
- The module runs on 3.3 V or 5 V.
- The price is not listed on the wiki page. IT should confirm cost and board needs.

## Getting started
- [ ] Find the Grove Offline Voice Recognition module and its wiki on the Seeed site.
- [ ] Get a host board such as a XIAO RP2040 or XIAO ESP32-S3.
- [ ] Install the Arduino IDE on a teacher computer.
- [ ] Wire the module to the board over UART.
- [ ] Install the Seeed Arduino library from GitHub.
- [ ] Open the PDF that lists the commands.
- [ ] Run the demo sketch and read the hex codes in the serial monitor.

## Where is the AI?
The AI is a voice command recognizer on the VC-02 chip. It runs on the module and listens for fixed commands, including the wake word "hello pudding" in the demos. Students do not train a model. They write code that turns each recognized command into an action.

## Privacy and safety
No account is needed and no internet is used. The module recognizes a fixed set of spoken commands on the board, and the wiki describes it as pure offline. The Seeed store policy covers website data and names Google Analytics, Google Ads and Mailchimp. That policy says the services are not intended for children under 16. A teacher should tell students that the microphone is listening and keep the module away from private conversations.

## Ideas by subject
### computer_science
1. Read the hex codes from the module and print each command name in the serial monitor.
2. Write code that turns an LED on and off with spoken commands.
3. Map five voice commands to five different actions in a sketch.
4. Compare how often the module hears a command in a quiet room and a noisy room.
5. Explain in a short paragraph how the module sends a command to a board.

### engineering
1. Wire the module to a XIAO board and test each connection.
2. Build a voice controlled device, such as a lamp or fan switch, and document the design.
3. Test the module at different distances from the speaker.
4. Create a wiring diagram that a classmate can follow.
5. Redesign the circuit to run on 3.3 V and record what changes.
