---
slug: posetocode
tagline: A research web app where students write block code with body movements.
---

## Overview
PoseToCode is a web app that encourages students to code through movement. It combines pose detection with block-based programming. A 2022 paper by Chatwani, Kuo, Groechel, and Mataric describes it. The README says it was deployed on Chromebooks during Robotics Ed Week, and the study used a fifth grade class.

## Benefits for students
- Students write block code by moving their bodies.
- Students see 3D robot dance animations.
- Students practice coding in a physical, active way.

## Benefits for teachers
- The app was used on Chromebooks with a webcam.
- It is free.
- It is a research prototype with rough edges.

## Benefits for schools
- The repository is free.
- It needs a webcam.
- The repository was last updated in June 2023, and the README gives no setup steps.

## Getting started
- [ ] Find the PoseToCode repository from the 2022 paper.
- [ ] Check whether a hosted copy exists. The README does not link one.
- [ ] Ask IT for help to build the repository if no hosted copy is found.
- [ ] Note that the repository has Firebase and Firestore configuration.
- [ ] Test on a Chromebook with a webcam.
- [ ] Allow camera access in the browser.
- [ ] Try the sample robot dance animations.

## Where is the AI?
The AI is pose detection. The paper confirms it uses MediaPipe. The paper does not state where the video is processed. Students move in front of the webcam and the app turns poses into code blocks.

## Privacy and safety
The materials do not state what data is collected or whether accounts are needed. The app uses a webcam with MediaPipe pose detection. The paper does not say whether video stays in the browser. The repository includes Firebase and Firestore files, which suggest a cloud backend that was not confirmed. A teacher should find out where video and project data go before students use it.

## Ideas by subject
### computer_science
1. Strike a pose and watch how the app turns it into a block.
2. Build a short dance sequence from several poses.
3. Run the sample 3D robot dance and explain each step.
4. Test the pose detection with a partner and note any mistakes.
5. Write down how a movement can act as a program command.
