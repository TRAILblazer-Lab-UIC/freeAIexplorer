---
slug: wire-pod
tagline: Free server software that lets the Anki Vector robot take voice commands locally.
---

## Overview
Wire-Pod is free server software for the Anki Vector robot. It builds on the chipper code that Digital Dream Labs released as open source. It lets Vector take voice commands without Digital Dream Labs servers. It suits advanced high school students and a teacher who can run a small server.

## Benefits for students
- Students run a real voice server for a robot.
- Students connect Vector to optional answer services and compare them.
- Students see how a spoken command becomes a robot action.

## Benefits for teachers
- A wiki guide explains the install.
- The repo includes Docker files.
- A teacher can choose which optional services to turn on.

## Benefits for schools
- The software is free, but a Vector robot is needed.
- The server runs on a school computer on the same network as the robot.
- IT will likely need to manage the server.

## Getting started
- [ ] Find the wire-pod project on GitHub and read the wiki guide.
- [ ] Confirm the school has a Vector 1.0 or 2.0 robot.
- [ ] Ask IT to choose a computer on the same network as the robot.
- [ ] Install wire-pod on that computer.
- [ ] Set up the robot with the server.
- [ ] Test basic voice commands before adding any outside service.
- [ ] Add weather or answer services only after reviewing their terms.

## Where is the AI?
Wire-Pod runs on a local server and turns spoken commands into robot actions. The research did not confirm which speech to text engine it uses. Optional features such as weather and question answering can call outside services. These include weatherapi.com, Houndify, OpenAI, Together, or Ollama. Students use the server to make Vector respond and then extend it with their own services.

## Privacy and safety
The server runs on a school computer and needs no account of its own. The internet is used only for setup unless optional services are on. Optional knowledge graph features send transcribed text to the provider the school chooses, and weather lookups go to a weather service. The research did not confirm the speech to text engine or whether it runs locally. A teacher should check which services are turned on. A teacher should also remember that this is a community project that Digital Dream Labs does not run.

## Ideas by subject
### computer_science
1. Install wire-pod and describe the path a voice command takes to the robot.
2. Test a list of spoken commands and record which ones Vector understands.
3. Turn on a weather service and compare its answers with a weather site.
4. Compare answers from two question services on the same question.
5. Write a short guide that explains the setup to a new student.
