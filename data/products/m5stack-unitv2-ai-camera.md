---
slug: m5stack-unitv2-ai-camera
tagline: A small standalone AI camera with built-in face recognition and object tracking.
---

## Overview
UnitV2 is a small standalone AI camera module from M5Stack. It has a SigmaStar SSD202D dual-core processor, 128 MB of RAM, a 1080P camera, a microphone, and Wi-Fi, and it runs embedded Linux. Built-in recognition includes face recognition and object tracking. Students open a web interface and choose an app.

## Benefits for students
- Students use a web page to start recognition apps.
- Students read results as JSON text over UART.
- Students can try Jupyter Notebook development.

## Benefits for teachers
- The setup is a Type-C cable and a web browser.
- The page advises Chrome or Edge.
- A link leads to the V-Training online model service.

## Benefits for schools
- Prices are unverified. A source cites $65 for UnitV2-USB, $75 for UnitV2, and $95 for the M12 variant.
- The camera needs the internet only at setup.
- Wi-Fi and wired modes exist. IT should confirm network settings in school labs.

## Getting started
- [ ] Buy the UnitV2 from M5Stack or a reseller.
- [ ] Connect it to a computer with a USB Type-C cable.
- [ ] Install the SR9900 driver if Windows 10 or macOS needs it.
- [ ] Open the web interface in Chrome or Edge.
- [ ] Choose face recognition or object tracking.
- [ ] Check the network mode with IT.
- [ ] Read the JSON results over UART.

## Where is the AI?
The AI is face recognition and object tracking that runs on the camera. The camera links to V-Training, an online service for training models. Students choose a recognition app, view the results, and use the JSON output in their own code.

## Privacy and safety
An account is optional, and the research did not confirm who needs one. The product page says recognition runs on the device. V-Training is an online service, and the research did not review its data handling. Student images sent there may leave the school. Using the camera over Wi-Fi exposes it to the local network. The research found no privacy policy. A teacher should check the V-Training terms and the camera's network mode.

## Ideas by subject
### computer_science
1. Run face recognition and describe what the web page shows.
2. Read the JSON output and explain each field.
3. Track an object across the room and note where tracking fails.
4. Compare the camera in bright and dim light.
5. Write a short program that reads the JSON and prints a message.

### engineering
1. Connect the camera to a computer and confirm the video feed.
2. Mount the camera on a small stand at a chosen angle.
3. Wire the UART output to a small board and read results.
4. Test Wi-Fi mode and wired mode and compare the setup effort.
5. Build a tracking project that turns a small servo toward an object.
