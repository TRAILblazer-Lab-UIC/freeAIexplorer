---
slug: easyocr
tagline: A free Python library that reads printed text in images in over 80 languages.
---

## Overview
EasyOCR is an open source Python library for optical character recognition. It finds text in a picture and turns it into typed text. It supports more than 80 languages and several writing scripts. Students write Python code to read signs, pages, and photos.

## Benefits for students
- Students see how a computer reads text from a photo.
- Students can test the same code on English, Chinese, Arabic, and other scripts.
- Students practice real Python with a tool that people use in industry.

## Benefits for teachers
- The library is free and installs with one pip command.
- Teachers can build short coding lessons around photos the class takes.
- The vendor lists no account or sign up.

## Benefits for schools
- The software costs nothing.
- Recognition runs on the school's own computer after the model downloads.
- IT must install Python and PyTorch. The first model download is large.

## Getting started
- [ ] Find the EasyOCR project page and read the install notes.
- [ ] Ask IT to install Python on one computer.
- [ ] Install torch and torchvision first on Windows.
- [ ] Run pip install easyocr.
- [ ] Call easyocr.Reader with the language codes you need.
- [ ] Stay online for the first run. The weights for each language download once.
- [ ] Pass gpu=False on a computer with no graphics card.
- [ ] Download the models by hand into the ~/.EasyOCR/model folder for a computer that stays offline.

## Where is the AI?
The AI is a neural network that finds text in an image and reads it. It runs on the local computer, using a GPU or the regular processor. Students write code that sends an image to the reader and prints the result. They can then clean up or translate the text in their own programs.

## Privacy and safety
No account is needed. The README describes automatic model download on first use and a manual download option. The README has no telemetry statement, and the research inferred that no data is collected because it is a local library. No privacy policy was found. A teacher should check that models are downloaded ahead of class. A teacher should also check that students use photos that show no faces, names or other private details.

## Ideas by subject
### computer_science
1. Write a short Python script that reads the text in a photo of a classroom poster and prints it.
2. Compare the results for a clear photo and a blurry photo and describe what changed.
3. Read a sign in two languages by listing two language codes in one reader.
4. Build a program that reads a list of book titles from a photo of a shelf and saves them to a file.
5. Test the reader on handwriting and printed text and write up which one it reads better.
