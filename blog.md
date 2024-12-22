---
layout: default
title: Blog
---

# My Blog

{% if page.url contains '/novels/' %}
  <h1>Novels</h1>

  {% assign novels = site.data.novels.novels %}
  <ul>
    {% for novel in novels %}
      <li><a href="/novels/{{ novel.slug }}/">{{ novel.title }}</a> - {{ novel.description }}</li>
    {% endfor %}
  </ul>
{% else %}
  {% for post in site.posts %}
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
  {% endfor %}
{% endif %}