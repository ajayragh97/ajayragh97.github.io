---
title: The Name of Your Novel
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign chapters = site.pages | where: "dir", page.dir | sort: "path" %}
  {% for chapter in chapters %}
    {% if chapter.path contains 'chapter-' %}
      <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>