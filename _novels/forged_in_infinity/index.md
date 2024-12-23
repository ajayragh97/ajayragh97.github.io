---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<ul>
  {% for novel_file in site.novels %} {# Iterate through novel files #}
    {% if novel_file.chapters %} {# Check if chapters exist in this file #}
      {% for chapter in novel_file.chapters %} {# Iterate through chapters in this file #}
        <li><a href="{{ novel_file.url }}#{{ chapter.chapter_number }}">{{ chapter.title }}</a></li>
      {% endfor %}
    {% endif %}
  {% endfor %}
</ul>