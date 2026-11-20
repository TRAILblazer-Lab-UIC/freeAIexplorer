---
slug: khoj
tagline: A self-hosted personal AI that answers from the web and your own documents.
---

## Overview
Khoj is a personal AI app that answers questions from the web and from the user's own documents. It supports chat with local or online models, custom agents, scheduled research automations, and semantic search over files. It can be self hosted with Docker or pip and can point at a local Ollama server. A hosted version exists at app.khoj.dev.

## Benefits for students
- Advanced students can ask questions about their own notes.
- Students can build custom agents.
- Students can reach it from a browser, Obsidian, Emacs, desktop, phone, or WhatsApp.

## Benefits for teachers
- Teachers can search class notes by meaning.
- Scheduled research automations can collect updates on a topic.
- The tool is best for teachers who are comfortable with servers.

## Benefits for schools
- The software is free when self hosted. Hosted pricing was not found.
- Offline chat needs at least 8 GB RAM and 5 GB free disk, and the docs recommend 16 GB VRAM.
- It needs a server admin to set up.

## Getting started
- [ ] Find Khoj on its official site and read the setup docs.
- [ ] Ask IT for a server admin to help.
- [ ] Run Docker Compose, or run pip install khoj with the local extra.
- [ ] Create an admin account.
- [ ] Register a local Ollama endpoint in the admin panel.
- [ ] Choose that endpoint as the chat model.
- [ ] Test with a small folder of class notes while offline.
- [ ] Skip the hosted version for student data.

## Where is the AI?
The AI is a chat assistant with semantic search over documents and some image generation. It runs on a school server or a desktop with a local model, and it can also use online models. Students ask questions and check the answers against their own files. Anonymous mode is described as suitable for single user local setups.

## Privacy and safety
Accounts are optional, and the internet is used for setup of a local install. Self hosting with a local model keeps data on the school's own machine. Commercial chat models need API keys and send prompts to those providers. The hosted app at app.khoj.dev is a separate service that sends data to the vendor. The setup docs read do not cover telemetry. A teacher should confirm with IT which models and hosts are in use.

## Ideas by subject
### computer_science
1. Add a folder of notes and ask Khoj a question about them.
2. Compare an answer from a local model with one from an online model.
3. Build a custom agent for one narrow task and test it.
4. Explain how semantic search finds a note by meaning.
5. Write a plan for how a school could run Khoj safely.
