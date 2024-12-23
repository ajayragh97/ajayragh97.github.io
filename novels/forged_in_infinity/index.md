---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<ul>
  {% for chapter in site.novels.first.chapters %}  # Access chapters from first novel
    <li><a href="{{ chapter.path | relative_url }}">{{ chapter.title }}</a></li>
  {% endfor %}
</ul>