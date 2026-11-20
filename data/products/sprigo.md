---
slug: sprigo
tagline: A free desktop app for language learning with AI lessons, roleplay, and speaking practice.
---

## Overview
Sprigo is a free, open source desktop app for learning a language. It offers courses from A1 to C2, AI generated lessons, stories, roleplay, and speaking practice. Courses cover English, Spanish, French, German, Turkish, and Hungarian. Students in grades 6 to 12 practice reading, listening, and speaking at their own pace.

## Benefits for students
- Students can practice conversation with an AI tutor at any hour.
- Students earn XP, streaks, and league standings that keep practice going.
- Students can speak aloud and have the app listen with local speech recognition.

## Benefits for teachers
- Structured courses give teachers a ready path from beginner to advanced.
- Several learner profiles fit on one computer.
- Teachers can pick a local model and keep control of the tool.

## Benefits for schools
- The app is free and open source.
- Local models keep lessons on the school computer. Cloud providers are optional and need an API key.
- The computer needs enough memory and disk for a model of about 5 GB, and IT will likely need to approve the install.

## Getting started
- [ ] Find Sprigo on GitHub Releases, or install it with Homebrew.
- [ ] Ask IT to approve the install on a Windows, Mac, or Linux computer.
- [ ] Install Ollama or LM Studio first.
- [ ] Open Sprigo and let it download a model. The app suggests qwen3:8b, which is about 5.2 GB.
- [ ] Remove the macOS quarantine flag on unsigned builds. Ask IT to do this step.
- [ ] Create one profile for each learner.
- [ ] Keep the app on local models and leave the cloud provider settings empty.
- [ ] Test a short lesson and a roleplay before class.

## Where is the AI?
The AI generates lessons and roleplay, holds conversations, listens to speech, and reads text aloud. Models can run locally through Ollama or LM Studio, with whisper.cpp for listening and Piper or Kokoro voices for speaking. Cloud providers such as OpenAI, Anthropic, and Gemini are an option with the user's own key. Students use the tutor to practice and then check their work with a teacher.

## Privacy and safety
No account is needed, and progress is stored in a local database. The README says data never leaves the machine. Requests go to the provider if a cloud AI provider or the optional Deepgram speech service is chosen. The README does not say whether telemetry exists. In local mode the internet is used at setup. A teacher should check that no cloud provider key is entered. The app warns that models under 8B may give weaker answers.

## Ideas by subject
### world_languages
1. Complete one A1 lesson and write down five new words in a notebook.
2. Hold a roleplay conversation in the target language about ordering food.
3. Read an AI generated short story aloud and note words you did not know.
4. Record a speaking practice and compare it with the app's feedback.
5. Keep a weekly streak log and set a goal for the next week.
