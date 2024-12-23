---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<ul>
  {% assign chapters = site.novels | sort: "chapter_number" %}
  {% for chapter in chapters %}
    <li>
      <a href="{{ chapter.url }}">{{ chapter.title }}</a>
    </li>
  {% endfor %}
</ul>