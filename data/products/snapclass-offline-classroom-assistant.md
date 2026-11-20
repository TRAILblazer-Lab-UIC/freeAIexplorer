---
slug: snapclass-offline-classroom-assistant
tagline: An offline classroom assistant that transcribes lectures and makes quizzes on one laptop.
---

## Overview
SnapClass is an open source offline classroom assistant for schools with poor connectivity. It transcribes lectures with Whisper, parses textbook pages with nougat, captions images with BLIP, and writes quizzes with Phi-3.5-mini. The software runs on one Snapdragon laptop. Students join a local WiFi hotspot with internet sharing off and use a web page served from that laptop.

## Benefits for students
- Students can read live text of a lecture.
- Students can get image captions and textbook page text.
- Students can take a quiz on the test page.

## Benefits for teachers
- A teacher dashboard runs at /admin on the same laptop.
- The tool makes quizzes from lectures and textbook pages.
- No account is needed.

## Benefits for schools
- The software is free. A Snapdragon laptop such as an X Elite machine is the main cost.
- Student data stays on the school laptop.
- It is an early stage project. IT must do a manual setup that needs a Snapdragon NPU.

## Getting started
- [ ] Find the SnapClass repository on GitHub. Several unrelated projects share the name.
- [ ] Ask IT to prepare a Snapdragon laptop with an NPU.
- [ ] Set up a local WiFi hotspot with internet sharing off.
- [ ] Clone the repository and install the Python requirements.
- [ ] Install AnythingLLM with NPU support and download Phi-3.5-mini.
- [ ] Add the API key and workspace slug to server/config.yaml.
- [ ] Run python app.py in the server folder.
- [ ] Test the student page and the /admin page.

## Where is the AI?
The AI is a set of models for speech to text, document parsing, image captions, and quiz writing. They run on the school laptop. Students and teachers use the transcripts, captions, and quizzes to study and to extend their own notes.

## Privacy and safety
No account is needed, and the internet is needed only for setup downloads. The README has no privacy section. It describes processing on the device and a hotspot with internet sharing off, which implies data stays on the teacher machine and local network. The materials do not state what student data is stored. A teacher should check that internet sharing stays off on the hotspot.

## Ideas by subject
### special_ed
1. Read the live transcript of a lecture and highlight key words.
2. Use image captions to learn what a picture shows.
3. Review a lecture transcript after class and write three notes.
4. Compare the transcript with your own notes and fill gaps.
5. Ask the teacher to add a caption to a diagram and discuss how it helps.

### ela
1. Take a quiz made from a textbook page and check each answer in the text.
2. Rewrite a quiz question to make it clearer.
3. Compare a lecture transcript with the lesson and find words the tool missed.
4. Write a summary of a lecture from the transcript.
5. Create your own quiz questions and compare them with the tool's questions.
