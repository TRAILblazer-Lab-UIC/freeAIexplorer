---
slug: nbgrader
tagline: A Jupyter extension that creates and grades notebook assignments.
---

## Overview
nbgrader is a Jupyter extension for creating, distributing, and grading notebook assignments. Instructors write notebooks with coding exercises and written responses and mark which cells are graded. Submissions are graded automatically with tests and then reviewed by hand in a formgrader interface. It is aimed at college courses and is used in programming and data science classes.

## Benefits for students
- Students complete assignments inside a notebook.
- Students get code tested by the autograder.
- Students submit written answers alongside code.

## Benefits for teachers
- The tool grades code cells automatically.
- A formgrader interface supports manual review.
- Teachers distribute and collect assignments from one place.

## Benefits for schools
- The tool is free, but hosting a JupyterHub server costs extra.
- A class setup needs a shared server and IT support.
- Grades and submitted notebooks stay on the school server.

## Getting started
- [ ] Ask IT for a JupyterHub or shared server.
- [ ] Install with pip install nbgrader or conda.
- [ ] Run nbgrader quickstart to create a course folder.
- [ ] Enable the JupyterLab extensions.
- [ ] Run autograding in an isolated, low privilege account.
- [ ] Use containers or a service account to isolate student code.
- [ ] Test an assignment end to end before class.

## Where is the AI?
This tool has no AI. The autograder runs tests that the instructor writes. It builds skills in programming and data analysis.

## Privacy and safety
No separate account is needed beyond the server login, and the internet is not needed. Grades and submitted notebooks stay on the school server. The main concern is security. Autograding runs student code with the instructor's permissions, and Aalto University warns that this exposes instructor files and other students' data. A search snippet also reported a security advisory, and the research did not verify the fix version. A teacher should work with IT to isolate the autograder and check for updates.

## Ideas by subject
### computer_science
1. Complete a notebook exercise and run the tests that check it.
2. Write a function that passes the instructor's test cells.
3. Fix a failing test and explain the cause.
4. Write a short response that explains how a program works.
5. Review the feedback from the formgrader and revise the code.
