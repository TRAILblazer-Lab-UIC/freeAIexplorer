---
slug: localtutor
tagline: A Mac study app that makes cited chat, quizzes, and flashcards from your files.
---

## Overview
LocalTutor is a native macOS study app that runs AI models on the Mac. Users add files to notebooks and choose a model. They get cited chat answers, study guides, flashcards, quizzes, mind maps, and audio overviews. It needs Apple Silicon and macOS 26.

## Benefits for students
- Students study from their own reading files.
- Answers cite the uploaded sources.
- Students can turn notes into flashcards and quizzes.

## Benefits for teachers
- Teachers can load class readings into a notebook.
- Hybrid keyword and semantic search finds the right passages.
- The model library is sized to the Mac's memory.

## Benefits for schools
- The app is free and MIT licensed.
- The README states there is no telemetry and no account.
- No prebuilt app exists. IT must build it in Xcode on a recent Mac.

## Getting started
- [ ] Find the LocalTutor repository on GitHub.
- [ ] Check for an Apple Silicon Mac with macOS 26 and at least 8 GB of memory.
- [ ] Ask IT to build the app. The Releases page is empty.
- [ ] Clone the repository and open the Xcode project.
- [ ] Build and run with Xcode 16 or later.
- [ ] Download a model that fits the Mac's memory.
- [ ] Add a short reading and test the chat and quiz tools.

## Where is the AI?
The AI is a model that runs on the Mac with Apple's MLX framework. It answers questions about uploaded files and makes quizzes and study guides. Students add readings, ask questions, and use the cited answers to build their own notes.

## Privacy and safety
No account is needed. The README says there is no telemetry, and that inference, indexing, and retrieval are fully offline. Models are downloaded once from Hugging Face. The project publishes no privacy policy and nobody audited it. No prebuilt app exists. The app must be built in Xcode. This is a very young project by one developer. A teacher should check generated quizzes against the source reading.

## Ideas by subject
### ela
1. Add a short story to a notebook and ask for a summary, then compare it with your own.
2. Make flashcards from a vocabulary list and quiz a partner.
3. Ask the chat about a theme and check each cited passage.
4. Use a study guide to plan an essay and improve it by hand.
5. Listen to an audio overview of a reading and write what it missed.

### library_media
1. Load three sources on one topic and ask the chat to compare them.
2. Check that each citation points to the right passage in a source.
3. Build a notebook for a research project and list the files you chose.
4. Test the search with a keyword and then with a related idea.
5. Write a short guide on judging whether a cited answer can be trusted.
