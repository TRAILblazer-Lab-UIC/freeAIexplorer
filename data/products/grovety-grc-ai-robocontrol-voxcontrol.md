---
slug: grovety-grc-ai-robocontrol-voxcontrol
tagline: An ESP32-S3 board that recognizes custom voice commands offline to steer small robots.
---

## Overview
GRC AI RoboControl, also called VoxControl, is an ESP32-S3 board that recognizes custom voice commands on the device. It is built to control small robots such as the Elecrow CrowBot. Users add commands by editing a text file and uploading it over USB. It supports English and Chinese and also offers tilt-based control.

## Benefits for students
- Students speak a command and watch a robot respond.
- Students write their own commands by editing a text file.
- Students can steer a robot by tilting the board.

## Benefits for teachers
- The board needs no internet and no account.
- Adding commands needs only a text file and a USB upload.
- Grovety posts mention an AI Teacher mode, but it could not be verified.

## Benefits for schools
- No price was shown on the Elecrow page, and two kit variants are offered.
- The vendor says voice recognition runs on the board.
- The listing is a maker project. No lesson material was found.

## Getting started
- [ ] Find the kit on the Elecrow page and ask about the two variants.
- [ ] Gather a CrowBot or a similar robot with Arduino-based firmware.
- [ ] Use a Windows PC with a USB-C port for configuration.
- [ ] Edit the command text file.
- [ ] Upload the file to the board over USB.
- [ ] Connect the board to the robot.
- [ ] Test each voice command in a quiet room.

## Where is the AI?
The AI is speech recognition that listens for custom voice commands. It runs on the ESP32-S3 board and does not need the internet. Students choose the words, edit the text file, and see how well the board recognizes them.

## Privacy and safety
No account is needed. The Elecrow project page says the board works fully offline with no Wi-Fi or cloud. That is a vendor statement. The research found no privacy policy and could not read the Hackster page. A PC utility uploads commands over USB. A teacher should check that the commands fit a classroom. The robot will react to any student who speaks them.

## Ideas by subject
### computer_science
1. Edit the command text file to add a new command word and test it.
2. Try one command with five voices and record how often the board hears it.
3. Compare a short command word with a long one and describe which works better.
4. Test the board in a noisy room and explain how noise changes accuracy.
5. Write a table that matches each voice command to a robot action.

### engineering
1. Connect the board to a CrowBot and confirm that the robot moves.
2. Use tilt control to drive the robot through a taped course.
3. Compare voice control and tilt control for speed and accuracy.
4. Place the board in a few spots on the robot and see which gives the best sound pickup.
5. Write a wiring guide for the board and robot.
