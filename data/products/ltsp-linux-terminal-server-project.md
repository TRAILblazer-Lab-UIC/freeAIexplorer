---
slug: ltsp-linux-terminal-server-project
tagline: Free server software that boots a whole computer lab from one Linux server.
---

## Overview
LTSP lets one Linux server netboot many computers on a network. The lab is maintained from one template installation. User home folders live on the server. The vendor describes it as an administrator tool for IT staff.

## Benefits for students
- Students log in at any lab computer and see their own files.
- A reboot resets the computer. Each session starts clean.
- Older students could study how netbooting and networks work.

## Benefits for teachers
- Teachers get a lab that is the same on every computer.
- Teachers do not manage each machine one by one.
- The tool needs Linux administration skills. Teachers will rely on IT.

## Benefits for schools
- The software is free. The school supplies a server, a network, and client computers.
- The setup can reuse old PCs and Raspberry Pi OS.
- The current version was rewritten in 2019, and case evidence is dated.

## Getting started
- [ ] Find the LTSP documentation and read the overview.
- [ ] Prepare a Linux server on the same network as the lab computers.
- [ ] Check that clients can network boot with PXE or UEFI.
- [ ] Install LTSP on the server.
- [ ] Build a client image from a template installation.
- [ ] Configure DHCP and netboot.
- [ ] Create user accounts and change any default passwords.
- [ ] Test with one client before the full lab.

## Where is the AI?
LTSP has no AI. It builds skills in networking and systems. Students could learn how a computer boots over a network and where files are stored.

## Privacy and safety
LTSP runs on a school server and accounts are required. Students and staff log in with accounts on that server. Home folders and sessions stay on that server, as the project docs describe. There is no vendor cloud. What data is stored depends on the school configuration, and the materials do not state the details. An administrator should check access rules and who can read student files.

## Ideas by subject
### cte
1. Draw a diagram that shows how a client computer boots from the server.
2. Interview an IT worker about how a lab is maintained.
3. List the steps an administrator follows to add a new client.
4. Create a checklist to test a new lab computer.
5. Compare a one-server lab to a lab where every computer is managed alone.

### computer_science
1. Explain the roles of DHCP, TFTP, and NFS in a netboot.
2. Trace what happens from power on to login.
3. Describe why home folders live on the server.
4. Compare SSH, SSHFS, and LDAP as ways to log in.
5. Write a short report on the pros and cons of thin clients.
