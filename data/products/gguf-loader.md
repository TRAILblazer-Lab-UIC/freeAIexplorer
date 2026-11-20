---
slug: gguf-loader
tagline: A free desktop app that loads GGUF language models and chats with them locally.
---

## Overview
GGUF Loader is a free desktop app for running GGUF format language models on Windows, macOS, and Linux. The site says the prebuilt installers need no Python or command line. A user clicks Load Model and picks a model file. The app also has an agent mode that can read and edit files in a chosen workspace.

## Benefits for students
- Students can load and chat with a model on their own computer.
- Students see that a model is a file that an app can open.
- Students can search and read documents with the model's help.

## Benefits for teachers
- The graphical interface avoids command line work.
- Agent mode asks for an Allow or Deny choice before commands, code runs, and git writes.
- Teachers can use the stable 2.2.0 release for a steady setup.

## Benefits for schools
- The app is free and the code is open source.
- The README recommends at least 32 GB RAM and about 8 GB of free storage.
- IT may need to approve unsigned installers, and Chromebooks are not supported.

## Getting started
- [ ] Get the stable 2.2.0 release from the GitHub page.
- [ ] Ask IT to approve the installer.
- [ ] Install the app on a machine with plenty of RAM.
- [ ] Download a .gguf model file while online.
- [ ] Click Load Model and choose the file.
- [ ] Switch the GPU toggle on if the machine has a CUDA or Metal GPU.
- [ ] Leave agent mode off until you have reviewed the Allow and Deny prompts.
- [ ] Test a few classroom prompts offline.

## Where is the AI?
The AI is a local language model that handles chat, text generation, and a file agent. It runs on the computer's own hardware. Students load a model, ask questions, and compare the answers. Version 2.3.0 is a testing release that is pinned to one Gemma model.

## Privacy and safety
No account is needed. The README says no data ever leaves the machine and the site says no external APIs or internet are needed. The research could not confirm that claim. The repo has an example feedback configuration and an undocumented Providers tab in Settings. Version 2.3.0 downloads a missing pinned model, and the model library links to Hugging Face. The research found no privacy policy and did not audit telemetry. Agent mode can read and edit files in a chosen workspace. A teacher should ask IT to check the Providers tab and set a workspace with no private files.

## Ideas by subject
### computer_science
1. Load a small model and write down how long the first reply takes.
2. Load two models and compare answers to the same question.
3. Turn the GPU toggle on and off and compare the speed.
4. Use document reading to ask questions about a text file and check the answers.
5. Explain in a short paragraph what a GGUF file holds.
