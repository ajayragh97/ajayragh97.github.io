---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-badge">
        <span class="badge-dot"></span> Doctoral Researcher @ University of Bonn (IGG)
    </div>
    <h1 class="hero-name">Ajay Ragh</h1>
    <p class="hero-tagline">
        Specializing in <strong>Factor Graph Optimization</strong>, <strong>Radar-Inertial Odometry</strong>, and <strong>Trajectory Estimation</strong> for Mobile Robotics.
    </p>
    <p class="hero-bio">
        I am a doctoral researcher at the <strong>University of Bonn</strong> (Institute for Geodesy and Geoinformation). My research investigates factor graph-based sensor fusion, sparse 4D millimeter-wave radar perception, and robust state estimation in visually degraded environments (VDEs) such as smoke, fog, and subterranean tunnels. I completed my M.Sc. thesis in collaboration with <strong>Fraunhofer FKIE</strong> on Plane-Constrained Radar-Inertial Odometry (PC-RIO). In my spare time, I explore generative AI models on long-horizon narrative synthesis and large-scale world-building.
    </p>

    <div class="hero-cta-group">
        <a href="{{ '/about' | relative_url }}" class="btn primary">About My Background</a>
        <a href="{{ '/blog' | relative_url }}" class="btn outline">Research Blog & Visualizations</a>
        <a href="{{ '/novels' | relative_url }}" class="btn outline">Explore AI Novels</a>
        <a href="https://www.linkedin.com/in/ajay-ragh/" target="_blank" rel="noopener noreferrer" class="btn outline linkedin-btn">
            LinkedIn Profile &rarr;
        </a>
    </div>
</section>

<!-- Featured Research Spotlight Banner -->
<section class="section-container">
    <div class="research-spotlight-card">
        <div class="spotlight-content">
            <span class="spotlight-badge">Master's Thesis Highlight &bull; Univ. of Bonn & Fraunhofer FKIE</span>
            <h3>Factor Graph-Based Trajectory Estimation Fusing Radar and Inertial Data</h3>
            <p>
                Developing <strong>PC-RIO</strong>: an asynchronous dual-threaded factor graph framework that overcomes mmWave radar sparsity by combining high-rate Doppler ego-velocity estimation with low-rate structural plane constraints. Achieving sub-20 cm indoor trajectory tracking and reducing positional drift by up to 90% without requiring external barometers or cameras.
            </p>
            <div class="spotlight-actions">
                <a href="{{ '/2026/10/26/radar-inertial-trajectory-estimation.html' | relative_url }}" class="btn primary">
                    Read Thesis Overview & Watch Result Videos &rarr;
                </a>
            </div>
        </div>
        <div class="spotlight-preview">
            <a href="{{ '/2026/10/26/radar-inertial-trajectory-estimation.html' | relative_url }}" class="spotlight-image-link" title="Click to view full blog post and videos">
                <img src="{{ '/assets/images/office_floor/1.png' | relative_url }}" alt="Top-down radar trajectory visualization" class="spotlight-thumb">
                <span class="spotlight-thumb-caption">Office Floor: Composite Radar Point Cloud & Trajectory &rarr;</span>
            </a>
        </div>
    </div>
</section>

<!-- Research & Technical Focus Areas -->
<section class="section-container">
    <div class="section-header">
        <h2 class="section-title">Research & Technical Focus</h2>
        <p class="section-subtitle">Core themes in mobile robotics, state estimation, and sensor perception.</p>
    </div>

    <div class="focus-grid">
        <div class="focus-card">
            <div class="card-icon">📡</div>
            <h3>Sparse Radar SLAM</h3>
            <p>
                Investigating methods to exploit sparse 4D radar point clouds for robust Simultaneous Localization and Mapping (SLAM), especially in adverse weather, smoke, dust, and dynamic environments where cameras or LiDAR degrade.
            </p>
            <div class="card-tags">
                <span class="tag">Radar SLAM</span>
                <span class="tag">Point Clouds</span>
                <span class="tag">Perception</span>
            </div>
        </div>

        <div class="focus-card">
            <div class="card-icon">📐</div>
            <h3>Factor Graph Optimization</h3>
            <p>
                Formulating non-linear factor graph optimization pipelines using GTSAM and iSAM2 backends to perform consistent, real-time trajectory estimation and multi-sensor fusion for mobile robotic platforms.
            </p>
            <div class="card-tags">
                <span class="tag">Factor Graphs</span>
                <span class="tag">iSAM2</span>
                <span class="tag">Sensor Fusion</span>
            </div>
        </div>

        <div class="focus-card">
            <div class="card-icon">🤖</div>
            <h3>Mobile Robotics & State Estimation</h3>
            <p>
                Designing end-to-end state estimation pipelines for ground and mobile robots, fusing odometry, inertial sensors (IMU), and Doppler radar data into unified trajectory estimates across GNSS-denied terrains.
            </p>
            <div class="card-tags">
                <span class="tag">State Estimation</span>
                <span class="tag">Kinematics</span>
                <span class="tag">Mobile Systems</span>
            </div>
        </div>

        <div class="focus-card">
            <div class="card-icon">🎓</div>
            <h3>Master's Thesis Research: PC-RIO</h3>
            <p>
                Developed Plane-Constrained Radar-Inertial Odometry in collaboration with Fraunhofer FKIE. Achieved up to 90% drift reduction in indoor environments by enforcing structural planar constraints on factor graphs.
            </p>
            <div class="card-tags">
                <span class="tag">Univ. of Bonn</span>
                <span class="tag">Fraunhofer FKIE</span>
                <span class="tag">PC-RIO</span>
            </div>
        </div>
    </div>
