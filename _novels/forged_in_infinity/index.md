---
title: Forged in Infinity # Title of the Novel
layout: default # Or a custom layout for novels
---

# Forged in Infinity

Welcome to the Forged Infinity! Here you can find all the chapters.

{% for chapter in site.novels %}
    {% if chapter.novel == page.dir %}
        <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
    {% endif %}
{% endfor %}