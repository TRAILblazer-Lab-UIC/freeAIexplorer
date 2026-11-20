---
slug: intelligeo-qgis-llm-plugin
tagline: An experimental QGIS plugin that writes mapping scripts from plain instructions.
---

## Overview
IntelliGeo is an experimental open source plugin for QGIS from the University of Twente. It uses large language models to automate geospatial workflows. It generates PyQGIS scripts or graphical models from user instructions. It is designed for GIS professionals. It suits only advanced high school students.

## Benefits for students
- Students see how a text instruction can become mapping code.
- Students can refine a result with follow-up instructions.
- Advanced students learn to read the generated PyQGIS script.

## Benefits for teachers
- The plugin installs from the QGIS Plugin Manager.
- Teachers can show how a language model writes code.
- It saves time on routine geoprocessing steps.

## Benefits for schools
- The plugin is free.
- API-based language model use may cost money from the provider.
- IT will need to install QGIS and approve the plugin. The plugin has had no update since mid 2025.

## Getting started
- [ ] Get QGIS from its official site and ask IT to approve the install.
- [ ] Check that QGIS is version 3.34 or later.
- [ ] Open Plugins, then Manage and Install Plugins.
- [ ] Enable experimental plugins.
- [ ] Install IntelliGeo.
- [ ] Configure a language model provider with IT approval.
- [ ] Test a simple instruction on sample public data.
- [ ] Read each generated script before running it.

## Where is the AI?
The AI is a large language model that writes geoprocessing workflows and code. The plugin runs inside QGIS on the computer, and the vendor does not say where the model runs. It depends on the provider that the user configures. Students write an instruction, read the script, and refine it in their own words.

## Privacy and safety
The plugin page does not say how the LLM is configured or whether accounts are needed. A search result says reviewers used the OpenAI API and the readme mentions Cohere. The same snippet says the developers record user interactions to build a fine tuning dataset. The research did not confirm whether a fully local model is supported. A teacher should check the provider's terms, use public sample data, and have students read each script before they run it.

## Ideas by subject
### computer_science
1. Ask the plugin to make a simple map layer and read the code it writes.
2. Compare two instructions with different wording and note how the script changes.
3. Find a mistake in a generated script and fix it.
4. Explain what PyQGIS is in one paragraph.
5. Write a list of checks to do before running generated code.

### science
1. Ask for a map of local rivers and compare it with an atlas.
2. Build a workflow that clips a map to the school district.
3. Map a public dataset on air or water and describe the pattern.
4. Refine a workflow by giving the plugin new instructions.
5. Write a report that explains the workflow in steps.
