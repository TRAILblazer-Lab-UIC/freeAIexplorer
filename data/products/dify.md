---
slug: dify
tagline: An open-source platform for building AI apps with a visual workflow canvas.
---

## Overview
Dify is an open-source platform for building apps with large language models. It has a visual workflow canvas, RAG pipelines, agents, and model management. It supports hundreds of models from dozens of providers. It is aimed at admins and teachers. Students are not the main users.

## Benefits for students
- Students can see an AI app as a flow of connected steps.
- Students who work with a teacher can build a simple chatbot over class documents.
- Students can see how a model, a prompt, and data work together.

## Benefits for teachers
- A visual builder lets teachers make an AI app without much code.
- Every app gets an API.
- Agents can use tools and MCP.

## Benefits for schools
- The Community Edition is free to self-host with Docker Compose.
- It needs at least 2 CPU cores and 4 GiB RAM.
- A server admin will likely need to help. Cloud and enterprise prices were not read.

## Getting started
- [ ] Find the Dify repository and read the install notes.
- [ ] Ask IT for a server or computer with 2 CPU cores, 4 GiB RAM, and Docker with Compose 2.35 or later.
- [ ] Clone the repository.
- [ ] Copy .env.example to .env and set a secure token.
- [ ] Run docker compose up.
- [ ] Finish setup in the browser and create an admin account.
- [ ] Choose a model provider and review where prompts go.
- [ ] Build one test app.

## Where is the AI?
Dify builds apps from language models, including workflows, RAG chatbots, and agents. The platform can run on a school server. The model can run locally or at an outside provider that you choose. Teachers or students build an app and then test and improve its prompts and data.

## Privacy and safety
An account is needed for the admin and builders. Prompts, documents and outputs entered by users are stored on the host. Data goes to the model provider the school chooses, and Dify Cloud data may be processed in several countries. The policy says the services are not directed to children under 18. License verification and updates may send basic connection and version data, and the research did not confirm telemetry or fully offline use. A teacher should set the provider with IT and decide who may upload documents.

## Ideas by subject
### computer_science
1. Build a simple chat workflow on the canvas and explain each step.
2. Add a document to a RAG pipeline and ask it three questions.
3. Change a prompt and compare the answers.
4. Add a tool to an agent and test what it can do.
5. Draw a flow chart of your app and match it to the canvas.

### cte
1. Build a help desk bot for a school club and test it with sample questions.
2. Write a list of rules for what the bot may answer.
3. Test the bot with a tricky question and note the response.
4. Compare two model providers for the same task.
5. Write a short guide for a user of the bot.
