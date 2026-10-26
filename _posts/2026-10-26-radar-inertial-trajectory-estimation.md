---
layout: default
title: "Factor Graph-Based Trajectory Estimation Fusing Radar and Inertial Sensor Data"
date: 2026-10-26
author: Ajay Ragh
tags: [Robotics, Radar SLAM, Factor Graphs, Sensor Fusion, Master Thesis]
excerpt: "A high-level overview of my Master's thesis research at the University of Bonn: developing a plane-constrained factor graph pipeline to achieve robust 3D trajectory estimation using mmWave radar and IMU data in visually degraded environments."
---

<div class="post-hero-banner">
    <div class="post-tag-strip">
        <span class="tag">Master's Thesis Research</span>
        <span class="tag">University of Bonn</span>
        <span class="tag">Fraunhofer FKIE</span>
    </div>
</div>

In recent years, the deployment of autonomous mobile robots—such as Unmanned Ground Vehicles (UGVs) and aerial drones—for search-and-rescue, subterranean mapping, and disaster response has become increasingly vital. However, these systems must operate reliably in **Visually Degraded Environments (VDEs)**—such as dense smoke, airborne dust, heavy fog, rain, or complete darkness—where traditional optical cameras and LiDAR sensors frequently fail due to severe light attenuation and backscattering clutter.

As part of my Master’s thesis at the **University of Bonn** (Institute for Geodesy and Geoinformation) in collaboration with **Fraunhofer FKIE**, I investigated how millimeter-wave (mmWave) radar sensors can be fused with inertial data to achieve robust, drift-resilient 3D trajectory estimation without relying on visual or GNSS signals.

Below is an accessible, high-level look at the motivation, the core concepts behind the framework, and visual results from real-world datasets.

---

## 1. Why Radar for Mobile Robotics?

Optical sensors (cameras and LiDARs) operate at short, near-infrared or visible wavelengths. When airborne particulates like smoke or dust match these wavelengths, the signals scatter, producing heavy noise or complete blindness.

In contrast, **millimeter-wave (mmWave) radar** uses radio waves with substantially longer wavelengths. These waves can physically pass through dust, smoke, and adverse atmospheric conditions without obstruction. Furthermore, frequency-modulated continuous-wave (FMCW) radar directly measures **instantaneous radial Doppler velocity**, providing direct motion constraints.

```
+--------------------+        +---------------------+        +--------------------+
|  Optical / LiDAR   |  --->  | Mie Scattering in   |  --->  | Severe Tracking    |
|  Sensors           |        | Smoke, Dust, & Fog  |        | Loss & Drift       |
+--------------------+        +---------------------+        +--------------------+

+--------------------+        +---------------------+        +--------------------+
|  mmWave Radar &    |  --->  | Penetrates Obscurant|  --->  | Robust Kinematic   |
|  Inertial Sensors  |        | Particulates        |        | Constraints        |
+--------------------+        +---------------------+        +--------------------+
```

### The Inherent Challenge
While radar offers environmental resilience, raw radar point clouds are notoriously **sparse**, contain multipath reflections, and lack the dense geometric resolution of LiDAR. Traditional scan-matching algorithms (like ICP) struggle to find reliable point-to-point correspondences, which can cause state estimation to drift over time.

---

## 2. The Core Concept: Plane-Constrained Factor Graph (PC-RIO)

