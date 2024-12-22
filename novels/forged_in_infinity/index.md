---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign chapters = site.novels | sort: "chapter_number" %}
  {% for chapter in chapters %}
    {% assign chapter_url = chapter.path | relative_url %}
    <li><a href="{{ chapter_url }}">{{ chapter.title }}</a></li>
  {% endfor %}
</ul>