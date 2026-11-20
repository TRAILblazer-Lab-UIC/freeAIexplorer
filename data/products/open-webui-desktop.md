---
slug: open-webui-desktop
tagline: A desktop app that installs and runs its own copy of Open WebUI.
---

## Overview
Open WebUI Desktop installs a local copy of Open WebUI on one computer. It starts the app, keeps it updated, and opens it in its own window. It suits a single teacher or lab computer. Students chat with an AI model and use the replies for drafting and revision.

## Benefits for students
- Students use a chat window that looks like popular chat sites.
- Students can draft and revise writing with a model on a single machine.
- Students practice judging whether an AI reply is useful.

## Benefits for teachers
- A one-click install makes setup quick for one computer.
- The app updates itself.
- Teachers can demonstrate a chat tool in a window without a server.

## Benefits for schools
- The app is free and the code is open source.
- It needs at least 5 GB of disk space and runs on macOS 12 or newer, Windows 10 or newer, and modern Linux.
- IT will likely install it. The app runs its own local instance and does not connect to other servers.

## Getting started
- [ ] Find the Open WebUI Desktop page on the Open WebUI GitHub repository.
- [ ] Ask IT to approve the install on one computer.
- [ ] Download the build for your operating system.
- [ ] Click Get Started and let the app finish its setup.
- [ ] Some Debian, Ubuntu, and Mint machines show a chrome-sandbox error with the AppImage. Use the .deb file on those machines.
- [ ] Connect a model or an external AI provider.
- [ ] Run a short test chat before students use it.

## Where is the AI?
The AI is a language model that answers chat questions. The vendor does not say where the model runs. External AI providers can be connected, and the README does not confirm a built-in engine. Students write prompts, read the replies, and use them to improve their own drafts.

## Privacy and safety
The materials do not state whether an account is needed. The README says the desktop app collects no usage data. The internet is used at setup, and the research did not confirm offline use afterward. Any external AI provider that a user connects applies its own privacy policy and receives what students type. A teacher should check which AI provider is connected before students use it.

## Ideas by subject
### ela
1. Write a first draft, ask the chat for one suggestion, and decide whether to accept it.
2. Ask the chat to explain a hard sentence from a class reading in plain words.
3. Revise a paragraph twice and compare the versions.
4. Write three questions about a novel and compare the chat answers with your own thoughts.
5. List one reply that helped and one that missed the point, then explain why.
