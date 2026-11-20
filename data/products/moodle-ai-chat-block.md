---
slug: moodle-ai-chat-block
tagline: A Moodle block that adds an AI chatbot with teacher-set personas to courses.
---

## Overview
The Moodle AI Chat block gives a course or a whole site an AI chatbot. It talks to AI backends set up in the local_ai_manager plugin. Teachers and administrators can set personas that control the system prompt. Students chat in a course and can reach tools such as text generation, translation, text to speech, and image generation.

## Benefits for students
- Students get writing help inside the course they already use.
- Students can use translation and text to speech tools from the same chat.
- Students keep a stored chat history to review later.

## Benefits for teachers
- Teachers choose a persona that shapes how the chatbot answers.
- Teachers add the chat to a course with one checkbox in the course settings.
- The backend lets teachers view student prompts.

## Benefits for schools
- The plugin is free and open source under GPL v3 or later.
- Backend API usage may cost money.
- An administrator must install it and the local_ai_manager plugin, which takes days.

## Getting started
- [ ] Find the Moodle AI Chat block in the plugin repository.
- [ ] Ask the Moodle administrator to install local_ai_manager first.
- [ ] Have the administrator install the chat block and configure AI tools.
- [ ] Review which AI backends are turned on and where they send data.
- [ ] Write a teacher persona with clear rules for students.
- [ ] Turn on the chat in one course through the course settings checkbox.
- [ ] Tell students that teachers can see prompts and stored chat history.

## Where is the AI?
The AI is a chatbot with text generation, translation, text to speech, and image generation. It runs through backends that the school chooses. It can run on a school server or at an outside company. Students chat to draft and revise their writing, and teachers set the persona that guides each reply.

## Privacy and safety
Accounts are needed, and chat prompts and responses are stored in Moodle as chat history. Teachers can view student prompts through the local_ai_manager backend. The plugin is a front end only. Where prompts go depends on the backend. External services such as OpenAI or Gemini receive prompts, and a self-hosted Ollama keeps them on the school server. A teacher should ask the administrator which backend is on and share that with families.

## Ideas by subject
### ela
1. Ask the chatbot for feedback on a paragraph and decide which tips to use.
2. Compare a first draft with a revision that used the chat and explain the changes.
3. Write a prompt that asks the chatbot to play a character from a novel.
4. Check an answer from the chatbot against the text and note any mistakes.
5. Summarize a class reading in your own words and compare it with the chatbot's version.

### world_languages
1. Translate a short paragraph with the chat tool and fix any awkward phrases.
2. Ask for a text to speech reading of a sentence and repeat it aloud.
3. Compare the chatbot's translation with a classroom dictionary.
4. Write a short dialogue in the target language and ask for corrections.
5. List three translation mistakes and explain why a person should check the output.
