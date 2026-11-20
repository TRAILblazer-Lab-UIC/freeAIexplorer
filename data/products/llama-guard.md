---
slug: llama-guard
tagline: Open Meta models that label chat text as safe or unsafe for moderation.
---

## Overview
Llama Guard is a family of open weight moderation models from Meta. Llama Guard 3 models flag content in the 13-hazard MLCommons taxonomy. The model classifies chat prompts and replies as safe or unsafe. It is not tuned for K-12 age appropriateness. It suits a school server administrator and advanced students.

## Benefits for students
- Advanced students can study how a safety classifier works.
- Students can wire the model into a simple chat app.
- Students see how a model names the category of a risky message.

## Benefits for teachers
- Teachers can show how moderation checks a prompt before a model replies.
- The model works with NeMo Guardrails and vLLM.
- Teachers can discuss where automatic filters help and where they miss.

## Benefits for schools
- The weights are free. Server hardware costs are separate.
- The model can run on a school server.
- An administrator is needed to set it up.

## Getting started
- [ ] Find the PurpleLlama repository and read the Llama Guard documents.
- [ ] Ask a server administrator to obtain the weights.
- [ ] Serve the model on a school server, for example with vLLM.
- [ ] Choose the size, such as 1B, 8B, or 11B-vision.
- [ ] Connect the endpoint to a chat application or guardrails framework.
- [ ] Test with sample prompts from a teacher.
- [ ] Review results with school leaders before students use it.

## Where is the AI?
The AI is a classifier model fine-tuned from Llama 3.1 and 3.2. It runs on a school server. It reads a prompt or reply and marks it as safe or unsafe, with the violated categories. Students and teachers use it to study and extend a chat tool with a safety check.

## Privacy and safety
No account is needed. Access to the weights requires accepting Meta's terms. The model collects no data itself. Data handling depends on the host application. Self hosted text stays on the school's server. The research reviewed no hosted service. The model card warns that it may be open to adversarial or prompt injection attacks. The model is not tuned for K-12 age appropriateness. A teacher should test it with school style prompts and check the host application's data settings.

## Ideas by subject
### computer_science
1. Read the list of hazard categories and sort sample messages into them.
2. Test the model with safe and unsafe sample prompts and record the labels.
3. Wire the model in front of a simple chat app and watch what it blocks.
4. Find a message the model labels wrongly and explain why it might fail.
5. Write a short policy for what a school chat tool should block.
