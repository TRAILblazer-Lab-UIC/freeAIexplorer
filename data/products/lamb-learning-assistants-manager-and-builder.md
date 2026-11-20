---
slug: lamb-learning-assistants-manager-and-builder
tagline: An open source platform for building AI course assistants that run inside your LMS.
---

## Overview
LAMB is an open source web platform for building AI learning assistants. Educators build assistants without code and ground them in their own PDF, Word, and Markdown files. The assistants are published through LTI. Students use them inside Moodle and other learning management systems. It suits a school with a server administrator and older students.

## Benefits for students
- Students ask questions in the course system they already use.
- Answers come from the teacher's own course files, with citation tracking.
- The interface is available in Basque, Catalan, Spanish, and English.

## Benefits for teachers
- Teachers build an assistant with a no-code builder and upload their own materials.
- Debug mode shows the full prompts, which helps a teacher see how an answer was made.
- Teachers choose which course files the assistant may draw from.

## Benefits for schools
- The software is free. The school pays for server hosting and any cloud model API.
- It runs on a school server with Docker Compose and works with Ollama for local models.
- A server administrator is needed. A GPU is needed for local models of useful size.

## Getting started
- [ ] Find the LAMB project repository and read its local deployment guide.
- [ ] Ask a server administrator to prepare a server with Docker Compose V2.
- [ ] Plan for about 10 GB of free disk and 2 to 3 GB of memory, plus space for Ollama models.
- [ ] Deploy with Docker Compose to start Open WebUI, the knowledge base server, and the backend.
- [ ] Connect a model backend, either a local Ollama server or an OpenAI-compatible API.
- [ ] Create an educator account and build a first assistant from a few course files.
- [ ] Register the assistant in the LMS through LTI.
- [ ] Test the assistant with debug mode on before students use it.

## Where is the AI?
The AI is a language model that answers using retrieval from uploaded course files. The model can run locally through Ollama or in the cloud through an OpenAI-compatible API. The platform itself runs on a school server. Teachers shape the assistant with their own files, and students use it to ask questions about course content.

## Privacy and safety
Accounts are required, with admin and creator logins and an OpenWebUI sign in for end users. The README says no user information is shared with AI model providers and that open weight models can run on the institution's hardware. A cloud OpenAI compatible backend sends prompts to that provider. Embeddings need OpenAI or local Ollama. The deployment guide mentions no telemetry and lists a signup setting. A teacher should check which model backend is connected and whether signup is enabled before students start.

## Ideas by subject
### computer_science
1. Open debug mode and read the full prompt the assistant sent to the model.
2. Compare answers from the assistant with and without a course file attached.
3. Trace how a question is matched to a passage in an uploaded file.
4. Test an assistant with a tricky question and write down what the retrieval step found.
5. Draft instructions for an assistant and refine them after reviewing its answers.

### library_media
1. Build an assistant from a set of class readings and check that each answer cites its source.
2. Ask the assistant a question outside the files and describe how it responds.
3. Compare a cited answer with the original passage and judge its accuracy.
4. Write a short guide for classmates on how to ask the assistant good questions.
5. Choose which files belong in an assistant on a topic and explain the choices.
