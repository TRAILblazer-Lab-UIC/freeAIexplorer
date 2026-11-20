---
slug: thi-ng-fantasy-console
tagline: A browser fantasy console that teaches memory maps, registers, and retro graphics.
---

## Overview
This browser-based fantasy console is inspired by TIC-80 and written in TypeScript with the thi.ng/umbrella libraries. It was developed for workshops at Technical University Augsburg in 2022 and 2023. It teaches retro computing ideas such as memory maps, device registers, interrupts, and indexed color with palette cycling. It suits advanced high school students and developers.

## Benefits for students
- Students learn how a computer uses memory and registers.
- Students run six example programs, including raster bars and a particle system.
- Students can edit a bitmap font that saves as JSON.

## Benefits for teachers
- A hosted demo runs in the browser with nothing to install.
- Press keys 1 to 6 to switch between the examples.
- The project is a small teaching project aimed at developers and has a steep learning curve.

## Benefits for schools
- The tool is free and the code is open.
- It needs only a modern web browser. Running from source needs Node and yarn.
- No accounts are needed. The README does not describe network use.

## Getting started
- [ ] Open the hosted demo of the thi.ng fantasy-console in a browser.
- [ ] Press 1 to 6 to try each example.
- [ ] Read the source of one example in the src/roms folder.
- [ ] Run it locally only with IT help. This needs Node and yarn.
- [ ] Clone the repository and run yarn install and then yarn start.
- [ ] Choose a small change to make in an example.
- [ ] Plan a first lesson for advanced students only.

## Where is the AI?
The console has no AI. Students write code that controls virtual memory and graphics. They build skills in logic and in how computers store and show data.

## Privacy and safety
No account is needed. The console runs in the browser. The README does not describe storage or network behavior. Screenshots and font saves download as files to the device. No privacy policy exists for the hosted demo, and the research did not open or inspect it. Ask IT to review the demo or host a copy. Check that students use the official demo or a trusted copy.

## Ideas by subject
### computer_science
1. Run the six example programs and describe what each one draws.
2. Read an example in src/roms and find where it writes to video memory.
3. Change a color in the palette and watch what changes on screen.
4. Edit the bitmap font and save it as JSON.
5. Explain in your own words what a device register does.
