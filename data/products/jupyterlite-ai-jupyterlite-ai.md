---
slug: jupyterlite-ai-jupyterlite-ai
tagline: AI chat and code completion for JupyterLite notebooks that run in the browser.
---

## Overview
Jupyter AI Lite adds AI code completion and chat to JupyterLab, Notebook 7, and JupyterLite. It runs the Jupyternaut persona in the browser. The Ollama page shows how to link it to a local Ollama server. It suits advanced high school students and needs an IT administrator.

## Benefits for students
- Students get code completions inside the notebook.
- Students can chat with an assistant about their code.
- Students work in a browser with no local Python install.

## Benefits for teachers
- It connects to any OpenAI compatible provider.
- A local Ollama server keeps prompts on school hardware.
- It works with JupyterLab 4.5 or Notebook 7.5 and later.

## Benefits for schools
- The software is free. Cloud providers may charge for API use.
- Setup needs a server administrator and a JupyterLite deployment.
- A local model needs a computer that can run it.

## Getting started
- [ ] Find the jupyter-ai-lite package documentation.
- [ ] Ask IT to prepare a JupyterLite deployment.
- [ ] Install the jupyter-ai-lite packages into it.
- [ ] Install Ollama on a school computer and pull a model.
- [ ] Start the Ollama server.
- [ ] Add a Generic OpenAI compatible provider with the local Ollama address on port 11434 with the path /v1.
- [ ] Leave the key blank for a local server and test a chat.

## Where is the AI?
The AI is a chat assistant and code completion. The chat tool runs in the browser, and the model can run on a local Ollama server or at a cloud provider. Students ask questions and take suggestions. They then rewrite the code in their own words and logic.

## Privacy and safety
The notebook environment runs in the browser, and an account is needed only for a cloud provider. AI requests go to whatever provider is configured. A local Ollama server keeps prompts on school hardware, and a cloud provider receives whatever students type. The docs read do not say where API keys are stored or what data flows are used. A teacher should check which provider the class uses and where keys are kept.

## Ideas by subject
### computer_science
1. Write a comment and see what code the completion suggests.
2. Ask the chat to explain an error message and fix the code.
3. Compare a suggestion with your own solution and note the differences.
4. Test the chat with a vague question and then a clear one.
5. Write a short guide on how to check AI written code.
