---
slug: ai-tutor-hari7261
tagline: A small open source tutor app that runs a local language model on your computer.
---

## Overview
AI-Tutor is a small open source Streamlit app that runs on the user's own computer. It uses Ollama to serve a local language model. Students choose an education level and a subject, then ask for a step by step explanation or a quiz with explanations. The subjects are Math, History, Computer Science, Physics, Biology, and Chemistry.

## Benefits for students
- Students get step by step explanations at a level they choose.
- Students can take multiple choice quizzes that explain each answer.
- Students can ask follow up questions because the app keeps the conversation history.

## Benefits for teachers
- The app has an explanation mode and a quiz mode.
- The app finds installed Ollama models by itself.
- Model preferences can be changed in the config/models.yaml file.

## Benefits for schools
- The software is free and open source.
- The README says questions are not sent to external servers. The research did not verify that.
- The computer must be able to run Ollama and a model such as Gemma3. IT will likely need to help with the command line setup.

## Getting started
- [ ] Find the hari7261 AI-Tutor repository on GitHub.
- [ ] Ask IT to approve a command line install on a capable computer.
- [ ] Install Python and Ollama.
- [ ] Clone the repository and run pip install -r requirements.txt.
- [ ] Pull a model with ollama pull gemma3.
- [ ] Start ollama serve and then run streamlit run app.py.
- [ ] Open the app in a browser on the same machine.
- [ ] Test an explanation and a quiz before class.

## Where is the AI?
The AI is a language model that Ollama runs on the local device. It writes explanations, makes quizzes, and answers follow up questions. Students pick a subject and a level, read the reply, and then ask for more detail. The app is a personal project with low adoption, and the grade levels are labels in the app that nobody has vetted.

## Privacy and safety
No account is needed. The internet is used to download Ollama and the model. The README says no data is sent to external servers. That is the author's own statement and the research did not verify it. The app has no privacy policy. A teacher should check answers in each subject before students rely on them. IT should also review the install.

## Ideas by subject
### math
1. Ask for a step by step explanation of a problem and write each step in your own words.
2. Take a multiple choice quiz and read the explanation for each missed question.
3. Ask a follow up question about one step and compare the answer with the textbook.
4. Find a mistake in a tutor reply and explain the fix.
5. Make a study guide from three explanations on one topic.

### science
1. Ask for an explanation of a Physics idea such as force and test it with a small experiment.
2. Take a Biology quiz and note the questions that the tutor explains in a new way.
3. Ask for a Chemistry concept at two education levels and compare the replies.
4. Check a tutor explanation against the class textbook and record any differences.
5. Write three follow up questions on a science topic and save the best answers.

### social_studies
1. Ask for an explanation of a historical event and write a short summary.
2. Take a History quiz and review the explanations for each answer.
3. Ask a follow up question about a cause of an event and check it in a trusted source.
4. Compare tutor replies at two education levels and describe what changed.
5. Find a claim in a reply that needs a source and look one up.
