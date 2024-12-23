---
title: The Forged Infinity
layout: default
---

<h1>{{ page.title }} Chapters</h1>

<ul>
  {% for chapter in site.novels %}
    {% if chapter.novel == page.dir %}
        {% for chapter_data in chapter.chapters %}
            <li><a href="{{ chapter_data.url }}">{{ chapter_data.title }}</a></li>
        {% endfor %}
    {% endif %}
  {% endfor %}
</ul>