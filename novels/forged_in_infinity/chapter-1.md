---
title: Chapter 1: The Beginning
chapter_number: 1
layout: default
---

## Chapter 1

This is the content of your first chapter...

<div class="chapter-nav">
  {% assign current_chapter_number = page.chapter_number %}
  <p>Current Chapter Number: {{ current_chapter_number }}</p>

  {% assign chapters_in_dir = site.pages | where: "dir", page.dir %}
  <p>Chapters in this directory: {{ chapters_in_dir.size }}</p>

  {% for chapter in chapters_in_dir %}
      <p>Chapter title: {{chapter.title}}</p>
      <p>Chapter number: {{chapter.chapter_number}}</p>
  {% endfor %}
</div>