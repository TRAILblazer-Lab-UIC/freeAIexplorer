---
slug: pinet-and-piserver
tagline: Tools that run a whole classroom of Raspberry Pis from one school server.
---

## Overview
PiNet is a community tool for managing a classroom of Raspberry Pis with network accounts and central file storage. PiServer is Raspberry Pi software that network boots Pis from an x86 server over Ethernet. The server supplies the file system, boot files, and logins. Students get username and password accounts with home folders on the server.

## Benefits for students
- Students sign in on any Pi and find their own files.
- Students use the same setup every day.
- Teachers ran labs of about 20 to 60 Pis with PiNet to teach Scratch.

## Benefits for teachers
- Teachers control which software is installed.
- Network boot means no SD cards to manage.
- The setup is advanced, but daily use is easy.

## Benefits for schools
- The software is free. An x86 server and Raspberry Pis are needed.
- Central accounts and files make management easier.
- A server administrator must set it up.

## Getting started
- [ ] Read the 2018 Raspberry Pi Foundation article about PiServer.
- [ ] Ask IT to check that the requirements still apply. The article is from 2018.
- [ ] Prepare each client Pi to network boot.
- [ ] Install PiServer on an x86 server running Debian.
- [ ] Use the wizard to detect clients, add users, and pick operating systems.
- [ ] Connect the Pis over wired Ethernet only.
- [ ] Test a student sign-in.

## Where is the AI?
This software has no AI. It builds skills in networks and accounts. Students see how a shared server stores files for many computers.

## Privacy and safety
Student usernames, passwords, and home folder files stay on the school server. The article says networked Pis do not need an internet connection. The school server administrator controls access to those accounts. Both tools are old, and the PiNet repository was last updated in 2019. A teacher should work with IT on who can see student folders and how passwords are reset.

## Ideas by subject
### computer_science
1. Sign in to a classroom Pi and make a Scratch project, as in the PiNet labs.
2. Save a project and open it from a different Pi.
3. Draw a diagram of how the server, network, and Pis connect.
4. Explain why a school might boot computers from a server.
5. Compare saving files on a server with saving them on a local SD card.
