---
title: "Project - XAct-v1"
excerpt: "The first iteration of the XAct prototype which aims to aid technicians correctly position patients during X-Rays.<br/><br/><img width='750' src='/images/demo_thesis.gif'>"
collection: portfolio
---


## Problem
XAct addresses a critical challenge in radiography: **improper patient positioning** which leads to diagnostic errors and repeated X-Rays. 

## Approach
To tackle this issue, I developed a real-time guidance system using computer vision that tracks positioning information. The system provides instant feedback for three standard hand radiographic views: Posterior-Anterior, Oblique, and Lateral. 
The technical foundation of XAct integrates advanced hand pose estimation algorithms with precision depth sensing via an OAK-D Pro camera. My implementation uses RANSAC plane fitting to calculate key positioning parameters in real-time. The system continuously evaluates hand position against precise radiographic constraints and delivers clear visual feedback to guide proper alignment. This technological solution directly addresses a fundamental limitation in current X-ray procedures, where image quality heavily depends on individual technician skill and experience.

## Outcome
With studies indicating over 50% of radiographs are suboptimal and up to 20% requiring retakes, XAct offers a scalable solution with significant market potential. Beyond the clear financial benefits to healthcare providers, XAct enhances patient outcomes by improving diagnostic accuracy, reducing unnecessary radiation exposure, and optimizing clinical workflows. This project demonstrates my ability to identify healthcare inefficiencies and develop technological solutions with both clinical and commercial impact.

💼 The business analysis is available [here](https://drive.google.com/file/d/157nnKEnz36rstDCohn_lKq9gwT4n_nvS/view?usp=sharing).

📝 The detailled technical information and experimental results can be found in my [thesis](https://spectrum.library.concordia.ca/id/eprint/992737/) (open-access on August 1st 2025) or [conference paper](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12929/1292910/Computer-vision-based-guidance-tool-for-correct-radiographic-hand-positioning/10.1117/12.3005807.short).

👨‍💻 The code is available [here](https://github.com/aloyspx/XAct).