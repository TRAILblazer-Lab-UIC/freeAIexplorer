---
slug: jupyter-ai
tagline: An open source JupyterLab extension that adds AI chat and agents to notebooks.
---

## Overview
Jupyter AI is an open source extension for JupyterLab. It offers chat, AI personas that write, debug, and run notebooks, and a live view of agent edits. The default persona, Jupyternaut, reaches models through LiteLLM. These can be local models served by Ollama or cloud providers. It suits advanced high school students.

## Benefits for students
- Students get a coding helper inside the notebook.
- Students can ask for help with code and see edits as they happen.
- Students practice checking AI written code.

## Benefits for teachers
- Teachers pick the model, local or cloud.
- Custom personas and MCP servers are supported.
- Notebook work stays in a tool many classes already use.

## Benefits for schools
- The software is free. Cloud model providers may charge for API use.
- A local model keeps notebook content on school hardware.
- IT must install Python and JupyterLab, and local models need a capable computer.

## Getting started
- [ ] Find the Jupyter AI documentation.
- [ ] Ask IT to install JupyterLab on a school machine.
- [ ] Run pip install jupyter-ai-jupyternaut.
- [ ] Install Ollama and pull a model for local use.
- [ ] Pick the model in the Jupyternaut settings.
- [ ] Enter an API key only for a cloud provider that the school has approved.
- [ ] Test a short chat before students use it.

## Where is the AI?
The AI is a chat assistant that can write code and edit notebooks. It runs on a local model through Ollama or in a cloud provider's servers. The docs also list agents from several vendors. Students ask for code, read it, and then change it to fit their own work.

## Privacy and safety
No account is needed, and the internet is used for setup of a local model. With a local Ollama server, prompts stay on the machine. Cloud providers need API keys and receive prompts. The docs list agents from several vendors, which would send notebook content to those vendors. The docs do not describe what is sent to providers. A teacher should check which model each class uses and keep student data out of cloud prompts.

## Ideas by subject
### computer_science
1. Ask the assistant to explain a block of code and compare it with your own idea.
2. Have the assistant write a function and test it with three inputs.
3. Find one bug in AI written code and fix it.
4. Compare answers from two different models to the same question.
5. Write a prompt that gets a clear chart from a dataset.
