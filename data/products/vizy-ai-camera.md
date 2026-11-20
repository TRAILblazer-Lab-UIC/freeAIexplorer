---
slug: vizy-ai-camera
tagline: A Raspberry Pi AI camera controlled from a web browser with ready-made apps.
---

## Overview
Vizy is a Raspberry Pi 4 AI camera from Charmed Labs, the makers of Pixy. It has a 12 megapixel sensor and preinstalled apps such as Birdfeeder, MotionScope, Object Detector, Pet Companion, and Radar. Students control it from a web browser, which offers live video, a Python editor, and a web terminal.

## Benefits for students
- Students identify bird species and detect motion with live video.
- Students edit Python code right in the browser.
- Students see TensorFlow object detection run on the device.

## Benefits for teachers
- Everything runs in a browser. No software install is needed.
- Per the Hackaday review, preinstalled Python examples were running within minutes.
- Birdfeeder was reported to misidentify some similar species, which makes a good discussion.

## Benefits for schools
- Tom's Hardware lists 259 USD for the 2GB model and 269 to 299 USD for 4GB or 8GB. Retailer prices seen were higher.
- The AI runs locally and the vendor materials list no account.
- The device is mainly for indoor use. Optional accessories include a lens and an outdoor enclosure.

## Getting started
- [ ] Find the Vizy camera on the Charmed Labs site and check the price.
- [ ] Power the device with the supplied power supply.
- [ ] Connect it to Wi-Fi or a wired network.
- [ ] Open its web interface from a computer on the same network.
- [ ] Run a preinstalled app such as Object Detector.
- [ ] Open the Python editor and run an example.
- [ ] Ask IT to place it on a safe network segment.

## Where is the AI?
The AI runs on the Vizy device itself. It handles object detection, bird species identification, and motion detection. Students run the apps and then edit Python code to change what the camera does.

## Privacy and safety
No account is needed and the internet is used at setup. The interface is served from the device over the local network, with SMB file sharing and VNC. Video stays on the device unless the user turns on the optional remote web sharing, which creates a temporary public URL, or adds a cellular modem. No privacy policy was read. A teacher should place the camera where it does not capture students unexpectedly. A teacher should also check who can reach the web interface on the network and leave remote sharing off.

## Ideas by subject
### computer_science
1. Run Object Detector and list what it finds on a classroom table.
2. Open the Python editor and change an example to print a new message.
3. Test how well the detector works in bright and dim light.
4. Write a short program that counts objects that pass the camera.
5. Compare two apps and describe how each uses the camera.

### science
1. Set up Birdfeeder near a window and record the bird species it identifies.
2. Check the camera's answers against a bird field guide.
3. Use MotionScope to study how an object moves.
4. Log how often birds visit during a week.
5. Discuss why the camera might mix up similar species.
