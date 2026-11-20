---
slug: pdf-tutor-ashut90
tagline: A desktop app that turns dense PDFs into summaries, flashcards, and spoken explanations.
---

## Overview
PDF Tutor is a Python desktop app with a three-pane window for studying dense technical PDFs. It reads PDFs on the device and uses local Ollama models by default. It makes explanations, Anki flashcard files, and diagrams. It suits older students who study technical reading.

## Benefits for students
- Students get summaries and explanations of hard chapters.
- Students can export flashcards to Anki.
- Students can hear spoken explanations and see mind maps.

## Benefits for teachers
- Teachers can turn a long manual into study aids.
- The default setup keeps PDF text on the device.
- Teachers can show how a local model summarizes a document.

## Benefits for schools
- The app is free.
- The author says a laptop with 8 GB of RAM can run the local model.
- IT must help with Python and Ollama. A cloud fallback uses free API tiers and needs a key.

## Getting started
- [ ] Find the PDF Tutor repository by Ashut90 on GitHub.
- [ ] Ask IT to approve the install.
- [ ] Clone the repository and create a Python virtual environment.
- [ ] Install the requirements.
- [ ] Install Ollama and pull a model for offline use.
- [ ] Run run.py.
- [ ] Add an API key only if cloud mode is truly needed.
- [ ] Test with a short PDF.

## Where is the AI?
The AI is a language model that summarizes text, explains it, and writes flashcards. It runs on the device through Ollama. A large chapter can fall back to Gemini, Groq, or OpenRouter in a company's cloud with a user key. Students read the output and use it to build their own study notes.

## Privacy and safety
No account is needed, and the internet is used at setup. The author says PDFs are parsed on the device with no upload or telemetry. The research did not read the repository README to confirm that. Large chapters can go to a cloud provider such as Gemini, Groq, or OpenRouter when cloud mode is on. There is no privacy policy. A teacher should keep cloud mode off and leave the API key empty.

## Ideas by subject
### ela
1. Load a chapter, read the summary, and write your own summary to compare.
2. Export flashcards and review them with a partner.
3. Ask the app to explain a hard passage and rewrite it in your own words.
4. Check each flashcard against the PDF and fix any mistake.
5. Listen to a spoken explanation and list the main points.

### library_media
1. Load a long document and compare its parts with the mind map.
2. Sort a set of PDFs by topic and note what the app finds.
3. Build a flashcard deck for a research topic and share it.
4. Check the summary against the source and mark where it left out key facts.
5. Write guidelines for how to cite a document after using a summary tool.
