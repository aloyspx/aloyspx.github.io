---
title: "Self-supervised hemorrhage segmentation"
collection: portfolio
excerpt: "Self-supervised pretraining and multi-label decoding for intracranial hemorrhage segmentation, SWITCH 2025."
---

## Learning from scans and heterogeneous labels

Our SWITCH 2025 paper addresses two related challenges in intracranial hemorrhage segmentation: limited expert annotations and differences between datasets' labelling protocols.

**Aloys Portafaix, Laurent Létourneau-Guillon, and Samuel Kadoury**<br>
*Self-supervised Pretraining and Multi-label Decoding for Intracranial Hemorrhage Segmentation* · SWITCH, MICCAI 2025

## A two-stage framework

First, masked autoencoder pretraining learns multi-scale features from unlabelled head CT scans. Next, dataset-specific decoder heads combine segmentation supervision across multiple datasets while preserving their annotation protocols. A sampling strategy addresses class imbalance and dataset heterogeneity.

## Related work

This study is part of my broader work on intracranial hemorrhage segmentation. See the [challenge and benchmark overview](/portfolio/portfolio-3/) for related projects.

[Read the SWITCH paper](https://doi.org/10.1007/978-3-032-07945-9_9) · [Publication record](/publications/2015-10-01-paper-title-number-4/)
