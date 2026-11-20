---
slug: microsoft-foundry-local
tagline: A Microsoft runtime and SDK for running AI models on your own device.
---

## Overview
Foundry Local is a Microsoft runtime and SDK for running AI models on the user's own device. It handles model download, hardware acceleration, and inference through ONNX Runtime. It offers an OpenAI-compatible API with an optional local server. It is built for developers and suits advanced students and IT staff.

## Benefits for students
- Advanced students can call a local model from their own code.
- Students can try chat and transcription models.
- Students learn how apps connect to a local model endpoint.

## Benefits for teachers
- A local chat endpoint can serve teachers or advanced students.
- The catalog includes models such as GPT OSS, Qwen, DeepSeek, Mistral, and Phi.
- Whisper is available for transcription.

## Benefits for schools
- The runtime is free, with no per-token cost per Microsoft docs.
- Prompts stay on the device after models download.
- IT approval will be needed for school machines.

## Getting started
- [ ] Find Foundry Local in Microsoft's documentation.
- [ ] Ask IT to approve the install on a test machine.
- [ ] Install the runtime or the SDK for your language.
- [ ] Run a model so it downloads on first use.
- [ ] Stay online for the first download.
- [ ] Call the model through the SDK or the local endpoint.
- [ ] Test with a short prompt after going offline.

## Where is the AI?
The AI is a model from the catalog, such as a chat model or Whisper. It runs on the user's device and uses the CPU, GPU, or NPU. Students write code that calls the model, read the results, and then extend their own apps.

## Privacy and safety
No account is needed. Microsoft docs say inference runs entirely on the device and prompts and outputs are processed locally. The network is used for model and component downloads on first use. It is also used for optional diagnostics if a user shares logs. Diagnostic collection falls under the product terms and the Microsoft Privacy Statement. The docs say it is not designed as a multi user server. A teacher should check which models are downloaded and which apps connect to the local endpoint.

## Ideas by subject
### computer_science
1. Run a chat model locally and compare its replies with a cloud tool.
2. Write a short script that sends a prompt to the local endpoint.
3. Transcribe a short recording with Whisper and fix the errors.
4. Compare CPU and GPU speed on one prompt.
5. Describe the steps from a prompt to a reply in a diagram.
