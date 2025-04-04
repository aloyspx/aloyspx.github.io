---
title: "Image-level supervision and self-training for transformer-based cross-modality tumor segmentation"
collection: publications
category: manuscripts
excerpt: 'This paper presents a novel approach using image-level supervision and self-training techniques to improve transformer-based tumor segmentation across different imaging modalities.'
date: '2024-12-01'
venue: 'Medical Image Analysis'
paperurl: 'https://doi.org/10.1016/j.media.2024.103287'
citation: 'de Boisredon d&#39;Assier, M. A., Portafaix, A., Vorontsov, E., Le, W. T., & Kadoury, S. (2024). &quot;Image-level supervision and self-training for transformer-based cross-modality tumor segmentation.&quot; <i>Medical Image Analysis</i>. 97, 103287.'
---
**Abstract**: Deep neural networks are commonly used for automated medical image segmentation, but models will
frequently struggle to generalize well across different imaging modalities. This issue is particularly problematic
due to the limited availability of annotated data, both in the target as well as the source modality, making
it difficult to deploy these models on a larger scale. To overcome these challenges, we propose a new semi-
supervised training strategy called MoDATTS. Our approach is designed for accurate cross-modality 3D tumor
segmentation on unpaired bi-modal datasets. An image-to-image translation strategy between modalities is used
to produce synthetic but annotated images and labels in the desired modality and improve generalization to the
unannotated target modality. We also use powerful vision transformer architectures for both image translation
(TransUNet) and segmentation (Medformer) tasks and introduce an iterative self-training procedure in the later
task to further close the domain gap between modalities, thus also training on unlabeled images in the target
modality. MoDATTS additionally allows the possibility to exploit image-level labels with a semi-supervised
objective that encourages the model to disentangle tumors from the background. This semi-supervised
methodology helps in particular to maintain downstream segmentation performance when pixel-level label
scarcity is also present in the source modality dataset, or when the source dataset contains healthy controls.
The proposed model achieves superior performance compared to other methods from participating teams in
the CrossMoDA 2022 vestibular schwannoma (VS) segmentation challenge, as evidenced by its reported top
Dice score of 0.87 ± 0.04 for the VS segmentation. MoDATTS also yields consistent improvements in Dice scores
over baselines on a cross-modality adult brain gliomas segmentation task composed of four different contrasts
from the BraTS 2020 challenge dataset, where 95% of a target supervised model performance is reached when
no target modality annotations are available. We report that 99% and 100% of this maximum performance
can be attained if 20% and 50% of the target data is additionally annotated, which further demonstrates that
MoDATTS can be leveraged to reduce the annotation burden.