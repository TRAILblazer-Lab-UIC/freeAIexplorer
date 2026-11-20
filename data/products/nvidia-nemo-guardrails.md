---
slug: nvidia-nemo-guardrails
tagline: An open source Python library that adds safety rules to language model apps.
---

## Overview
NeMo Guardrails is an open source Python library that adds programmable guardrails to apps built on language models. It can block or change unsafe, off-topic, or policy-violating inputs and outputs. It includes topic control, jailbreak detection, and PII detection. It is for developers and administrators and not for students.

## Benefits for students
- Advanced students can study how safety rules wrap around a chatbot.
- Students can test how a topic rule changes a chatbot's answers.
- Students learn that AI apps need checks on what goes in and comes out.

## Benefits for teachers
- A developer can keep a school chatbot on topic.
- Rules are written in YAML and Colang configuration files.
- It works with models such as LlamaGuard.

## Benefits for schools
- The library is free and open source.
- Hosting and GPU costs for moderation models are separate.
- It needs a developer or server administrator, and setup takes days.

## Getting started
- [ ] Find NeMo Guardrails on the Python package index and read its docs.
- [ ] Ask IT for a developer or administrator to own the project.
- [ ] Install the package in a Python environment.
- [ ] Write a YAML and Colang configuration with topic rules.
- [ ] Connect a language model and any moderation models.
- [ ] Turn on PII detection for student text.
- [ ] Test the rails with sample prompts before any student use.

## Where is the AI?
The AI is a set of checks that review what goes into a language model and what comes out. They include jailbreak detection, topic control, and PII detection. It runs as a library, a local server, or a service on a school server. Developers and advanced students use it to build safer chat tools.

## Privacy and safety
No account is needed, and the internet is used at setup. The vendor does not say what student data is stored. Self-hosted moderation models need a GPU server, and data may go to outside services if the developer connects them. A teacher should ask the developer which models and services the rails use.

## Ideas by subject
### computer_science
1. Write a topic rule that keeps a chatbot on homework questions.
2. Test the rule with prompts that try to break it.
3. Add PII detection and see which text it flags.
4. Compare answers with and without the rails on the same prompt.
5. Present a short report on which rails would fit a school chatbot.
