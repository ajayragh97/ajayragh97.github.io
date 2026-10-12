---
title: Pathways of Pangea
layout: novel
permalink: /novels/pathways_of_pangea/
---

<h1>Chapters</h1>

<ul>
  {% assign sorted_chapters = site.novels | where: "novel", "pathways_of_pangea" | sort: "chapter_number" %}
  {% for chapter in sorted_chapters %}
    {% if chapter.chapter_number %}
      <li><a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>