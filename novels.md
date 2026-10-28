---
layout: default
title: AI Novels & Narrative Experiments
permalink: /novels/
---

<div class="novels-hub-header">
    <div class="experiment-disclaimer">
        <span class="experiment-tag">Generative AI Exploration & Creative Hobby</span>
        <h2>Long-Horizon Narrative Experiments</h2>
        <p>
            These novels are part of an ongoing experimental sandbox investigating generative AI models on long-horizon creative tasks. Rather than writing as a traditional author, I direct, outline, and prompt AI systems to construct serialized web fiction.
        </p>
        <div class="experiment-pillars">
            <div class="pillar-item">
                <strong>World & Plot Building:</strong> Challenging my ability to architect rich lore, factions, magic/tech systems, and structured narrative arcs.
            </div>
            <div class="pillar-item">
                <strong>Model Coherence & Drift:</strong> Evaluating how well language models maintain consistent character voices, memory, and plot logic over dozens of sequential chapters.
            </div>
        </div>
    </div>
</div>

<section class="section-container">
    <div class="section-header">
        <h3 class="section-title">Available Series</h3>
        <p class="section-subtitle">Select a series below to explore the chapter directory and start reading.</p>
    </div>

    <div class="novel-showcase-grid">
        {% assign fii_chapters = site.novels | where: "novel", "forged_in_infinity" %}
        {% assign pop_chapters = site.novels | where: "novel", "pathways_of_pangea" %}
        <!-- Forged in Infinity -->
        <div class="novel-feature-card">
            <div class="novel-card-top">
                <span class="novel-status-badge">{{ fii_chapters.size }} Chapters Available</span>
                <span class="novel-genre-tag">Sci-Fi &bull; Rebirth &bull; Tech Fantasy</span>
            </div>
            <h3 class="novel-card-title">Forged in Infinity</h3>
            <p class="novel-card-desc">
                Following Tony Stark reborn into an unfamiliar world with cosmic stakes. Rebuilding cutting-edge nanotech from first principles while navigating complex realms, powerful adversaries, and unforeseen magic-science dynamics.
            </p>
            <div class="novel-card-meta">
                <div class="meta-item">
                    <span class="meta-label">Experiment Horizon</span>
                    <span class="meta-value">High ({{ fii_chapters.size }}+ Chapters)</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Primary Focus</span>
                    <span class="meta-value">Multi-Arc Continuity</span>
                </div>
            </div>
            <div class="novel-card-actions">
                <a href="{{ '/novels/forged_in_infinity/' | relative_url }}" class="btn primary">
                    Browse Chapters (1 – {{ fii_chapters.size }}) &rarr;
                </a>
            </div>
        </div>

        <!-- Pathways of Pangea -->
        <div class="novel-feature-card">
            <div class="novel-card-top">
                <span class="novel-status-badge">{{ pop_chapters.size }} Chapters Available</span>
                <span class="novel-genre-tag">Sci-Fi &bull; Planetary Exploration</span>
            </div>
            <h3 class="novel-card-title">Pathways of Pangea</h3>
            <p class="novel-card-desc">
                An immersive sci-fi tale of an orphaned boy navigating an intricate planetary landscape with ancient ecosystems, uncovering hidden mechanisms and stepping into an unexpected galactic destiny.
            </p>
            <div class="novel-card-meta">
                <div class="meta-item">
                    <span class="meta-label">Experiment Horizon</span>
                    <span class="meta-value">Active Series</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Primary Focus</span>
                    <span class="meta-value">Ecosystem & Lore Design</span>
                </div>
            </div>
            <div class="novel-card-actions">
                <a href="{{ '/novels/pathways_of_pangea/' | relative_url }}" class="btn primary">
                    Browse Chapters (1 – {{ pop_chapters.size }}) &rarr;
                </a>
            </div>
        </div>
    </div>
</section>
