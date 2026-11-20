---
slug: localai
tagline: Open source software that runs AI models on a school's own server.
---

## Overview
LocalAI is open source software for running AI models on your own machines. Its API follows the OpenAI and Anthropic formats. It handles text, vision, images, video, music, speech, and embeddings. It also has a chat workspace with a login for each person and admin control of features. It is aimed at IT staff who run a shared model server.

## Benefits for students
- Students can use chat, image, and speech models.
- Students log in with their own account.
- Students work with tools that match well known online services.

## Benefits for teachers
- Admins control which features each user sees.
- Shared folders support class work.
- The Python sandbox has no network by default.

## Benefits for schools
- The software is free. Hardware and electricity cost extra.
- It runs on a CPU, and GPUs make it faster.
- IT can install it by script, desktop app, Docker, or Kubernetes.

## Getting started
- [ ] Find the LocalAI project page and read the install notes.
- [ ] Ask IT to choose a school machine for the server.
- [ ] Run the install script, desktop app, or container.
- [ ] Note that the desktop app lists Apple silicon Mac and Linux, and Windows is coming soon.
- [ ] Pick the models you want and download them.
- [ ] Create a login for each user and set the features each may use.
- [ ] Keep the Python sandbox network off.
- [ ] Test the chat workspace from a student device.

## Where is the AI?
The AI is a set of open models for text, images, speech, and embeddings. They run on a school server. Students use the chat workspace to ask questions and make media. They can then refine their prompts and build on the results in their own projects.

## Privacy and safety
Accounts are optional in the software, and admins can set a login for each person. Student prompts stay on the school server when only local models are used. Models and backends download on first use. The internet is needed then. The research found no telemetry statement and read no privacy policy. The quickstart page did not render. Detailed setup was not verified. A teacher should ask the admin which features are turned on, who can read the logs, and whether any outside model service is connected.

## Ideas by subject
### computer_science
1. Ask the chat model to explain a code snippet and rate the answer.
2. Compare a text answer from two models on the same prompt.
3. Generate an image from a prompt and revise the prompt three times.
4. Convert a short text to speech and then back to text.
5. Describe in a short report how a server shares one model with many users.
