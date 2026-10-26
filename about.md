---
layout: default
title: About Me
permalink: /about/
---

<div class="about-container">
    <section class="about-hero-card">
        <div class="about-header-text">
            <h2>Hi, I'm Ajay Ragh</h2>
            <p class="about-lead">
                I am a doctoral researcher in the field of <strong>mobile robotics and trajectory estimation</strong> at the <strong>University of Bonn</strong> (Institute for Geodesy and Geoinformation).
            </p>
        </div>
    </section>

    <section class="about-section">
        <h3>Doctoral Research</h3>
        <p>
            My doctoral research centers on robust autonomous navigation, state estimation, and sensor perception for mobile robots.
        </p>
    </section>

    <section class="about-section">
        <h3>Master of Science & Master's Thesis</h3>
        <p>
            Prior to my doctoral studies, I completed my <strong>Master of Science (M. Sc.)</strong> at the <strong>University of Bonn</strong> (Institute for Geodesy and Geoinformation).
        </p>
        <div class="thesis-highlight-box">
            <span class="thesis-badge">Master's Thesis &bull; Bonn 2026</span>
            <h4 class="thesis-title">Factor Graph-Based Trajectory Estimation Fusing Radar and Inertial Sensor Data</h4>
            <p class="thesis-meta">
                <strong>Supervisors:</strong> Prof. Dr. Lasse Klingbeil (Univ. of Bonn), Felix Esser (Univ. of Bonn), Fahmi Rouatbi (Fraunhofer FKIE)
            </p>
            <p class="thesis-summary">
                Developed <strong>PC-RIO (Plane-Constrained Radar-Inertial Odometry)</strong>: an asynchronous dual-threaded factor graph framework that tightly couples Doppler radar ego-velocity, intensity-weighted NDT rotation, and high-frequency IMU kinematics with low-frequency structural plane constraints (ground planes and orthogonal Manhattan walls). Across extensive real-world indoor sequences, the structural background factors suppressed positional drift by up to <strong>90%</strong>, achieving sub-20 cm trajectory accuracy without relying on visual cameras or external barometer hardware.
            </p>
            <div class="thesis-links">
                <a href="{{ '/2026/10/26/radar-inertial-trajectory-estimation.html' | relative_url }}" class="btn primary">
                    Read Thesis Blog Post & Visualizations &rarr;
                </a>
            </div>
        </div>
    </section>

    <section class="about-section">
        <h3>Creative Exploration: AI-Assisted Narrative Synthesis</h3>
        <p>
            Beyond academic robotics, I pursue a creative hobby at the intersection of imagination and generative artificial intelligence. Rather than writing as a traditional author, I direct, outline, and prompt large language models to construct serialized web fiction.
        </p>
        <p>
            This hobby serves two distinct experimental purposes:
        </p>
        <div class="about-experiment-cards">
            <div class="exp-card">
                <h4>1. World & Plot Architecture</h4>
                <p>
                    Exercising my own capability to design deep lore, intricate multi-faction power balances, character motivations, and multi-arc plotlines from scratch.
                </p>
            </div>
            <div class="exp-card">
                <h4>2. Long-Horizon Model Stability</h4>
                <p>
                    Investigating how generative models behave over long horizon creative tasks—specifically evaluating context drift, memory retention, tonal consistency, and stability across 70+ interconnected chapters.
                </p>
            </div>
        </div>
        <p style="margin-top: 15px;">
            You can read these experiments and track the stories in the <a href="{{ '/novels' | relative_url }}">AI Novels</a> section.
        </p>
    </section>

    <section class="about-section">
        <h3>Technical Toolkit</h3>
        <div class="skills-category-grid">
            <div class="skill-category">
                <h4>Robotics & State Estimation</h4>
                <ul>
                    <li>Factor Graph Optimization & iSAM2</li>
                    <li>Radar-Inertial Odometry (RIO) & SLAM</li>
                    <li>4D Millimeter-Wave Radar Perception</li>
                    <li>Doppler Velocity Estimation (REVE) & NDT</li>
                    <li>Structural SLAM (Manhattan World & Planar Constraints)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Software & Libraries</h4>
                <ul>
                    <li>Modern C++ (C++17/20)</li>
                    <li>Python (NumPy, SciPy, Matplotlib)</li>
                    <li>GTSAM (Georgia Tech Smoothing and Mapping)</li>
                    <li>ROS / ROS 2</li>
                    <li>Point Cloud Library (PCL) & Ceres Solver</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Tools & Engineering</h4>
                <ul>
                    <li>Linux / Ubuntu</li>
                    <li>Git & GitHub version control</li>
                    <li>trajectopy (Trajectory Evaluation Toolkit)</li>
                    <li>LaTeX / Scientific Documentation</li>
                    <li>Generative AI Prompting & Workflows</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="about-section connect-section">
        <h3>Connect & Collaboration</h3>
        <p>
            For professional inquiries, academic discussions, or to view my career trajectory, feel free to connect:
        </p>
        <div class="connect-buttons">
            <a href="https://www.linkedin.com/in/ajay-ragh/" target="_blank" rel="noopener noreferrer" class="btn primary">
                LinkedIn Profile
            </a>
            <a href="https://github.com/ajayragh97" target="_blank" rel="noopener noreferrer" class="btn outline">
                GitHub (@ajayragh97)
            </a>
            <a href="mailto:ajayragh1997@gmail.com" class="btn outline">
                Email Me
            </a>
        </div>
    </section>
</div>
