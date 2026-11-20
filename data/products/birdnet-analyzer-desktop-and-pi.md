---
slug: birdnet-analyzer-desktop-and-pi
tagline: A free research tool that identifies bird species from audio recordings.
---

## Overview
BirdNET Analyzer is an open source tool that processes audio files with the BirdNET bird sound model. It has a command line and a graphical interface. Installers exist for Windows and macOS, and Linux packages and a Python package are also offered. Older students can load recordings, see which species are heard, and even train custom models.

## Benefits for students
- Students turn field recordings into lists of bird species.
- Students can compare results from different sites or times of day.
- Students can train and test a custom sound model.

## Benefits for teachers
- The tool processes whole folders of recordings at once.
- The graphical interface avoids the command line for most tasks.
- The README counts education as non-commercial use.

## Benefits for schools
- The software is free and open source.
- The tool processes local audio files. Offline use after install is likely but not confirmed.
- It is a research tool. IT will likely need to help with the install.

## Getting started
- [ ] Find BirdNET Analyzer on its public code page.
- [ ] Ask IT to approve the install.
- [ ] Download a standalone installer or run pip install birdnet_analyzer with Python 3.11 to 3.13.
- [ ] Download the models while online.
- [ ] Record bird sound with a phone or a recorder.
- [ ] Load one recording and read the species list.
- [ ] Go offline and test again.

## Where is the AI?
The AI is a neural network that classifies bird sounds. It runs on the local computer. Students load audio, read the species it suggests, and check the results against field guides. They can also train a custom model on their own labeled sounds.

## Privacy and safety
No account is needed and the internet is used at setup. The model files download from Zenodo. The README does not discuss data handling or offline use. The research treats offline use after install as likely but not confirmed. It found no telemetry statement. A teacher should plan how students will make and store the recordings and avoid recordings that capture nearby voices.

## Ideas by subject
### science
1. Record the school yard at dawn and list the species the tool finds.
2. Compare recordings from morning and afternoon and graph the counts.
3. Check three suggested species against a field guide.
4. Map the recordings from different spots on campus.
5. Write a report on which birds are most common near the school.

### computer_science
1. Run the tool from the command line and read the output file.
2. Train a custom model on two sounds that students label.
3. Test the custom model on new recordings and record its accuracy.
4. Find a recording where the model fails and explain why.
5. Write a short guide that explains each setting.
