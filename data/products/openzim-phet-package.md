---
slug: openzim-phet-package
tagline: Offline copies of PhET science and math simulations for a school server.
---

## Overview
This package builds offline ZIM copies of PhET science and math simulations. A school server or hotspot running Kiwix can serve the files with no internet. Students open the simulations in a browser. Prebuilt files are published at download.kiwix.org.

## Benefits for students
- Students can run PhET simulations where the internet is slow or missing.
- Students explore physics, chemistry, biology, and math through interactive models.
- Students use only a browser. There is nothing to install.

## Benefits for teachers
- Teachers can pick prebuilt files by subject and language.
- The simulations load the same way every day.
- Setup takes some effort, but daily use is easy.

## Benefits for schools
- The software is free. A server such as a Raspberry Pi is the only cost.
- Student data stays on the school network.
- A server administrator will need to set up Kiwix.

## Getting started
- [ ] Find the prebuilt PhET ZIM files at download.kiwix.org.
- [ ] Ask IT to choose a machine to run Kiwix.
- [ ] Download the ZIM file you want while the machine is online.
- [ ] Serve the file with Kiwix on the school network.
- [ ] Test it from a student device on the school network.
- [ ] Node.js 16 or higher is needed only to build your own ZIM with phet2zim.
- [ ] Share the address with students.

## Where is the AI?
This package has no AI. It builds a useful skill in data and pattern spotting. Students change the settings of a simulation and look for patterns in what happens.

## Privacy and safety
No student accounts are needed. The internet is used once to download the files. After that, Kiwix serves the simulations from the school server. The research reviewed no privacy policy for the repository. A teacher should check with IT that the server is only reachable on the school network.

## Ideas by subject
### science
1. Run an offline PhET simulation and record how changing one setting affects the result.
2. Compare a physics simulation with a hands-on experiment from class.
3. Use a chemistry simulation to predict an outcome and then test the prediction.
4. Make a lab sheet that guides a partner through one simulation.
5. Explain in a short write-up why a school might need offline science tools.

### math
1. Explore a PhET math simulation and describe the pattern the model shows.
2. Change a value in a graphing simulation and record how the graph moves.
3. Predict an answer and then check it in the simulation.
4. Create three questions about a simulation for a classmate.
5. Write a short summary of what the simulation teaches about a math idea.
