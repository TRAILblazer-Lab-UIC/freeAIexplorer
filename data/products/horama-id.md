---
slug: horama-id
tagline: A phone app that downloads species models to identify specimens from photos.
---

## Overview
Horama ID is a mobile app with a back-end that stores image classification models for species identification. Users download one model at a time, such as a model trained on herbarium specimens or pinned insects, and switch between them. CSIRO funded it and 2pi Software of Bega, Australia coded it. The project names researchers, collection curators, and the public as users.

## Benefits for students
- Students can identify specimens with a phone camera.
- Students can switch between models for different kinds of specimens.
- Students use species profiles to check each suggestion.

## Benefits for teachers
- The app is simple to run on a phone.
- Species profiles give teachers a way to check answers.
- Contributors train models in Azure Custom Vision, which shows how such models are made.

## Benefits for schools
- The discovery note says the app is free, but the CSIRO page does not state a price.
- The app runs on iOS and Android phones with a camera.
- The project says it does not compete with broad apps like iNaturalist. Fit for K-12 is unproven.

## Getting started
- [ ] Find Horama ID in Google Play or the App Store.
- [ ] Check the app price and privacy terms.
- [ ] Install the app on a teacher phone.
- [ ] Download one species model.
- [ ] Test it on a specimen or a clear photo.
- [ ] Read the species profile and compare it with the suggestion.
- [ ] Decide whether students will use school or personal phones.

## Where is the AI?
The AI is image classification. A model looks at a photo and suggests a species. The vendor does not say where the model runs. Students compare the suggestion with the species profile and decide whether it fits the specimen.

## Privacy and safety
The materials do not say whether accounts are needed or whether the internet is required. The model back-end suggests a download at some point, but offline use was not confirmed. The CSIRO page does not address privacy, accounts, or where photos go. The App Store listing was not read. A teacher should check the app terms and privacy policy and test whether photos upload to a server.

## Ideas by subject
### science
1. Photograph an insect from a school collection and compare the suggestion with a field guide.
2. Download two models and note which one fits a specimen better.
3. Read a species profile and write down three traits.
4. Record how often the first suggestion matches the true species.
5. Discuss why a specialist model might work better than a broad one.

### computer_science
1. Explain how an image classifier chooses a species.
2. Test the app with a poor photo and describe what goes wrong.
3. Compare results from two models on the same photo.
4. Explain why the app needs many labeled images to train a model.
5. Describe one way a model could be wrong and still sound sure.
