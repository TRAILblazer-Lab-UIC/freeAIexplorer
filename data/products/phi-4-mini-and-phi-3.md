---
slug: phi-4-mini-and-phi-3
tagline: Small open Microsoft language models that can run on a laptop.
---

## Overview
Phi is Microsoft's family of small language models. Phi-4-mini-instruct has 3.8 billion parameters and a 128K token context. It was released in February 2025 under the MIT license. Phi-3 was the first public generation. The weights can be downloaded and run locally, for example with Ollama.

## Benefits for students
- Students can chat with a real language model that runs on the local machine.
- Students see how small a useful model can be.
- Advanced students can try function calling.

## Benefits for teachers
- Teachers can draft content on a local runtime.
- Prompts stay on the device.
- The setup is advanced and needs IT help.

## Benefits for schools
- The weights are free to download.
- The phi4-mini download is about 2.5 GB, and a course lab reports that an 8 GB RAM laptop is enough.
- Azure hosted use is paid, but local use costs nothing.

## Getting started
- [ ] Ask IT to approve a runtime such as Ollama.
- [ ] Install Ollama on a laptop with several GB of free space.
- [ ] Run the command ollama run phi4-mini.
- [ ] Stay online for the first download only.
- [ ] Go offline and test a few prompts.
- [ ] Try a prompt in another language. The training data is mainly English.
- [ ] Review the model card, which warns that jailbreaks are possible.

## Where is the AI?
The AI is a small language model that generates text, reasons, and calls functions. It runs on the local device. Students type prompts and read the replies. They then check the answers and improve their own writing or code.

## Privacy and safety
No account is needed, and the internet is used at setup to download the model. Run locally, prompts stay on the device. The same models are also sold through Azure cloud APIs, which are a separate path that sends prompts to Microsoft. The model card says safety testing was done but jailbreaks are possible. A teacher should confirm students use the local copy and supervise student use.

## Ideas by subject
### computer_science
1. Install a small model and ask it to explain a loop in plain words.
2. Compare answers from two different prompts about the same topic.
3. Time how long a reply takes on a school laptop and describe why.
4. Ask the model a question it cannot answer and note how it responds.
5. Write a short list of rules for checking an AI answer before trusting it.
