---
slug: aimadefor-local-ai-for-schools-guide
tagline: An IT guide to running a private local AI chat for a whole school.
---

## Overview
This article from April 17, 2026 explains how to run local AI for a whole school. It uses Ollama to run a model and Open WebUI in Docker for a browser chat on port 3000. It covers hardware tiers, system prompts, conversation logging, and network separation with VLANs. The article does not name an author and takes about nine minutes to read.

## Benefits for students
- Students get a private chat assistant on the school network.
- Students use it through a browser on their own devices.
- System prompts can be set for each grade.

## Benefits for teachers
- Teachers can ask IT for guardrail prompts that suit their grade.
- Conversation logs let a school review how the tool is used.
- Teachers do not need to run any servers themselves.

## Benefits for schools
- The article says student chats stay on the school server.
- The internet is needed only to download software and models.
- Hardware costs range from $0 for repurposed equipment to $1,500-3,000 for a GPU server, and the setup needs real IT skill.

## Getting started
- [ ] Find the aimadefor Local AI for schools article and read it with IT.
- [ ] Choose a hardware tier, from a repurposed desktop to a GPU server.
- [ ] Install Ollama and a model.
- [ ] Run Open WebUI in Docker.
- [ ] Turn on accounts. The default setup has no login.
- [ ] Write system prompts for each grade.
- [ ] Enable logging and auto-deletion.
- [ ] Set up network separation with a VLAN and test with a few students.

## Where is the AI?
The AI is a large language model served by Ollama. It runs on a school server and students reach it through Open WebUI in a browser. Students ask questions and get answers, and teachers set the rules with system prompts. Students can then use the replies to extend their own drafts and ideas.

## Privacy and safety
The article says student data stays on school infrastructure. The research did not verify that claim. Chats are logged on the school server. Open WebUI has no login by default. IT must turn on accounts. The article suggests class codes to avoid storing names. The research found no FERPA or COPPA guidance from Open WebUI or Ollama. A teacher should ask IT how long logs are kept and who can read them.

## Ideas by subject
### computer_science
1. Read the article's hardware tiers and compare the cost of each one.
2. Draw a diagram of how Ollama, Open WebUI, and the browser connect.
3. Write a system prompt for a grade level and test how it changes a reply.
4. Discuss why a school might log chats and how long it should keep them.
5. Explain how a VLAN keeps the AI server separate from other devices.
