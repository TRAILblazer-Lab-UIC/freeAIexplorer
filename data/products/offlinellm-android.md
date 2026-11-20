---
slug: offlinellm-android
tagline: A private Android chat app that runs language models fully on the phone.
---

## Overview
OfflineLLM is a private on-device AI chat app for Android. It runs GGUF models locally through llama.cpp. Users download an APK from GitHub Releases and import their own GGUF model. It offers streaming chat, searchable conversations, a translator covering 75+ languages, text to speech, encrypted settings, and an optional biometric lock.

## Benefits for students
- Students can chat with a model without an internet connection.
- Students can translate text in more than 75 languages.
- Students can lock the app with a fingerprint or face if they choose.

## Benefits for teachers
- Teachers can search past conversations.
- Teachers can import a model of their own choice.
- Signed APKs have published certificate digests.

## Benefits for schools
- The app is free and open source.
- It needs Android 13 or later on an arm64 device, and 8 GB of RAM or more for 4B models.
- It is not on Google Play, and school device policy or IT approval may block sideloading.

## Getting started
- [ ] Find the OfflineLLM page on GitHub Releases.
- [ ] Ask IT whether sideloading is allowed on school devices.
- [ ] Check the phone runs Android 13 or later on arm64.
- [ ] Download the APK and allow install from unknown sources or use ADB.
- [ ] Import a small GGUF model under Settings, Model.
- [ ] Turn on the optional biometric lock.
- [ ] Go offline and test a short chat.

## Where is the AI?
The AI is a language model that chats, translates, and reads text aloud. It runs on the phone and does not use a vendor cloud. Students chat, translate, and draft their own writing, then review what the model gave them.

## Privacy and safety
No account is needed, and the internet is used outside the app to download the APK and models. The README says the app declares no network permission, logs no prompts, and keeps chats on the device. Those are project claims, and the research did not audit them or inspect the manifest. The research found no independent review. Confidence is low. A teacher should have IT review the sideloaded APK and check school device policy before use.

## Ideas by subject
### ela
1. Ask the model for a different opening line for a story and write your own.
2. Draft a short paragraph and ask for feedback on clarity.
3. Search a past conversation for an idea you want to reuse.
4. Compare answers from a small model and a larger one on the same question.
5. Check one claim from the model against a book or article.

### world_languages
1. Translate a short message into the target language and fix awkward parts.
2. Listen to text to speech read a sentence and repeat it.
3. Translate a sentence back to English and compare it with the original.
4. Make a vocabulary list from a translated paragraph.
5. List mistakes the translator made and discuss why a person should check.
