---
slug: opengrammar
tagline: A free writing checker with offline rules and an optional AI mode.
---

## Overview
OpenGrammar is a free, open source writing assistant that works like Grammarly. About 40 rules run in the browser and check passive voice, spelling, punctuation, and cliches. An optional AI mode adds suggestions and rewrites text in eight tones. Students write in the browser and review each suggestion.

## Benefits for students
- Students see passive voice, spelling, and cliches flagged as they write.
- Students can try a rewrite in eight different tones.
- Students see readability statistics for their own text.

## Benefits for teachers
- The rule checks work offline and need no key.
- Teachers can switch off the AI mode and use only the rules.
- Teachers can use the tone rewrites to teach audience and voice.

## Benefits for schools
- The software is free. AI mode costs whatever the chosen provider charges for a key.
- It runs as a browser extension, an npm server, or a Docker container.
- Developer Mode extensions may be blocked on managed Chromebooks. IT will likely need to help.

## Getting started
- [ ] Find the OpenGrammar project on GitHub and read the README.
- [ ] Ask IT to build the extension and load it unpacked in Chrome, Brave, or Edge with Developer Mode.
- [ ] Check whether managed Chromebooks allow Developer Mode extensions.
- [ ] Start with the rule-only mode.
- [ ] Run npx opengrammar-server or the Docker image only if you want the optional server.
- [ ] Use a local Ollama setup for AI mode, or skip AI mode.
- [ ] Test the extension on a short student paragraph.

## Where is the AI?
The rules are plain pattern checks and are not AI. The optional AI mode suggests fixes and rewrites in eight tones. It runs in a company's cloud through a provider the user brings a key for, or on a local Ollama setup. Students read each suggestion and choose what to keep in their own writing.

## Privacy and safety
No account is needed, and the rule checks run in the browser. AI mode sends text through an edge function to the chosen provider, which can include student writing. The README claims text is deleted at once and that there is no tracking. Those are the developer's own claims, and the research did not audit them. The official address redirects to a different domain whose ownership is unverified. A teacher should use the rule-only mode or a local Ollama setup for student work.

## Ideas by subject
### ela
1. Write a paragraph, then find and fix each passive voice flag.
2. Replace every cliche the checker finds with a fresh phrase.
3. Rewrite one sentence in two tones and describe which audience each fits.
4. Compare the readability numbers of an early draft and a final draft.
5. Review a suggestion you disagree with and write why you kept your wording.
