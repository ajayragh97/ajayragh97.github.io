---
layout: default  # Or a custom layout for this page
title: Novels
permalink: /novels/
---

<h1>Our Novels</h1>

{% include '_novels/forged_in_infinity/index.md' %}  # Include the nested index.md file

**OR**

{% for novel in site.novels %}
  <h2>{{ novel.title }}</h2>
  <p>{{ novel.excerpt }}</p> <a href="{{ novel.url }}">Read More</a>
{% endfor %}  # Loop through novels and display information