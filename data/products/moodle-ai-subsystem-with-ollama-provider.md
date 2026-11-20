---
slug: moodle-ai-subsystem-with-ollama-provider
tagline: Moodle's built-in AI features with an Ollama option for locally hosted models.
---

## Overview
Moodle core includes an AI subsystem with provider plugins. The docs list providers such as Amazon Bedrock, Anthropic Claude, Azure AI, DeepSeek, Gemini API, Ollama API, and OpenAI API. The Ollama provider connects Moodle to locally hosted models. Moodle 4.5 docs describe the Generate text and Summarise text actions in the editor and course assistance.

## Benefits for students
- Students can get help summarizing and drafting text inside the Moodle editor.
- Students use tools inside a site they already know.
- A local model keeps the help on the school's own server.

## Benefits for teachers
- Teachers use Generate text and Summarise text in the editor.
- Course assistance placements give quick help inside a course.
- An administrator does the setup. Teachers only use the tools.

## Benefits for schools
- Moodle is free and open source.
- Cloud providers charge per use, and local models need server hardware.
- An administrator must install Ollama and change Moodle security settings.

## Getting started
- [ ] Find the AI subsystem settings in Moodle's Site administration.
- [ ] Install Ollama on the Moodle server and pull a model.
- [ ] Change the cURL blocked hosts and allowed ports in Moodle security settings.
- [ ] Add an Ollama provider instance in Site administration.
- [ ] Turn on the Generate text and Summarise text actions.
- [ ] Turn on the editor and course assistance placements.
- [ ] Test the tools with a teacher account before students use them.

## Where is the AI?
The AI is a language model that writes and summarizes text. With the Ollama provider, it runs on a school server and not at an outside company. Students and teachers use the actions in the editor to draft, then edit the text in their own words.

## Privacy and safety
Accounts are needed. The docs do not describe what student data Moodle stores or sends to a provider. Cloud providers such as OpenAI, Azure, and Gemini send prompts to those companies. Ollama keeps prompts on the school network only when it runs on the same host or its remote access is protected. Ollama has no built-in authorization, and the guide calls an exposed setup insecure. A teacher should ask the administrator which provider is on.

## Ideas by subject
### ela
1. Summarize a short article with the Summarise text action and compare it with your own summary.
2. Draft an opening sentence with Generate text and rewrite it in your own voice.
3. Check a generated paragraph for facts that need a source.
4. Summarize a class poem and discuss what the summary misses.
5. Write a prompt that gives a clear result and explain why it worked.
