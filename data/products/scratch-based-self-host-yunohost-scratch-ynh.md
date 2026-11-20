---
slug: scratch-based-self-host-yunohost-scratch-ynh
tagline: A YunoHost package that serves the Scratch editor from a school server.
---

## Overview
scratch_ynh is a YunoHost package that installs the Scratch visual programming environment on a YunoHost server. It uses the upstream scratch-gui project. An administrator installs it with the yunohost command line. Students then open the standard Scratch block editor in a browser on the school network.

## Benefits for students
- Students use the standard Scratch block editor.
- Students build projects with sequence, events, and loops.
- Students work on the school network.

## Benefits for teachers
- The editor looks like the Scratch many teachers already know.
- The package tracks upstream scratch-gui 5.3.0.
- An administrator handles the install.

## Benefits for schools
- The package is free and licensed GPL-3.0.
- The editor is served from the school's own server.
- A server administrator is needed, and setup may take days.

## Getting started
- [ ] Find the scratch_ynh package on GitHub and read the README.
- [ ] Ask a server administrator to set up a YunoHost server.
- [ ] Give the administrator sudo access to the yunohost command line.
- [ ] Install the app through the YunoHost app system.
- [ ] Open the editor in a browser on the school network.
- [ ] Test saving and loading a project before class.
- [ ] Note that the GitHub release tag is 3.0-beta but the README shows 5.3.0~ynh2.

## Where is the AI?
This package has no AI. It serves a block editor from the school server. Students build sequencing and logic skills with Scratch blocks. They learn to plan the order of steps in a program.

## Privacy and safety
The editor is served from the school's own YunoHost server. The README does not describe accounts, saving or data handling. The research inferred that the package serves only the editor, and did not confirm it. The materials do not state whether the internet is required. A teacher should ask the administrator where projects are saved and who can see them.

## Ideas by subject
### computer_science
1. Build a simple animation with a sprite and a sequence of blocks.
2. Create a quiz game that uses events and a score variable.
3. Use a loop to draw a repeating shape.
4. Remix a classmate's project and add one feature.
5. Explain to the class how a program runs from the first block to the last.
