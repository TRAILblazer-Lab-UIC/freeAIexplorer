---
slug: big-agi
tagline: A multi-model AI chat workspace that teachers can host themselves.
---

## Overview
Big-AGI is an AI chat workspace that runs in the browser. It can be self-hosted with Docker or on Vercel. Users bring their own API keys for providers such as OpenAI, Anthropic, and Google. They can also connect local models through Ollama and LocalAI. It is aimed at experts and teachers more than students.

## Benefits for students
- Older students can compare answers from several models.
- Students can try personas and voice features.
- Students see how different models handle the same prompt.

## Benefits for teachers
- Beam sends one prompt to several models at once.
- Merge combines the answers.
- Teachers can import PDFs and use web search.

## Benefits for schools
- Chats are stored in the browser by default.
- The software has a free tier and free self-hosting.
- Pro costs 9 USD per month or 108 USD per year, and provider costs are billed separately.

## Getting started
- [ ] Find the Big-AGI project on its public code page.
- [ ] Ask IT to approve the use of the hosted app or a self-hosted install.
- [ ] Choose the hosted web app or deploy with Docker or Vercel.
- [ ] Add API keys or connect a local Ollama server.
- [ ] Keep keys private and never share them with students.
- [ ] Test a prompt with two models.
- [ ] Check the age rule of each provider before students use it.

## Where is the AI?
The AI is the models that you connect, which may run at outside providers or on a local server. Big-AGI is the workspace that sends prompts and shows answers. Teachers and older students use it to compare models and extend their own research.

## Privacy and safety
Chats and API keys stay in the browser by default. Optional cloud sync uses Supabase in the United States. Prompts go to whichever AI provider the user connects, under that provider's terms. The hosted app uses Google Analytics, PostHog with masked session recording, and Vercel Analytics. The privacy policy says the service is not directed at children under 13, or 16 in the EEA. A teacher should check the provider terms and keep API keys out of student view.

## Ideas by subject
### computer_science
1. Send one prompt to two models and compare the answers.
2. Write a persona and test how it changes the tone.
3. Connect a local model and compare its speed with a cloud model.
4. Test how prompt wording changes the answer.
5. Write a short report on when a model gave a wrong answer.
