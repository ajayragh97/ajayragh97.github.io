---
layout: default
title: Novels
permalink: /novels/
---

<h1>Novels</h1>

{% assign novels = site.data.novels.novels %}
<ul>
  {% for novel in novels %}
    <li><a href="/novels/{{ novel.directory }}/">{{ novel.title }}</a> - {{ novel.description }}</li>
  {% endfor %}
</ul>