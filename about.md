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
                I am a doctoral researcher in the field of <strong>trajectory estimation for mobile robotics</strong> at the <strong>University of Bonn</strong>.
            </p>
        </div>
    </section>

    <section class="about-section">
        <h3>Research & Doctoral Work</h3>
        <p>
            My current doctoral research centers on autonomous mobile robotics, with a particular focus on <strong>trajectory estimation</strong> using <strong>sparse radar point clouds</strong>. Modern 4D millimeter-wave radars provide significant advantages in challenging operational conditions—such as smoke, fog, dust, and direct sunlight—where traditional optical cameras and LiDAR sensors frequently struggle or fail.
        </p>
        <p>
            However, radar point clouds are notoriously sparse, noisy, and subject to multipath reflections. To address these challenges, I research and develop <strong>factor graph-based optimization algorithms</strong> that model measurement uncertainties, incorporate kinematic constraints, and solve for high-fidelity robot trajectories and environmental maps.
        </p>
    </section>

    <section class="about-section">
        <h3>Academic Background & Master's Thesis</h3>
        <p>
            Prior to my doctoral studies at the University of Bonn, I completed my Master's degree, culminating in a <strong>Master's Thesis</strong> in robotics and state estimation.
        </p>
        <p>
            Because my current and previous research projects are being prepared for formal peer-reviewed academic publication, the corresponding repositories and datasets remain private for now. Once the papers undergo peer review and are published, open-source code and benchmark datasets will be linked here.
        </p>
    </section>

    <section class="about-section">
        <h3>Creative Exploration: AI-Assisted Narrative Synthesis</h3>
        <p>
            Beyond academic robotics, I pursue a creative hobby at the intersection of imagination and generative artificial intelligence. Rather than writing as a traditional author, I utilize large language models to construct serialized web novels.
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
                <h4>Robotics & Estimation</h4>
                <ul>
                    <li>Factor Graph Optimization</li>
                    <li>Simultaneous Localization & Mapping (SLAM)</li>
                    <li>4D Millimeter-Wave Radar Perception</li>
                    <li>Multi-Sensor Fusion (IMU, Odometry, Radar)</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Software & Libraries</h4>
                <ul>
                    <li>C++ (Modern C++17/20)</li>
                    <li>Python (NumPy, SciPy, Matplotlib)</li>
                    <li>ROS / ROS 2</li>
                    <li>GTSAM / Ceres Solver</li>
                </ul>
            </div>
            <div class="skill-category">
                <h4>Tools & Environments</h4>
                <ul>
                    <li>Linux / Ubuntu</li>
                    <li>Git & GitHub version control</li>
                    <li>LaTeX / Scientific Documentation</li>
                    <li>Generative AI Prompt Engineering</li>
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
            <a href="mailto:ajayragh97@gmail.com" class="btn outline">
                Email Me
            </a>
        </div>
    </section>
</div>
