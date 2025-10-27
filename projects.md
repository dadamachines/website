---
title: Projects
subtitle: Concepts, workshops and installations that kept us busy in the past.
description: An example showcase page to help you easily display your work
layout: page
show_sidebar: false
---

{% assign projects = site.projects | sort: 'order' %}
{% for project in projects %}
<div class="project-container">
  <a href="{{ project.url }}" class="no_border">
  <img src="projects/{{ project.picture }}" class="image" alt="{{ project.title }} – {{ project.headline }}" style="width: 100%;"/>
    <div class="overlay-outer">
      <div class="overlay-inner">
        <div class="project-title"><h2 class="h1">{{ project.title }}</h2></div>
      </div>
    </div>
  </a>
</div>
{% endfor %}
