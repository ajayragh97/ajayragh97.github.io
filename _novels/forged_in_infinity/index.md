---
title: Forged in Infinity
layout: novel
permalink: /novels/forged_in_infinity/
---

<h1>Chapters</h1>

<ul>
  {% assign sorted_chapters = site.novels | where: "novel", "forged_in_infinity" | sort: "chapter_number" %}
  {% for chapter in sorted_chapters %}
    {% if chapter.chapter_number %}
      <li><a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>