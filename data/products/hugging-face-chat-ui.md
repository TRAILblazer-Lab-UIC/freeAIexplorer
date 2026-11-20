---
slug: hugging-face-chat-ui
tagline: An open source chat interface for language models that IT can host.
---

## Overview
Chat UI is an open source chat interface for large language models. It powers the HuggingChat app. It supports only OpenAI-compatible APIs. A teacher or IT staff member must deploy and host it, and students then use it in a browser.

## Benefits for students
- Students get a familiar chat window.
- Students can try different models that the school connects.
- Advanced students can read the code and see how a chat app works.

## Benefits for teachers
- The base URL can point to a local llama.cpp or Ollama server.
- The model list is discovered from the backend.
- It is a tool for a teacher or IT team before it is a tool for students.

## Benefits for schools
- The software is free. Hosting and any inference provider costs are separate.
- A school server can keep chats on site.
- It needs Node.js and MongoDB, or Docker, and IT staff to run it.

## Getting started
- [ ] Find the chat-ui repository on GitHub from Hugging Face.
- [ ] Ask IT staff to plan a host for it.
- [ ] Clone the repository.
- [ ] Set OPENAI_BASE_URL and OPENAI_API_KEY, and point them at a local server for on-site use.
- [ ] Run npm run dev, or run the Docker image that bundles MongoDB.
- [ ] Configure MongoDB for chat history.
- [ ] Test with a local model before students log in.
- [ ] Review the stored data with IT.

## Where is the AI?
The vendor says AI is optional here. The app is only a chat interface, and the model comes from a backend. That backend can be the Hugging Face router in the cloud or a local server on the school network. Students type a prompt, read the answer, and check it against other sources.

## Privacy and safety
Chat history, users, settings, files, and stats are stored in MongoDB wherever it is hosted. With a local model and a local database, the data stays on the school server and the internet is needed for setup. The default quickstart points at Hugging Face. Prompts then go to Hugging Face and its partner providers. The privacy statement for the hosted HuggingChat says router requests are not used for training and debug logs are kept up to 30 days. An optional setting lets users opt in to sharing data with model creators, and the README does not describe how users sign in on a self hosted install. A teacher should confirm with IT where the model and the database run.

## Ideas by subject
### computer_science
1. Describe the parts of a chat app, from the browser window to the model.
2. Ask the same question to two models that the school connects and compare.
3. Read the setting that picks the model server and explain what it does.
4. Look at the chat history that is stored and list what it records.
5. Write a short plan for how a school could host a chat tool safely.
