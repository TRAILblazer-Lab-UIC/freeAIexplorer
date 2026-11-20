---
slug: gpt-oss-scratch-extension
tagline: Scratch blocks that call a language model running on a school server.
---

## Overview
This is a Scratch extension that adds AI blocks backed by a GPT-OSS model served locally through Ollama. Blocks generate text, analyze sentiment, generate Scratch code, and create SVG art for costumes. It is a self-hosted version of the Scratch editor. Setup requires building from source. It is aimed at IT staff.

## Benefits for students
- Students use familiar Scratch blocks to try a language model.
- Students can generate text and costume art for their projects.
- Students can test sentiment analysis on sentences they write.

## Benefits for teachers
- An admin dashboard tracks student AI use.
- Optional NeMo Guardrails add content filtering.
- Students work in accounts that the school controls.

## Benefits for schools
- The software is free.
- The README says processing stays on school servers with no outside AI service.
- It needs a server with Node.js, Git, Ollama, and at least 4 GB of RAM. The larger models usually need far more, and the README does not confirm this.

## Getting started
- [ ] Find the project on GitHub and read the README.
- [ ] Ask IT to prepare a school server.
- [ ] Install Ollama and pull a GPT-OSS model.
- [ ] Edit the config file for your server.
- [ ] Set up NeMo Guardrails to filter student content.
- [ ] Install dependencies in scratch-vm and scratch-gui and run npm start.
- [ ] Create student accounts in the admin dashboard.
- [ ] Test every block before students use them.

## Where is the AI?
The AI is a GPT-OSS language model that runs on a school server through Ollama. It writes text, rates sentiment, writes Scratch code, and draws SVG images. Students call these blocks from their own projects and then edit what the model returns.

## Privacy and safety
Students need accounts that the school creates in the project's own admin dashboard. The README says student data never leaves the school network and all AI processing is local. The dashboard records each student's AI use on the school server. The only outside connections it mentions are downloading Ollama and models and a Google Form for feedback. The repo has a test script named for an external API, and the research did not check whether any external API is used. No privacy policy exists and the project is a hackathon prototype. A teacher should ask IT to confirm the setup makes no outside calls and that the guardrails are turned on.

## Ideas by subject
### computer_science
1. Build a Scratch story that uses the Generate Text block for a new sentence each time.
2. Type five sentences and compare the sentiment results.
3. Ask the model for Scratch code and fix any mistakes in it.
4. Generate an SVG costume and add it to a sprite.
5. Test how a different reasoning level changes the model's answers.
