---
slug: schoco
tagline: A school-hosted web editor for Java homework with automatic test grading.
---

## Overview
schoco is a self-hosted web-based Java IDE for classroom and homework use. Pupils code, compile, run, and test Java in the browser with no local JRE. Teachers turn projects into assignments for course groups, and JUnit tests grade submissions automatically. It runs in Docker with a FastAPI backend, a Vue 3 frontend, and Gitea for code storage.

## Benefits for students
- Students write and run Java in a browser.
- Students see only their own work.
- Students get fast feedback from tests.

## Benefits for teachers
- Teachers create assignments for course groups.
- JUnit tests grade submissions automatically.
- The interface comes in English and German.

## Benefits for schools
- The software is free.
- Student code and usernames stay on the school server.
- A server administrator must install and run it.

## Getting started
- [ ] Find schoco on its project page and read the setup notes.
- [ ] Ask a server administrator to install Docker and docker-compose.
- [ ] Configure a reverse proxy for websockets.
- [ ] Run the compose file and create the Gitea admin user.
- [ ] Register teachers with the shared teacher key.
- [ ] Create a test assignment with a JUnit test.
- [ ] Check that versions below 1.0.0 are for testing only.

## Where is the AI?
schoco has no AI. It builds an AI-related skill, which is logic and testing. Students write Java that must pass tests. That practice teaches how to check that a program works.

## Privacy and safety
Accounts are needed for teachers and students. The system runs on a server the school operates. Usernames and submitted code stay on that server. Teachers register with a shared key, and the system has no email reset. The Java security manager blocks internet access for student code. A teacher should ask the administrator who can see the stored data. The tool supports Java 8 only.

## Ideas by subject
### computer_science
1. Solve a teacher assignment and run the JUnit tests in the browser.
2. Read a failed test and fix the code.
3. Write a method that passes a given test.
4. Write your own JUnit test for a small method.
5. Compare two solutions to the same assignment and discuss which is clearer.
