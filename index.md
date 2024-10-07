---
layout: home
title: Home
---

<div class="profile-section">
    <img src="{{ site.baseurl }}/assets/images/mayank_DP.jpg" alt="Mayank's Profile Picture" class="profile-image" />
    <div class="content">
        <h1>About Me</h1>
        <p>I am a Veeva Developer with more than 6 years of experience in designing and developing custom solutions for Veeva applications. I also have expertise in integrating AWS with Salesforce and developing Alexa Skills.</p>
        <a href="{{ site.baseurl }}/files/RESUME_MAYANK_ANAND_salesforce.pdf" class="btn">Download My Resume</a>
    </div>
</div>

## Experience
Salesforce Developer with six years of experience specializing in Service Cloud and Marketing Cloud. Proven track record in the pharmaceutical sector, adept at integration, API management, and delivering tailored solutions. Expertise in driving client success through innovative Salesforce implementations. Salesforce certified with a passion for continuous learning and staying updated with industry trends.

## Blog Posts

<div class="blog-posts">
  {% for post in site.posts %}
    <a href="{{ site.baseurl }}{{ post.url }}" class="blog-post-button">{{ post.title }}</a>
  {% endfor %}
</div>