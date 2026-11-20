---
slug: the-littlest-jupyterhub
tagline: A small server setup that lets a class use Jupyter notebooks in the browser.
---

## Overview
The Littlest JupyterHub is a JupyterHub distribution for a small number of users on a single server. It targets 0 to 100 users. An instructor installs it on one virtual machine or physical server. Students log in through a browser and work in Jupyter notebooks hosted on that server.

## Benefits for students
- Students need only a browser and a network path to the server.
- Students work in notebooks that run code and show results.
- Students keep their files on the class server.

## Benefits for teachers
- Pre-installed packages work with conda and pip.
- Plugins allow customization.
- Berkeley recommends it for classes of 100 or fewer students.

## Benefits for schools
- The software is free. A Berkeley guide estimates about 130 to 170 dollars per month of cloud cost for a class of 30 to 50 students.
- It needs a server running a current LTS Debian or Ubuntu with root access.
- A technical person is needed. Berkeley says 20 to 25 concurrent users is realistic on one machine.

## Getting started
- [ ] Find The Littlest JupyterHub install guide.
- [ ] Ask IT to provision a Debian or Ubuntu server with root access.
- [ ] Follow the install guide for your cloud provider or own hardware.
- [ ] Set up an authenticator. The default is FirstUseAuthenticator, and OAuth and LDAP are also options.
- [ ] Turn on HTTPS.
- [ ] Add the packages that your class needs.
- [ ] Test with a small group before the full class.
- [ ] Larger classes should use JupyterHub on Kubernetes.

## Where is the AI?
The Littlest JupyterHub has no AI. It gives students a place to write and run code on a school server. They build coding and data skills in notebooks.

## Privacy and safety
Accounts are required. The server stores usernames, passwords, and notebook files on the server the school or instructor runs. A rented cloud server means the cloud provider hosts the data. The docs say to enable HTTPS before real use. The research inferred that no internet is needed for classroom use, and the requirements page mentions a public IP. Work with IT to set a strong authenticator, turn on HTTPS, and confirm where the server runs.

## Ideas by subject
### computer_science
1. Log in and run a first notebook cell that prints a message.
2. Load a small dataset and graph it in a notebook.
3. Write a short program and explain each line in a text cell.
4. Fix an error message that appears in a notebook.
5. Share a finished notebook with the teacher for review.
