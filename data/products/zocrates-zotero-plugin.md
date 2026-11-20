---
slug: zocrates-zotero-plugin
tagline: An open source Zotero plugin that chats with your research library and cites its answers.
---

## Overview
Zocrates is an open source research assistant plugin for the Zotero reference manager. It converts PDFs, web snapshots, and notes into Markdown bundles. A sidebar agent chats with a library or collection and gives inline citations and confidence scores. It is aimed at university researchers, and K-12 use is limited to advanced high school research projects.

## Benefits for students
- Students can ask questions about the papers in their library.
- Answers show citations and confidence scores.
- Students can search OpenAlex, Crossref, and Unpaywall and import PDFs.

## Benefits for teachers
- Teachers can see the sources behind each answer.
- A relations graph is built without language model calls.
- The tool suits teachers who already use Zotero.

## Benefits for schools
- The plugin is free and open source.
- Models can run locally with Ollama or vLLM.
- Cloud models cost money through OpenRouter or Google Gemini, and IT will likely need to help.

## Getting started
- [ ] Find the Zocrates plugin on GitHub.
- [ ] Ask IT to approve Zotero 10 and the plugin.
- [ ] Install Zotero 10 and then the plugin.
- [ ] Let it set up its own Python environment on first launch.
- [ ] Choose a local model endpoint such as Ollama.
- [ ] Leave cloud API key fields empty.
- [ ] Test a question on a small collection of papers.

## Where is the AI?
The AI is a language model that answers questions over a Zotero library. It can run locally with Ollama or vLLM, or in a cloud through OpenRouter or Google Gemini. Students read the answer, check the citation, and open the source paper. The author says the project is working toward a v1.0 release.

## Privacy and safety
No account is needed. The internet is used for setup. The README says indices, converted documents, and chat history stay on the user's machine. A cloud model sends library content to the configured provider. Online discovery queries OpenAlex, Unpaywall, and Crossref. No privacy policy exists, and the README does not address telemetry. A teacher should keep students on a local model and have students check each citation.

## Ideas by subject
### library_media
1. Add five papers to a collection and ask the agent a question about them.
2. Open each citation and check that it supports the answer.
3. Search OpenAlex for a topic and import a paper.
4. Compare the confidence scores with your own judgment.
5. Make a short guide on how to check an AI research answer.

### ela
1. Ask the agent to summarize an article and compare with your own summary.
2. Use the citations to build a works cited list.
3. Take notes in Zotero and ask a question about them.
4. Find a claim in a paper and trace it to its source.
5. Write a paragraph on what the agent did well and where it failed.
