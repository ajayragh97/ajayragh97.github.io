---
title: Chapter 2: The Beginning continued
chapter_number: 2
layout: default
---

## Chapter 2 Test

<div class="chapter-nav">
  {% assign current_chapter_number = page.chapter_number | plus: 0 %}
  {% assign next_chapter_number = current_chapter_number | plus: 1 %}
  {% assign previous_chapter_number = current_chapter_number | minus: 1 %}

  {% assign next_chapter = site.pages | where: "dir", page.dir | where: "chapter_number", next_chapter_number | first %}
  {% assign previous_chapter = site.pages | where: "dir", page.dir | where: "chapter_number", previous_chapter_number | first %}

  {% if previous_chapter %}
    <a href="{{ previous_chapter.url }}" class="prev-chapter">Previous Chapter</a>
  {% endif %}
  {% if next_chapter %}
    <a href="{{ next_chapter.url }}" class="next-chapter">Next Chapter</a>
  {% endif %}
</div>