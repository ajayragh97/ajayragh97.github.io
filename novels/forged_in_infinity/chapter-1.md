---
title: Chapter 1: The Beginning
chapter_number: 1
layout: default
---

## the begining

test content

<div class="chapter-nav">
  {% if page.prev_chapter %}
    <a href="{{ page.prev_chapter.url }}" class="prev-chapter">Previous Chapter: {{ page.prev_chapter.title }}</a>
  {% endif %}
  {% if page.next_chapter %}
    <a href="{{ page.next_chapter.url }}" class="next-chapter">Next Chapter: {{ page.next_chapter.title }}</a>
  {% endif %}
</div>