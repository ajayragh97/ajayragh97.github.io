---
layout: default
title: Blog & Technical Notes
permalink: /blog/
---

<div class="blog-header-section">
    <p class="blog-lead">
        Notes, research insights on robotics and SLAM, and ongoing updates from my AI narrative experiments.
    </p>
</div>

<div class="posts-list">
    {% for post in site.posts %}
        <article class="post-preview-card">
            <div class="post-meta-strip">
                <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">
                    {{ post.date | date: "%B %d, %Y" }}
                </time>
                <span class="meta-dot">&bull;</span>
                <span class="post-category">General</span>
            </div>
            <h2 class="post-preview-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h2>
            <div class="post-preview-excerpt">
                {{ post.excerpt | strip_html | truncatewords: 35 }}
            </div>
            <div class="post-read-more">
                <a href="{{ post.url | relative_url }}" class="read-more-link">Read article &rarr;</a>
            </div>
        </article>
    {% else %}
        <p class="empty-state">No articles posted yet. Stay tuned for robotics research breakdowns and AI experiment write-ups!</p>
    {% endfor %}
</div>
