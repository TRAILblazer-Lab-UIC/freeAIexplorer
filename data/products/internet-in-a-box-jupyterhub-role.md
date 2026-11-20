---
slug: internet-in-a-box-jupyterhub-role
tagline: A school server add-on that lets students write Jupyter Notebooks over local Wi-Fi.
---

## Overview
The IIAB JupyterHub role installs JupyterHub on an Internet-in-a-Box server. Students write Jupyter Notebooks over the local network. Notebooks can combine code, interactive graphs, and science experiment results. The README presents it mainly for secondary schools. Each student has a separate folder and cannot see others' work.

## Benefits for students
- Students write Python notebooks without installing anything.
- Students combine code, graphs, and notes in one place.
- Students keep their own folder.

## Benefits for teachers
- Students self-register at the box.lan login page.
- An admin control panel handles password resets.
- Notebooks suit science and computing lessons.

## Benefits for schools
- The software is free. A server such as a Raspberry Pi or PC is needed and its cost varies.
- Access is through the local box.lan address, and no vendor cloud is described.
- It needs IT or a technical admin and a 64-bit server.

## Getting started
- [ ] Install Internet-in-a-Box on a 64-bit server.
- [ ] Enable the JupyterHub role.
- [ ] Log in as Admin and set a password for the built-in Admin account.
- [ ] Open the admin control panel and test a password reset.
- [ ] Have students register at box.lan/jupyterhub from the local network.
- [ ] Test one student account and notebook.
- [ ] Note that JupyterHub fails to install on 32-bit systems.

## Where is the AI?
This role has no AI. It builds coding and data skills. Students write Python and chart results in notebooks. It runs on a school server.

## Privacy and safety
Accounts are required, and students create their own at first login. The server stores usernames, bcrypt password hashes in a local file, and student notebook files. The README describes no vendor cloud, and access is through the local box.lan address. It does not address offline use explicitly. No privacy policy applies because the school hosts this community software. A teacher or admin should set the Admin password at once and remind students that the admin can reset passwords.

## Ideas by subject
### computer_science
1. Register an account and run a first Python cell.
2. Write a notebook that prints a list and loops over it.
3. Use a variable to store a result and show it.
4. Fix an error in a cell and rerun it.
5. Add a markdown note that explains what the code does.

### science
1. Record experiment results in a table inside a notebook.
2. Plot measurements from a class experiment as a graph.
3. Compare two data sets in one notebook.
4. Write a short claim and support it with a chart.
5. Present a notebook that shows an experiment from start to finish.
