---
slug: jupyterhub
tagline: A school hosted notebook server that gives each student a Python workspace in a browser.
---

## Overview
JupyterHub is a multi user notebook server that a school or organization hosts itself. Students log in through a browser and get their own notebook environment. They install nothing. Administrators manage users and shared resources.

## Benefits for students
- Students open a notebook from any device with a browser.
- Students log in to their own workspace.
- Students need no software on their own computer.

## Benefits for teachers
- Teachers can add nbgrader to give out and grade assignments, as a teaching reference deployment does.
- The same setup works with JupyterLab, Notebook, and other interfaces.
- Teachers do not handle student installs.

## Benefits for schools
- The software is free and the code is open.
- It runs on a single virtual machine or on Kubernetes.
- Self hosting needs real IT skill and a server admin.

## Getting started
- [ ] Share the JupyterHub overview with your IT or server team.
- [ ] Ask IT to deploy The Littlest JupyterHub on a virtual machine, or Zero to JupyterHub on Kubernetes.
- [ ] Choose how students log in and set up authentication.
- [ ] Add users and set admin accounts.
- [ ] Add nbgrader for assignments if you want it.
- [ ] Test a login from a student device.
- [ ] Plan the first lesson and share the address with students.

## Where is the AI?
JupyterHub has no AI. It hosts notebooks where students write Python. Students build data and coding skills by running their own code on the school server.

## Privacy and safety
Student accounts are needed, and the school or host runs the server. Notebooks and files sit on that server, and the host controls the data. Authentication is pluggable, and OAuth and GitHub are given as examples, which may send logins to an outside identity provider. The docs read did not say where the hub database lives. A teacher should ask IT who can see student files, which login method is used, and how long accounts and files are kept.

## Ideas by subject
### computer_science
1. Log in and run a first Python cell, as a data science course did with a teaching deployment.
2. Write a short program that works with a list of numbers.
3. Load a data file and print summary numbers.
4. Turn in a notebook for grading with nbgrader.
5. Review a classmate's notebook and leave a note in a text cell.
