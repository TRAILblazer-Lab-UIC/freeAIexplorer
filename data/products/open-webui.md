---
slug: open-webui
tagline: A self-hosted chat site for local or hosted AI models with user accounts.
---

## Overview
Open WebUI is a self-hosted web chat platform. It connects to local engines such as Ollama and vLLM or to any OpenAI-compatible endpoint. It supports many users, roles, and knowledge collections. Students use a ChatGPT-style page in a browser to ask questions and work with documents.

## Benefits for students
- Students use a familiar chat page that needs only a browser.
- Students can ask questions about documents in a knowledge collection.
- Students see how a chat tool connects to a model they can inspect.

## Benefits for teachers
- Teachers can limit which models each group can see.
- Teachers can build knowledge bases for a class to search and question.
- Carleton College IT offers it with local Ollama models on lab computers for computing classes.

## Benefits for schools
- The software is free to self-host. A third-party guide estimates $0 to $3,000 for server hardware, but those figures are unverified.
- The project says it can run fully offline or on an air-gapped network.
- Student chats and files can stay on a school server. IT must set up and manage it.

## Getting started
- [ ] Find Open WebUI on GitHub and read the install guide.
- [ ] Ask IT to install it with Docker using the ghcr.io/open-webui/open-webui image or with pip.
- [ ] Connect an Ollama or OpenAI-compatible backend.
- [ ] Keep cloud backends off for any class that needs data to stay on site.
- [ ] Create user accounts and roles.
- [ ] Set retention and audit controls.
- [ ] Create a knowledge collection from a few class documents.
- [ ] Run a short test chat before students log in.

## Where is the AI?
The AI is a language model that powers chat, document retrieval, and tool use. It runs on the school server through a local engine such as Ollama. Students and teachers type questions, read the replies, and use them to extend their own work. A cloud backend can be added, and then the model runs in a company's cloud.

## Privacy and safety
Accounts are required. The software stores chats, uploaded files, knowledge bases, user accounts, and logs on the school server, and the research found that admins and teachers can review logged conversations. Data goes to outside systems only when a cloud backend or tool is configured. The slim image relies on external services for embeddings and voice. The vendor says no software handles FERPA duties alone. A teacher should ask IT to confirm that cloud backends are off and to explain the retention setting.

## Ideas by subject
### computer_science
1. Compare the answers of two local models to the same question and describe the differences.
2. Build a small knowledge collection and test how well the model answers questions from it.
3. Change the model setting in a lab session and record how speed and answer quality change.
4. Draw a diagram that shows how a question travels from the browser to the model and back.
5. Write a list of questions that test where the model gives wrong answers.

### ela
1. Upload a short story and ask the model for questions that help you discuss it.
2. Draft a paragraph and ask for feedback, then revise it in your own voice.
3. Use a knowledge collection of class notes to find evidence for an essay claim.
4. Ask the model to explain a hard word and write your own sentence with it.
5. Compare two summaries of the same article and pick the more accurate one.
