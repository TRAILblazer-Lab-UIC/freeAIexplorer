---
slug: languagetool-self-hosted-server
tagline: A grammar and spell checker that a school can run on its own server.
---

## Overview
LanguageTool is an open source grammar, style, and spell checker. Its core can run as a local Java server that checks text on request. A school can run the server and point browser extensions at it. Students write as usual, and the server flags mistakes.

## Benefits for students
- Students get grammar and spell checks as they write.
- Rule-based checks cover many languages.
- Students can read each flagged item and decide for themselves whether to change it.

## Benefits for teachers
- The checks follow fixed rules. A teacher can explain why a mistake was flagged.
- Browser extensions and other clients can use the same server.
- Teachers can let students fix basic errors before submitting work.

## Benefits for schools
- The core server is free. Premium features and hosted plans are paid, and prices were not read.
- Student text stays on the school server.
- The dev page calls the setup advanced. A server administrator is needed.

## Getting started
- [ ] Find LanguageTool on its official site and open the developer page for the server.
- [ ] Ask IT to prepare a server machine with a Java runtime.
- [ ] Download the snapshot zip, or install with Homebrew.
- [ ] Start the server with the Java command on a chosen port.
- [ ] Point a browser extension at the server address.
- [ ] Test the check with a short sample paragraph.
- [ ] Note that the Windows desktop app does not work with the self-hosted server.

## Where is the AI?
The self-hosted server has no AI. It checks text with fixed grammar rules. Students build rule-based pattern spotting skills. They see which patterns the checker flags and why. The AI rephrasing the company offers is a premium hosted feature and is not part of the self-hosted server.

## Privacy and safety
The server runs on school hardware and needs no account. The developer page says the local server is not reachable from other hosts unless started with the public option. It recommends a reverse proxy with TLS for remote users. The privacy policy applies to the hosted service and does not mention self hosted deployments. For the hosted service it says content is collected, retention is decided case by case, and the services are not directed to children under 13 in the US. A teacher should check that the browser extension points at the school server and not at a public one.

## Ideas by subject
### ela
1. Write a short paragraph and review each flagged item to decide what to accept.
2. Collect the most common errors flagged across a class set and make a mini lesson.
3. Find a flagged item that the class believes is wrong and discuss why a rule may miss it.
4. Revise a draft after the checks and compare the first and second versions.
5. Write a tricky sentence that a checker misses and explain why the rule does not catch it.
