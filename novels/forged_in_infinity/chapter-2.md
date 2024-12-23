---
title: Chapter 2  # Optional: Title of the file
chapter_number: 2 # Important: Chapter number for the file (used for sorting)
layout: default
chapters:
  - title: Chapter 2: Mid # Title of the chapter
    chapter_number: 2 # Chapter number (should match the file's chapter_number)
---
## the middle

test content

<div class="chapter-nav">
  {% if page.prev_chapter %}
    <a href="{{ page.prev_chapter.url }}" class="prev-chapter">Previous Chapter: {{ page.prev_chapter.title }}</a>
  {% endif %}
  {% if page.next_chapter %}
    <a href="{{ page.next_chapter.url }}" class="next-chapter">Next Chapter: {{ page.next_chapter.title }}</a>
  {% endif %}
</div>