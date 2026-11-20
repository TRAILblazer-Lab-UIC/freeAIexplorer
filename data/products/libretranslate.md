---
slug: libretranslate
tagline: A free translation server a school can host with its own web page.
---

## Overview
LibreTranslate is a free and open source machine translation tool with a web page and an API. A school hosts it on its own server. Its engine is Argos Translate. It does not depend on Google or Azure. Students and teachers paste text into the web page to translate between supported languages.

## Benefits for students
- Students can check a word or sentence in another language.
- The web page is simple to use.
- Students can compare a machine translation with their own attempt.

## Benefits for teachers
- Teachers can demonstrate how machine translation works in class.
- The tool is offline capable once models are installed.
- Teachers can design activities that check and correct translations.

## Benefits for schools
- The software is free to self-host. The hosted service needs a paid key.
- Text stays on the school server.
- Setup is for a server administrator and takes days.

## Getting started
- [ ] Find LibreTranslate on its project page and read the install options.
- [ ] Ask IT to host it on a school server.
- [ ] Install with pip, Docker Compose, or the run scripts.
- [ ] Download the language models you want during setup.
- [ ] Confirm that the telemetry settings match school policy. The vendor materials do not confirm them.
- [ ] Share the web address with teachers.
- [ ] Test it with a short sentence in two languages.

## Where is the AI?
The AI is a machine translation model from Argos Translate. It runs on the school server, and the language models are downloaded during setup. Students enter text and read the result. They then compare it with their own translation and fix errors.

## Privacy and safety
No account is needed. The GitHub page has no privacy statement for the software itself. Text stays on the school server in a self hosted setup. The hosted libretranslate.com service is a cloud service that needs a paid API key. Telemetry was not confirmed in the materials. A teacher should ask IT to check telemetry settings and should remind students that machine translation can make mistakes.

## Ideas by subject
### world_languages
1. Translate a short class sentence and compare it with the version the class wrote.
2. Translate a phrase into another language and back again, then discuss what changed.
3. Find an idiom that the tool translates word by word and explain why it fails.
4. Write a paragraph in the target language and use the tool only to check chosen words.
5. Build a class list of mistranslations and write the corrected versions.
