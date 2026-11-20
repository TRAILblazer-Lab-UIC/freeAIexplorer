---
slug: seeed-sensecap-watcher
tagline: A small camera and microphone device that watches a space and sends alerts.
---

## Overview
The SenseCAP Watcher is a small physical AI agent with a camera and a microphone. Users give it instructions by voice or in the SenseCraft app. It mixes local TinyML with cloud language models for monitoring and notifications. It is built for makers and is not a classroom product by design.

## Benefits for students
- Students give a device plain-language instructions and see how it responds.
- Students learn how a local model and a cloud model can share a job.
- Students see object detection used for a real task.

## Benefits for teachers
- Setup takes about an hour with a phone and the SenseCraft app.
- The hardware repository is open. Advanced teachers can study the design.

## Benefits for schools
- The device costs between about 49 and 99 dollars.
- It needs Wi-Fi at all times, on the 2.4 GHz band.
- The device ties to a vendor app account and sends data to the vendor cloud. IT and privacy staff should review it first.

## Getting started
- [ ] Find the SenseCAP Watcher at Seeed Studio and read the product page.
- [ ] Ask IT and the privacy lead to review a camera and microphone device that uses a vendor cloud.
- [ ] Make sure a 2.4 GHz Wi-Fi network is available.
- [ ] Install the SenseCraft app on a phone with Bluetooth.
- [ ] Scan the QR code on the device to bind it in the app.
- [ ] Name the device and assign it to a group.
- [ ] Test it in a room with no students present before any classroom use.

## Where is the AI?
The Watcher uses local TinyML for object detection on the device. It also sends tasks to cloud large language models, which interpret instructions and analyze images. Students tell it in plain words what to watch for and then judge the alerts it sends.

## Privacy and safety
The device has a camera and a microphone and needs an internet connection and an account in the vendor app. Local models detect objects on the device, and cloud language models handle instructions and images. The wiki does not state what is sent to the cloud, and the research found no education privacy terms. The general Seeed policy says its products are not intended for people under 16. A teacher should have IT and the privacy lead review the device. A teacher should also decide where the camera may point and who may be recorded.

## Ideas by subject
### computer_science
1. Describe a watching task in plain words and test how well the Watcher follows it.
2. List which jobs the device does locally and which it sends to the cloud.
3. Write a short set of test cases that try to fool the object detection.
4. Compare an alert from the Watcher with what really happened in the room.
5. Debate which monitoring tasks are fine for a school and which are not.
