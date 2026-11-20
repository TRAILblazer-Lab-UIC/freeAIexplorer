---
slug: blockpy
tagline: A web Python environment with linked block and text editing for data science.
---

## Overview
BlockPy is a web-based Python environment where students work with blocks, text, or both. It is designed for introductory data science. The block editor is built on Blockly, and Python runs in the browser through Skulpt. The stated goal is a gentle start in Python that can grow into a more serious environment.

## Benefits for students
- Students can switch between blocks and text for the same program.
- Students get State Explorer and Guided Feedback tools that help them see what code does.
- Students practice Python through data science tasks.

## Benefits for teachers
- The dual editor eases students from blocks into text code.
- Guided Feedback gives students hints on their work.
- Teachers can use a hosted copy or run their own.

## Benefits for schools
- The software is free and open source.
- A school can host it locally with npm run dev, which needs IT help.
- Data handling is unclear, and a 2016 paper describes keystroke logging on BlockPy servers.

## Getting started
- [ ] Look for a hosted BlockPy instance, and note that the hosted site could not be reached in recent checks.
- [ ] Ask IT about cloning the repositories and running npm install and npm run dev.
- [ ] Read the 2016 paper on how BlockPy logs student code.
- [ ] Ask the vendor whether accounts are needed.
- [ ] Test the dual editor with a short program.
- [ ] Try State Explorer on a small example.
- [ ] Choose a first data science task for students.

## Where is the AI?
BlockPy has no AI. It builds the skill of working with data, as students load, filter, and chart values with code. It also builds logic as they move between blocks and text.

## Privacy and safety
BlockPy runs Python in the browser through Skulpt. A 2016 paper says the hosted version logged code at the keystroke level and stored profile data on BlockPy servers. The paper also says LMS users were registered with accounts automatically. The research did not review the current hosted site, found no privacy policy, and could not verify its certificate. A teacher should ask the vendor what is collected today, or host a copy that the school controls.

## Ideas by subject
### computer_science
1. Build a short program in blocks and then view the same program as Python text.
2. Use State Explorer to follow how a variable changes line by line.
3. Fix a program with a planted error, using Guided Feedback hints.
4. Write a loop that prints each item in a small list.
5. Explain in plain words what a piece of block code does.

### math
1. Load a small table of data and find the average.
2. Make a bar chart of a survey result and describe it.
3. Filter a data set to a single group and compare it to the whole.
4. Predict a trend from a table and then check it with code.
5. Write a sentence that states a claim backed by a chart.
