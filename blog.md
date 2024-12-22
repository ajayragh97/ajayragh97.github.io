---
layout: default
title: Blog
permalink: /blog/
---

<h1>My Blog</h1>

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}