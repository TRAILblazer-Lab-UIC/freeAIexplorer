---
slug: ocrmypdf
tagline: A command line tool that adds searchable text to scanned PDFs.
---

## Overview
OCRmyPDF is a command line program and Python library that adds a searchable text layer to scanned PDFs. It turns each page into an image, runs the Tesseract OCR engine, and puts the recognized text back under the original image. It outputs PDF/A by default. Educators can use it to make scanned handouts searchable and screen-reader accessible.

## Benefits for students
- Students can search scanned readings for a word.
- Students who use screen readers can access scanned handouts.
- Advanced students can learn how OCR works.

## Benefits for teachers
- Teachers can make old scanned handouts searchable.
- The tool cleans and straightens pages with deskew.
- It uses multiple cores to process large files.

## Benefits for schools
- The software is free and open source under MPL-2.0.
- It runs on Windows, Mac, and Linux and does not work on Chromebooks without Linux support.
- IT must install it. It runs from a terminal.

## Getting started
- [ ] Find OCRmyPDF on its project page on GitHub.
- [ ] Ask IT to install it with a package manager, pip, or Docker.
- [ ] Install Tesseract and a rasterizer such as pypdfium2 or Ghostscript.
- [ ] Install Tesseract language packs for the languages you need.
- [ ] Run ocrmypdf input.pdf output.pdf in a terminal.
- [ ] Use the -l option to name the language.
- [ ] Check the output PDF by searching for a known word.

## Where is the AI?
The AI is optical character recognition from the Tesseract engine, which reads words in images. It runs on the local computer. Teachers and students run it on a scanned page, then check the text for mistakes. Accuracy depends on Tesseract and on setting the right language.

## Privacy and safety
No account is needed, and the internet is used at setup. The README says it keeps private data private, and Tesseract processes files on the local computer. The documentation makes no statements about network access or telemetry. The optional Docker web front end is not meant for the public internet and has no security measures. The docs also say it is not secure against PDFs that carry malware. A teacher should remove private student information from scans and check the output text for errors.

## Ideas by subject
### library_media
1. Scan a handout and make it searchable with OCRmyPDF.
2. Search the result for a keyword and count the hits.
3. Compare the recognized text with the page and list any errors.
4. Test a scan in two languages and see how the language option matters.
5. Build a small searchable archive of scanned local history pages.
