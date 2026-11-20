---
slug: school-bud-e
tagline: An experimental open source AI learning assistant with chat, voice, and image features.
---

## Overview
School Bud-E is an experimental open source AI learning assistant from LAION. It offers streaming chat, voice input, text-to-speech, PDF and image upload, and experimental image generation. The interface comes in English and German. A school deploys it and chooses which model providers it calls. The README calls it a prototype that may give inaccurate answers.

## Benefits for students
- Students can talk to the assistant and hear replies read aloud.
- Students can upload a PDF or an image and ask about it.
- Students can export their chats as JSON files.

## Benefits for teachers
- The assistant supports reading and writing tasks with PDF upload.
- Voice features help language practice.
- Intended features include Wikipedia lookups and curriculum search, per an Intel article.

## Benefits for schools
- The software is free. Commercial API keys and hosting cost extra.
- A server or computer that runs Deno or Docker is needed.
- IT must set it up. The Admin Bud-E middleware lives in a separate repository.

## Getting started
- [ ] Find the School Bud-E repository from LAION on GitHub.
- [ ] Ask IT to clone it and check out the experimental branch.
- [ ] Copy .example.env to .env.
- [ ] Add the API keys and the middleware URL.
- [ ] Review the default providers. The default setup sends data to OpenAI and Groq.
- [ ] Run deno task start or docker-compose up.
- [ ] Test chat, voice, and a PDF upload with staff first.

## Where is the AI?
The AI is a set of models for chat, speech to text, text to speech, and image generation. They run in provider clouds by default, or on school servers if every part is self-hosted. Students ask questions by typing or speaking and use the replies to extend their own work.

## Privacy and safety
Accounts are optional. Chat history is stored in the browser. Prompts, audio and images pass through a separate middleware to the chosen model providers. The default setup sends data to OpenAI and Groq. The README does not say what the middleware logs or retains. Data stays on site only if the language, speech and image models are all self-hosted. A teacher should ask IT which providers are active.

## Ideas by subject
### ela
1. Upload a short article as a PDF and ask the assistant for the main idea.
2. Write a paragraph and ask for one suggestion, then decide whether to use it.
3. Ask the assistant to explain a hard word and use it in your own sentence.
4. Compare an answer from the assistant with the text and mark any error.
5. Export a chat as JSON and write a short note on what you learned.

### world_languages
1. Speak a short sentence in the target language and read the text the assistant hears.
2. Listen to the assistant read a reply and repeat it aloud.
3. Ask the assistant a question in English and in German and compare the answers.
4. Upload a short text in the target language and ask for a simple summary.
5. Write a dialogue with the assistant and note any mistake it makes.
