---
title: The Name of Your Novel
layout: default # Important: Add this line
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign chapters = site.pages | where: "dir", page.dir | sort: "chapter_number" %}
  {% for chapter in chapters %}
    {% if chapter.path contains 'chapter-' %}
      <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>