---
slug: smollm2
tagline: Small open language models that can run on a laptop or phone.
---

## Overview
SmolLM2 is a series of small open language models in three sizes, 135M, 360M, and 1.7B parameters. The Hugging Face Smol Models Research group publishes them. The 1.7B instruct card says the models are light enough to run on a device. They handle text rewriting, summarization, and function calling. It is a model and not a student-facing product. It suits teachers and advanced students.

## Benefits for students
- Students can run a real language model on a local computer.
- Students can compare three model sizes.
- Students learn how a small model handles rewriting and summaries.

## Benefits for teachers
- The weights are free under Apache 2.0.
- The model card lists the training data and its limits.
- Teachers can show the model in a local runtime such as Ollama or llama.cpp.

## Benefits for schools
- The weights are free. Hardware needs depend on the runtime.
- Chats stay on the device after setup.
- IT will likely install a separate runtime.

## Getting started
- [ ] Find the SmolLM2 model cards from Hugging Face.
- [ ] Ask IT to approve a local runtime such as Ollama or llama.cpp.
- [ ] Install the runtime on a computer.
- [ ] Download the weights while online.
- [ ] Load the model in the runtime.
- [ ] Go offline and test a short rewrite task.
- [ ] Read the model card notes on limits and bias.

## Where is the AI?
The AI is a small language model that generates text. It runs on the local device through a separate runtime. Students give it text to rewrite or summarize and use the results to extend their own work.

## Privacy and safety
No account is needed. The internet is used at setup to download weights from Hugging Face. The weights run in a runtime the teacher chooses, and privacy depends on that runtime. The model card says the models mainly handle English and may produce inaccurate or biased output. A teacher should check the chosen runtime and check outputs for errors before students rely on them.

## Ideas by subject
### computer_science
1. Run the 135M and the 1.7B models on the same prompt and compare the replies.
2. Ask the model to summarize a paragraph and check the summary for errors.
3. Read the model card and list what data the model learned from.
4. Time each model size and record the speed.
5. Explain why a smaller model uses less memory.