</section>

<!-- Creative Exploration / AI Hobby Section -->
<section class="section-container">
    <div class="section-header">
        <h2 class="section-title">Creative Exploration: AI Narrative Experiment</h2>
        <p class="section-subtitle">
            A hobby investigation into long-horizon context stability, memory, and world-building using generative AI models.
        </p>
    </div>

    <div class="ai-project-highlight">
        <div class="ai-project-content">
            <span class="project-pill">Personal Hobby & Research Experiment</span>
            <h3>Testing Long-Horizon Stability with Generative AI</h3>
            <p>
                In my free time, I run an ongoing creative experiment: leveraging large AI models to craft serialized web novels. The goal is twofold:
            </p>
            <ul class="experiment-goals-list">
                <li><strong>Imagination & World-Building:</strong> Testing my own structured design of complex worlds, multi-threaded plots, and narrative progression.</li>
                <li><strong>Model Long-Horizon Stability:</strong> Analyzing how generative models handle long-term memory, subtle character continuity, and structural coherence across dozens of interconnected chapters.</li>
            </ul>
            <div class="ai-project-cta">
                <a href="{{ '/novels' | relative_url }}" class="btn primary">View Novels & Chapters &rarr;</a>
            </div>
        </div>

        {% assign fii_chapters = site.novels | where: "novel", "forged_in_infinity" %}
        {% assign pop_chapters = site.novels | where: "novel", "pathways_of_pangea" %}
        <div class="novel-mini-cards">
            <a href="{{ '/novels/forged_in_infinity/' | relative_url }}" class="mini-card">
                <span class="mini-badge">{{ fii_chapters.size }} Chapters</span>
                <h4>Forged in Infinity</h4>
                <p>Rebirth, nanotech, and cosmic challenges spanning deep narrative arcs.</p>
                <span class="mini-link">Browse Chapters &rarr;</span>
            </a>
            <a href="{{ '/novels/pathways_of_pangea/' | relative_url }}" class="mini-card">
                <span class="mini-badge">{{ pop_chapters.size }} Chapters</span>
                <h4>Pathways of Pangea</h4>
                <p>A sci-fi tale of an orphaned youth discovering a world-spanning destiny.</p>
                <span class="mini-link">Browse Chapters &rarr;</span>
            </a>
        </div>
    </div>
</section>

<!-- Skills / Toolkit Overview -->
<section class="section-container">
    <div class="section-header">
        <h2 class="section-title">Technical Toolkit</h2>
        <p class="section-subtitle">Technologies and tools used across my research and development workflows.</p>
    </div>

    <div class="skills-badges-container">
        <div class="skill-pill">C++ (C++17/20)</div>
        <div class="skill-pill">Python</div>
        <div class="skill-pill">ROS / ROS 2</div>
        <div class="skill-pill">Factor Graphs & GTSAM</div>
        <div class="skill-pill">iSAM2</div>
        <div class="skill-pill">Ceres Solver</div>
        <div class="skill-pill">Point Cloud Library (PCL)</div>
        <div class="skill-pill">Linux / Ubuntu</div>
        <div class="skill-pill">Git / GitHub</div>
        <div class="skill-pill">LaTeX</div>
        <div class="skill-pill">Generative AI Workflows</div>
    </div>
</section>
