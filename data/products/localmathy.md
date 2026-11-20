---
slug: localmathy
tagline: A free Android app that solves math problems offline with step-by-step reasoning.
---

## Overview
LocalMathy is a free Android app that solves math problems offline. Users type a question or photograph one. The app streams step-by-step reasoning and a final answer with Markdown and LaTeX. It runs a small reasoning model on the phone.

## Benefits for students
- Students see each step of a solution laid out.
- Students can photograph a problem from a worksheet.
- The app works offline after the models are downloaded.

## Benefits for teachers
- Teachers can use the steps to talk about how a problem is solved.
- An optional local history can save past problems.
- Teachers should plan how the app fits homework rules.

## Benefits for schools
- The app is free and open source under AGPL-3.0.
- No account is needed and work stays on the phone.
- Managed devices may need a sideload setting. The app is not on iOS or Chromebooks.

## Getting started
- [ ] Find LocalMathy on F-Droid.
- [ ] Ask IT about sideloading on managed Android devices.
- [ ] Check that the phone runs Android 8.0 or newer.
- [ ] Install the app from F-Droid.
- [ ] Download the reasoning model of about 1.9 GB over Wi-Fi.
- [ ] Download the optional vision model of about 2.6 GB for photos.
- [ ] Test with a problem that the class has already solved.
- [ ] Decide how students may use it on homework.

## Where is the AI?
The AI is a small reasoning model called VibeThinker-3B that runs through Google's LiteRT on the phone. An optional vision model reads photos. Students ask a question and read the steps. They then check each step against their own work.

## Privacy and safety
No account is needed. The F-Droid page and the README state that nothing typed or photographed leaves the phone, and that the app has no cloud or telemetry. The app requests full network access, which the README says is used only to download models from Hugging Face. Nobody independently audited these claims. The research found no privacy policy. A teacher should check the model's answers. A solver gives answers that students may copy.

## Ideas by subject
### math
1. Solve a problem on paper, then compare your steps with the app's steps.
2. Find a step in the app's reasoning that is unclear and explain it in your own words.
3. Photograph a word problem and check that the app read it correctly.
4. Look for an error in an answer and write a note on how to catch it.
5. Write a similar problem and solve it without the app.
