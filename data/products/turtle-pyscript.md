---
slug: turtle-pyscript
tagline: Python turtle graphics that run entirely in the web browser.
---

## Overview
Turtle-pyscript is a beta version of Python turtle graphics built on PyScript and Pyodide. The code runs in the browser and needs no server side part. A teacher copies the files to a static web server and opens index.html. Students write Python turtle programs in a main.py file and see the drawing on the page.

## Benefits for students
- Students write real Python and see a drawing right away.
- Students need no install on their own computers.
- Students can try an experimental sprite game API.

## Benefits for teachers
- Teachers get a familiar Python turtle in the browser.
- Student code lives in one file, main.py.
- Setup takes some skill. A technical colleague may help.

## Benefits for schools
- The tool is free and the code is open source.
- It runs on any static web server.
- A server administrator must host the files. Setup may take days.

## Getting started
- [ ] Find the turtle-pyscript repository on GitHub and read its README.
- [ ] Ask a server administrator to copy the files to a static web server.
- [ ] Open index.html in a modern browser and check the page loads.
- [ ] Host the PyScript and Pyodide runtimes locally. Otherwise the internet loads them.
- [ ] Edit main.py with a short test program.
- [ ] Read the known issues list before planning lessons.
- [ ] Share the page link with students.

## Where is the AI?
This tool has no AI. Python code runs in the browser and draws by fixed commands. Students build sequencing skills as they order turtle moves in text code.

## Privacy and safety
The README says there is no server side part and that Python code runs in the browser. No account is needed and the research found no privacy policy. The README does not say where the PyScript and Pyodide runtimes load from. The internet may be needed unless the school hosts them locally. The optional pseudoserver states no data goes to the CoderDojo server. This is beta software with buggy stamping, drawing lag, and moves that happen at once. Ask IT to host the runtimes.

## Ideas by subject
### computer_science
1. Write a Python program that draws a square in main.py.
2. Use a for loop to draw a triangle, a hexagon, and a circle.
3. Define a function that draws a flower and call it three times.
4. Test the known stamping bug and write a bug report.
5. Try the experimental Sprite game API and make a simple moving character.
