---
slug: open-tutorai-ce
tagline: A free community edition of an AI tutoring platform that a school hosts itself.
---

## Overview
Open TutorAI CE is the community edition of an open source AI tutoring platform. It offers adaptive tutoring, AI personas and avatars, and chat with several models. A school server runs it, and students reach it through a browser. Students ask questions, chat with a tutor persona, and can ask about documents that staff upload.

## Benefits for students
- Students get a tutor that answers questions in a chat window.
- Students can choose a persona or avatar and use voice or video modes.
- Students can ask questions about uploaded documents through local retrieval.

## Benefits for teachers
- Teachers use role-based access to control who can do what.
- The interface comes in English, French, and Arabic.
- Teachers can add documents for the tutor to draw on.

## Benefits for schools
- The Community Edition is free. Server hardware is the main cost.
- The platform runs on a school server, and students need only a browser.
- Setup needs Docker skills. A GPU helps local models run at a good speed. An Enterprise Edition exists with no listed price.

## Getting started
- [ ] Find the Open TutorAI CE project on GitHub and read its documentation.
- [ ] Ask IT to run it with Docker Compose on a school server.
- [ ] Choose a backend. Use the Ollama service for local models or point OPENAI_API_BASE_URL at an external API.
- [ ] Replace the default SECRET_KEY with a new private value.
- [ ] Register the first account yourself. That account becomes the administrator.
- [ ] Create teacher and student roles.
- [ ] Test a short tutoring chat before students log in.
- [ ] Keep external API backends off for any class that needs data to stay on site.

## Where is the AI?
The AI is a set of language, image, and voice models that power tutoring chat and retrieval over uploaded documents. The models can run locally through Ollama on a school server. They can also run in a company's cloud through an OpenAI-compatible provider or Google Gemini. Students chat with the tutor and use its answers to check and extend their own thinking.

## Privacy and safety
Accounts are required, and the first registered account is the administrator. The internet is needed at setup. The platform stores data on the host server. With a local backend, prompts stay on the school server. An external provider or web search sends prompts and context out. The README gives no privacy policy or student data statements, and it lists debug mode as on by default. A teacher should ask IT which backend is in use and whether debug mode is off before students log in.

## Ideas by subject
### ela
1. Ask the tutor persona to explain a reading passage, then write a short summary in your own words.
2. Upload a class article and ask the tutor three questions about it.
3. Draft a paragraph, ask the tutor for feedback, and decide which tips to use.
4. Chat with two different personas about the same question and compare their styles.
5. Write a list of questions for the tutor and rank the answers by how clear they are.
