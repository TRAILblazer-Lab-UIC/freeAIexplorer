---
slug: llms-from-scratch-raschka
tagline: PyTorch notebooks that build and train a GPT style model step by step.
---

## Overview
This is the code repository for the book Build a Large Language Model (From Scratch) by Sebastian Raschka. It has PyTorch notebooks that build, pretrain, and finetune a GPT style model. The main code is meant to run on a conventional laptop. The material is advanced and suits upper secondary or extension work.

## Benefits for students
- Students build attention and a GPT model from the ground up.
- Students see pretraining and finetuning as separate steps.
- Students work in code and learn how a language model is made.

## Benefits for teachers
- Each chapter has a notebook with code to run and read.
- A teacher with strong Python skills can guide a small group.
- The code uses a GPU if one is available.

## Benefits for schools
- The repository is free. The companion book is a paid purchase from Manning.
- The code runs on a laptop without special hardware.
- No K-12 classroom use was found. Plan it as an extension project.

## Getting started
- [ ] Find the repository from Sebastian Raschka on GitHub.
- [ ] Ask IT to approve Python and PyTorch on a lab or teacher computer.
- [ ] Clone the repository.
- [ ] Install Python and PyTorch.
- [ ] Open the notebook for the first chapter on text data.
- [ ] Run the cells in order and read each result.
- [ ] Plan a weekly session that covers one chapter at a time.

## Where is the AI?
The AI is a GPT style language model that students build themselves. It runs on the local device and uses a GPU if one is present. Students write and run the code for attention, a GPT model, pretraining, and finetuning, and then test the model they built.

## Privacy and safety
No account is needed. The core code uses no external LLM libraries and runs locally. Some bonus material refers to the OpenAI API and Ollama. The internet is needed to download the repository and the training data. The research found no privacy policy. A teacher should check the data sets used in the notebooks and look for bonus notebooks that call an outside API before class.

## Ideas by subject
### computer_science
1. Run the chapter on text data and describe how text becomes tokens.
2. Read the attention code and explain its purpose in a short paragraph.
3. Train the small model on a short text and read its first outputs.
4. Compare the model before and after a round of finetuning.
5. Present the full pipeline from raw text to a working classifier.
