---
title: The Forged Infinity
layout: default
---

<h1>{{ page.title }} Chapters</h1>

<ul>
  {% assign all_chapters = site.novels | where: "novel", page.dir %}
  {% assign chapters = all_chapters | map: "chapter_number" | sort %}
  {% for chapter_number in chapters %}
    {% assign chapter = site.novels | where: "novel", page.dir | where: "chapter_number", chapter_number | first %}
    {% if chapter %}
        <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>