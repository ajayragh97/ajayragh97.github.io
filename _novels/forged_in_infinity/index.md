---
title: Forged in Infinity
layout: novel
permalink: /novels/forged_in_infinity/
show_title: false
---

<div class="novel-detail-header">
    <nav class="reading-breadcrumbs" aria-label="Breadcrumb">
        <a href="{{ '/' | relative_url }}">Home</a>
        <span class="crumb-separator">/</span>
        <a href="{{ '/novels' | relative_url }}">AI Novels</a>
        <span class="crumb-separator">/</span>
        <span class="current-crumb">Forged in Infinity</span>
    </nav>

    <div class="novel-header-content">
        <div class="novel-badge-strip">
            <span class="novel-status-badge">70 Chapters</span>
            <span class="novel-genre-tag">Sci-Fi &bull; Marvel AU &bull; Tech Rebirth</span>
        </div>
        <h1 class="novel-main-title">Forged in Infinity</h1>
        <p class="novel-synopsis">
            Following Tony Stark reborn into an unfamiliar new reality with escalating cosmic stakes. Re-engineering advanced nanotech and quantum armor from first principles while navigating complex politics, dangerous factions, and unknown powers.
        </p>

        {% assign chapters = site.novels | where: "novel", "forged_in_infinity" | sort: "path" %}
        {% assign first_chapter = false %}
        {% for ch in chapters %}
          {% if ch.chapter_number and first_chapter == false %}
            {% assign first_chapter = ch %}
          {% endif %}
        {% endfor %}

        <div class="novel-header-ctas">
            {% if first_chapter %}
                <a href="{{ first_chapter.url | relative_url }}" class="btn primary">
                    Start Reading Chapter 1 &rarr;
                </a>
            {% endif %}
            <a href="{{ '/novels' | relative_url }}" class="btn outline">
                &larr; Back to Series Directory
            </a>
        </div>
    </div>
</div>

<div class="chapter-directory-section">
    <div class="directory-header">
        <h2>Chapter Directory</h2>
        <span class="chapter-count-label">{{ chapters.size }} Chapters Available</span>
    </div>

    <div class="chapter-grid">
        {% for chapter in chapters %}
            {% if chapter.chapter_number %}
                <a href="{{ chapter.url | relative_url }}" class="chapter-card" title="{{ chapter.title }}">
                    <span class="chapter-card-badge">Chapter {{ chapter.chapter_number | plus: 0 }}</span>
                    <span class="chapter-card-action">&rarr;</span>
                </a>
            {% endif %}
        {% endfor %}
    </div>
</div>
