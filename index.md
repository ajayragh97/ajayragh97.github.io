---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-badge">
        <span class="badge-dot"></span> Doctoral Researcher @ University of Bonn
    </div>
    <h1 class="hero-name">Ajay Ragh</h1>
    <p class="hero-tagline">
        Specializing in <strong>Trajectory Estimation</strong>, <strong>Factor Graphs</strong>, and <strong>Sparse Radar SLAM</strong> for Mobile Robotics.
    </p>
    <p class="hero-bio">
        Welcome to my personal portfolio. Here you will find an overview of my academic research at the University of Bonn, my technical background in autonomous systems, and my experimental hobby exploring generative AI models for long-horizon narrative synthesis and world-building.
    </p>

    <div class="hero-cta-group">
        <a href="{{ '/about' | relative_url }}" class="btn primary">About My Background</a>
        <a href="{{ '/novels' | relative_url }}" class="btn outline">Explore AI Novels</a>
        <a href="https://www.linkedin.com/in/ajay-ragh/" target="_blank" rel="noopener noreferrer" class="btn outline linkedin-btn">
            LinkedIn Profile &rarr;
        </a>
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
                Investigating methods to exploit sparse 4D radar point clouds for robust Simultaneous Localization and Mapping (SLAM), especially in adverse weather, dust, and dynamic environments where cameras or LiDAR degrade.
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
                Developing nonlinear factor graph-based optimization algorithms to perform consistent, real-time trajectory estimation and multi-sensor fusion for mobile robotic platforms.
            </p>
            <div class="card-tags">
                <span class="tag">Factor Graphs</span>
                <span class="tag">Nonlinear Least Squares</span>
                <span class="tag">Sensor Fusion</span>
            </div>
        </div>

        <div class="focus-card">
            <div class="card-icon">🤖</div>
            <h3>Mobile Robotics & State Estimation</h3>
            <p>
                Designing end-to-end state estimation pipelines for ground and mobile robots, fusing odometry, inertial sensors (IMU), and Doppler radar data into unified trajectory estimates.
            </p>
            <div class="card-tags">
                <span class="tag">State Estimation</span>
                <span class="tag">Kinematics</span>
                <span class="tag">Mobile Systems</span>
            </div>
        </div>

        <div class="focus-card">
            <div class="card-icon">🎓</div>
            <h3>Academic Background & Thesis</h3>
            <p>
                Completed a Master's Thesis focusing on advanced robotic state estimation. Current doctoral research is ongoing, with experimental frameworks and results actively being prepared for upcoming publications.
            </p>
            <div class="card-tags">
                <span class="tag">Univ. of Bonn</span>
                <span class="tag">Master's Thesis</span>
                <span class="tag">Doctoral Research</span>
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

        <div class="novel-mini-cards">
            <a href="{{ '/novels/forged_in_infinity/' | relative_url }}" class="mini-card">
                <span class="mini-badge">70 Chapters</span>
                <h4>Forged in Infinity</h4>
                <p>Rebirth, nanotech, and cosmic challenges spanning deep narrative arcs.</p>
                <span class="mini-link">Browse Chapters &rarr;</span>
            </a>
            <a href="{{ '/novels/pathways_of_pangea/' | relative_url }}" class="mini-card">
                <span class="mini-badge">9 Chapters</span>
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
        <div class="skill-pill">C++</div>
        <div class="skill-pill">Python</div>
        <div class="skill-pill">ROS / ROS 2</div>
        <div class="skill-pill">Factor Graphs & GTSAM</div>
        <div class="skill-pill">Ceres Solver</div>
        <div class="skill-pill">Point Cloud Library (PCL)</div>
        <div class="skill-pill">Linux / Ubuntu</div>
        <div class="skill-pill">Git / GitHub</div>
        <div class="skill-pill">LaTeX</div>
        <div class="skill-pill">Generative AI Prompting & Workflows</div>
    </div>
</section>
