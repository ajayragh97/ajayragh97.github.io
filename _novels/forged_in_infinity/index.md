---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<h2>Debugging site.novels:</h2>

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
              <li>
                <a href="{{ chapter.url }}">{{ chapter.title }}</a> {# Use chapter.url directly! #}
                (Chapter Number: {{ chapter.chapter_number }})
              </li>
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