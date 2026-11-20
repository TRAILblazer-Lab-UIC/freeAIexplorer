---
slug: stanford-nifty-local-llm-chatbot-assignment-madar
tagline: A CS1 assignment where students build a command-line chatbot on a local model.
---

## Overview
This CS1 assignment by Jason Madar has students build a command-line chatbot on a local large language model. Students practice lists, dictionaries, loops, and conditionals. They write the conversation memory themselves. Language models are stateless. The model is Qwen2.5-0.5B-Instruct, and pytest auto-grades the work. It takes about 2 to 3 hours.

## Benefits for students
- Students build a chatbot with core Python skills.
- Students learn how chat memory works.
- Students get quick feedback from automatic tests.

## Benefits for teachers
- Pytest grades the work.
- A one-click GitHub Codespaces setup is offered.
- It was presented at SIGCSE 2026 Nifty Assignments.

## Benefits for schools
- The assignment is free. Codespaces free tier limits were not checked.
- Students need a GitHub account for the Codespaces route.
- A local install needs Python 3.9 or later and a compiler.

## Getting started
- [ ] Find the Local LLM Chatbot assignment page.
- [ ] Ask IT to approve GitHub accounts for students.
- [ ] Read the privacy terms for GitHub Codespaces.
- [ ] Open the assignment in Codespaces.
- [ ] Or install Python 3.9, CMake, and a compiler, then run pip install llama-cpp-python.
- [ ] Wait for the build from source to finish.
- [ ] Run the pytest tests after each step.

## Where is the AI?
The AI is a small local language model, Qwen2.5-0.5B-Instruct. It runs in the cloud workspace or on the local device, depending on the route. Students write the code around it, including conversation memory. They then chat with their bot and run the tests.

## Privacy and safety
The Codespaces route needs a GitHub account. Student code lives in GitHub cloud workspaces, and the model runs inside that workspace. The research did not read the GitHub privacy statement. A local install keeps work on the device. A teacher should check the GitHub account rules for the age of the students and the school's rules on cloud workspaces.

## Ideas by subject
### computer_science
1. Build a loop that reads a message and prints the model's reply.
2. Store past messages in a list to give the bot memory.
3. Use a dictionary to hold each message's role and text.
4. Add a command that clears the memory.
5. Run the pytest tests and fix any failing one.
