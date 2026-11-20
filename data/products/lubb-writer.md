---
slug: lubb-writer
tagline: A browser extension that rewrites, summarizes, or fixes selected text with AI.
---

## Overview
Lubb Writer is an open source writing tool made of a browser extension and a REST API. Users select text on a web page and apply one of 13 modes such as rewrite, summarize, grammar, formal, academic, or creative. The API sends the text to a chosen provider. It is a small one-developer project.

## Benefits for students
- Students can check grammar and tone on text they select.
- Students can compare formal and creative versions of a sentence.
- Students can summarize a long passage.

## Benefits for teachers
- Thirteen modes give many ways to model revision.
- The extension works in Chrome, Firefox, Edge, and Brave.
- Teachers can choose a local provider such as Ollama.

## Benefits for schools
- The tool is free. Cloud provider keys carry their own costs.
- Self-hosting the API with Docker keeps text on a school server.
- IT will likely need to set up and review the API.

## Getting started
- [ ] Find Lubb Writer in its repository and read the README.
- [ ] Ask IT to review the extension and the API.
- [ ] Install the extension from the Chrome or Firefox store. The Edge listing was marked coming soon.
- [ ] Self-host the API with Node 18 or newer and Yarn or Docker.
- [ ] Enter provider API keys, or point it at a local Ollama.
- [ ] Test the modes with a short sample paragraph.
- [ ] Set a rule for what text students may select.

## Where is the AI?
The AI is a language model from whichever provider is configured. Providers include OpenAI, Claude, Gemini, and local tools such as Ollama and LM Studio. The extension runs in the browser and the API runs on a school server or elsewhere. Students select text and apply a mode, then edit the result themselves.

## Privacy and safety
The materials do not state whether accounts are needed or how often the internet is used. The extension sends selected text to a REST API, which calls the chosen provider. With a cloud provider the text goes to that provider. The research did not confirm whether the project's own hosted API is used by default. The research read no privacy policy. Pairing it with a local Ollama and a self hosted API could keep text on school systems. A teacher should check the provider setting before students use it.

## Ideas by subject
### ela
1. Write a paragraph, apply the grammar mode, and list each change you accept.
2. Rewrite a sentence in formal, academic, and creative modes and compare them.
3. Summarize a news article and check that the summary keeps the main idea.
4. Pick a weak sentence and revise it by hand before using any mode.
5. Write a short note on which changes improved your writing and which did not.
