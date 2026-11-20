---
slug: nextcloud-assistant
tagline: An AI assistant inside self-hosted Nextcloud for chat, summaries, translation, and file questions.
---

## Overview
Nextcloud Assistant is an AI assistant built into self-hosted Nextcloud. It offers chat, summarizing and rewriting text, translation, speech to text, image generation, and OCR. Context Chat lets users ask questions about their files. It can run open models on the server with the llm2 app or use outside providers such as OpenAI or Gemini.

## Benefits for students
- Older students can summarize, rewrite, and translate text.
- Students can ask questions about their own files with Context Chat.
- Students can turn speech into text and make images.

## Benefits for teachers
- Teachers get chat, proofreading, and rewriting tools in the same place as their files.
- Translation tools help with notes to families.
- The research found no education-specific material. Teachers plan their own uses.

## Benefits for schools
- Nextcloud is open source, and an enterprise subscription is optional and priced by quote.
- Local models keep data on the school server.
- An administrator must run the server, and hosting hardware costs extra.

## Getting started
- [ ] Find the Nextcloud Assistant app in the Nextcloud app store.
- [ ] Ask the Nextcloud administrator to install the Assistant app.
- [ ] Have the administrator install llm2 through AppAPI.
- [ ] Check the server meets llm2 needs, with a 12GB RAM recommendation and an x86_64 CPU with AVX2.
- [ ] Download a model while online.
- [ ] Review each AI backend that is turned on.
- [ ] Test the tools with a teacher account first.

## Where is the AI?
The AI is a set of models for chat, summaries, translation, speech to text, and image generation. It can run on a school server with llm2 or at an outside provider that the administrator chooses. Students and teachers use the tools to draft, check, and translate their own work.

## Privacy and safety
Accounts are needed. The vendor does not say what student data is stored. Data stays on the school server with llm2, but any external backend sends data out. A teacher should ask the administrator which backends are enabled before students use it.

## Ideas by subject
### ela
1. Summarize a chapter with the tool and compare it with your own summary.
2. Rewrite a paragraph in a new tone and discuss what changed.
3. Proofread a draft and decide which fixes to accept.
4. Ask Context Chat a question about your own notes and check the answer.
5. Write a prompt to get a clearer rewrite and explain why it worked.

### world_languages
1. Translate a short text and fix any awkward phrases.
2. Compare the translation with a dictionary entry.
3. Turn spoken practice into text with speech to text and check the words.
4. Ask for a simple summary in the target language.
5. List mistakes the tool made and why a person should check them.
