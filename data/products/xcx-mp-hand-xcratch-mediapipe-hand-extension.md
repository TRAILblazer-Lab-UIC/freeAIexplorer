---
slug: xcx-mp-hand-xcratch-mediapipe-hand-extension
tagline: A Scratch extension that tracks hands with a camera using MediaPipe.
---

## Overview
xcx-mp-hand is an extension for Xcratch, a Scratch based editor. It detects and tracks hands with MediaPipe hand landmark detection. It uses the camera in real time and can also study stage snapshots and sprite costumes. Students use blocks to read hand positions.

## Benefits for students
- Students control a Scratch project with their own hands.
- Students work with X, Y, and Z coordinates in a fun way.
- Students use blocks, which keeps the coding simple.

## Benefits for teachers
- The extension loads in minutes from a web address.
- It reports 21 landmarks per hand and tells left from right.
- Settings control the number of hands and the camera mirroring.

## Benefits for schools
- The extension is free and open source.
- It runs in the browser, and no install is needed.
- The extension page says camera images stay on the device.

## Getting started
- [ ] Open the Xcratch Editor in a browser.
- [ ] Click Add Extension and choose Extension Loader.
- [ ] Paste the module URL from the xcx-mp-hand project page and click OK.
- [ ] Allow camera access in the browser.
- [ ] Test the blocks with one hand.
- [ ] Set the maximum number of hands to match your class.
- [ ] Test on a Chromebook first. Use there is likely but not documented.

## Where is the AI?
The AI is MediaPipe hand landmark detection. It runs in the browser on the student device. Students use blocks to read where each finger is and then make a sprite respond. The model finds the hand and the student writes what happens next.

## Privacy and safety
No account is needed. The extension page says it does not send any image data externally and that detection runs locally in the browser. The internet is needed to load Xcratch, the extension module, and the model files. The research did not confirm whether the model files load from a Google CDN at run time. No privacy policy was found. A teacher should tell students when the camera is on and check the camera permission settings on school devices.

## Ideas by subject
### computer_science
1. Load the extension and show a sprite that follows your index finger.
2. Make a sprite change costume when a hand opens or closes.
3. Build a game that uses hand position to catch falling objects.
4. Use the left and right hand blocks to control two sprites.
5. Test how the sensitivity setting changes the tracking.
