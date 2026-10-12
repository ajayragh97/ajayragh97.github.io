---
title: Pathways of Pangea
layout: novel
permalink: /novels/pathways_of_pangea/
---

<h1>Chapters</h1>

<ul>
  {% assign chapters = site.novels | where: "novel", "pathways_of_pangea" | sort: "chapter_number" %}
  {% for chapter in chapters %}
    <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
  {% endfor %}
</ul>