---
slug: checkr
tagline: A small self-hosted web tool that corrects grammar with a local language model.
---

## Overview
Checkr is a minimalistic Streamlit web page for grammar correction and text improvement. It runs on self-hosted large language models. The model downloads automatically on first use. It can run with Docker Compose or natively with Python. The repository is small and has one star.

## Benefits for students
- Students paste text and get a corrected version.
- Students can compare their original with the changes.
- Student writing stays on the school server.

## Benefits for teachers
- The interface is a simple text box.
- Teachers do not need an outside account.
- The tool supports revision conversations about grammar.

## Benefits for schools
- The software is free.
- Text stays on a school server.
- IT skills are needed, and the Docker setup assumes an NVIDIA graphics card.

## Getting started
- [ ] Find the Checkr repository on its public code page.
- [ ] Ask IT to host it on a school server.
- [ ] Clone the repository.
- [ ] Run docker compose up, or create a Python environment and run streamlit run app.py.
- [ ] Let the model download on first use.
- [ ] Open the page on port 8501.
- [ ] Test a short paragraph.

## Where is the AI?
The AI is a large language model that corrects and rewrites text. It runs on a school server. Students paste in their writing, read the suggestions, and decide which changes to accept. This is a very small hobby project and no classroom use was found.

## Privacy and safety
The README says text is processed on your own machine with a self hosted model, and no account is needed. The model downloads on first use, and the internet is used at setup. The research found no privacy policy and no account system. It also found no classroom use. A teacher should ask IT who can see the server logs. A teacher should also check that students understand the tool may change their meaning.

## Ideas by subject
### ela
1. Paste a paragraph of your own writing and list the changes the tool makes.
2. Decide which suggestions to accept and explain why.
3. Write a sentence with a known error and see whether the tool finds it.
4. Compare the tool's rewrite with your own revision.
5. Discuss when a correction changes the meaning of a sentence.
