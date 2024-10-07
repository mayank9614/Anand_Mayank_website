---
layout: home
title: Home
---

# About Me

<img src="{{ '/Anand_Mayank_website/assets/images/mayank_DP.jpg' | relative_url }}" alt="Mayank's Profile Picture" class="profile-image">

I am a Veeva Developer with more than 6 years of experience in designing and developing custom solutions for Veeva applications. I also have expertise in integrating AWS with Salesforce and developing Alexa Skills.

[Download My Resume]({{ '/Anand_Mayank_website/files/RESUME_MAYANK_ANAND_salesforce.pdf' | relative_url }}){: .btn}

## Experience

Salesforce Developer with six years of experience specializing in Service Cloud and Marketing Cloud. Proven track record in the pharmaceutical sector, adept at integration, API management, and delivering tailored solutions. Expertise in driving client success through innovative Salesforce implementations. Salesforce certified with a passion for continuous learning and staying updated with industry trends.

## Blog Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | prepend: '/Anand_Mayank_website' | relative_url }})
{% endfor %}