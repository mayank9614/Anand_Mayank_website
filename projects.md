---
layout: home
title: About
---

<div class="profile-section">
    <img src="/Anand_Mayank_website/assets/images/mayank_DP.jpg" alt="Mayank's Profile Picture" class="profile-image" />
    <div class="content">
        <h1>About Me</h1>
        <p>I am a Veeva Developer with more than 6 years of experience in designing and developing custom solutions for Veeva applications. I also have expertise in integrating AWS with Salesforce and developing Alexa Skills.</p>
        <a href="/Anand_Mayank_website/files/RESUME_MAYANK_ANAND_salesforce.pdf" class="btn">Download My Resume</a>
    </div>
</div>

## Experience
Salesforce Developer with six years of experience specializing in Service Cloud and Marketing Cloud. Proven track record in the pharmaceutical sector, adept at integration, API management, and delivering tailored solutions. Expertise in driving client success through innovative Salesforce implementations. Salesforce certified with a passion for continuous learning and staying updated with industry trends.

## Skills:

- Veeva: MCCP, Order Management, Engage, Veeva Insight
- Salesforce: Apex triggers, classes, batch classes, flows, automation
- Azure API Management
- AWS: Lambda, API Gateway, S3
- Alexa Skills Kit
- DevOps: Continuous Integration, Continuous Deployment, Git, Azure
- HTML/CSS/JavaScript: Front-end web development
- Python: Back-end web development and scripting

## Education:

Bachelor of Engineering in Computer Science from BNM Institute of Technology

## Certifications:

ADM 201

## Blog Posts

<div class="blog-posts">
  {% for post in site.posts %}
    <a href="{{ site.baseurl }}{{ post.url }}" class="blog-post-button">{{ post.title }}</a>
  {% endfor %}
</div>