To tackle radar sparsity and noise, our proposed framework—**Plane-Constrained Radar-Inertial Odometry (PC-RIO)**—models trajectory estimation as a non-linear optimization problem over a **factor graph** using the [GTSAM](https://gtsam.org/) library and an incremental **iSAM2** solver.

Unlike recursive filters (like Extended Kalman Filters) that permanently marginalize historical poses, factor graphs retain past trajectory nodes and re-linearize them when new information arrives, allowing retrospective smoothing of earlier estimates.

```
                              Factor Graph Architecture
   
    [Prior]      [IMU Factor]        [IMU Factor]        [IMU Factor]
       |              |                   |                   |
    (Pose 0) ---- (Pose 1) ----------- (Pose 2) ----------- (Pose 3) ...
       |              |                   |                   |
    [REVE]         [REVE]              [REVE]              [REVE]
 (Ego-Velocity) (Ego-Velocity)      (Ego-Velocity)      (Ego-Velocity)
                      \                   /                   /
                    [Background Structural Plane Constraints]
                    (Ground Elevation + Tilt + Manhattan Yaw)
```

### The Dual-Threaded Architecture
To achieve both real-time responsiveness and global consistency, the pipeline decouples processing into two asynchronous threads:

1. **High-Frequency Foreground Thread (Kinematics):**
   - Continuously processes high-rate IMU measurements through on-manifold preintegration.
   - Extracts 3D instantaneous linear velocity from radial Doppler measurements using **Radar Ego-Velocity Estimation (REVE)** with RANSAC outlier filtering.
   - Computes decoupled rotation updates using an **Intensity-Weighted Normal Distributions Transform (NDT)** to constrain heading without suffering translational sliding drift.

2. **Low-Frequency Background Thread (Structural Anchors):**
   - Aggregates individual sparse radar scans over a sliding temporal window into a motion-compensated **composite point cloud**.
   - Extracts dominant geometric structures—specifically the **ground plane** and orthogonal **vertical walls**.
   - Injects structural constraints directly into the factor graph:
     - **Absolute Elevation Factor:** Uses ground plane height to act as a *virtual structural barometer*, bounding vertical ($Z$) drift without requiring extra hardware sensors.
     - **Gravity-Aligned Tilt Factor:** Constrains roll and pitch on the unit sphere manifold based on the ground plane normal.
     - **Manhattan Compass Factor:** Leverages the Manhattan World Assumption (MWA) in orthogonal indoor environments to lock heading and prevent long-term yaw drift.
     - **Relative Planar Factors & Loop Closures:** Matches consecutive planar surfaces to enforce local and global geometric consistency.

---

## 3. Visual Results: Office Floor Sequence

To evaluate the pipeline in structured environments, we tested it against real-world trajectories from the benchmark Multi-Radar Inertial Dataset. 

### Point Cloud Aggregation & Trajectory Video
The video below illustrates the real-time operation of the pipeline navigating an extensive office corridor environment. Notice how the foreground thread maintains fast state tracking while the background thread aggregates radar returns into a dense, coherent composite map:

<div class="media-container video-card">
    <video controls playsinline preload="metadata" class="responsive-video">
        <source src="{{ '/assets/videos/office_floor.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <p class="media-caption">
        <strong>Figure 1:</strong> Real-time trajectory estimation and composite radar point cloud generation in an office corridor environment.
    </p>
</div>

### Detailed Point Cloud & Trajectory Topologies
Below are snapshots showing the reconstructed composite point clouds and the estimated trajectories across the office layout:

<div class="image-gallery-grid">
    <figure class="gallery-card">
        <img src="{{ '/assets/images/office_floor/1.png' | relative_url }}" alt="Top-down radar point cloud map and trajectory" loading="lazy">
        <figcaption><strong>Top-down View:</strong> Full corridor loop trajectory overlaid on the aggregated radar point cloud map.</figcaption>
    </figure>
    <figure class="gallery-card">
        <img src="{{ '/assets/images/office_floor/2.png' | relative_url }}" alt="3D isometric perspective of radar map" loading="lazy">
        <figcaption><strong>3D Perspective:</strong> Isometric visualization showing spatial structure and floor plane alignment.</figcaption>
    </figure>
    <figure class="gallery-card">
        <img src="{{ '/assets/images/office_floor/3.png' | relative_url }}" alt="Isolated trajectory nodes and keyframe topology" loading="lazy">
        <figcaption><strong>Trajectory Topology:</strong> Graph nodes and keyframe trajectory tracking through consecutive rooms and hallways.</figcaption>
    </figure>
</div>

---

## 4. Drift Mitigation: Side-by-Side Comparison

When state estimation relies solely on sparse radar points and IMU integration (without structural background constraints), unobservable vertical ($Z$) and heading (yaw) drift accumulates rapidly over time.

By introducing geometric planar constraints from aggregated composite clouds, the factor graph anchors these unobservable degrees of freedom. In our ablation experiments across diverse indoor sequences:
- **Positional drift was reduced by approximately 90%** compared to foreground-only estimation.
- Global positional accuracy maintained an **Absolute Trajectory Error (ATE) under 20 cm** across extensive indoor loops.
- The pipeline performed competitively against leading visual-inertial baselines (VINS-Stereo) and barometer-aided radar-inertial filters (X-RIO), while operating strictly on radar point clouds and an IMU.

The video below highlights this side-by-side:

<div class="media-container video-card">
    <video controls playsinline preload="metadata" class="responsive-video">
        <source src="{{ '/assets/videos/odometry_comparison_side_by_side.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <p class="media-caption">
        <strong>Figure 2:</strong> Side-by-side odometry comparison demonstrating the stabilization achieved by injecting structural background factors.
    </p>
</div>

---

## 5. Academic Context & Next Steps

This work formed my Master's Thesis submitted in August 2026 at the **University of Bonn** (Institute for Geodesy and Geoinformation), conducted in close collaboration with the **Fraunhofer FKIE** (Sensor Data and Information Fusion Department).

I would like to express my sincere gratitude to my supervisor **Prof. Dr. Lasse Klingbeil** (University of Bonn) and second supervisors **M.Sc. Felix Esser** (University of Bonn) and **M.Sc. Fahmi Rouatbi** (Fraunhofer FKIE) for their invaluable mentorship, guidance, and technical discussions throughout this research.

> **Publication Note:** We are currently preparing formal academic papers detailing the full mathematical formulation, multi-radar extrinsic calibration, and extensive benchmarks across subterranean mines and outdoor environments. Complete open-source code repositories and dataset evaluation tools will be made available alongside publication. Stay tuned!

---

*Feel free to connect or reach out via [LinkedIn](https://www.linkedin.com/in/ajay-ragh/) or [Email](mailto:ajayragh97@gmail.com) if you are interested in radar SLAM, factor graph optimization, or mobile robotics research.*
