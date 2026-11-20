---
slug: code-freak
tagline: An open source platform that checks programming assignments automatically.
---

## Overview
Code FREAK is an open source programming platform from Kiel University of Applied Sciences. Students code in an in-browser editor based on VS Code. A Docker-based system gives them automated feedback. It works with any programming language and supports LTI 1.3 and LDAP.

## Benefits for students
- Students code in a browser with an editor that looks like VS Code.
- Students get automated feedback on their solutions.
- Students need only a browser.

## Benefits for teachers
- Teachers can set coding assignments in many languages.
- Docker-based grading and linting check the work.
- Teachers can review submissions in the same system.

## Benefits for schools
- The software is free. The school pays for hosting and IT time.
- It runs on a school server with Docker.
- The README says it is not yet a mature product, although editing, evaluation, and reviewing work.

## Getting started
- [ ] Find the Code FREAK project and read docs.codefreak.org.
- [ ] Ask IT staff to set up a server that runs Docker.
- [ ] Ask IT to install the image ghcr.io/codefreak/codefreak.
- [ ] Ask IT to configure a production database.
- [ ] Ask IT to set up LDAP or LTI sign-in.
- [ ] Ask IT to change the default credentials.
- [ ] Create one test assignment and try it as a student.

## Where is the AI?
This tool has no AI. It runs tests and linting on student code. Students build skills in logic and debugging as they respond to the feedback.

## Privacy and safety
Accounts are needed. The project is self hosted with Docker, and accounts and submitted code stay on the server the school runs. The project publishes no privacy policy on the pages read. The development profile uses seeded sample users with a default password. The project was built for university courses and states no grade range. A teacher should ask IT to confirm that default credentials are changed and to check the server settings.

## Ideas by subject
### computer_science
1. Solve a short coding assignment and read the automated feedback.
2. Fix a failing test by changing one line of code.
3. Write a function that passes a set of teacher tests.
4. Read a linting message and improve the style of a program.
5. Compare two solutions to the same task and explain which is clearer.
