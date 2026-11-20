---
slug: elecfreaks-smart-ai-lens-kit-for-microbit
tagline: An AI camera module for the micro:bit that students code in MakeCode blocks.
---

## Overview
The Smart AI Lens Kit is an AI camera module for the BBC micro:bit from ELECFREAKS. It offers face recognition, colored ball tracking, card recognition, and line tracking, with a 1.3 inch display. The kit includes the lens, a red and a blue ball, 41 recognition cards, and RJ11 cables. Students code it with Microsoft MakeCode blocks.

## Benefits for students
- Students use block coding to react to faces, balls, cards, and lines.
- Students handle real cards and balls that the camera learns to recognize.
- Students can add the lens to a micro:bit robot build.

## Benefits for teachers
- MakeCode blocks keep the coding approachable for grades 3 to 12.
- A product wiki gives examples.
- The PlanetX AI extension is open source under an MIT license.

## Benefits for schools
- The retailer lists the kit at GBP 59.90 including VAT.
- A micro:bit and a Nezha or TPBot kit are required and not included.
- The materials do not state the internet needs. Setup takes about an hour with a teacher install.

## Getting started
- [ ] Find the kit at The Pi Hut under SKU 103693.
- [ ] Gather a micro:bit V1 or V2 and a Nezha or TPBot kit.
- [ ] Connect the lens to the micro:bit with the RJ11 cable.
- [ ] Open MakeCode in a web browser.
- [ ] Add the PlanetX AI extension.
- [ ] Try a face recognition example from the product wiki.
- [ ] Test the cards and balls with a line tracking program.

## Where is the AI?
The AI is a set of recognition functions that run on the lens module. They include face recognition, ball tracking, card recognition, and line tracking. The micro:bit reads the lens over I2C. Students use blocks to decide what the robot does after each recognition.

## Privacy and safety
No account is needed for the kit. The extension code reads the lens over a local connection and describes no network calls. The research inferred that processing happens on the lens. The vendor does not state this outright. The research did not review the MakeCode editor or its data handling, and the internet need is not stated. A teacher should check the MakeCode editor settings and review what the camera sees in the room.

## Ideas by subject
### computer_science
1. Build a MakeCode program that shows a smiley when the lens sees a face.
2. Use the 41 cards to make a matching game and record how often the lens is right.
3. Program the lens to track a red ball and display the ball's position.
4. Change one block and predict how the robot's behavior changes.
5. Compare face recognition with card recognition and list how each one works.

### engineering
1. Add the lens to a Nezha or TPBot robot and mount it securely.
2. Program the robot to follow a taped line.
3. Make the robot chase a blue ball.
4. Test the lens at different distances and note the range that works.
5. Design a small course that uses cards as road signs.
