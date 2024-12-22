---
title: Chapter 1
chapter_number: 1
layout: default
---
## test content

<div class="chapter-nav">
  {% assign current_chapter_number = page.chapter_number | plus: 0 %}
  {% assign next_chapter_number = current_chapter_number | plus: 1 %}
  {% assign previous_chapter_number = current_chapter_number | minus: 1 %}

  {% assign next_chapter = site.novels | where: "chapter_number", next_chapter_number | first %}
  {% assign previous_chapter = site.novels | where: "chapter_number", previous_chapter_number | first %}

  {% if previous_chapter %}
    <a href="{{ previous_chapter.url }}" class="prev-chapter">Previous Chapter: {{ previous_chapter.title }}</a>
  {% endif %}
  {% if next_chapter %}
    <a href="{{ next_chapter.url }}" class="next-chapter">Next Chapter: {{ next_chapter.title }}</a>
  {% endif %}
</div>