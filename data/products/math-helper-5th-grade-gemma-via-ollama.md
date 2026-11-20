---
slug: math-helper-5th-grade-gemma-via-ollama
tagline: A local web app that makes new 5th grade practice problems from one example.
---

## Overview
Math Helper is a small local web app for 5th grade math. A user enters a problem and the app writes new problems that test the same skill with different numbers. It uses the gemma3:4b model through Ollama. The author built it for their own child and says it runs 100 percent locally.

## Benefits for students
- Students get fresh practice problems on the same skill.
- Students can keep practicing after a missed problem.
- The page runs on the computer in front of them.

## Benefits for teachers
- A teacher can generate extra practice from one example.
- The app is an example of a fully local classroom helper.
- It is not classroom tested. Teachers should check each problem.

## Benefits for schools
- The app is free.
- Everything runs on the device after setup.
- Setup uses Homebrew on macOS. IT will likely need to install it.

## Getting started
- [ ] Find the post and the project files from the author.
- [ ] Ask IT to approve the install on a Mac.
- [ ] Install Ollama with Homebrew.
- [ ] Pull the gemma3:4b model while online.
- [ ] Run ./run.sh.
- [ ] Open the page at 127.0.0.1 on port 5050.
- [ ] Try one sample problem and solve each new problem yourself.

## Where is the AI?
The AI is the Gemma 3 4B language model, which runs through Ollama on the local computer. It writes new practice problems that match a given skill. Students solve the problems and then use extra variants to practice the same skill.

## Privacy and safety
No account is needed. The author says the app runs 100 percent locally. The internet is needed to download Ollama and the model, and the post says no internet is needed after that. The research found no privacy policy and no independent check of the claim. This is a single author hobby project with no license in the repo. A teacher should check every generated problem and answer. The model may make mistakes.

## Ideas by subject
### math
1. Enter a fraction problem and solve the three new variants.
2. Check each new problem and fix any that have errors.
3. Compare a problem and its variant and name the skill they share.
4. Write your own problem and ask the app to make variants.
5. Track which skills need more practice over a week.
