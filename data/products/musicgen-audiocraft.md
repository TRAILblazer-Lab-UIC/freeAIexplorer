---
slug: musicgen-audiocraft
tagline: Meta's research library for turning text prompts into music on a local GPU.
---

## Overview
AudioCraft is a PyTorch library from Meta for research on audio generation. It holds the code for MusicGen, a text-to-music model, and AudioGen, a text-to-sound model. Running MusicGen locally needs Python and a GPU. It suits advanced high school students and a teacher with IT support.

## Benefits for students
- Students hear a written prompt turn into music.
- Advanced students read and run real research code in Python.
- Students can try model sizes from 300M to 3.3B parameters.

## Benefits for teachers
- The code is MIT licensed and training code is included.
- Teachers can show how a text-to-music model is run.
- The library also holds other models such as AudioGen, EnCodec, MAGNeT, and JASCO.

## Benefits for schools
- The software is free, but the model weights are CC-BY-NC 4.0 and limited to non-commercial use.
- A GPU is required, and 16 GB of GPU memory is recommended for medium models.
- The research notes say it is a poor fit for typical school machines without GPUs.

## Getting started
- [ ] Find the AudioCraft repository from Meta.
- [ ] Ask IT for a machine with a GPU, Python 3.9, and PyTorch 2.1.0.
- [ ] Install ffmpeg and PyTorch.
- [ ] Run pip install audiocraft.
- [ ] Load a small model such as musicgen-small and make a short clip.
- [ ] Stay online for the first model download.
- [ ] Go offline and test a second prompt.

## Where is the AI?
The AI is MusicGen, a model that turns a text prompt into music. It runs on the local computer using the GPU. Students write prompts in code, listen to the result, and adjust the words to change the music.

## Privacy and safety
No account is needed. The library runs on the local computer, and the model weights download from Hugging Face Hub. The research found no privacy policy for the library and assumed prompts stay on the machine. The weights are for non-commercial use. A teacher should check school policy before students share any generated music.

## Ideas by subject
### music
1. Write a prompt that names a genre and mood and listen to the clip.
2. Change one word in a prompt and describe how the music shifts.
3. Compare the same prompt on a small model and a larger one.
4. Pick a favorite song style, describe it, and judge how close the model gets.
5. Build a short playlist of clips and write a review for each.

### computer_science
1. Run the sample code and explain each line of the Python script.
2. Change the clip length in the code and time the result.
3. Compare the small and medium models on speed and quality.
4. Read the model list in the library and describe what each one makes.
5. Write a short note on why a GPU is needed to run the model.
