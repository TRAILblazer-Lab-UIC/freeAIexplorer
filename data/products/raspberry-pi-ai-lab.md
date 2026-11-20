---
slug: raspberry-pi-ai-lab
tagline: An offline high school course where students build a Pi and train classifiers.
---

## Overview
This is an eight-session offline high school course with two optional sessions. Each student builds a Raspberry Pi computer. Students learn Linux and Python, then move data over a private wired network with SSH. They train decision trees and random forests on digit images and finish with a team capstone.

## Benefits for students
- Students build and boot their own computer.
- Students train decision trees and random forests with scikit-learn.
- Students test how noise and shift can break a model.

## Benefits for teachers
- The course has full session plans.
- The repository says no router, Wi-Fi, or classroom internet is needed in class.
- It is a new single-author repository with no independent source.

## Benefits for schools
- The content is free and open source.
- Each student needs a Raspberry Pi 5, a microSD card, and a case. Prices were not checked.
- The sessions are two hours each, and the teacher needs strong technical skills.

## Getting started
- [ ] Find the raspberry-pi-ai-lab repository and read the README.
- [ ] Read the hardware list for each student.
- [ ] Gather Pis, SD cards, and an unmanaged switch.
- [ ] Download the materials while online.
- [ ] Install Raspberry Pi OS 64-bit with the Python packages.
- [ ] Set up the teacher Pi as the data server.
- [ ] Run Session 01 Build your computer.

## Where is the AI?
The AI is a set of decision tree and random forest classifiers trained with scikit-learn. They run on the student's Pi, and a teacher Pi serves the data. Students train a model, test it, and then try to break it with noise and shift. They later use it in a team capstone.

## Privacy and safety
No account is needed, and the internet is used at setup. The class runs on a private wired network with a teacher Pi, and the switch should not connect to the school network. Students use per student accounts on their own Pis. The course uses pseudonymous team IDs for predictions. GitHub is used only for preparation. A teacher should keep the team IDs free of real names.

## Ideas by subject
### computer_science
1. Assemble a Raspberry Pi and boot it to the desktop.
2. Use SSH to move a data file from the teacher Pi.
3. Train a decision tree on digit images and read its accuracy.
4. Add noise to the test images and see how accuracy falls.
5. Present the team capstone and explain what the model gets wrong.
