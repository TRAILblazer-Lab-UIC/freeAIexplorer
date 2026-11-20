---
slug: machine-learning-for-kids-self-hosted-taxinomitis
tagline: Source code for the Machine Learning for Kids site, aimed at district IT teams.
---

## Overview
Taxinomitis is the Apache 2.0 source code for the API and website behind Machine Learning for Kids. It trains classifiers for text, numbers, and images and adds the models to Scratch. The deployment document describes the live system on IBM Cloud. No school-ready self-hosting guide was seen. Treat it as a developer project.

## Benefits for students
- Students could use the same training tools as the public site.
- Students could train text, number, and image models for Scratch.
- A separate worksheets repository exists.

## Benefits for teachers
- The code is open to read.
- Teachers who run it could use worksheets from the project.
- Teachers will likely need IT to run it for them.

## Benefits for schools
- The code is free. Hosting and cloud costs are extra.
- A school could control where the data goes.
- Effort and feasibility were not assessed, and setup may take days.

## Getting started
- [ ] Find the taxinomitis repository and read DEPLOYMENT.md and DEVELOPMENT.md.
- [ ] Ask district IT to review the work needed.
- [ ] List the outside services the system uses.
- [ ] Decide how to replace or set up each outside service.
- [ ] Set up a test server on Linux.
- [ ] Test the training and Scratch steps.
- [ ] Compare the effort with using the public site.

## Where is the AI?
The AI trains text, number, and image classifiers. The materials describe the production system as using cloud services on IBM Cloud. A school server could run it after IT replaces those services. Students would train and test models and then use them in Scratch.

## Privacy and safety
The materials do not state which tools or accounts students need. The deployment document lists outside services used by the live site. They are Auth0 login, IBM Cloud PostgreSQL and Object Storage, Watson Assistant for text projects, and Spotify and Wikipedia APIs through a proxy. The research did not confirm that a copy can run without them. Keeping data on school systems is therefore unconfirmed. A teacher should ask IT where data would go and which services remain before any student uses a self hosted copy.

## Ideas by subject
### computer_science
1. Train a text classifier that sorts messages and test it.
2. Train an image model with examples from the classroom.
3. Use a trained model in a Scratch project.
4. Compare the results of a small training set and a large one.
5. Draw a diagram of the parts that make up the website and the models.
