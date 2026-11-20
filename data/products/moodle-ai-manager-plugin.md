---
slug: moodle-ai-manager-plugin
tagline: A Moodle backend plugin that connects AI tools and controls who can use them.
---

## Overview
The Moodle AI Manager plugin is a multi-tenant AI backend for Moodle. It is an alternative to the AI subsystem shipped with Moodle 4.5. It connects AI tools such as OpenAI, Google Gemini, Ollama, and Telli. It also defines purposes such as chat, feedback, translation, image generation, and text to speech. It is built for administrators, and students use it through frontends such as the AI chat block.

## Benefits for students
- Students reach chat, feedback, and translation tools inside Moodle.
- Students get text to speech and image tools through the same system.
- Students see notices that their data may go to an outside AI system.

## Benefits for teachers
- Teachers can see student prompts by default.
- Admins can limit this view through capabilities.
- Teachers use the tools through frontend plugins and need no extra accounts.

## Benefits for schools
- The plugin is free and its code is open source under GPL v3 or later.
- Admins can limit requests per role, turn users on or off, and watch usage.
- Paid outside AI services cost extra, and an administrator must run the setup.

## Getting started
- [ ] Find the Moodle AI Manager plugin in the project repository.
- [ ] Ask a Moodle administrator to install it on the school site.
- [ ] Set up a tenant for the school.
- [ ] Configure the AI tools and decide which purposes to allow.
- [ ] Choose request limits for each role.
- [ ] Install a frontend such as the AI chat block.
- [ ] Review the data notices that students will see.

## Where is the AI?
The AI is whichever tool the administrator connects, such as OpenAI, Gemini, Ollama, or Telli. The plugin runs on the school's Moodle server, but the AI itself can run on the school's own server or at an outside company. Students and teachers use chat, feedback, translation, and image tools to support their own work.

## Privacy and safety
Accounts are needed, and prompts and usage statistics are kept. Teachers can see student prompts unless the capability is turned off. Data goes to an outside company when an external AI tool such as OpenAI or Gemini is enabled. A self-hosted Ollama can keep prompts on the school server, but the research did not verify an offline setup. A teacher or administrator should check each tool that is turned on before students use it.

## Ideas by subject
### ela
1. Write a paragraph and ask for feedback, then pick which changes to accept.
2. Compare the AI's feedback with a classmate's feedback on the same paragraph.
3. Use the chat purpose to brainstorm questions about a class novel.
4. Rewrite a draft after feedback and explain what improved.
5. Discuss why a teacher can see student prompts and what that means for honest use.

### world_languages
1. Translate a short passage and mark phrases that sound unnatural.
2. Listen to a text to speech reading and practice the pronunciation.
3. Ask for a translation in two styles and describe the differences.
4. Write a message in the target language and use the tool to check grammar.
5. Compare an AI translation with a dictionary entry and report the gaps.
