---
title: Forged in Infinity
layout: novel
---

<h1>Chapters</h1>

<ul>
  {% assign chapters = site.novels | where: "novel", page.dir | sort_by_number: "chapter_number" %}
  {% for chapter in chapters %}
    <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
  {% endfor %}
</ul>