---
slug: mentar
tagline: A free local AI tutor where code checks every answer and the model explains.
---

## Overview
Mentar is a free, open source AI tutor for children that runs on the user's own computer. A deterministic checker marks every answer, and the language model only explains. Questions come from generators covering 934 topics across Years 1 to 12. The author labels it a research preview for supervised use only.

## Benefits for students
- Students get answers marked by code and explanations from a model.
- Topics cover Years 1 to 12 for several curricula.
- Questions follow Australian, Indian, Singaporean, and US curricula.

## Benefits for teachers
- A teacher sets the child's country and year.
- Code checks each answer, which keeps marking consistent.
- Teachers can supervise use, as the author advises.

## Benefits for schools
- The tool is free. A paid hosted tier is planned but not available.
- Builds exist for Windows x64, macOS Apple Silicon, and Linux x64.
- The author states the safety layer has not had a professional safeguarding audit.

## Getting started
- [ ] Find the Mentar release page and download the build for your system.
- [ ] Ask IT to approve it. The builds are unsigned and the system shows a warning.
- [ ] Install a local model runtime such as Ollama.
- [ ] Pull a model that fits the computer. The docs list a 4 GB tier.
- [ ] Follow the six step quick start in docs/RUNNING.md.
- [ ] Choose the child's country and year.
- [ ] Keep cloud mode off. It is off by default.
- [ ] Supervise every session.

## Where is the AI?
The AI is a local language model that explains answers. It runs on the user's computer through Ollama or llama.cpp. A code checker marks the answers and the model only explains. Students answer questions and read explanations to extend their own understanding.

## Privacy and safety
No account is needed, and the internet is needed to download the model on first run. The README says the local edition has no accounts and keeps child data on the device. An optional cloud backend using OpenAI or Anthropic is off by default and needs a parent consent step. Enabling it would send content to a third party. The author states the safety layer has not had a professional safeguarding audit. It is a research preview for supervised use only. A teacher should supervise use and keep cloud mode off.

## Ideas by subject
### math
1. Answer a set of fraction questions and read the explanation for each miss.
2. Pick a topic from your year and work ten questions in a row.
3. Explain a tutor's step in your own words to a partner.
4. Compare the tutor's explanation with your textbook.
5. Track the topics you answered correctly over a week.

### science
1. Work questions on a science topic for your year and note the ones you missed.
2. Ask the tutor to explain a concept a second way and compare the two.
3. Make a diagram of an explanation the tutor gave.
4. Test a classmate on a topic you just practiced.
5. Write a question that checks a science fact and ask the tutor to mark it.

### ela
1. Practice a grammar topic and read the explanations for any misses.
2. Write a sentence that uses a rule you just learned.
3. Compare the tutor's explanation of a rule with your class notes.
4. Make a list of rules that you still find tricky.
5. Teach a rule to a partner using the tutor's wording.
