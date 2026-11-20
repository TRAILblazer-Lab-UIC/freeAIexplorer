---
slug: lobechat
tagline: An open chat and agent platform a school can host for staff or students.
---

## Overview
LobeChat is now presented under the LobeHub name. It is an open chat and agent platform that can run in the vendor cloud or on a school server. It connects to many model providers and local models. A school would run it as a shared chat front end for staff or students.

## Benefits for students
- Students use one chat page for many models.
- Students can use agents set up by a teacher.
- A marketplace offers agents, MCP servers, and skills.

## Benefits for teachers
- Teachers can pick models and agents for a class.
- Login can run through Better Auth and SSO providers.
- Teachers can compare models on one page.

## Benefits for schools
- The software is free to self-host. Server and provider API costs are extra.
- The license is a restricted Apache 2.0.
- Self-hosting is a district IT project that needs a database stack.

## Getting started
- [ ] Find LobeHub and review the self-hosting guide with IT.
- [ ] Read the LICENSE file and the cloud privacy policy.
- [ ] Ask IT to deploy the Docker Compose stack on a school server.
- [ ] Choose a model provider or a local runtime.
- [ ] Set up login and single sign-on.
- [ ] Test the platform with a small staff group.
- [ ] Write simple rules for students before opening it up.

## Where is the AI?
The AI is whichever model the school connects, cloud or local. The platform runs on a school server or in the vendor cloud. Staff and students chat with models and agents, and then use the replies to extend their own drafts and research.

## Privacy and safety
Accounts are optional. The README says self hosting keeps data with the host. Where prompts go depends on the provider chosen. Hosted providers receive the text. The LobeHub cloud policy says chat logs stay on the device by default and go to cloud servers if cloud sync is on. It collects IP address, device data, and behavior such as clicks and page navigation. It does not address anyone under 13 or student records. Telemetry for a self hosted install is not documented. A teacher should check whether the school uses the cloud version or its own server, and which provider is set.

## Ideas by subject
### ela
1. Draft a short essay with the chat and mark which sentences came from you.
2. Ask two models to critique the same paragraph and compare their feedback.
3. Use an agent to help plan a research outline and revise it by hand.
4. Write a prompt that gets a model to explain a poem and judge the answer.
5. Revise a draft after chat feedback and note which suggestions you accepted.
