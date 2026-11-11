---
title: "Intracranial hemorrhage segmentation"
collection: portfolio
excerpt: "Challenge participation, self-supervised learning, and multiclass head CT segmentation."
---

## A clinical problem with heterogeneous data

Intracranial hemorrhage segmentation requires models to distinguish related findings across scans and annotation protocols. My work with Laurent Létourneau-Guillon and Samuel Kadoury spans supervised and self-supervised approaches to this problem.

## MBH-Seg challenge

Our submission to the MICCAI 2024 MBH-Seg challenge explored supervised segmentation and a mean teacher approach. We placed seventh overall. The work highlighted challenges in handling dataset heterogeneity, label quality, and differences between validation and challenge test data.

<video controls playsinline preload="none" aria-label="Intracranial hemorrhage segmentation demonstration"><source src="{{ '/images/mbh_seg.m4v' | relative_url }}" type="video/mp4"><a href="{{ '/images/mbh_seg.m4v' | relative_url }}">Watch the segmentation demonstration</a></video>

## Self-supervised pretraining and multi-label decoding

Our SWITCH 2025 paper studies self-supervised pretraining and dataset-specific decoding heads to learn from datasets with different annotation protocols.

[Explore the SWITCH project](/portfolio/switch/) · [Read the paper](https://doi.org/10.1007/978-3-032-07945-9_9)

## Multiclass CT dataset and benchmark

I contributed baseline model development, validation, and manuscript preparation to a multiclass segmentation study covering intracerebral hemorrhage, intraventricular hemorrhage, and perihematomal edema. The paper was published in *Radiology Advances* in 2026.

[Read the Radiology Advances article](https://doi.org/10.1093/radadv/umag036)

The article describes plans for public release of the data and model; refer to the publisher's page for current availability.
