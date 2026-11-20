---
slug: arduino-app-lab
tagline: The free coding environment for the Arduino UNO Q, with AI Bricks for vision and audio.
---

## Overview
Arduino App Lab is the development environment for the Arduino UNO Q board. An app pairs Python on the board's Linux side with a C sketch on the microcontroller. Bricks are ready-made software parts that add features such as computer vision and audio AI models. It suits high school students and teachers who are comfortable with text code.

## Benefits for students
- Students learn how two programs, one in Python and one in C, work together on one board.
- Bricks let students add vision or audio features without building them from scratch.
- Students can retrain a model with Edge Impulse in one click in App Lab 0.6.

## Benefits for teachers
- App Lab can run on the board with a monitor and keyboard.
- App Lab can also run on a computer connected to the board.
- An element14 reviewer found the first-run documentation weak for new users. Teachers should plan time to test.

## Benefits for schools
- App Lab is free and the source code uses the GPL-3.0 license.
- Each student group needs an UNO Q board. The materials do not list its price.
- Windows, Mac, and Linux computers all work.

## Getting started
- [ ] Get an Arduino UNO Q board and find the App Lab download on the Arduino site.
- [ ] Choose standalone mode with a monitor and keyboard, or install App Lab on a computer.
- [ ] Ask IT to approve the install on the computer you choose.
- [ ] Connect the board and open a starter app.
- [ ] Add one Brick and run the app.
- [ ] Check which Bricks use cloud services before students use them.
- [ ] Turn off any cloud Brick that the school has not approved.

## Where is the AI?
Bricks add AI features such as computer vision and audio models. Some run on the board. Some Bricks use cloud services, such as the Automatic Speech Recognition (Cloud) Brick and a Cloud AI Assistant example. Students add a Brick to their app and use its output in their own code.

## Privacy and safety
The materials do not state whether accounts are needed or what student data is kept. The official page links to the Arduino Terms and Privacy Policy. It does not explain how local and cloud Bricks differ. The cloud speech Brick and the Cloud AI Assistant example send data to cloud services. A third party write-up describes a local language model Brick that runs on the board. A teacher should check each Brick before students use it and ask whether the board needs the internet for the chosen apps.

## Ideas by subject
### engineering
1. Set up the UNO Q and run a starter app, then list each part of the board you used.
2. Build a project that reads a sensor in the sketch and shows the value from Python.
3. Add a vision Brick and test how it responds in different lighting.
4. Retrain a model with Edge Impulse and compare it with the first one.
5. Document a working app with a diagram of the Python and sketch parts.

### computer_science
1. Write a short Python program that talks to a C sketch and explain what each part does.
2. Add an audio Brick and write code that reacts to a spoken word.
3. Compare a local Brick with a cloud Brick and describe one difference.
4. Read the GPL-3.0 source of a Brick and describe how it is organized.
5. Debug an app that fails to start and write down the fix.
