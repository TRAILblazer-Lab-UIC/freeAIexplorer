---
slug: dfrobot-gravity-offline-language-learning-voice-recognition
tagline: An offline voice module with 121 fixed commands and 17 you can teach it.
---

## Overview
This small voice recognition module works offline. It has 121 fixed command words, one fixed wake-up word, and 17 custom commands taught by self-learning. It connects over I2C or UART and works with Arduino, micro:bit, ESP32, and Raspberry Pi. The wiki provides Arduino examples that read recognized command IDs and play spoken replies.

## Benefits for students
- Students control a project with their voice.
- Students teach the module their own commands.
- Students write Arduino code that reacts to a command ID.

## Benefits for teachers
- The wiki includes example sketches.
- A DFRobot library supports many boards.
- The module is small, at 49 by 32 mm.

## Benefits for schools
- The module costs 16.90 USD each, with volume pricing down to 15.50 USD for 10 or more.
- It works with no internet.
- A compatible board and the Arduino IDE are needed. IT may need to install them.

## Getting started
- [ ] Find the DFRobot Gravity voice recognition sensor SEN0539 on the DFRobot site.
- [ ] Get a host board such as an Arduino Uno, micro:bit, or ESP32.
- [ ] Install the Arduino IDE.
- [ ] Wire the module over I2C or UART with 3.3 to 5 V power.
- [ ] Install the DFRobot_DF2301Q Arduino library.
- [ ] Run the example sketches.
- [ ] Teach one custom command and test it.

## Where is the AI?
The AI is a speech command recognizer on an offline chip. It runs on the module and listens for fixed words and learned commands. Students write code that reads the command ID and then triggers an action.

## Privacy and safety
No account is needed. The wiki states the module uses an offline chip and needs no internet, and no app or cloud service was found. Voice processing stays on the device. The research found no student data collected, but no privacy policy was reviewed. A teacher should explain that a microphone is listening. A teacher should also test the wake-up word in a noisy room.

## Ideas by subject
### computer_science
1. Run the example sketch and print each recognized command ID.
2. Map three command IDs to three different LED actions.
3. Teach the module a custom command and test how often it hears it.
4. Compare recognition in a quiet room and a noisy one.
5. Write the steps from a spoken word to an action in your own words.

### engineering
1. Wire the module to a host board and test the connection.
2. Build a voice controlled lamp or fan switch.
3. Compare the I2C and UART connections.
4. Test the microphone at different distances.
5. Draw a wiring diagram for another team.
