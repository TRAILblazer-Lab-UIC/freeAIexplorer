---
slug: debian-edu-skolelinux
tagline: A ready-made Linux school network with a main server, workstations, and learning apps.
---

## Overview
Debian Edu is a Debian Pure Blend that installs a preconfigured school network. A main server provides DHCP, DNS, LDAP, home directories, email, web hosting, printing, backup, and monitoring. Workstations use an Xfce desktop with apps such as GeoGebra, Kalzium, KGeography, and Scratch. It supports thin clients, diskless workstations, and standalone installs.

## Benefits for students
- Students log in to their own account on any workstation.
- Students find learning apps already installed.
- Students keep files in a home directory on the server.

## Benefits for teachers
- Teachers can reset student passwords.
- The GOsa web interface manages users.
- Users can be added through CSV import.

## Benefits for schools
- The software is free.
- The school needs its own server, workstation hardware, and administrator time.
- Workstations need at least 1500 MHz and 1024 MiB RAM, and thin clients can use 256 MiB RAM.

## Getting started
- [ ] Download the install image from the Debian Edu site.
- [ ] Ask a system administrator to plan the school network.
- [ ] Install the main server profile.
- [ ] Add users through GOsa or CSV import.
- [ ] Install workstations on the school network.
- [ ] Set up a gateway to the internet for updates.
- [ ] Test a student login on one workstation.

## Where is the AI?
This platform has no AI. It builds skills in computer science, including logic and systems. Students use Linux workstations and bundled apps such as Scratch.

## Privacy and safety
Accounts are needed for teachers and students. User accounts and home directories stay on the school main server, and all services run on the school's own server. The school operates the system. No vendor privacy policy applies. The netinst image needs the internet during installation, and updates need online repositories later. The research did not audit the bundled apps. A teacher should ask the administrator who can see home directories and how backups are kept.

## Ideas by subject
### computer_science
1. Log in to a Linux workstation and explore the desktop.
2. Build a small project in Scratch and save it to the home directory.
3. Compare the file layout on Linux with another system.
4. Use KGeography to quiz a partner.
5. Describe how the school network shares files and printers.
