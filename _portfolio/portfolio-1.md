---
title: "XAct — radiographic positioning guidance"
collection: portfolio
excerpt: "A computer vision and depth-sensing research prototype for guiding hand positioning during X-rays."
---

## Starting with a clinical need

Patient positioning is an important part of obtaining a useful radiograph. XAct explores how computer vision and depth sensing can provide real-time feedback to support that step.

The project began in McGill's Surgical Innovation Program, where our team won first place in the final pitch competition. I led the prototype's technical development and its evaluation with radiology collaborators at LMU Klinikum in Munich.

<video controls playsinline preload="none" poster="{{ '/images/research/xact-poster.jpg' | relative_url }}" aria-label="XAct demonstration of hand positioning feedback"><source src="{{ '/images/research/xact-demo.mp4' | relative_url }}" type="video/mp4"><a href="{{ '/images/research/xact-demo.mp4' | relative_url }}">Watch the prototype demonstration</a></video>

## The prototype

The tool combines hand landmark estimation with an OAK-D Pro depth sensor. RANSAC plane fitting estimates the detector plane, and the system checks positioning parameters against three radiographic protocols: posterior-anterior, oblique, and lateral.

The interface displays landmarks, positioning measurements, and feedback as the hand moves. This is a research prototype; the demonstration shows the system evaluated in my master's work.

## Evaluation and publication

We assessed the prototype with a radiology technician and conducted a double-blind radiologist evaluation of images obtained with a hand phantom. The method and evaluation are documented in my master's thesis and SPIE Medical Imaging 2024 paper.

[Master's thesis](https://spectrum.library.concordia.ca/id/eprint/992737/) · [Conference paper](https://doi.org/10.1117/12.3005807) · [Source code](https://github.com/aloyspx/XAct)
