---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<h2>Debugging site.novels:</h2> {# Add a heading for clarity #}

{% if site.novels %}
  <p>site.novels is not empty! Number of novels: {{ site.novels.size }}</p>
  <ul>
    {% for novel in site.novels %}
      <li>
        <h2>{{ novel.title }}</h2>
        <p>Path: {{ novel.path }}</p>
        <p>Chapter Number: {{ novel.chapter_number }}</p>
        {% if novel.chapters %}
          <h3>Chapters:</h3>
          <ul>
            {% for chapter in novel.chapters %}
              <li>{{ chapter.title }} (Chapter Number: {{ chapter.chapter_number }})</li>
            {% endfor %}
          </ul>
        {% else %}
          <p>No chapters found for this novel.</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>site.novels is empty. Check your _config.yml and file structure.</p>
{% endif %}

<h2>Chapter List (If site.novels is populated):</h2> {# Separate the actual list #}
<ul>
  {% assign chapters = site.novels | sort: "chapter_number" %}
  {% for chapter in chapters %}
    {% assign full_chapter_path = '/novels/' | append: chapter.path %}
    <li><a href="{{ full_chapter_path | relative_url }}">{{ chapter.title }}</a></li>
  {% endfor %}
</ul>