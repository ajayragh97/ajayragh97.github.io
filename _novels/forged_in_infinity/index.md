---
title: Forged in Infinity
layout: novel
permalink: /novels/forged_in_infinity/
---

<h1>Chapters</h1>

<ul>
  {% assign chapters = site.novels | where: "novel", "forged_in_infinity" | sort: "chapter_number" %}
  {% for chapter in chapters %}
    <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
  {% endfor %}
</ul>