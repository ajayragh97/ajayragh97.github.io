---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign chapters = site.novels | sort: "chapter_number" %}
  {% for chapter in chapters %}
    {% assign full_chapter_path = '/novels/' | append: chapter.path %}
    <li><a href="{{ full_chapter_path | relative_url }}">{{ chapter.title }}</a></li>
  {% endfor %}
</ul>