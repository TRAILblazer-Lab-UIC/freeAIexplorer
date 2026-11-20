---
slug: magenta-js
tagline: JavaScript libraries that run music and drawing AI models in a web browser.
---

## Overview
Magenta.js is a set of TypeScript libraries that run pre-trained Magenta models in the browser with TensorFlow.js. The music package covers melody, drum, and performance models. Other packages cover SketchRNN drawing and style transfer for images. Students write JavaScript to generate melodies, drum patterns, and drawings.

## Benefits for students
- Students hear melodies and drum patterns that their own code creates.
- Students make drawings with a model that finishes a sketch.
- Students practice real JavaScript in a creative setting.

## Benefits for teachers
- The README links a hello-magenta tutorial.
- Example apps include Drumbot, Piano Scribe, Beat Blender, and Melody Mixer.
- Teachers need basic web development skills. The library has no teacher interface.

## Benefits for schools
- The libraries are free and open source.
- They run in a modern browser, including on Chromebooks.
- Model files load from Google Cloud storage and need the internet during use.

## Getting started
- [ ] Find the Magenta.js project on GitHub and read the README.
- [ ] Open the hello-magenta tutorial.
- [ ] Create a simple web page on a teacher computer.
- [ ] Add script tags for TensorFlow.js, Tone.js, and the Magenta music package.
- [ ] Load one model and generate a short melody.
- [ ] Test the audio output on a school device.
- [ ] Share a working starter page with students.

## Where is the AI?
The AI is a set of pre-trained models for music, sketches, and style transfer. They run in the browser on the local device. The default model files download from Google Cloud storage. Students write code that asks a model for new music or drawings and then change the settings to shape the result.

## Privacy and safety
No account is needed. The library has no privacy policy. Pre-trained checkpoints are hosted on Google Cloud Storage and loaded by URL. A page using the defaults makes third party requests to Google when it loads. The example also loads libraries from jsDelivr and cdnjs. Inference runs in the browser. The README says teachers can host their own checkpoints for offline use. A teacher should test the starter page and check which outside addresses the page loads.

## Ideas by subject
### computer_science
1. Load a model in a web page and print the notes it creates.
2. Change the temperature setting and describe how the melody changes.
3. Build a button that makes a new drum pattern each time it is pressed.
4. Use SketchRNN to finish a drawing that a user starts.
5. Compare two models on the same task and write down the differences.

### music
1. Generate a melody and play it back with Tone.js.
2. Create a drum pattern and add it under a melody.
3. Blend two melodies and describe the new result.
4. Choose a favorite generated clip and write about what makes it work.
5. Compare generated music with a song you wrote by hand.
