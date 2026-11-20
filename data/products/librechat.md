---
slug: librechat
tagline: A self-hosted chat site that puts many AI providers and local models in one place.
---

## Overview
LibreChat is an open source chat interface that a school runs on its own server. It connects many AI providers and local models in one web app. It supports multi-user login, agents, tools, a code interpreter, web search, and memory. It suits a school with IT staff and high school students.

## Benefits for students
- Students use one familiar chat page for many different models.
- Students can compare answers from different providers.
- Agents and the code interpreter give older students ways to try more advanced tasks.

## Benefits for teachers
- Teachers can use one login for all the AI models the school offers.
- Teachers can show how different models answer the same question.
- Multi-user authentication lets the school control who gets access.

## Benefits for schools
- The software is free. Server hosting and any paid model API usage are the costs.
- Login options include OAuth, SAML, LDAP, and two-factor.
- Setup needs MongoDB and Docker skills. It suits IT-run deployments.

## Getting started
- [ ] Find the LibreChat project documentation and share it with IT.
- [ ] Ask IT to install it with Docker, npm, or Helm on a school server.
- [ ] Set the environment variables and the YAML file.
- [ ] Turn off open registration before anyone can reach the site.
- [ ] Set up school login and two-factor options.
- [ ] Connect at least one AI provider or a local model server such as Ollama.
- [ ] Test the site with a small group of staff.
- [ ] Write simple rules for students about what to type into chats.

## Where is the AI?
The AI is whichever model the school connects. It can be a cloud provider such as OpenAI, Anthropic, Google, or Mistral, or a local server such as Ollama or vLLM. The chat app runs on a school server. Students and teachers use the models to draft, research, and test ideas, and then check the results themselves.

## Privacy and safety
Accounts are required, and conversations and account details are stored in the school's own database. The privacy policy covers only the librechat.ai documentation site and says it does not apply to the self hosted application. Prompts sent to cloud providers leave the school, and local models through Ollama keep text on site. The research did not confirm in app telemetry or the default registration settings. A teacher should check which providers are connected and ask IT to confirm that open registration is off.

## Ideas by subject
### computer_science
1. Ask two different models the same question and compare their answers.
2. Use the code interpreter to run a short program and explain the output.
3. Write a system prompt for an agent and test how it changes replies.
4. Compare a local model with a cloud model on speed and answer quality.
5. Describe the parts of the chat stack, from browser to server to model.
