---
slug: tesseract-ocr
tagline: A free open source engine that reads text from images in more than 100 languages.
---

## Overview
Tesseract is an open source optical character recognition engine. It reads text from images such as PNG, JPEG, and TIFF. It is a command line program and a code library, and it is not built as a student app. It suits a teacher or an older student who is comfortable with technical tools. Many third party apps use it, and those are easier for most classrooms.

## Benefits for students
- Students can turn a photo of printed text into editable text.
- Students see how a neural network reads letters.
- Advanced students can write small programs that call the engine.

## Benefits for teachers
- The engine reads more than 100 languages.
- Output can be plain text, a searchable PDF, hOCR, or TSV.
- A teacher can pair it with a third party screen for easier use.

## Benefits for schools
- The software is free and open source.
- Everything runs on the school computer.
- Setup is technical, and IT will likely need to install it.

## Getting started
- [ ] Find the Tesseract project on GitHub.
- [ ] Ask IT to approve the install on a Windows, Mac, or Linux computer.
- [ ] Install a prebuilt package or build it from source.
- [ ] Download the language data you need.
- [ ] Try the command line on one clear image.
- [ ] Look at third party GUI front ends if you want a simpler screen.
- [ ] Go offline and test a second image.

## Where is the AI?
The AI is an LSTM neural network that recognizes characters in images. It runs on the local computer. Students feed it a picture and get text back. They can then check the result against the original.

## Privacy and safety
No account is needed. The README describes OCR as a local task and does not mention telemetry. Language data files must be downloaded from the tessdata repository. The internet is used at install. Images stay on the device when you run the engine. Third party online OCR services are separate products and may send images to a server. Check any third party app or online service before students use it.

## Ideas by subject
### computer_science
1. Run the engine on a photo of a printed page and count the errors.
2. Compare results on a clear scan and a blurry photo.
3. Try two languages on the same image and note what changes.
4. Save the output as a searchable PDF and test the search.
5. Explain in a short paragraph how a neural network could learn to read letters.
