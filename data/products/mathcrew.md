---
slug: mathcrew
tagline: A self-hosted AI math tutor for grades 1 to 6 that uses four AI agents.
---

## Overview
MathCrew is a self-hosted AI math tutor for grades 1 to 6. It uses four AI agents named Manager, Creator, Helper, and Analyst. They adapt to a child's pace, spot mistakes, and make practice problems. It supports Common Core, RSM, and Singapore Math.

## Benefits for students
- Students get practice problems that match their pace.
- The tutor spots mistakes and offers help.
- A dashboard shows accuracy and topic results.

## Benefits for teachers
- Student profiles hold grade and curriculum.
- A problem bank and a progress dashboard help teachers see needs.
- Teachers can pick the curriculum that fits the class.

## Benefits for schools
- The software is free. Gemini API use may cost money on a paid tier.
- The code is open source and runs on a school computer or server.
- It needs Python skills. A server administrator will be involved.

## Getting started
- [ ] Find the MathCrew repository and read the README.
- [ ] Ask IT to review the data flow. Prompts go to Google Gemini.
- [ ] Clone the repository.
- [ ] Install the dependencies with pip.
- [ ] Add a Gemini API key to the .env file.
- [ ] Run python web_tutor.py.
- [ ] Open the page at localhost on port 8000.
- [ ] Test with a teacher profile first.

## Where is the AI?
The AI is a set of four agents that run on Google's Gemini model. The tutor program runs on a school computer, but prompts go to the vendor's cloud. Students work problems, get hints, and see feedback. They then use the practice to extend their own skills.

## Privacy and safety
No account is needed, and the internet is always needed in cloud mode. Student names, grade, answers, and learning history are stored locally in SQLite. Prompts are sent to Google Gemini. The site says free tier Gemini data may be used for product improvement and recommends the paid tier. It describes a Full Local Mode that keeps student data on the machine, and the research did not confirm its details. The site says the design considered COPPA and FERPA without giving details, and it makes no formal compliance claim. A teacher should check which names and details are entered and should review the Gemini terms.

## Ideas by subject
### math
1. Solve a set of practice problems and read the tutor's hint on a missed one.
2. Review the dashboard and name the topic that needs more work.
3. Explain a mistake in your own words after the tutor points it out.
4. Compare the same topic in Common Core and Singapore Math styles.
5. Write a new word problem and see if a classmate can solve it.
