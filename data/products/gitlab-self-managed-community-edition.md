---
slug: gitlab-self-managed-community-edition
tagline: A free Git platform that schools install on their own servers.
---

## Overview
GitLab Community Edition is the free self-hosted edition of GitLab's Git and DevOps platform. Schools and universities install it on their own servers to host student repositories and course groups. Portland State and Artois ran it for years. It suits high school and college computer science classes.

## Benefits for students
- Students learn Git, issues, and merge requests.
- Students practice CI, which runs checks on their code.
- Students work in course groups that mirror real teams.

## Benefits for teachers
- Groups and subgroups organize courses and student access.
- Teachers can use one login for all course tools.
- University Washington Bothell uses groups and subgroups to organize courses.

## Benefits for schools
- Community Edition is free.
- A single-node install has a baseline of 8 vCPU and 16 GB RAM, which is heavy.
- IT must install and maintain it. Paid tiers and a separate education program exist.

## Getting started
- [ ] Find GitLab Community Edition on the GitLab site.
- [ ] Ask IT to plan a server with 8 vCPU and 16 GB RAM. The vendor says it can run on 8 GB in constrained setups.
- [ ] Have IT install it through a Linux package, Docker, or Helm.
- [ ] Review the telemetry and version check settings and turn off usage data.
- [ ] Configure sign-in, such as LDAP, for school accounts.
- [ ] Create a group for each course and add students.
- [ ] Test one sample project before the term starts.

## Where is the AI?
The vendor materials reviewed do not describe any AI in the Community Edition. It builds teamwork and version control skills. Students share code through merge requests. It runs on a school server.

## Privacy and safety
Accounts are required. Account, repository, and project data stay on the school server. The software also sends version checks to GitLab and may send usage data. The GitLab privacy statement says it does not knowingly collect data from children under 13. It requires users to be 13 or older, with an exception for Educational Licenses. A teacher should ask IT to review the telemetry and version check settings before students sign in.

## Ideas by subject
### computer_science
1. Create a project in a course group and push a first program.
2. Open a merge request and ask a partner to review it.
3. Write an issue that tracks a bug in a team project.
4. Set up a CI check that runs on every commit.
5. Use subgroups to split a team project into parts.
