---
slug: privategpt
tagline: An open source layer for building private document chat apps on local models.
---

## Overview
PrivateGPT is an open source API layer for building AI apps on local models. It supports retrieval with citations, tools, and text-to-SQL. It does not run models itself and connects to servers such as Ollama, llama.cpp, or vLLM. A demo web page is served at localhost:8080/ui. It suits IT staff and advanced high school students.

## Benefits for students
- Students can ask questions about their own documents with citations.
- Students see how retrieval works behind a chatbot.
- Students can build on the API in Python.

## Benefits for teachers
- Teachers can chat with school documents on a local machine.
- A demo web page gives a simple start.
- The setup is technical and needs a server admin.

## Benefits for schools
- The software is free and open source.
- It needs capable hardware. The example model is about 24 GB.
- Documents and questions stay on the school server only if the connected model server is local.

## Getting started
- [ ] Find the PrivateGPT project and read the official docs.
- [ ] Ask a server admin to prepare a machine with Python 3.11.
- [ ] Install through Homebrew or uv.
- [ ] Start an inference server such as Ollama.
- [ ] Set the API base variables.
- [ ] Run private-gpt serve and open localhost:8080/ui.
- [ ] Stay online only for the model downloads, then test offline.

## Where is the AI?
The AI is a local language model with an embedding model that supports chat and retrieval over documents. It runs on a school server or a desktop. Students and teachers ask questions and read the answers with citations. They can then check the sources.

## Privacy and safety
No account is needed, and the internet is used at setup. Data stays local only if the connected inference server is local. The explicit air gapped claim applies to the vendor's commercial platform and not to the open source project. No formal privacy statement exists. A 2023 opinion post said the earlier version kept earlier ingested data. The materials do not say what student data is collected, and no school deployment is documented. A teacher should confirm which inference server is connected and check which documents are loaded.

## Ideas by subject
### computer_science
1. Load a short class reading and ask three questions about it.
2. Check each citation and decide whether the answer matches the source.
3. Compare answers before and after adding a second document.
4. Draw a diagram of how a question travels through retrieval to an answer.
5. Write a Python call to the local API and print the reply.
