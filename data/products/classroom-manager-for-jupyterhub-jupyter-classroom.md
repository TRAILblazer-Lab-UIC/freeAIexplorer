---
slug: classroom-manager-for-jupyterhub-jupyter-classroom
tagline: A teacher dashboard that manages students and servers on a JupyterHub.
---

## Overview
Classroom Manager is a web dashboard that runs as a service inside JupyterHub. Staff add students, check server status, and assign students to classrooms. It suits a school that already runs JupyterHub for Python classes. Students use the Python notebooks that the hub gives them.

## Benefits for students
- Students sign in with the same JupyterHub login they already use.
- Students land in the right classroom without hunting for a link.
- Students keep working in the Python environment their teacher set up.

## Benefits for teachers
- The dashboard shows each student and server status in one place.
- Teachers can add students and sort them into classrooms.
- The tool needs no separate database to learn or maintain.

## Benefits for schools
- The software is free. The school must run JupyterHub 5 or later.
- It runs on a school server and uses JupyterHub authentication, including OAuth providers.
- Setup needs IT staff. The research notes show one maintainer and one star, which is thin adoption evidence.

## Getting started
- [ ] Find the Classroom Manager project (jupyter-classroom) and read its documentation.
- [ ] Confirm that the school runs JupyterHub 5 or later and Python 3.10 or later.
- [ ] Ask IT to install the package with pip into the JupyterHub environment.
- [ ] Ask IT to register it as a JupyterHub service.
- [ ] Sign in through JupyterHub authentication and open the dashboard.
- [ ] Add a few test students and create one classroom.
- [ ] Check that a test student can start a server and reach the right classroom.

## Where is the AI?
This tool has no AI. It manages accounts, classrooms, and servers. It supports a Python class, where students can build skills in logic and sequencing.

## Privacy and safety
The tool runs on the school's own server and uses JupyterHub sign in. Every user needs an account. The school's JupyterHub authenticator handles sign in. The research found no privacy policy, and the listing does not say what student data the tool stores. A teacher should ask IT where the hub stores student notebooks and who can see them.

## Ideas by subject
### computer_science
1. Write a Python notebook on the class hub that prints a short story, and share the result with a partner.
2. Create a small program that sorts a list of names, and test it with three different lists.
3. Debug a notebook with a planted error and explain the fix to the class.
4. Build a simple calculator in a notebook cell and add one new feature.
5. Join a classroom on the hub and complete a weekly coding challenge that the teacher assigns.
