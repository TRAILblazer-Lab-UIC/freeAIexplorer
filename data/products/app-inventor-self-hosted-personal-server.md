---
slug: app-inventor-self-hosted-personal-server
tagline: The open source MIT App Inventor server that a school can build and host itself.
---

## Overview
This is the open source code for the MIT App Inventor server and build tools. Schools with IT staff can build it and host their own instance. The README describes building with Ant, a PostgreSQL database and a Docker image for Docker or Kubernetes. Students then make Android apps with the blocks editor from the school hosted copy.

## Benefits for students
- Students build Android apps with blocks.
- Students use a copy hosted by their own school.
- Students can start with simple apps and grow.

## Benefits for teachers
- Teachers use the same blocks editor as the hosted service.
- Teachers do not manage the server themselves.
- The vendor README gives a full build guide for IT staff.

## Benefits for schools
- The code is free under Apache-2.0.
- Projects would be stored on a school server. Contact with MIT servers is unconfirmed.
- IT needs a server with Java, PostgreSQL and optionally Docker, and the setup takes days.

## Getting started
- [ ] Find the App Inventor source repository on GitHub.
- [ ] Ask IT staff to review the README.
- [ ] Clone the repo and initialize the submodules.
- [ ] Run ant MakeAuthKey and ant.
- [ ] Set up PostgreSQL.
- [ ] Run the dev server at localhost:8888 or build the Docker image.
- [ ] Run a separate build server for APK files.

## Where is the AI?
The server has no AI. Students build skills in logic, events and sequencing as they make apps with blocks. They test the apps on an Android device.

## Privacy and safety
The server runs on a school server and projects would be stored in the school's own PostgreSQL database. The materials do not say which accounts are needed or whether the internet is needed. The research did not confirm whether a self hosted copy contacts MIT servers. Features such as the rendezvous server and CloudDB need separate setup. A teacher should work with IT on account setup, backups, and which outside services stay off.

## Ideas by subject
### computer_science
1. Build a simple app with a button that changes a label.
2. Create an app that uses a sensor on the phone.
3. Add a second screen to an app.
4. Test an app on an Android device and fix a bug.
5. Share an app with a classmate through the school server.
