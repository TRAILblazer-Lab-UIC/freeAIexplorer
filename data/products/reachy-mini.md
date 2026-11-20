---
slug: reachy-mini
tagline: An open source desktop robot kit that students code and connect to AI apps.
---

## Overview
Reachy Mini is an open source desktop robot for human-robot interaction, creative coding, and AI experiments. It has a wide-angle camera, four microphones, and a speaker. It is sold as a kit that takes 2 to 3 hours to build. Older students code it in Python or run apps from a store on Hugging Face Spaces.

## Benefits for students
- Students build a real robot from a kit and see how its parts fit together.
- Students code the robot in Python and watch it respond with movement and sound.
- Students try apps that let the robot talk with them, listen, and see.

## Benefits for teachers
- Tutorials come as Jupyter notebooks that teachers can work through before class.
- A simulation in MuJoCo lets a class practice code without the physical robot.
- The robot suits a makerspace or a club that has a teacher who enjoys tinkering.

## Benefits for schools
- The launch blog lists the Lite at 399 USD and the Wireless at 499 USD before tax and shipping. Other articles cite lower figures.
- The Lite connects to a computer. The Wireless has its own Raspberry Pi CM4 and Wi-Fi.
- The vendor calls the code and hardware open source. IT will likely need to help with installs.

## Getting started
- [ ] Find the Reachy Mini kit and its documentation on the Hugging Face site.
- [ ] Choose the Lite for a computer link or the Wireless for onboard computing.
- [ ] Set aside 2 to 3 hours for a teacher to assemble the kit.
- [ ] Install the Python SDK or the Reachy Mini Control app. The Lite works with Mac or Linux at launch.
- [ ] Run the first SDK tutorial notebook to make the robot move.
- [ ] Try the MuJoCo simulation for students who share one robot.
- [ ] Install one app from the Hugging Face app store and test it with the teacher account first.
- [ ] Review which apps send data to the cloud before students use them.

## Where is the AI?
The robot has AI for speech, vision, hand tracking, and conversation with large language models. Some of this runs on the robot or the connected computer. The conversation app uses a company's cloud. Students extend their own work by writing code that reacts to what the robot hears and sees.

## Privacy and safety
An account is optional. The internet is needed at setup. Pollen Robotics says the robot does not store or transmit personal data by default. The conversation app is described as LLM powered. Audio or text may go to a model provider. The research did not confirm which apps send audio or camera data to cloud models. The Hugging Face privacy policy says its services are not directed to children under 13. The robot has a camera and microphones. A teacher should check each app before students use it and decide when the camera and microphones may be on.

## Ideas by subject
### computer_science
1. Write a Python program that makes the robot nod and turn its head, following the SDK tutorial notebook.
2. Run the LLM conversation app and list what the robot answers well and poorly.
3. Test the hand tracking and write down which lighting conditions help it work.
4. Use the MuJoCo simulation to debug a movement routine before running it on the robot.
5. Design a short robot greeting for visitors and code each step in order.

### engineering
1. Assemble the Reachy Mini kit in a team and keep a log of each build step.
2. Test the camera and microphones and record how well they work at different distances.
3. Compare the Lite and Wireless designs and list the tradeoffs for a classroom.
4. Troubleshoot a loose connection or stuck movement and document the fix.
5. Sketch a stand or workspace that keeps the robot steady during demonstrations.
