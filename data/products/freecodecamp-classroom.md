---
slug: freecodecamp-classroom
tagline: A self-hosted teacher dashboard for tracking student progress in freeCodeCamp.
---

## Overview
freeCodeCamp Classroom is a self-hosted tool that helps teachers plan and manage classes on top of freeCodeCamp's learning platform. Teachers get a dashboard showing progress for multiple freeCodeCamp users. Classes use invite links for students. A challenge map groups completed challenges by certification and course.

## Benefits for students
- Students work through a self-paced coding curriculum.
- Students join a class with an invite link.
- Students see their own challenge progress.

## Benefits for teachers
- A dashboard shows progress for many students.
- A challenge map groups completed challenges.
- Teachers can plan a class around a certification.

## Benefits for schools
- The software is free under a BSD-3-Clause license. Hosting, Auth0, and email services are the school's responsibility.
- It needs a server that runs Node.js, Docker, and Postgres.
- The README mainly describes a development setup.

## Getting started
- [ ] Find the freeCodeCamp Classroom repository.
- [ ] Ask an administrator to plan a server.
- [ ] Install Node.js and pnpm.
- [ ] Use Docker for Postgres.
- [ ] Configure Auth0 and SMTP for production.
- [ ] Remember that the default uses mock student data.
- [ ] Set up a local freeCodeCamp instance for real completion data.
- [ ] Test with a small group.

## Where is the AI?
The tool has no AI. It builds problem solving and coding skills through challenges. Students write code and the dashboard shows what they finished.

## Privacy and safety
Accounts are required and the internet is always needed. The classroom app runs on a school server. Students use the online freeCodeCamp site, and production sign in uses Auth0. The freeCodeCamp privacy policy says it collects an email address and that the public portfolio shows completed lessons by default. It names Google Analytics, Google ads in some places, and hosting by AWS, Azure, MongoDB, Digital Ocean, and Akamai. It says it does not sell data. It does not address children or a minimum age. Handling of students under 13 or under 18 is unclear. A teacher should ask the district whether students may use the service and check the portfolio setting.

## Ideas by subject
### computer_science
1. Join a class with an invite link and finish the first challenge.
2. Write a short program that passes a challenge test.
3. Fix a failing challenge and explain the change.
4. Track progress on the challenge map and set a goal.
5. Help a partner with a challenge and describe the solution.
