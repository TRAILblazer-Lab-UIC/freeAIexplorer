---
slug: proxmox-ve
tagline: Free server software that gives each student their own virtual machines.
---

## Overview
Proxmox VE is an open source server virtualization platform. It combines KVM virtual machines and LXC containers with a web interface. It supports clustering, storage such as ZFS and Ceph, and per user permissions. An instructor forum thread describes giving each student their own account and virtual machines in a shared cluster for lab classes.

## Benefits for students
- Students can practice server and network tasks in their own virtual machines.
- Students can break and rebuild a system safely.
- Students use only a browser to reach their machines.

## Benefits for teachers
- Pools and per user permissions keep student work separate.
- Backup tools help teachers reset labs.
- IT support is a must, as the setup is not suited to classroom teachers alone.

## Benefits for schools
- The software is free under AGPLv3. Paid subscriptions are optional.
- Student accounts stay on the school's own server.
- It needs dedicated x86-64 server hardware with virtualization extensions.

## Getting started
- [ ] Ask IT staff to plan a Proxmox server.
- [ ] Check that the server has virtualization extensions.
- [ ] Install Proxmox on the server.
- [ ] Create accounts and pools for students.
- [ ] Build a template virtual machine for a lab.
- [ ] Test a student sign-in from a browser.
- [ ] Review the optional subscription offer before buying anything.

## Where is the AI?
Proxmox VE has no AI. It builds skills in networks, servers, and logic. Students see how one physical machine runs many virtual ones.

## Privacy and safety
Student accounts live on the school's own server and need the school network. The internet is used at setup. The pages read did not describe telemetry, and the research did not read a privacy statement. A teacher should work with IT on who has administrator access and how student machines are reset.

## Ideas by subject
### cte
1. Create a virtual machine and install an operating system, as an instructor describes for IT and networking labs.
2. Set up a small network of two machines and test the connection.
3. Take a backup of a machine and restore it.
4. Document the steps to build a lab server.
5. Present how permissions keep students' machines separate.

### computer_science
1. Compare a virtual machine with a container and describe each.
2. Install a program in a virtual machine and test it.
3. Break a machine on purpose and recover it from a backup.
4. Write a short guide to using the web interface.
5. Explain why a school might use virtual machines for labs.
