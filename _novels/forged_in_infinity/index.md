---
title: Forged In Infinity
layout: default
---

<h1>{{ page.title }}</h1>

<h2>Debugging site.novels:</h2>

{% if site.novels %}
  <p>site.novels is not empty! Number of novels: {{ site.novels.size }}</p>
  <ul>
    {% for novel_file in site.novels %} {# Iterate over novel *files* #}
      <li>
        <h2>{{ novel_file.title }}</h2>
        <p>Path: {{ novel_file.path }}</p>
        <p>Chapter Number: {{ novel_file.chapter_number }}</p>
        {% if novel_file.chapters %} {# Check if chapters exist in this *file* #}
          <h3>Chapters:</h3>
          <ul>
            {% for chapter in novel_file.chapters %} {# Iterate over chapters in the *file* #}
              <li>
                <a href="{{ chapter.url }}">{{ chapter.title }}</a>
                (Chapter Number: {{ chapter.chapter_number }})
              </li>
            {% endfor %}
          </ul>
        {% else %}
          <p>No chapters found for this novel file.</p>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>site.novels is empty. Check your _config.yml and file structure.</p>
{% endif %}

<h2>Chapter List (Final):</h2>
<ul>
  {% for novel_file in site.novels %}
    {% for chapter in novel_file.chapters %}
      <li><a href="{{ chapter.url }}">{{ chapter.title }}</a></li>
    {% endfor %}
  {% endfor %}
</ul>