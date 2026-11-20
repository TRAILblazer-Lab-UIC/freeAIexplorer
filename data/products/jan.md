---
slug: jan
tagline: An open source desktop chat app that runs AI models offline on your computer.
---

## Overview
Jan is an open source desktop chat app that runs open models locally. It can also connect to online model providers. The README says it runs 100 percent offline when local models are used. It includes a model library and a local API server.

## Benefits for students
- Students can chat with an AI that runs on their own computer.
- Students can try models of different sizes.
- Students see how local AI differs from a cloud service.

## Benefits for teachers
- Jan publishes a post that describes custom assistants for lesson planning, feedback, parent email, and quiz writing.
- The post says data never leaves the device and that Jan works offline once installed.
- Custom assistants save repeated prompts.

## Benefits for schools
- The app is free and the code is open source.
- RAM is the main cost. The README suggests 8 GB for 3B models, 16 GB for 7B models, and 32 GB for 13B models on macOS.
- IT may need to approve the install. Chromebooks are not supported.

## Getting started
- [ ] Download the installer from jan.ai, GitHub Releases, the Microsoft Store, or Flathub.
- [ ] Ask IT to approve the install.
- [ ] Install Jan on one teacher machine.
- [ ] Download a model from the model library while online.
- [ ] Leave the remote providers turned off.
- [ ] Go offline and test a chat.
- [ ] Build one custom assistant for lesson planning.

## Where is the AI?
The AI is a chat assistant that uses local open models. It runs on the computer, and a GPU is optional. Teachers and students ask questions and use the answers as a draft to improve. Remote providers such as OpenAI, Anthropic, Mistral, and Groq are optional, and they send prompts out if enabled.

## Privacy and safety
No account is needed, and the internet is used for setup. With local models, chats and usage logs are stored on the device. The privacy policy says Jan and Menlo Research products do not collect personally identifying information. It does not address children and does not mention telemetry. Remote providers such as OpenAI or Groq are optional, and prompts sent to them go to that provider under its own policy. A teacher should keep remote providers turned off and review prompts that students write.

## Ideas by subject
### computer_science
1. Install Jan and record which model you chose and why.
2. Ask two models the same question and compare answers.
3. Time a reply and explain what affects the speed.
4. Use the local API server to send a prompt from a short script.
5. Write a guide that explains how local AI differs from a cloud service.

### special_ed
1. Build a custom assistant that turns a lesson into plain language steps.
2. Ask the assistant to rewrite a reading at a lower reading level.
3. Create a checklist for a student with the assistant's help.
4. Test whether the assistant gives clear, short answers.
5. Compare the assistant's draft with a teacher's version and improve it.
