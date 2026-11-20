---
slug: seeed-sensecraft-ai
tagline: A no-code web platform for training and deploying vision models to small devices.
---

## Overview
SenseCraft AI is Seeed's web platform for edge vision AI. It offers more than 400 pretrained models and zero-code training for object detection and classification. It suits students in grades 6 to 12 who use supported Seeed devices. Students connect a device by USB-C, pick a model, and see a live preview within a couple of minutes.

## Benefits for students
- Students can deploy a vision model in about one to two minutes.
- Students train their own detection or classification model with no code.
- Students adjust confidence and IoU settings and watch results change.

## Benefits for teachers
- The workspace runs in a browser and needs only minutes to open.
- Pretrained models give a quick demo before students train their own.
- A teacher can start without writing code.

## Benefits for schools
- The platform is free to use according to the discovery notes.
- Some SenseCraft AI services carry fees according to the Watcher wiki.
- Models run on the device after deployment, but the workspace needs the internet and sends data to the vendor.

## Getting started
- [ ] Open the SenseCraft AI web workspace from Seeed Studio.
- [ ] Ask IT and the privacy lead to review the platform before student use.
- [ ] Check that the school browser allows USB access.
- [ ] Connect a supported device such as the Grove Vision AI V2 with a USB-C cable.
- [ ] Choose a pretrained model and send it to the device.
- [ ] Open the live preview and adjust the confidence setting.
- [ ] Try zero-code training with a small set of images.

## Where is the AI?
The AI is a set of vision models for object detection and image classification. Training and the workspace run in the vendor's cloud. After deployment, the model runs on the small device itself. Students pick or train a model and then test it on the live camera feed.

## Privacy and safety
An account is optional, and the workspace needs the internet at all times. Training and the workspace run in the vendor cloud, and trained models then run on the device. The research did not confirm whether training images are uploaded to Seeed servers. It found no SenseCraft specific privacy policy. The general Seeed policy says its services are not intended for anyone under 16 and does not say where data is stored. A teacher should ask Seeed about image uploads and decide whether students may use their own photos.

## Ideas by subject
### computer_science
1. Deploy a pretrained model and list the objects it can find.
2. Train a classifier on two kinds of objects and test it with new examples.
3. Change the confidence setting and record how detections change.
4. Find an object that the model gets wrong and explain why.
5. Compare a pretrained model with a model the class trained.

### engineering
1. Connect a Grove Vision AI V2 or XIAO ESP32S3 Sense to the workspace.
2. Plan where a camera should sit to detect objects in a classroom task.
3. Test a deployed model in bright and dim light and note the difference.
4. Design a simple sorting station that uses the detection results.
5. Document the steps to move a model from the workspace to a device.
