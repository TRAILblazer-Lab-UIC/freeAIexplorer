---
slug: eulermind
tagline: An offline math tutor prototype that solves problems and checks its own answers.
---

## Overview
EulerMind is a hackathon project that works as an offline math assistant for schools, libraries, and students without reliable internet. It solves problems with a local language model and then tries to verify the answer by recomputing the math from the original question. The repository says it runs on a CPU only and was built for the Africa Deep Tech Challenge 2026. It runs from the command line.

## Benefits for students
- Students get step by step math help with no internet.
- Answers carry trust labels that show how well they were checked.
- Students can see how a model proposes and code verifies.

## Benefits for teachers
- The code is free under an MIT license.
- It runs on a CPU with about 1.7 GB of memory in testing.
- Teachers need strong command line skills.

## Benefits for schools
- It needs no GPU and no ongoing internet.
- The repository lists 4 GB of RAM as the target.
- It is a prototype. Support and updates are uncertain.

## Getting started
- [ ] Find the EulerMind repository on GitHub.
- [ ] Ask IT to approve a command line install on a Linux or Mac computer.
- [ ] Clone the repository.
- [ ] Run the setup while online to download the model.
- [ ] Start the demo with the run script.
- [ ] Go offline and test a few problems.
- [ ] Review the trust labels with students.

## Where is the AI?
The AI is a local language model that proposes math answers. It runs on the computer's CPU. Deterministic code then checks the answer by recomputing the math. Students enter a problem, read the answer and its trust label, and compare the result with their own work.

## Privacy and safety
No account is needed. The README says the app is CPU only and fully offline, and it runs through a local server on the computer. The research presumes the internet is needed only to download the code and model weights. No privacy policy exists and the materials do not state what is logged. A teacher should check the app's files for saved questions and remember that this prototype has uncertain support. The model can make errors. Students should check their work.

## Ideas by subject
### math
1. Solve a problem by hand and then compare your answer with the tutor.
2. Read the trust label on an answer and explain what it tells you.
3. Enter a problem with a small mistake and watch what the tutor does.
4. Write the steps of the recomputation in your own words.
5. Make a list of problems the tutor solved well and ones it missed.

### computer_science
1. Describe how the model proposes an answer and the code verifies it.
2. Run the tutor offline and note the time each answer takes.
3. Compare how memory use changes with problem size.
4. Explain why a second check makes an AI answer more trustworthy.
5. Write a short test plan for a math tutor.
