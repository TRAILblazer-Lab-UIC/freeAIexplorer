---
slug: 3dprinteros
tagline: A cloud platform that manages shared 3D printers, queues, and student access.
---

## Overview
3DPrinterOS is a cloud platform for managing a fleet of 3D printers from many makers. It suits schools, universities, and libraries that share printers among many users. Students upload a model, slice it in the browser, and send it to a shared queue. Teachers approve jobs and watch the printers from one screen.

## Benefits for students
- Students can slice and submit models from a browser, including on a Chromebook.
- Students see their jobs move through a shared queue and know when a print is ready.
- Students learn how a real print shop runs, with approvals and fair limits.

## Benefits for teachers
- Teachers can approve jobs before any plastic is used.
- Workgroups and per-user limits keep one class from using up all the printer time.
- Live monitoring lets teachers check on prints without walking to the printer.

## Benefits for schools
- The platform supports more than 200 printer models. Mixed fleets can share one system.
- The Premium plan starts at 19 USD per month for 2 printers and 1 user. The vendor quotes education deployments.
- Single sign-on works with SAML, Shibboleth, OKTA, and InCommon. IT will likely need to set this up.

## Getting started
- [ ] Sign up at cloud.3dprinteros.com and start the 14-day trial.
- [ ] Ask IT to review the vendor hosting options, which include US and EU instances on Azure.
- [ ] Connect each printer to the platform.
- [ ] Create workgroups for each class or club.
- [ ] Set role-based permissions and per-user print limits.
- [ ] Turn on job approval so a teacher reviews each print.
- [ ] Ask IT to set up single sign-on if the school wants it.
- [ ] Run a test print from a student account.

## Where is the AI?
The only AI feature is the optional Print Fail Detector. It looks at images from the printer camera and flags a likely failed print. The analysis runs in the vendor's cloud and needs an Organizational License. The rest of the platform has no AI, but students practice sequencing and scheduling through the print queue.

## Privacy and safety
Every student needs an account, and the platform needs an internet connection at all times. The vendor stores account details, print history, and uploaded model files in its US cloud. The policy lists name, address, email, phone, IP address, and cookies. It does not mention children, students, FERPA, or COPPA. It refers to a separate Data Handling Policy that the research did not read. A teacher should ask the vendor for that policy and for the self hosted or regional storage options.

## Ideas by subject
### engineering
1. Compare printer settings for one model in the slicer and record how each change affects print time.
2. Design a small part in CAD, submit it to the class queue, and note how many tries it takes to get a good print.
3. Check the job log after a print and write a short report on what went well or failed.
4. Plan the weekly print schedule for the class and share the fair-use limits with the group.
5. Study a failed print and propose two changes to the model or the settings.

### cte
1. Run a mock print shop where students act as customer, operator, and approver for each job.
2. Track material use per student and build a simple cost sheet for a job.
3. Write the print shop rules, including approval steps and per-user limits.
4. Review the print history and spot which jobs failed most often.
5. Create a how-to guide that a new student could follow to submit a first print.
