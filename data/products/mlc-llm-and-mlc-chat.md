---
slug: mlc-llm-and-mlc-chat
tagline: A free engine for running language models on phones, laptops, and in the browser.
---

## Overview
MLC LLM is a compiler and deployment engine that runs large language models on the user's own hardware. It offers a browser SDK, iOS and Android SDKs, a command line, a Python API, and a REST API. A free MLC Chat app lets users try models on an iPhone, iPad, or Apple Silicon Mac. The tool is aimed at developers and advanced high school students.

## Benefits for students
- Students can chat with a language model that runs on their own device.
- Students see how a model is packaged and run on a phone or laptop.
- Advanced students can explore the code and the several ways to deploy a model.

## Benefits for teachers
- The MLC Chat app gives a quick way to try a model.
- Teachers can show how a model runs without a cloud account.
- The docs give several routes. A teacher can pick the simplest one.

## Benefits for schools
- The software is free and the code is open source.
- Models run on the device after the download. The research did not read the privacy page.
- A teacher or IT worker should plan to install it and check device memory.

## Getting started
- [ ] Find MLC Chat in the App Store or the MLC LLM docs.
- [ ] Check that the device has enough memory. The docs example uses about 3 GB.
- [ ] Install MLC Chat and pick a small model to download.
- [ ] Stay online while the model weights download.
- [ ] Go offline and test a short chat.
- [ ] Try the WebLLM browser route as a second option.
- [ ] Ask IT before building from source, which needs Xcode, CMake, and Rust for iOS.

## Where is the AI?
The AI is a large language model that answers chat prompts. It runs on the device or in the browser and not on a vendor server. Students type prompts, read the replies, and compare how different models and sizes respond.

## Privacy and safety
No account is needed, and chats run on the device. The internet is used for setup, and by default the app downloads model weights from Hugging Face. The privacy page for MLC Chat returned a 404 error and went unread. The research did not confirm offline use or what data the app collects. A teacher should check which model students download and read that model's own terms.

## Ideas by subject
### computer_science
1. Run a small model in MLC Chat and record how long it takes to answer.
2. Compare two model sizes on the same prompt and describe the differences.
3. Open the WebLLM browser demo and describe how it runs without a server.
4. Draw a diagram of how a model moves from download to answer on a phone.
5. Write a short report on what limits a model on a device, such as memory.
