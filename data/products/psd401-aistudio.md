---
slug: psd401-aistudio
tagline: An open source AI platform that a school district hosts on its own AWS account.
---

## Overview
AI Studio is an open source platform from Peninsula School District, known as PSD401. It gives educators access to several generative AI models in one place. It includes chat with model comparison, a no-code assistant builder, document repositories with search, and a REST API. The code is MIT licensed and a district hosts it on AWS.

## Benefits for students
- Students could chat with different models and compare the answers.
- Students could ask questions about documents in a repository.
- Student use depends on what the district turns on. Reports describe staff-only use so far.

## Benefits for teachers
- Teachers can build an assistant without writing code.
- Teachers can load documents for the assistant to search.
- Chat can compare models side by side.

## Benefits for schools
- The software is free. K-12 Dive reports the district pays about $600 per month to run it.
- The district pays for AWS and for model API use.
- A district needs IT staff to deploy it. It is not a teacher-level setup.

## Getting started
- [ ] Find the psd401 aistudio repository on GitHub and read the README.
- [ ] Ask IT to confirm the district can deploy on AWS with CDK.
- [ ] Have IT deploy the CDK stacks.
- [ ] Set up Cognito and Google single sign-on.
- [ ] Add model provider keys and review the provider agreements.
- [ ] Turn on role-based access, audit logging, and quotas.
- [ ] Test with staff before any student use.

## Where is the AI?
The AI is a set of language models from OpenAI, Anthropic, Google, and AWS Bedrock. They run in those companies' clouds. The platform sits in the district's AWS account and sends prompts to the providers. Teachers build assistants and use the answers to extend their own work.

## Privacy and safety
Accounts are required and users sign in through district sign in with Google. Prompts go to commercial model providers such as OpenAI, Anthropic, Google, and AWS Bedrock, and they do not stay fully inside the district. The project says it tokenizes student names, emails, and phone numbers before they reach providers. It also says it helps meet COPPA, FERPA, and CIPA, and these are its own claims. Safety guardrails log content and do not block it. News coverage describes staff use only, and the materials do not state what student data is collected. A teacher should ask IT which providers are on and what each agreement says.

## Ideas by subject
### ela
1. Ask two models to explain the same reading passage and compare the answers.
2. Upload a class article to a repository and ask questions about it.
3. Build an assistant that gives feedback on thesis statements and test it.
4. Draft a paragraph and ask the assistant for revision tips, then choose which to use.
5. Write rules for how to cite help from an AI assistant.
