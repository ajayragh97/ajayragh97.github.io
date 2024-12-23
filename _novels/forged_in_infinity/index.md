---
title: The Forged Infinity
layout: default
---

<h1>{{ page.title }}</h1>

Welcome to {{ page.title }}! Here you can find all the chapters.

<ul>
  {% for chapter in site.novels %}
    {% if chapter.novel == page.dir %}
        {% for chapter_data in chapter.chapters %}
            <li><a href="{{ chapter.url }}">{{ chapter_data.title }}</a></li>
        {% endfor %}
    {% endif %}
  {% endfor %}
</ul>