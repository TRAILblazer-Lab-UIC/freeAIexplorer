---
slug: paddleocr
tagline: An open source Python toolkit that turns images and PDFs into text.
---

## Overview
PaddleOCR is an open source toolkit that turns PDFs and images into structured text such as Markdown and JSON. It is a Python library for developers and has no classroom interface. The README claims support for 100+ languages. It suits advanced high school students who already know Python.

## Benefits for students
- Students run real optical character recognition code on their own images.
- Students see text come out as Markdown and JSON.
- Students can compare tiny and server model sizes.

## Benefits for teachers
- The toolkit is free and open source.
- A teacher can show how OCR works with a few lines of Python.
- The setup needs IT help.

## Benefits for schools
- The software costs nothing.
- Everything runs on the local device after setup.
- A GPU is optional, but the environment is heavy.

## Getting started
- [ ] Find the PaddleOCR repository and read its README.
- [ ] Ask IT to approve a Python install on one machine.
- [ ] Check that Python is version 3.8 to 3.12.
- [ ] Create a Python virtual environment.
- [ ] Install paddlepaddle and paddleocr.
- [ ] Run a first call to download the models.
- [ ] Test it on a clear image and a blurry image.

## Where is the AI?
The AI is an optical character recognition system with document parsing. It runs on the local device. Students pass in an image and read the text that comes back. They can then check where it makes mistakes.

## Privacy and safety
No account is needed, and the library runs on the local device. The internet is used at setup, and about 133 MB of models download on first use from Hugging Face or ModelScope. The README does not describe a fully offline setup. The research found no privacy policy. A teacher should check that the images students use do not show private information.

## Ideas by subject
### computer_science
1. Write a short Python script that reads the text in a photo of a sign.
2. Compare the output of a tiny model and a server model on the same image.
3. Test a rotated image and describe what goes wrong.
4. Scan a page with two columns and check whether the text order is correct.
5. Turn the output into a Markdown file and share it with a partner.
