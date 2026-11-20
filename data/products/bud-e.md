---
slug: bud-e
tagline: An open source voice assistant framework for schools that run their own AI services.
---

## Overview
BUD-E 1.0 is an open source AI education assistant framework from LAION, which the authors call privacy focused. It has three versions. School Bud-E is a classroom web app, Bud-E is a customizable web assistant, and Desktop Bud-E is a Python app with a wake word. Speech recognition, language model, speech synthesis, and vision parts can be swapped. Schools connect their own models or commercial services.

## Benefits for students
- Students can talk to an assistant with their voice.
- Students can ask questions and get answers from built-in sources such as Wikipedia.
- The tool can read text from images.

## Benefits for teachers
- The tools support more than 100 languages depending on the chosen services.
- The assistant can use Hamburg curricula and paper abstracts.
- An IT admin handles the code and the server setup.

## Benefits for schools
- The software is free and open source.
- Schools can self-host and choose their own models.
- A strong GPU server is needed for local models, and IT must set it up.

## Getting started
- [ ] Find the BUD-E project from LAION and read its documentation.
- [ ] Ask IT to plan the server setup.
- [ ] Decide between local models and commercial services.
- [ ] Clone the repository and configure the speech, language, voice, and vision endpoints.
- [ ] Start the server.
- [ ] Open School Bud-E in a browser or run the desktop client.
- [ ] Test a question with a small group.

## Where is the AI?
The AI includes speech recognition, a large language model, text to speech, and image captioning with text reading. These parts can run in the browser, on a school server, or in a vendor's cloud, depending on the setup. Students speak or type, listen to the answers, and use them to extend their own questions.

## Privacy and safety
The authors describe the framework as privacy focused. School Bud-E stores conversation history in the browser, and the backend decides the rest. A school that configures commercial API endpoints sends student voice and text to those providers. The Desktop version needs a Porcupine API key for wake word detection. The materials do not state whether accounts or the internet are needed. A teacher should ask IT which services receive student speech and text. The authors state the tool cannot recognize emotions.

## Ideas by subject
### library_media
1. Ask the assistant a research question and check the answer against two sources.
2. Test the assistant in two languages and compare the quality.
3. Use the image reading feature on a page of a book and check the text.
4. Compare the assistant's answer with a Wikipedia article.
5. Write a rule list for good questions to ask a voice assistant.
