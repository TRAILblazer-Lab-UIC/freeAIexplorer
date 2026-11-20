---
slug: vllm
tagline: A free library that lets a school server host large language models for many users.
---

## Overview
vLLM is a library for fast large language model serving. It started in UC Berkeley's Sky Computing Lab and is now a community project. It offers continuous batching, PagedAttention, quantization, and an OpenAI compatible API server. It is aimed at administrators who host models, and it is not a student tool.

## Benefits for students
- Students can use a school hosted model that an administrator sets up.
- Advanced students can study how model serving works.
- Students can see how many users share one model.

## Benefits for teachers
- The library supports more than 200 model architectures.
- An OpenAI compatible API lets other tools connect to it.
- Teachers need IT or admin help to use it.

## Benefits for schools
- The software is free and open source.
- It keeps model use on a school server. The main cost is a GPU server.
- Setup needs a server administrator.

## Getting started
- [ ] Find the vLLM project on GitHub.
- [ ] Ask the district IT team to plan a GPU server.
- [ ] Have an administrator install vLLM on the Linux server.
- [ ] Download a model.
- [ ] Opt out of usage statistics before deploying.
- [ ] Start the API server on the school network.
- [ ] Limit access to approved users.

## Where is the AI?
The AI is a large language model that vLLM serves on the school's own server. It runs on NVIDIA or AMD GPUs and other hardware. Students and teachers reach it through other tools that connect to the API. Advanced students can study how the server handles many requests.

## Privacy and safety
No account is needed for the software. Prompts are processed on the server the school runs. The internet is used at setup because model weights are normally downloaded from the internet. vLLM collects anonymous usage statistics by default, including hardware, model architecture, version, settings, and a random ID. A teacher should ask IT to turn this off with VLLM_NO_USAGE_STATS=1 or DO_NOT_TRACK=1 and to set who can reach the server.

## Ideas by subject
### computer_science
1. Describe how an API server sends a request to a model and returns a reply.
2. Explain in a diagram why many users can share one GPU.
3. Compare a small model with a large one for speed.
4. Discuss why a school might host its own model.
5. Write a short report on what quantization does to a model.
