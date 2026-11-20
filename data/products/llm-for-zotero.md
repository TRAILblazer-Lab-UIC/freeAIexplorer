---
slug: llm-for-zotero
tagline: A Zotero plugin that adds an AI chat panel to the PDF reader.
---

## Overview
llm-for-zotero is an open source plugin for the Zotero reference manager. It adds a chat panel beside the PDF reader. Users ask questions about a paper, summarize it, inspect figures, compare papers, and save notes. It suits high school students doing research and the teachers who guide them.

## Benefits for students
- Students can ask a paper direct questions and see answers with citations.
- Students can compare several papers in one chat.
- Students can save notes to Zotero or to Markdown folders.

## Benefits for teachers
- Teachers can show how to read a hard paper in stages.
- The plugin works inside a tool that research classes may already use.
- Providers can be cloud services or a local model.

## Benefits for schools
- The plugin is free. API use is billed by the provider.
- A local model keeps confidential files on the device but needs a reasonably powerful computer.
- IT will likely need to install the plugin.

## Getting started
- [ ] Install Zotero on one test computer.
- [ ] Download the .xpi file from the plugin's Releases page.
- [ ] Ask IT to approve the plugin.
- [ ] In Zotero, open Tools, then Add-ons, and install the .xpi file.
- [ ] Choose a provider, either a cloud API or a local OpenAI-compatible endpoint.
- [ ] Test the connection with a public paper.
- [ ] Choose a local model for any confidential files.
- [ ] Leave Agent Mode off until a teacher has tested it.

## Where is the AI?
The AI is a language model that answers questions about the open PDF. The model can run in a cloud provider or on a local endpoint. The plugin runs inside the Zotero desktop app. Students ask questions, check the cited passages, and write their own notes.

## Privacy and safety
No account is needed for the plugin, but a cloud provider may need one. Conversation history and paper context are stored locally. With an API provider, paper content and messages go to that provider. WebChat relays to chatgpt.com or chat.deepseek.com. Tavily web search and cloud MinerU send queries or PDFs to those services. The README says the plugin does not train models and does not mention telemetry. A guide warns that plugins have full access to Zotero data and advises local models for confidential files. A teacher should check which provider is set before students load any papers.

## Ideas by subject
### library_media
1. Open a source article and ask the chat to list its main claims, then check each claim in the text.
2. Compare two papers on one topic and record where they agree and differ.
3. Save a cited note for each source in a small research project.
4. Check whether the cited passage really supports the chat's answer.
5. Write a short guide on when a chat summary helps and when to read the original.

### ela
1. Summarize a reading in your own words, then compare it with the chat summary.
2. Ask the chat about a figure in a nonfiction article and describe what it shows.
3. Compare two articles on one issue and write a paragraph on their different views.
4. Mark where the chat missed an important detail in a reading.
5. Build an annotated bibliography from saved notes.
