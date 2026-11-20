---
slug: tara-low-cost-3d-printed-robotic-arm
tagline: A 3D-printed robotic arm design with an Arduino controller and Python simulation.
---

## Overview
TARA is a 3D-printed robotic arm described in a 2025 arXiv paper by Thays Leach Mitre of NYU Shanghai. The bill of materials totals 197.80 USD. The paper says an open-source repository holds design files, assembly instructions, and baseline code. It suits advanced high school students who can print, wire, and code.

## Benefits for students
- Students build a robotic arm from printed parts.
- Students test a motion in a Python simulation before moving the real arm.
- Students control the arm with an Arduino.

## Benefits for teachers
- The stack uses Fusion 360, Jupyter with Pinocchio and MeshCat, URDF models, and an Arduino controller.
- The repository holds design files, assembly instructions, and baseline code.
- The paper reports technical tests and no classroom study.

## Benefits for schools
- The parts cost about 197.80 USD, but a 3D printer is also needed.
- The authors list limits such as plastic durability and few degrees of freedom.
- The license of the design files is not stated. IT will likely need to help with software.

## Getting started
- [ ] Find the TARA paper on arXiv and the repository link inside it.
- [ ] Check the license of the design files with the authors.
- [ ] Print the parts on a 3D printer.
- [ ] Buy the Arduino, servos, and other parts from the bill of materials.
- [ ] Assemble the arm by following the instructions.
- [ ] Install the software for the Python simulation.
- [ ] Load the baseline code onto the Arduino.
- [ ] Run the simulation first and then test the arm slowly.

## Where is the AI?
This project has no AI. The arm follows code that students write and test. They build skills in simulation and control logic.

## Privacy and safety
The paper describes no accounts and no data collection. Downloading the files and software needs the internet at setup. After that the arm and the computer run on their own. The research did not confirm the GitHub repository. Check where the files and software come from. Check that the printed plastic parts are sound before students run the arm.

## Ideas by subject
### engineering
1. Compare the arm's parts list with the bill of materials.
2. Print one joint and test how it moves.
3. Assemble the arm in teams and log each step.
4. Test the arm's reach and record its limits.
5. Suggest one design change to fix a limit the authors list.

### computer_science
1. Run the Python simulation in Jupyter and watch the arm model move.
2. Change a joint angle in the code and predict the result.
3. Write a short sequence of moves for the arm.
4. Load the baseline code on the Arduino and test one joint.
5. Compare the simulated motion with the real arm.
