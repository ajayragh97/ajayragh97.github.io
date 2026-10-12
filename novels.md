---
layout: default
title: My Novels
permalink: /novels/
---

<p>Select a novel below to start reading:</p>

<div class="novel-grid">
  {% assign novels = site.data.novels.novels %}
  {% for novel in novels %}
    <a href="/novels/{{ novel.directory }}/" class="novel-card">
      <h3>{{ novel.title }}</h3>
      <p>{{ novel.description }}</p>
    </a>
  {% endfor %}
</div>