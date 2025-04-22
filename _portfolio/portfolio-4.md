---
title: "Code - Causal Analysis with Longitudinal CBCTs"
excerpt: "Course project for the MILA Causal Inference and ML course with Dhanya Sridhar <br/><br/><img width='500' src='/images/cbct_pert.png'>"
collection: portfolio
---

## Overview

This project investigates the use of causal representation learning (CRL) methods for disentangling latent features in daily cone beam computed tomography (CBCT) scans of head and neck cancer patients undergoing radiotherapy. The study compares traditional representation learning models (VAE and β-VAE) with the CRL model iVAE to determine if CRL can extract interpretable and clinically relevant features from medical imaging data. The dataset comprises approximately 650 patient cases, each with around 33 daily CBCT scans, providing a substantial foundation for analysis. This work aims to improve head and neck cancer treatment by potentially enabling better adaptation of radiotherapy protocols and reducing toxicity through early identification of important features.

## Results

The experimental results show that all three tested models (VAE, β-VAE, and iVAE) were unable to produce sharp reconstructions due to the inherently low quality of CBCT scans. When evaluating feature disentanglement by perturbing individual latents and analyzing their effects on regions of interest (ROI), the VAE model produced the most significant changes while iVAE produced the least. Visual examination of difference maps revealed that VAE and β-VAE tended to alter multiple anatomical structures simultaneously when a single latent was perturbed, indicating poor disentanglement. While iVAE appeared to change fewer structures when perturbed, suggesting better disentanglement, none of the models conclusively isolated tumor-specific information in their latent spaces. These findings indicate that further refinement of CRL methods is necessary before they can be effectively applied to medical image analysis for tumor feature extraction.

## Things to do
- Test other models such as (DMS-VAE)[https://arxiv.org/pdf/2107.10098] that might offer better disentanglement properties.
- Maybe cropping to the tumour bounding box to make the task easier and focus the models on the region of interest rather than the entire scan.
- Improve reconstruction quality by integrating discriminator loss or further fine-tuning the network architecture.
- Train linear classifiers on top of the features produced by each VAE variant to assess their utility for overall survival prediction on both in-distribution and out-of-distribution data.
- Explore alternative auxiliary variables for iVAE, such as radiotherapy dosage plans or other clinical parameters.

📝 The report is available [here](https://drive.google.com/file/d/15oJx2X1VohjsTj2FOaKoOcjL09J998RE/view?usp=sharing).

👨‍💻 The code is available [here](https://github.com/aloyspx/CausalVAE).

btw, this is a great course with a great teacher.