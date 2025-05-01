---
title: "Code - MBH-Seg Challenge Submission"
excerpt: "Classic supervised segmentation learning and mean teacher implementation for intracranial hemorrhage segmentation for the MBH challenge. <br/><br/><video width='750' controls><source src='/images/mbh_seg.m4v' type='video/mp4'>Your browser does not support the video tag.</video>"
collection: portfolio
---

### Overview

The report addresses the challenge of automating the segmentation of intracranial hemorrhage on CT scans, which is currently done manually by experts, a time-consuming process. The 2024 MBH-Seg challenge aims to bridge this gap by providing labeled and unlabeled data, reflecting typical clinical scenarios with large unlabeled datasets and limited expert annotations. Initial dataset preprocessing involved quality control, excluding problematic samples and retaining 1577 unlabeled and 172 labeled volumes for the study.

### Results

Baseline models using nnUNet were tested, with a 3D nnUNet using a specific brain window and z-normalization performing best. Supervised models, specifically SwinUNETRv2 combined with tailored Hounsfield Unit windowing, patch sampling, specific data augmentation techniques, and linear interpolation, demonstrated an improvement of over 8% in mean Dice score compared to the best nnUNet baseline. A semi-supervised "Mean Teacher" approach initially showed promise with consistent improvements in cross-validation. However, in the final challenge evaluation, the fully supervised model achieved better results than the Mean Teacher models. This discrepancy might be due to the Mean Teacher model amplifying labeling errors via confirmation bias, exacerbated by a distribution shift between the training and testing datasets.

### Things To Do

Based on the report, potential areas for future work include:

* Evaluating the impact of the initial data exclusion step on final model performance, which was skipped due to time constraints.
* Investigating the underperformance of the Mean Teacher method on the challenge test set, focusing on the effects of confirmation bias and dataset distribution shift.
* Exploring further refinements in preprocessing, such as specific methods to handle uncorrected gantry tilt identified in the dataset.


📝 The report is available [here](https://drive.google.com/file/d/1mrg3PnsHHC7E-hWE2FC8WHry4wiG4IqU/view?usp=sharing)

👨‍💻 The code is coming soon...