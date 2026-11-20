---
slug: pyodide
tagline: A runtime that lets web pages run Python code inside the browser.
---

## Overview
Pyodide is a Python distribution for the browser and Node.js. It is a port of CPython to WebAssembly. It lets pages install and run Python packages with micropip. It is a runtime that developers embed in other tools, and it is not an app for students.

## Benefits for students
- Students use Python in a browser tool without installing it.
- Students can reach it through tools such as JupyterLite, PyodideU, and WebTigerPython.
- Students keep running real Python code on their own device.

## Benefits for teachers
- Teachers normally use a tool built on Pyodide.
- Those tools work on Chromebooks.
- Advanced teachers can embed it in their own pages.

## Benefits for schools
- The runtime is free and open source.
- Python runs inside the browser sandbox on the student's device.
- Schools can self-host the files.

## Getting started
- [ ] Find Pyodide on its official site and read the introduction.
- [ ] Decide whether a ready-made tool built on Pyodide meets your needs.
- [ ] Try JupyterLite or another browser editor built on it.
- [ ] Ask IT before you self-host the files from the releases page.
- [ ] Add pyodide.js from the CDN to a test page.
- [ ] Run a small Python line and show the result on the page.
- [ ] Check that any package you need works. Browser security limits network access.

## Where is the AI?
Pyodide has no AI. It builds an AI-related skill, which is understanding how code runs. Students see that Python can run inside a browser with no server. That idea helps them think about where any program runs.

## Privacy and safety
No account is needed. Code runs in the browser sandbox on the student's device. The documented example loads Pyodide and packages from the jsDelivr CDN. The first load needs the internet and the CDN sees the request. Schools can self host the files. No privacy policy was found. A tool built on Pyodide may add its own accounts or storage. A teacher should check the privacy terms of any tool they pick.

## Ideas by subject
### computer_science
1. Use a browser tool built on Pyodide to run a first Python program.
2. Compare running Python in a browser with running it on a desktop install.
3. Install a small package with micropip and use it in a script.
4. Pass a value between JavaScript and Python and describe what happened.
5. Explain why some network packages do not work inside a browser sandbox.
