---
slug: jupyterlite
tagline: JupyterLab that runs fully in the browser with no server.
---

## Overview
JupyterLite is a JupyterLab distribution that runs entirely in the browser. Python runs in the page through Pyodide or Xeus Python. A school can host it as static files on any web host with no kernel server. Students edit, save, and download notebooks that live in browser storage.

## Benefits for students
- Students open a notebook by visiting a web address.
- Students can use plotting libraries such as matplotlib and plotly.
- Students can download their work to keep it.

## Benefits for teachers
- Nothing needs to be installed on student devices.
- It suits Chromebooks.
- Teachers can use the public demo with no setup.

## Benefits for schools
- The software is free and the code is open.
- A school can publish it to a static host such as GitHub Pages or a school web server.
- Browser memory limits large data, and about 100 MB is suggested.

## Getting started
- [ ] Try the public JupyterLite demo in a browser.
- [ ] Ask a teacher or admin to build a JupyterLite site.
- [ ] Publish the site to GitHub Pages or a school web server.
- [ ] Open the site on a Chromebook and run a Python cell.
- [ ] Show students how to download their notebooks.
- [ ] Remind students that clearing browser storage deletes their notebooks.
- [ ] Keep data files small.

## Where is the AI?
JupyterLite has no AI. Python runs inside the browser on the student's own device. Students build data skills by loading data, plotting it, and describing what they see.

## Privacy and safety
No account is needed, and there is no server side execution. Files stay in browser storage on the device, and notebooks are lost when storage is cleared. The page loads from whichever host serves it, and loading Python packages may need network access the first time. A teacher should tell students to download their work. A teacher should also check who can reach the hosted site.

## Ideas by subject
### computer_science
1. Run a first Python cell, as short introductory workshops do.
2. Write a loop that prints a multiplication table.
3. Make a text cell that explains the code above it.
4. Download the notebook and open it again.
5. Fix a notebook that has a broken cell.

### science
1. Plot a small data set with matplotlib.
2. Make an interactive plot with plotly.
3. Use a slider widget to change one value and watch the graph.
4. Describe the trend in the plot in a text cell.
5. Repeat the plot with data from a second trial.
