---
title: Chapter 3
chapter_number: 3
layout: default
chapters:
  - title: Chapter 3: Conclusion
    chapter_number: 3
---
## the end

test content

<div class="chapter-nav">
  {% if page.prev_chapter %}
    <a href="{{ page.prev_chapter.url }}" class="prev-chapter">Previous Chapter: {{ page.prev_chapter.title }}</a>
  {% endif %}
  {% if page.next_chapter %}
    <a href="{{ page.next_chapter.url }}" class="next-chapter">Next Chapter: {{ page.next_chapter.title }}</a>
  {% endif %}
</div>