---
title: "Code - CycleGAN Implementation"
excerpt: "Implementation of the CycleGAN for 2D and 3D with different discriminator architecture options."
collection: portfolio
---

## Overview
We used this for a comparative method in our [MODATTS](https://www.sciencedirect.com/science/article/pii/S1361841524002123) paper. The generator architecture remains the same as the original [CycleGAN](https://arxiv.org/abs/1703.10593) implementation, but we have added a 3D option. For the discriminator, both the PatchGAN discriminator and [MUNIT](https://arxiv.org/abs/1804.04732) discriminator are implemented.

## Results
![modatts_res.png](../../images/modatts_res.png)


## Things to do
- The data-loading should be made compatible with any two folders with medical volumes. Right now, you need to prepare in a special h5 file.
- The 3D version is excessively heavy to train as we are using full volumes. Need to implement a patch-based version.

👨‍💻 The code is available [here](https://github.com/aloyspx/CycleGANs).